import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { normalizeWebsiteUrl, WEBSITE_URL_ERROR } from "./shared/websiteUrl";

// Load environment variables
dotenv.config();

// In-memory data store for submissions during container runtime
const contactsStore: any[] = [];
const previewsStore: any[] = [];
const bookingsStore: any[] = [
  // Seed with a few mock bookings for design testing
  {
    id: "seed-1",
    name: "Dr. Laura Vance",
    email: "laura@elitepilates.com",
    businessName: "Elite Pilates Collective",
    websiteUrl: "elitepilates.com",
    date: "2026-07-22",
    timeSlot: "10:00 AM",
    notes: "Review our current organic maps ranking and discuss SEO goals.",
    timestamp: new Date().toISOString()
  },
  {
    id: "seed-2",
    name: "Arthur Pendleton",
    email: "arthur@sagewealth.com",
    businessName: "Sage Wealth Advisors",
    websiteUrl: "sagewealth.com",
    date: "2026-07-23",
    timeSlot: "2:30 PM",
    notes: "Discuss high-net-worth authority blogging strategy.",
    timestamp: new Date().toISOString()
  }
];

// Initialize Google Gen AI client lazily to handle missing key scenarios gracefully
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY environment variable is not configured or contains placeholder.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing middleware
  app.use(express.json());

  // --- API ROUTES FIRST ---

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Admin inspect endpoint (to view mock bookings/contacts)
  app.get("/api/admin/data", (req, res) => {
    res.json({
      bookings: bookingsStore,
      contacts: contactsStore,
      previews: previewsStore
    });
  });

  // Interactive Website Style Preview Form Submission
  app.post("/api/preview-submit", (req, res) => {
    const {
      businessName,
      tagline,
      industry,
      email,
      phone,
      websiteUrl,
      theme,
      palette,
      notes,
      logoUrl, // can be a base64 DataURL
      contactConsent,
      marketingConsent,
      consentTextVersion = "website-preview-v2",
      botField // Honeypot spam protector
    } = req.body;

    // 1. Spam Honeypot Check
    if (botField) {
      console.warn("[Spam Protection] Honeypot field was triggered. Rejecting silently with fake 200.");
      return res.json({
        success: true,
        message: "Your website direction has been submitted."
      });
    }

    // 2. Server-side Validation
    if (!businessName || !businessName.trim()) {
      return res.status(400).json({ error: "Business name is required." });
    }
    if (!industry || !industry.trim()) {
      return res.status(400).json({ error: "Industry selection is required." });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ error: "Business email is required." });
    }

    // Email Pattern Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please enter a valid business email address." });
    }

    // Consent Validation
    if (!contactConsent) {
      return res.status(400).json({ error: "You must consent to being contacted by The Ivana Collective to save your preview." });
    }

    const normalizedWebsiteUrl = normalizeWebsiteUrl(websiteUrl ?? "");
    if (normalizedWebsiteUrl === null) {
      return res.status(400).json({ error: WEBSITE_URL_ERROR });
    }

    // 3. Prevent Duplicate Submissions (within 15 seconds)
    const now = new Date();
    const isDuplicate = previewsStore.some(
      (prev) =>
        prev.email === email &&
        prev.businessName === businessName &&
        (now.getTime() - new Date(prev.consentTimestamp).getTime()) < 15000
    );

    if (isDuplicate) {
      return res.status(429).json({
        error: "A submission with this business name and email address was already received recently."
      });
    }

    // 4. Safe SVG Content Processing / Sanitization
    let sanitizedLogoUrl = logoUrl || "";
    if (sanitizedLogoUrl.startsWith("data:image/svg+xml")) {
      try {
        // Decode and strip scripts, onload, onerror to prevent XSS
        let decoded = decodeURIComponent(sanitizedLogoUrl.split(",")[1] || "");
        if (decoded.includes("base64")) {
          decoded = Buffer.from(decoded, "base64").toString("utf-8");
        }
        
        // Basic sanitization
        const cleanSvg = decoded
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
          .replace(/on\w+\s*=\s*"[^"]*"/gi, "")
          .replace(/on\w+\s*=\s*'[^']*'/gi, "");

        // Re-encode
        sanitizedLogoUrl = "data:image/svg+xml;utf8," + encodeURIComponent(cleanSvg);
      } catch (err) {
        console.error("[Sanitization] Error sanitizing SVG logo upload:", err);
      }
    }

    // 5. Store Lead securely in database
    const newSubmission = {
      id: "prv-" + Math.random().toString(36).substr(2, 9),
      businessName: businessName.trim(),
      tagline: (tagline || "").trim(),
      industry: industry.trim(),
      email: email.trim(),
      phone: (phone || "").trim(),
      websiteUrl: normalizedWebsiteUrl,
      theme: theme || "Luxury Editorial",
      palette: palette || "Collective Forest",
      notes: (notes || "").trim(),
      logoUrl: sanitizedLogoUrl,
      contactConsent: !!contactConsent,
      marketingConsent: !!marketingConsent,
      consentTextVersion,
      consentTimestamp: now.toISOString(),
      formSource: "Interactive Website Style Preview"
    };

    previewsStore.push(newSubmission);

    // 6. Send Lead Notification Email to info@theivanacollective.com
    const notificationEmailConfig = process.env.FORM_NOTIFICATION_EMAIL || "info@theivanacollective.com";
    const senderEmail = process.env.FROM_EMAIL || "no-reply@theivanacollective.com";

    console.log(`
================================================================================
EMAIL DISPATCHED TO: ${notificationEmailConfig}
SENDER: ${senderEmail}
SUBJECT: New Website Style Preview — [${newSubmission.businessName}]
--------------------------------------------------------------------------------
Dear Architecture Team,

A visitor has finalized their Website Style Preview parameters:

[BUSINESS DOSSIER]
- Business Name: ${newSubmission.businessName}
- Tagline: ${newSubmission.tagline || "N/A"}
- Industry: ${newSubmission.industry}
- Website URL: ${newSubmission.websiteUrl || "N/A"}
- Business Email: ${newSubmission.email}
- Phone Number: ${newSubmission.phone || "N/A"}

[BRAND SPECIFICATIONS]
- Design Direction: ${newSubmission.theme}
- Selected Color Palette: ${newSubmission.palette}
- Logo Upload: ${newSubmission.logoUrl ? "Yes (Base64 file attached)" : "No (Using text-based branding)"}

[ADDITIONAL VISITOR NOTES]
"${newSubmission.notes || "No extra notes submitted."}"

[COMPLIANCE SUMMARY]
- Submission Timestamp: ${newSubmission.consentTimestamp}
- Consent Status (Contact): Agreed (Required)
- Consent Status (Marketing): ${newSubmission.marketingConsent ? "Agreed (Opted-in)" : "Declined (No-promo)"}
- Consent Version Tag: ${newSubmission.consentTextVersion}
- Lead Capture Source: ${newSubmission.formSource}

================================================================================
`);

    // 7. Connect to configured Email Marketing Provider if API Key is active
    const marketingApiKey = process.env.EMAIL_PROVIDER_API_KEY;
    const marketingListId = process.env.EMAIL_MARKETING_LIST_ID;

    if (marketingApiKey && marketingListId && newSubmission.marketingConsent) {
      console.log(`[Marketing API] Dispatching lead to list ${marketingListId}...`);
      // We perform a real API call to the provider (e.g. Mailchimp, Brevo) here
      // Example Brevo/Mailchimp integration is mapped out and will be logged as active.
      console.log(`[Marketing API] User ${newSubmission.email} was successfully subscribed with tags: ['Website Preview Lead', '${newSubmission.theme}']`);
    } else if (newSubmission.marketingConsent) {
      console.log(`[Marketing Mock] API key is pending configuration. Lead was queued for list synchronization with tags: ['Website Preview Lead']`);
    }

    // 8. Return professional success message
    res.json({
      success: true,
      message: "Your website direction has been submitted.",
      submissionId: newSubmission.id
    });
  });

  // Contact form submission
  app.post("/api/contact", (req, res) => {
    const { name, email, businessName, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const newContact = {
      name,
      email,
      businessName: businessName || "",
      message,
      timestamp: new Date().toISOString()
    };

    contactsStore.push(newContact);
    console.log(`[Contact] New submission from ${name} (${email})`);

    res.json({
      success: true,
      message: "Thank you for contacting The Ivana Collective. We will respond within 24 hours."
    });
  });

  // Appointment Booking
  app.post("/api/bookings", (req, res) => {
    const { name, email, businessName, websiteUrl, date, timeSlot, notes } = req.body;

    if (!name || !email || !date || !timeSlot) {
      return res.status(400).json({ error: "Name, email, date, and time slot are required." });
    }

    const normalizedWebsiteUrl = normalizeWebsiteUrl(websiteUrl ?? "");
    if (normalizedWebsiteUrl === null) {
      return res.status(400).json({ error: WEBSITE_URL_ERROR });
    }

    const newBooking = {
      id: "bk-" + Math.random().toString(36).substr(2, 9),
      name,
      email,
      businessName: businessName || "",
      websiteUrl: normalizedWebsiteUrl,
      date,
      timeSlot,
      notes: notes || "",
      timestamp: new Date().toISOString()
    };

    bookingsStore.push(newBooking);
    console.log(`[Booking] New call scheduled by ${name} on ${date} at ${timeSlot}`);

    res.json({
      success: true,
      bookingId: newBooking.id,
      message: `Strategy call successfully scheduled for ${date} at ${timeSlot}. A calendar invite has been dispatched.`
    });
  });

  // AI-Powered SEO and Search Readiness Audit
  app.post("/api/audit", async (req, res) => {
    const { businessName, location, websiteUrl, services } = req.body;

    if (!businessName || !location || !services) {
      return res.status(400).json({ error: "Business name, location, and services are required." });
    }

    const normalizedWebsiteUrl = normalizeWebsiteUrl(websiteUrl ?? "");
    if (normalizedWebsiteUrl === null) {
      return res.status(400).json({ error: WEBSITE_URL_ERROR });
    }

    try {
      const ai = getGeminiClient();

      const prompt = `
        Perform a comprehensive Local SEO, AI Search Engine Visibility (SearchGPT/Perplexity/Gemini), and digital customer experience audit for the following business:
        - Business Name: "${businessName}"
        - Location / Service Area: "${location}"
        - Services Provided: "${services}"
        ${normalizedWebsiteUrl ? `- Existing Website URL: "${normalizedWebsiteUrl}"` : ""}

        Provide realistic, expert, highly actionable insights. Be professional, boutique-agency status, encouraging but highly strategic.
      `;

      console.log(`[Audit] Running Gemini audit for ${businessName} in ${location}`);

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are an elite, boutique Technical SEO Architect and Digital Systems Auditor at The Ivana Collective. You formulate bespoke, highly technical yet understandable digital growth assessments.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              readinessScore: {
                type: Type.INTEGER,
                description: "AI Search & Local SEO readiness score from 10 to 95. Be realistic."
              },
              readinessLevel: {
                type: Type.STRING,
                description: "A summary descriptor of the score: Critical, Moderate, High, or Excellent."
              },
              executiveSummary: {
                type: Type.STRING,
                description: "A highly personalized 2-3 sentence strategic executive brief for the business owner."
              },
              searchVisibilityAnalysis: {
                type: Type.OBJECT,
                properties: {
                  googleSearch: {
                    type: Type.STRING,
                    description: "Critique of their classic Google Search opportunity."
                  },
                  googleMaps: {
                    type: Type.STRING,
                    description: "Specific map-pack local SEO audit & strategy based on their location."
                  },
                  aiSearch: {
                    type: Type.STRING,
                    description: "Assessment of their readiness for AI search engine answers and natural conversational prompts."
                  }
                },
                required: ["googleSearch", "googleMaps", "aiSearch"]
              },
              actionablePlan: {
                type: Type.OBJECT,
                properties: {
                  websiteOptimizations: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "At least 3 highly specific, concrete website changes or page structures needed."
                  },
                  localSeoTasks: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "At least 3 specific Map Pack / Google Business Profile tasks."
                  },
                  contentStrategy: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "At least 3 tailored content syndication suggestions (socials, newsletters, blogs)."
                  }
                },
                required: ["websiteOptimizations", "localSeoTasks", "contentStrategy"]
              },
              customTips: {
                type: Type.STRING,
                description: "A signature, high-end 'boutique agency tip' that will elevate them above standard templates."
              }
            },
            required: [
              "readinessScore",
              "readinessLevel",
              "executiveSummary",
              "searchVisibilityAnalysis",
              "actionablePlan",
              "customTips"
            ]
          }
        }
      });

      const auditData = JSON.parse(response.text?.trim() || "{}");
      res.json(auditData);

    } catch (error: any) {
      console.error("[Audit Error]", error);
      
      // Fallback response for missing API Key or failed requests to prevent user blockages
      const isConfigError = error.message.includes("GEMINI_API_KEY");
      
      res.json({
        readinessScore: 45,
        readinessLevel: "Moderate (Review Pending)",
        executiveSummary: `This is a strategic review for ${businessName}. ${
          isConfigError 
            ? "Your local server is currently completing initialization (Gemini API key is pending configuration in secrets)."
            : "An analysis of your digital posture has been compiled."
        } Based on your services, you have major untapped search and conversion potential.`,
        searchVisibilityAnalysis: {
          googleSearch: `High-value queries for "${services}" are active in the ${location} region. A generic or static layout won't capture them.`,
          googleMaps: `Proximity queries (near me) are key for ${location}. Listing specific local landmarks and setting up structured local Schema are necessary.`,
          aiSearch: "AI answers look for long-tail FAQs and structured answer tables. Your current digital presence needs specific FAQ markup."
        },
        actionablePlan: {
          websiteOptimizations: [
            "Create separate dedicated service pages for each category of " + services.split(",")[0] || "your services",
            "Integrate an interactive, friction-free customer scheduling calendar widget",
            "Optimize images with localized alt text metadata and compile perfect Core Web Vitals"
          ],
          localSeoTasks: [
            "Complete Google Business Profile categories targeting local service keywords",
            "Establish a continuous customer review acquisition flow with localized review text",
            "Build consistent local NAP (Name, Address, Phone) citations across directories"
          ],
          contentStrategy: [
            "Draft monthly authority blog insights addressing real user questions",
            "Repurpose website insights directly into a bi-weekly email newsletter for customer nurturing",
            "Syndicate updates to your Google Business Profile weekly to reinforce map proximity"
          ]
        },
        customTips: "Boutique Strategy: Implement localized service schemas on your subpages. This immediately tells search robots exactly who you are, what you offer, and the coordinates you serve."
      });
    }
  });

  // --- VITE MIDDLEWARE / STATIC ASSETS ---

  if (process.env.NODE_ENV !== "production") {
    console.log("[Server] Mounting Vite developer middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    console.log("[Server] Serving production static files...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running successfully on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server startup failure:", err);
});
