import { Resend } from "resend";

type JsonObject = Record<string, unknown>;
type PaletteColors = {
  primary: string;
  accent: string;
  background: string;
  text: string;
  surface: string;
};

type Submission = {
  id: string;
  businessName: string;
  tagline: string;
  industry: string;
  email: string;
  phone: string;
  websiteUrl: string;
  theme: string;
  palette: string;
  paletteColors: PaletteColors;
  notes: string;
  logoUrl: string;
  contactConsent: true;
  marketingConsent: boolean;
  consentTextVersion: string;
  consentTimestamp: string;
};

const WEBSITE_URL_ERROR = "Please enter a valid website, such as yourbusiness.com.";
const DELIVERY_ERROR = "We could not email your Website Direction right now. Please try again shortly.";
const BOOKING_URL = "https://calendar.app.google/fsvawrwZfkYNESyeA";
const DUPLICATE_WINDOW_MS = 15_000;
const MAX_REQUEST_CHARACTERS = 4_000_000;
const recentSubmissions = new Map<string, number>();

const PALETTES: Record<string, PaletteColors> = {
  "Collective Forest": { primary: "#163C36", accent: "#89B7A7", background: "#F4EFE5", text: "#17231F", surface: "#FFFAF2" },
  "Editorial Champagne": { primary: "#171717", accent: "#B99B6B", background: "#F7F1E5", text: "#211C18", surface: "#FFFAF3" },
  "Orchid Authority": { primary: "#4E2943", accent: "#D0A2B3", background: "#FCF3F5", text: "#2E1B29", surface: "#FFFAFB" },
  "Digital Blueprint": { primary: "#12263A", accent: "#3F8CFF", background: "#F4F8FD", text: "#17202A", surface: "#FFFFFF" },
  "Organic Terra": { primary: "#9C553F", accent: "#7F8666", background: "#F3E7D7", text: "#382D27", surface: "#FFF8EF" },
  "Electric Momentum": { primary: "#1848D8", accent: "#FF7043", background: "#FFF5E1", text: "#11172A", surface: "#FFFFFF" }
};

function jsonResponse(status: number, body: JsonObject, extraHeaders?: HeadersInit): Response {
  const headers = new Headers(extraHeaders);
  headers.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(body), { status, headers });
}

function optionalString(value: unknown): string | null {
  return typeof value === "string" ? value.trim() : value == null ? "" : null;
}

function normalizeWebsiteUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmedValue = value.trim();
  if (!trimmedValue) return "";
  if (/\s/.test(trimmedValue)) return null;
  const normalizedValue = /^https?:\/\//i.test(trimmedValue) ? trimmedValue : `https://${trimmedValue}`;

  try {
    const parsedUrl = new URL(normalizedValue);
    const labels = parsedUrl.hostname.split(".");
    const validHostname = labels.length >= 2 && labels.every(
      (label) => label.length > 0 && label.length <= 63 && /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label)
    );
    if (!["http:", "https:"].includes(parsedUrl.protocol) || !validHostname || parsedUrl.username || parsedUrl.password) {
      return null;
    }
    return normalizedValue;
  } catch {
    return null;
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[character]!);
}

function safeSubjectText(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 120);
}

function sanitizeSvgDataUrl(value: string): string {
  if (!value.startsWith("data:image/svg+xml")) return value;
  try {
    const commaIndex = value.indexOf(",");
    if (commaIndex === -1) return "";
    const metadata = value.slice(0, commaIndex);
    const encodedSvg = value.slice(commaIndex + 1);
    const decodedSvg = metadata.includes(";base64")
      ? Buffer.from(encodedSvg, "base64").toString("utf-8")
      : decodeURIComponent(encodedSvg);
    const cleanSvg = decodedSvg
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/on\w+\s*=\s*"[^"]*"/gi, "")
      .replace(/on\w+\s*=\s*'[^']*'/gi, "");
    return `data:image/svg+xml;utf8,${encodeURIComponent(cleanSvg)}`;
  } catch {
    return "";
  }
}

function createImageAttachment(dataUrl: string) {
  if (!dataUrl) return undefined;
  const sanitizedDataUrl = sanitizeSvgDataUrl(dataUrl);
  const match = /^data:(image\/(?:png|jpeg|webp|svg\+xml));(base64)?,(.*)$/s.exec(sanitizedDataUrl);
  if (!match) return undefined;

  try {
    const [, mimeType, encoding, content] = match;
    const base64Content = encoding === "base64"
      ? content
      : Buffer.from(decodeURIComponent(content), "utf-8").toString("base64");
    const extension = mimeType === "image/svg+xml" ? "svg" : mimeType.split("/")[1];
    return {
      content: base64Content,
      filename: `website-direction-preview.${extension}`,
      contentId: "website-direction-preview"
    };
  } catch {
    return undefined;
  }
}

function renderSwatches(colors: PaletteColors): string {
  return Object.entries(colors).map(([name, hex]) => `
    <td style="padding:0 8px 12px 0;text-align:center;vertical-align:top;">
      <div style="width:54px;height:42px;border-radius:8px;background:${hex};border:1px solid rgba(0,0,0,.12);"></div>
      <div style="font:600 10px Arial,sans-serif;color:#596661;margin-top:6px;text-transform:capitalize;">${name}</div>
      <div style="font:10px monospace;color:#17231F;margin-top:2px;">${hex}</div>
    </td>`).join("");
}

function detailRow(label: string, value: string): string {
  if (!value) return "";
  return `<tr><td style="padding:8px 12px 8px 0;color:#70807A;font:600 11px Arial,sans-serif;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;">${label}</td><td style="padding:8px 0;color:#17231F;font:14px Arial,sans-serif;line-height:1.5;">${escapeHtml(value)}</td></tr>`;
}

function renderEmail(submission: Submission, internal: boolean, hasImage: boolean): string {
  const title = internal ? "New Website Direction Submission" : "Your Website Direction";
  const intro = internal
    ? "A new Website Direction has been submitted for review."
    : "Thank you for sharing your vision. Here is a copy of the Website Direction you created with The Ivana Collective.";

  return `<!doctype html><html><body style="margin:0;background:#F4EFE5;padding:24px 12px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#FFFAF2;border-radius:18px;overflow:hidden;border:1px solid #D8DED9;">
        <tr><td style="background:#0D2623;padding:32px;color:#F4F5F1;">
          <div style="font:700 10px Arial,sans-serif;letter-spacing:.18em;color:#89B7A7;text-transform:uppercase;">The Ivana Collective</div>
          <h1 style="margin:12px 0 0;font:400 34px Georgia,serif;">${title}</h1>
        </td></tr>
        <tr><td style="padding:32px;">
          <p style="margin:0 0 24px;color:#44524D;font:15px Arial,sans-serif;line-height:1.7;">${intro}</p>
          <h2 style="margin:0 0 12px;color:#163C36;font:400 23px Georgia,serif;">${escapeHtml(submission.businessName)}</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            ${detailRow("Tagline", submission.tagline)}
            ${detailRow("Industry", submission.industry)}
            ${detailRow("Website", submission.websiteUrl)}
            ${detailRow("Phone", submission.phone)}
            ${detailRow("Brand notes", submission.notes)}
            ${detailRow("Design direction", submission.theme)}
            ${detailRow("Color palette", submission.palette)}
            ${internal ? detailRow("Customer email", submission.email) : ""}
            ${internal ? detailRow("Contact consent", "Granted") : ""}
            ${internal ? detailRow("Marketing consent", submission.marketingConsent ? "Opted in" : "Not opted in") : ""}
            ${internal ? detailRow("Submission ID", submission.id) : ""}
          </table>
          <h3 style="margin:28px 0 14px;color:#163C36;font:400 18px Georgia,serif;">Selected colors</h3>
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>${renderSwatches(submission.paletteColors)}</tr></table>
          ${hasImage ? `<div style="margin-top:24px;"><h3 style="color:#163C36;font:400 18px Georgia,serif;">Visual preview</h3><img src="cid:website-direction-preview" alt="Uploaded visual preview" style="display:block;max-width:100%;max-height:260px;border-radius:12px;border:1px solid #D8DED9;" /></div>` : ""}
          <div style="margin-top:30px;padding:24px;background:#E9F0EC;border-radius:14px;text-align:center;">
            <p style="margin:0 0 16px;color:#44524D;font:14px Arial,sans-serif;line-height:1.6;">Ready to turn this direction into a high-performing digital experience?</p>
            <a href="${BOOKING_URL}" style="display:inline-block;background:#163C36;color:#FFFFFF;text-decoration:none;padding:13px 22px;border-radius:9px;font:700 11px Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;">Book Your Consultation</a>
          </div>
        </td></tr>
        <tr><td style="padding:20px 32px;background:#F4EFE5;color:#70807A;font:11px Arial,sans-serif;line-height:1.6;">The Ivana Collective · Website strategy, search visibility, and digital growth systems.</td></tr>
      </table>
    </td></tr></table>
  </body></html>`;
}

function renderTextEmail(submission: Submission, internal: boolean): string {
  return [
    internal ? "New Website Direction Submission" : "Your Website Direction from The Ivana Collective",
    "",
    `Business name: ${submission.businessName}`,
    submission.tagline ? `Tagline: ${submission.tagline}` : "",
    `Industry: ${submission.industry}`,
    submission.websiteUrl ? `Website: ${submission.websiteUrl}` : "",
    submission.phone ? `Phone: ${submission.phone}` : "",
    submission.notes ? `Brand notes: ${submission.notes}` : "",
    `Design direction: ${submission.theme}`,
    `Color palette: ${submission.palette}`,
    ...Object.entries(submission.paletteColors).map(([name, hex]) => `${name}: ${hex}`),
    internal ? `Customer email: ${submission.email}` : "",
    internal ? "Contact consent: Granted" : "",
    internal ? `Marketing consent: ${submission.marketingConsent ? "Opted in" : "Not opted in"}` : "",
    "",
    `Book your consultation: ${BOOKING_URL}`
  ].filter(Boolean).join("\n");
}

async function parseJsonBody(request: Request): Promise<JsonObject> {
  const rawBody = await request.text();
  if (!rawBody.trim()) throw new Error("INVALID_BODY");
  if (rawBody.length > MAX_REQUEST_CHARACTERS) throw new Error("BODY_TOO_LARGE");
  try {
    const parsed: unknown = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("INVALID_BODY");
    return parsed as JsonObject;
  } catch {
    throw new Error("INVALID_BODY");
  }
}

async function makeSubmissionId(values: JsonObject, windowStart: number): Promise<string> {
  const bytes = new TextEncoder().encode(JSON.stringify({ ...values, windowStart }));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return `prv-${Buffer.from(digest).toString("hex").slice(0, 24)}`;
}

async function handlePost(request: Request): Promise<Response> {
  let body: JsonObject;
  try {
    body = await parseJsonBody(request);
  } catch (error) {
    return error instanceof Error && error.message === "BODY_TOO_LARGE"
      ? jsonResponse(413, { error: "The submission is too large. Please upload a smaller image and try again." })
      : jsonResponse(400, { error: "The submission could not be read. Please review the form and try again." });
  }

  const botField = optionalString(body.botField);
  if (botField === null) return jsonResponse(400, { error: "The submitted form data is invalid." });
  if (botField) {
    console.warn("[Spam Protection] Honeypot field was triggered.");
    return jsonResponse(200, { success: true, message: "Your Website Direction has been sent to your email." });
  }

  const businessName = optionalString(body.businessName);
  const industry = optionalString(body.industry);
  const email = optionalString(body.email);
  if (!businessName) return jsonResponse(400, { error: "Business name is required." });
  if (!industry) return jsonResponse(400, { error: "Industry selection is required." });
  if (!email) return jsonResponse(400, { error: "Business email is required." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return jsonResponse(400, { error: "Please enter a valid business email address." });
  if (body.contactConsent !== true) return jsonResponse(400, { error: "You must consent to being contacted by The Ivana Collective to save your preview." });

  const tagline = optionalString(body.tagline);
  const phone = optionalString(body.phone);
  const websiteUrl = optionalString(body.websiteUrl);
  const theme = optionalString(body.theme);
  const palette = optionalString(body.palette);
  const notes = optionalString(body.notes);
  const logoUrl = optionalString(body.logoUrl);
  const consentTextVersion = optionalString(body.consentTextVersion);
  if ([tagline, phone, websiteUrl, theme, palette, notes, logoUrl, consentTextVersion].some((value) => value === null)) {
    return jsonResponse(400, { error: "The submitted form data is invalid." });
  }

  const normalizedWebsiteUrl = normalizeWebsiteUrl(websiteUrl);
  if (normalizedWebsiteUrl === null) return jsonResponse(400, { error: WEBSITE_URL_ERROR });
  const paletteColors = PALETTES[palette || "Collective Forest"];
  if (!paletteColors) return jsonResponse(400, { error: "Please select a valid color palette." });

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.FROM_EMAIL?.trim();
  const notificationEmail = process.env.FORM_NOTIFICATION_EMAIL?.trim() || "info@theivanacollective.com";
  if (!resendApiKey || !fromEmail) {
    console.error("[Preview Submission] Resend is not configured.");
    return jsonResponse(503, { error: "Email delivery is temporarily unavailable. Please try again shortly." });
  }

  const now = Date.now();
  const duplicateKey = `${email.toLowerCase()}\u0000${businessName.toLowerCase()}`;
  const previousSubmission = recentSubmissions.get(duplicateKey);
  if (previousSubmission && now - previousSubmission < DUPLICATE_WINDOW_MS) {
    return jsonResponse(429, { error: "This Website Direction was submitted recently. Please check your email before trying again." });
  }

  const windowStart = Math.floor(now / DUPLICATE_WINDOW_MS) * DUPLICATE_WINDOW_MS;
  const submissionValues = {
    businessName, tagline, industry, email: email.toLowerCase(), phone,
    websiteUrl: normalizedWebsiteUrl, theme: theme || "Luxury Editorial",
    palette: palette || "Collective Forest", notes, logoUrl,
    contactConsent: true, marketingConsent: body.marketingConsent === true,
    consentTextVersion: consentTextVersion || "website-preview-v2"
  };
  const submissionId = await makeSubmissionId(submissionValues, windowStart);
  const submission: Submission = {
    id: submissionId,
    ...submissionValues,
    paletteColors,
    contactConsent: true,
    consentTimestamp: new Date(windowStart).toISOString()
  };
  recentSubmissions.set(duplicateKey, now);

  const attachment = createImageAttachment(submission.logoUrl);
  const attachments = attachment ? [attachment] : undefined;
  const resend = new Resend(resendApiKey);

  const customerResult = await resend.emails.send({
    from: fromEmail,
    to: [submission.email],
    subject: "Your Website Direction from The Ivana Collective",
    html: renderEmail(submission, false, Boolean(attachment)),
    text: renderTextEmail(submission, false),
    attachments,
    replyTo: notificationEmail,
    tags: [{ name: "form", value: "website-direction" }]
  }, { idempotencyKey: `customer/${submissionId}` });

  if (customerResult.error || !customerResult.data?.id) {
    recentSubmissions.delete(duplicateKey);
    console.error("[Preview Submission] Customer email rejected by Resend.", customerResult.error);
    return jsonResponse(502, { error: DELIVERY_ERROR });
  }

  let internalResult = await resend.emails.send({
    from: fromEmail,
    to: [notificationEmail],
    subject: `New Website Direction Submission — ${safeSubjectText(businessName)}`,
    html: renderEmail(submission, true, Boolean(attachment)),
    text: renderTextEmail(submission, true),
    attachments,
    replyTo: submission.email,
    tags: [{ name: "form", value: "website-direction-internal" }]
  }, { idempotencyKey: `internal/${submissionId}` });

  if (internalResult.error || !internalResult.data?.id) {
    internalResult = await resend.emails.send({
      from: fromEmail,
      to: [notificationEmail],
      subject: `New Website Direction Submission — ${safeSubjectText(businessName)}`,
      html: renderEmail(submission, true, Boolean(attachment)),
      text: renderTextEmail(submission, true),
      attachments,
      replyTo: submission.email,
      tags: [{ name: "form", value: "website-direction-internal" }]
    }, { idempotencyKey: `internal/${submissionId}` });
  }

  if (internalResult.error || !internalResult.data?.id) {
    console.error("[Preview Submission] Internal notification rejected by Resend.", internalResult.error);
    return jsonResponse(502, { error: "Your copy was sent, but we could not notify our team. Please contact us directly." });
  }

  console.log("[Preview Submission] Transactional emails accepted.", {
    submissionId,
    customerEmailId: customerResult.data.id,
    internalEmailId: internalResult.data.id,
    marketingConsent: submission.marketingConsent
  });

  return jsonResponse(200, {
    success: true,
    message: "Your Website Direction was sent to your email. Please check your inbox.",
    submissionId
  });
}

export default {
  async fetch(request: Request): Promise<Response> {
    try {
      if (request.method !== "POST") {
        return jsonResponse(405, { error: "Method not allowed. Use POST to submit the website preview form." }, { Allow: "POST" });
      }
      return await handlePost(request);
    } catch (error) {
      console.error("[Preview Submission] Unexpected function error.", error);
      return jsonResponse(500, { error: DELIVERY_ERROR });
    }
  }
};
