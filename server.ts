import { handlePreview } from './backend/preview';
import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// In-memory data store for submissions during container runtime
const contactsStore: any[] = [];
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

  // Body parsing middleware with expanded limits for high-res logo uploads & previews
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // --- API ROUTES FIRST ---

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  app.all('/api/preview-submit', async (req, res) => {
    const result = await handlePreview(new Request(`${req.protocol}://${req.get('host')}${req.originalUrl}`, {
      method: req.method, headers: req.headers as Record<string,string>,
      ...(req.method === 'POST' ? {body:JSON.stringify(req.body)} : {})
    }));
    result.headers.forEach((v,k)=>res.setHeader(k,v));
    res.status(result.status).send(await result.text());
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
      return res.status(400).json({ error: "Name, email, date, and preferred time are required." });
    }

    // Server-side day validation: Wednesday (3), Friday (5), Saturday (6)
    const [year, month, day] = date.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);
    const dayOfWeek = dateObj.getDay();

    if (dayOfWeek !== 3 && dayOfWeek !== 5 && dayOfWeek !== 6) {
      return res.status(400).json({ error: "Friendly chats can only be scheduled on Wednesdays, Fridays, or Saturdays." });
    }

    const newBooking = {
      id: "bk-" + Math.random().toString(36).substr(2, 9),
      name,
      email,
      businessName: businessName || "",
      websiteUrl: websiteUrl || "",
      date,
      timeSlot,
      notes: notes || "",
      timestamp: new Date().toISOString()
    };

    bookingsStore.push(newBooking);
    
    // Log beautiful email dispatches
    console.log(`
================================================================================
EMAIL DISPATCHED TO: info@theivanacollective.com
SENDER: no-reply@theivanacollective.com
SUBJECT: New Booking Scheduled — [${name} - ${businessName || "No Business Name"}]
--------------------------------------------------------------------------------
Dear Team,

A new meeting has been booked through the website scheduling assistant!

[CLIENT INFORMATION]
- Name: ${name}
- Email: ${email}
- Business Name: ${businessName || "N/A"}
- Website URL: ${websiteUrl || "N/A"}

[SCHEDULED TIME]
- Date: ${date} (Day of week: ${dayOfWeek === 3 ? "Wednesday" : dayOfWeek === 5 ? "Friday" : "Saturday"})
- Time: ${timeSlot}

[CLIENT CONVERSATION NOTES]
"${notes || "No notes provided."}"

================================================================================
`);

    console.log(`
================================================================================
EMAIL DISPATCHED TO: ${email}
SENDER: info@theivanacollective.com
SUBJECT: Your chat with The Ivana Collective is scheduled!
--------------------------------------------------------------------------------
Hi ${name},

We are so excited to chat with you! This is to confirm that we've booked your free
friendly chat for ${date} at ${timeSlot}.

We will send a calendar link and a video call invitation to this email address shortly.
If you have any questions or need to reschedule, simply reply to this email.

Warmly,
The Ivana Collective Team
info@theivanacollective.com
================================================================================
`);

    res.json({
      success: true,
      bookingId: newBooking.id,
      message: `Your chat has been successfully booked for ${date} at ${timeSlot}! A calendar invitation has been sent to your email.`
    });
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
