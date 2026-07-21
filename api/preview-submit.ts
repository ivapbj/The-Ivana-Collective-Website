type JsonObject = Record<string, unknown>;

const WEBSITE_URL_ERROR = "Please enter a valid website, such as yourbusiness.com.";
const recentSubmissions = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 15_000;
const MAX_REQUEST_CHARACTERS = 4_000_000;

function normalizeWebsiteUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const trimmedValue = value.trim();
  if (!trimmedValue) return "";
  if (/\s/.test(trimmedValue)) return null;

  const normalizedValue = /^https?:\/\//i.test(trimmedValue)
    ? trimmedValue
    : `https://${trimmedValue}`;

  try {
    const parsedUrl = new URL(normalizedValue);
    const hostnameLabels = parsedUrl.hostname.split(".");
    const hasValidHostname =
      hostnameLabels.length >= 2 &&
      hostnameLabels.every(
        (label) =>
          label.length > 0 &&
          label.length <= 63 &&
          /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label)
      );

    if (
      !["http:", "https:"].includes(parsedUrl.protocol) ||
      !hasValidHostname ||
      parsedUrl.username ||
      parsedUrl.password
    ) {
      return null;
    }

    return normalizedValue;
  } catch {
    return null;
  }
}

function jsonResponse(status: number, body: JsonObject, extraHeaders?: HeadersInit): Response {
  const headers = new Headers(extraHeaders);
  headers.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(body), { status, headers });
}

function optionalString(value: unknown): string | null {
  return typeof value === "string" ? value.trim() : value == null ? "" : null;
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

async function parseJsonBody(request: Request): Promise<JsonObject> {
  const rawBody = await request.text();
  if (!rawBody.trim()) throw new Error("INVALID_BODY");
  if (rawBody.length > MAX_REQUEST_CHARACTERS) throw new Error("BODY_TOO_LARGE");

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    throw new Error("INVALID_BODY");
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("INVALID_BODY");
  }
  return parsed as JsonObject;
}

async function handlePost(request: Request): Promise<Response> {
  let body: JsonObject;
  try {
    body = await parseJsonBody(request);
  } catch (error) {
    if (error instanceof Error && error.message === "BODY_TOO_LARGE") {
      return jsonResponse(413, { error: "The submission is too large. Please upload a smaller logo and try again." });
    }
    return jsonResponse(400, { error: "The submission could not be read. Please review the form and try again." });
  }

  const botField = optionalString(body.botField);
  if (botField === null) return jsonResponse(400, { error: "The submitted form data is invalid." });
  if (botField) {
    console.warn("[Spam Protection] Honeypot field was triggered.");
    return jsonResponse(200, { success: true, message: "Your website direction has been submitted." });
  }

  const businessName = optionalString(body.businessName);
  const industry = optionalString(body.industry);
  const email = optionalString(body.email);
  if (businessName === null || !businessName) return jsonResponse(400, { error: "Business name is required." });
  if (industry === null || !industry) return jsonResponse(400, { error: "Industry selection is required." });
  if (email === null || !email) return jsonResponse(400, { error: "Business email is required." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse(400, { error: "Please enter a valid business email address." });
  }
  if (body.contactConsent !== true) {
    return jsonResponse(400, { error: "You must consent to being contacted by The Ivana Collective to save your preview." });
  }

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
  if (normalizedWebsiteUrl === null) {
    return jsonResponse(400, { error: WEBSITE_URL_ERROR });
  }

  const now = new Date();
  const duplicateKey = `${email}\u0000${businessName}`;
  const previousSubmission = recentSubmissions.get(duplicateKey);
  if (previousSubmission && now.getTime() - previousSubmission < DUPLICATE_WINDOW_MS) {
    return jsonResponse(429, { error: "A submission with this business name and email address was already received recently." });
  }
  recentSubmissions.set(duplicateKey, now.getTime());

  const submissionId = `prv-${crypto.randomUUID()}`;
  const marketingConsent = body.marketingConsent === true;
  console.log("[Preview Submission] Lead received.", {
    submissionId,
    businessName,
    email,
    websiteUrl: normalizedWebsiteUrl,
    notificationEmail: process.env.FORM_NOTIFICATION_EMAIL || "info@theivanacollective.com",
    senderEmail: process.env.FROM_EMAIL || "no-reply@theivanacollective.com",
    theme: theme || "Luxury Editorial",
    palette: palette || "Collective Forest",
    hasLogo: Boolean(sanitizeSvgDataUrl(logoUrl!)),
    marketingConsent,
    consentTextVersion: consentTextVersion || "website-preview-v2",
    consentTimestamp: now.toISOString()
  });

  if (marketingConsent) {
    if (process.env.EMAIL_PROVIDER_API_KEY && process.env.EMAIL_MARKETING_LIST_ID) {
      console.log("[Marketing API] Provider configuration detected; lead is ready for synchronization.");
    } else {
      console.log("[Marketing Mock] Provider configuration is missing; lead was accepted without synchronization.");
    }
  }

  return jsonResponse(200, {
    success: true,
    message: "Your website direction has been submitted.",
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
      return jsonResponse(500, { error: "We could not submit your website direction right now. Please try again shortly." });
    }
  }
};
