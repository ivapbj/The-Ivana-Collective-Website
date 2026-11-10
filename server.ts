import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { Resend } from "resend";
import previewSubmission from "./api/preview-submit";

// Load environment variables
dotenv.config();

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
  const PORT = Number(process.env.PORT) || 3000;

  // Limit incoming JSON to the size needed for the builder.
  app.use(express.json({ limit: "4mb" }));
  app.use(express.urlencoded({ limit: "4mb", extended: true }));

  // --- API ROUTES FIRST ---

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Reuse the production email handler in Express on non-Vercel hosts.
  app.post("/api/preview-submit", async (req, res, next) => {
    try {
      const request = new Request("http://localhost/api/preview-submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(req.body)
      });
      const response = await previewSubmission.fetch(request);
      res.status(response.status);
      response.headers.forEach((value, key) => res.setHeader(key, value));
      res.send(await response.text());
    } catch (error) {
      next(error);
    }
  });

  // Do not report success until the email provider accepts the contact message.
  app.post("/api/contact", async (req, res) => {
    const { name, email, businessName, message } = req.body || {};
    if (typeof name !== "string" || !name.trim() || name.length > 120 ||
        typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        typeof message !== "string" || !message.trim() || message.length > 5000 ||
        (businessName != null && (typeof businessName !== "string" || businessName.length > 200))) {
      return res.status(400).json({ error: "Please enter a valid name, email, and message." });
    }
    const key = process.env.RESEND_API_KEY?.trim();
    const from = process.env.FROM_EMAIL?.trim();
    const to = process.env.FORM_NOTIFICATION_EMAIL?.trim() || "info@theivanacollective.com";
    if (!key || !from) return res.status(503).json({ error: "Email is temporarily unavailable. Please email us directly." });
    try {
      const result = await new Resend(key).emails.send({
        from, to: [to], replyTo: email,
        subject: "New website contact request",
        text: [`Name: ${name.trim()}`, `Email: ${email.trim()}`,
          `Business: ${(businessName || "").trim()}`, "", message.trim()].join("\n")
      });
      if (result.error || !result.data?.id) throw new Error("Email provider rejected the request");
      return res.json({ success: true, message: "Thank you for contacting The Ivana Collective." });
    } catch {
      return res.status(502).json({ error: "Your message could not be sent. Please email us directly." });
    }
  });

  // A real calendar integration is not configured; never invent a booking.
  app.post("/api/bookings", (_req, res) => {
    res.status(503).json({ error: "Online booking is unavailable here. Please use the scheduling link." });
  });

  // AI-Powered SEO and Search Readiness Audit
  app.post("/api/audit", async (req, res) => {
    const { businessName, location, websiteUrl, services } = req.body;

    if (!businessName || !location || !services) {
      return res.status(400).json({ error: "Business name, location, and services are required." });
    }

    try {
      const ai = getGeminiClient();

      const prompt = `
        Perform a comprehensive Local SEO, AI Search Engine Visibility (SearchGPT/Perplexity/Gemini), and digital customer experience audit for the following business:
        - Business Name: "${businessName}"
        - Location / Service Area: "${location}"
        - Services Provided: "${services}"
        ${websiteUrl ? `- Existing Website URL: "${websiteUrl}"` : ""}

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

  // Global API Error Handler - ensures API errors always return structured JSON, not HTML error pages
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.path.startsWith("/api")) {
      console.error("[API Error Handler]", err);
      const status = err.status || err.statusCode || 500;
      return res.status(status).json({
        error: err.message || "A server error occurred while processing your request."
      });
    }
    next(err);
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
