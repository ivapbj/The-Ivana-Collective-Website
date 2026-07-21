import React, { useState, useRef, useEffect } from "react";
import { 
  Laptop, 
  Tablet as TabletIcon, 
  Smartphone, 
  Upload, 
  X, 
  RotateCcw, 
  Check, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ArrowRight,
  Info,
  ExternalLink,
  ShieldAlert,
  Phone
} from "lucide-react";
import { normalizeWebsiteUrl, WEBSITE_URL_ERROR } from "../../shared/websiteUrl";

// Types and Schemas
interface Palette {
  id: string;
  name: string;
  label: string;
  colors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
    surface: string;
  };
}

interface DesignDirection {
  id: string;
  name: string;
  tagline: string;
  fontHeading: string;
  fontBody: string;
  headingClass: string;
  bodyClass: string;
  spacingClass: string;
  cardClass: string;
  buttonClass: string;
  borderClass: string;
  shadowClass: string;
  layoutStyle: string;
}

// 6 Curated Branded Palettes
const CURATED_PALETTES: Palette[] = [
  {
    id: "collective-forest",
    name: "Collective Forest",
    label: "SIGNATURE",
    colors: {
      primary: "#163C36",
      accent: "#89B7A7",
      background: "#F4EFE5",
      text: "#17231F",
      surface: "#FFFAF2",
    }
  },
  {
    id: "editorial-champagne",
    name: "Editorial Champagne",
    label: "LUXURY",
    colors: {
      primary: "#171717",
      accent: "#B99B6B",
      background: "#F7F1E5",
      text: "#211C18",
      surface: "#FFFAF3",
    }
  },
  {
    id: "orchid-authority",
    name: "Orchid Authority",
    label: "BEAUTY",
    colors: {
      primary: "#4E2943",
      accent: "#D0A2B3",
      background: "#FCF3F5",
      text: "#2E1B29",
      surface: "#FFFAFB",
    }
  },
  {
    id: "digital-blueprint",
    name: "Digital Blueprint",
    label: "MODERN",
    colors: {
      primary: "#12263A",
      accent: "#3F8CFF",
      background: "#F4F8FD",
      text: "#17202A",
      surface: "#FFFFFF",
    }
  },
  {
    id: "organic-terra",
    name: "Organic Terra",
    label: "GROUNDED",
    colors: {
      primary: "#9C553F",
      accent: "#7F8666",
      background: "#F3E7D7",
      text: "#382D27",
      surface: "#FFF8EF",
    }
  },
  {
    id: "electric-momentum",
    name: "Electric Momentum",
    label: "BOLD",
    colors: {
      primary: "#1848D8",
      accent: "#FF7043",
      background: "#FFF5E1",
      text: "#11172A",
      surface: "#FFFFFF",
    }
  }
];

// 4 Custom Design Directions
const DESIGN_DIRECTIONS: DesignDirection[] = [
  {
    id: "luxury-editorial",
    name: "Luxury Editorial",
    tagline: "Georgia + Inter",
    fontHeading: "Georgia, 'Times New Roman', serif",
    fontBody: "Inter, Arial, sans-serif",
    headingClass: "font-serif tracking-tight font-light uppercase",
    bodyClass: "font-sans leading-relaxed tracking-normal font-light",
    spacingClass: "py-16 md:py-24 px-8 md:px-16 gap-12",
    cardClass: "rounded-none border-[0.5px] border-black/10 shadow-none p-8",
    buttonClass: "rounded-none uppercase tracking-widest text-[9px] font-semibold border-[0.5px]",
    borderClass: "border-[0.5px] border-black/10",
    shadowClass: "shadow-none",
    layoutStyle: "editorial"
  },
  {
    id: "clean-modern",
    name: "Clean Modern",
    tagline: "Space Grotesk + Inter",
    fontHeading: "'Space Grotesk', sans-serif",
    fontBody: "'Inter', sans-serif",
    headingClass: "font-sans font-bold tracking-tight",
    bodyClass: "font-sans leading-relaxed tracking-normal",
    spacingClass: "py-12 md:py-16 px-6 md:px-12 gap-8",
    cardClass: "rounded-2xl border border-black/5 shadow-sm p-6",
    buttonClass: "rounded-xl font-medium text-[11px] py-2.5",
    borderClass: "border border-black/5",
    shadowClass: "shadow-sm",
    layoutStyle: "modern"
  },
  {
    id: "hypercolor-modern",
    name: "Hypercolor Modern",
    tagline: "Space Grotesk + JetBrains Mono",
    fontHeading: "'Space Grotesk', sans-serif",
    fontBody: "'JetBrains Mono', monospace",
    headingClass: "font-sans font-extrabold tracking-tighter uppercase italic bg-gradient-to-r from-[#FF007F] via-[#7B2CBF] to-[#00F5FF] bg-clip-text text-transparent",
    bodyClass: "font-mono leading-relaxed tracking-tight text-[11px]",
    spacingClass: "py-12 md:py-16 px-6 md:px-12 gap-8",
    cardClass: "rounded-none border-[3px] border-black bg-[var(--preview-surface)] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] p-6",
    buttonClass: "rounded-none border-[3px] border-black text-black bg-[var(--preview-accent)] font-extrabold text-[10px] uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all",
    borderClass: "border-[3px] border-black",
    shadowClass: "shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
    layoutStyle: "hypercolor"
  },
  {
    id: "gen-z-brutalist",
    name: "Gen Z Brutalist",
    tagline: "Syne + JetBrains Mono",
    fontHeading: "'Syne', sans-serif",
    fontBody: "'JetBrains Mono', monospace",
    headingClass: "font-sans font-extrabold tracking-tighter uppercase text-black",
    bodyClass: "font-mono leading-relaxed tracking-tight text-[11px]",
    spacingClass: "py-12 md:py-16 px-6 md:px-12 gap-8",
    cardClass: "rounded-none border-[4px] border-black bg-[var(--preview-surface)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6",
    buttonClass: "rounded-none border-[4px] border-black text-black bg-[var(--preview-accent)] font-extrabold text-[10px] uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all",
    borderClass: "border-[4px] border-black",
    shadowClass: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    layoutStyle: "genz"
  }
];

const INDUSTRIES = [
  "Beauty and Wellness",
  "Healthcare",
  "Professional Services",
  "Home Services",
  "Cleaning Services",
  "Construction and Trades",
  "Food and Hospitality",
  "Creative Business",
  "E-commerce",
  "Coaching and Consulting",
  "Other"
];

const PREVIEW_BOOKING_URL = "https://calendar.app.google/fsvawrwZfkYNESyeA";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export default function StylePreviewSection() {
  // 1. Core Configurator States
  const [businessName, setBusinessName] = useState("");
  const [tagline, setTagline] = useState("");
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoName, setLogoName] = useState<string | null>(null);
  const [logoError, setLogoError] = useState<string | null>(null);

  // Honeypot Field for anti-spam
  const [botField, setBotField] = useState("");

  // Style Selections
  const [selectedDirection, setSelectedDirection] = useState<DesignDirection>(DESIGN_DIRECTIONS[0]);
  const [selectedPalette, setSelectedPalette] = useState<Palette>(CURATED_PALETTES[0]);

  // Responsive device simulator size
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [isPreviewMenuOpen, setIsPreviewMenuOpen] = useState(false);
  const [isNarrowViewport, setIsNarrowViewport] = useState(false);

  // Close preview menu when simulator device is toggled
  useEffect(() => {
    setIsPreviewMenuOpen(false);
  }, [previewDevice]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsNarrowViewport(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  // Consent checkboxes
  const [contactConsent, setContactConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  // Submit flow states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const hasValidEmail = isValidEmail(email);

  // File Upload Reference
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean-up errors on change
  useEffect(() => {
    if (submitError) setSubmitError(null);
  }, [businessName, email, contactConsent]);

  // Handle Logo Upload File Selection
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogoError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (2MB limit)
    const MAX_SIZE_BYTES = 2 * 1024 * 1024;
    if (file.size > MAX_SIZE_BYTES) {
      setLogoError("Maximum file size is 2MB. Please select a smaller image.");
      return;
    }

    // Validate type
    const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg", "image/webp", "image/svg+xml"];
    if (!ALLOWED_TYPES.includes(file.type)) {
      setLogoError("Allowed file types are PNG, JPG, JPEG, WebP, or SVG.");
      return;
    }

    // Read and encode file as DataURL (Base64)
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        setLogoUrl(result);
        setLogoName(file.name);
      }
    };
    reader.onerror = () => {
      setLogoError("Failed to parse file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  // Remove logo completely
  const handleRemoveLogo = () => {
    setLogoUrl(null);
    setLogoName(null);
    setLogoError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Replace logo triggers click
  const handleReplaceLogo = () => {
    fileInputRef.current?.click();
  };

  // Form Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    // Frontend validations
    if (!businessName.trim()) {
      setSubmitError("Please fill in the required field: Business Name.");
      return;
    }
    if (!industry.trim()) {
      setSubmitError("Please select a Business Industry.");
      return;
    }
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setSubmitError("Please fill in the required field: Business Email.");
      return;
    }
    if (!isValidEmail(trimmedEmail)) {
      setSubmitError("Please enter a valid business email address.");
      return;
    }
    if (!contactConsent) {
      setSubmitError("You must agree to the Contact Consent clause to submit your request.");
      return;
    }

    const normalizedWebsiteUrl = normalizeWebsiteUrl(websiteUrl);
    if (normalizedWebsiteUrl === null) {
      setSubmitError(WEBSITE_URL_ERROR);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/preview-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          tagline,
          industry,
          email: trimmedEmail,
          phone,
          websiteUrl: normalizedWebsiteUrl,
          theme: selectedDirection.name,
          palette: selectedPalette.name,
          notes,
          logoUrl, // Safe base64 or SVG
          contactConsent,
          marketingConsent,
          consentTextVersion: "website-preview-v2",
          botField // Honeypot spam protector
        })
      });

      const responseText = await response.text();
      let data: { success?: boolean; message?: string; error?: string } | null = null;

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch {
          data = null;
        }
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
          "We could not submit your website direction right now. Please try again shortly."
        );
      }

      if (!data || data.success !== true) {
        throw new Error("We received an unexpected response. Please try submitting the form again.");
      }

      setSubmitSuccess(data.message || "Your website direction has been submitted.");
    } catch (err: unknown) {
      console.error("Submission Error:", err);
      setSubmitError(
        err instanceof Error
          ? err.message
          : "We could not submit your website direction. Please review your information and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isHypercolor = selectedDirection.id === "hypercolor-modern";
  const isGenZ = selectedDirection.id === "gen-z-brutalist";
  const useCompactPreviewNavigation = previewDevice !== "desktop" || isNarrowViewport;
  const useCompactPreviewLayout = previewDevice === "mobile" || isNarrowViewport;

  const getPrimaryButtonClass = () => {
    if (isGenZ) {
      return "bg-[var(--preview-accent)] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all";
    }
    if (isHypercolor) {
      return "bg-[var(--preview-accent)] text-black border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]";
    }
    return "bg-[var(--preview-primary)] text-[var(--preview-surface)] hover:opacity-90 shadow-sm";
  };

  const getSecondaryButtonClass = () => {
    if (isGenZ) {
      return "bg-[var(--preview-surface)] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all";
    }
    if (isHypercolor) {
      return "bg-[var(--preview-surface)] text-black border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]";
    }
    return "bg-transparent text-[var(--preview-primary)] border border-[var(--preview-primary)] hover:bg-[var(--preview-primary)]/5";
  };

  const getCardClass = () => {
    if (isGenZ) {
      return "rounded-none border-4 border-black bg-[var(--preview-surface)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";
    }
    if (isHypercolor) {
      return "rounded-none border-[3px] border-black bg-[var(--preview-surface)] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]";
    }
    return `${selectedDirection.cardClass} ${selectedDirection.shadowClass} border border-[var(--preview-border)]`;
  };

  // Dynamic CSS variables for real-time style injection in preview wrapper
  const previewCustomStyles = {
    "--preview-primary": selectedPalette.colors.primary,
    "--preview-accent": selectedPalette.colors.accent,
    "--preview-background": selectedPalette.colors.background,
    "--preview-surface": selectedPalette.colors.surface,
    "--preview-text": selectedPalette.colors.text,
    "--preview-muted": `${selectedPalette.colors.text}aa`, // Semi-transparent text
    "--preview-border": `${selectedPalette.colors.primary}18`, // Subtle border color
    "--preview-font-heading": selectedDirection.fontHeading,
    "--preview-font-body": selectedDirection.fontBody,
  } as React.CSSProperties;

  // Render variables of active simulator dimensions
  const getDeviceWidthClass = () => {
    switch (previewDevice) {
      case "tablet": return "max-w-[768px] w-full";
      case "mobile": return "max-w-[390px] w-full";
      default: return "w-full";
    }
  };

  return (
    <section 
      id="interactive-preview" 
      style={{ fontFamily: 'Inter, Arial, sans-serif' }}
      className="py-24 md:py-32 bg-[#061C1A] border-b border-white/5 relative overflow-hidden"
    >
      {/* Visual background atmospheric elements */}
      <div className="absolute right-0 top-1/3 aspect-square w-full max-w-[500px] rounded-full bg-[#89B7A7]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 aspect-square w-full max-w-[300px] rounded-full bg-[#163C36]/20 blur-[80px] pointer-events-none sm:left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Introduction */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <span style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[10px] tracking-widest uppercase text-[#7CA99B]">
            THE IVANA COLLECTIVE · INTERACTIVE BRAND PREVIEW
          </span>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
            See your business before we build it.
          </h2>
          <p style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-sm text-[#B8C6C1] leading-relaxed font-light">
            Add your business details, choose a design direction, and explore how your future website could look before scheduling your consultation.
          </p>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Column (Customization controls) - 35% space equivalent on lg screens */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="bg-[#0D2623] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#123B35]/30 to-transparent opacity-30 blur-xl pointer-events-none" />
              
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-serif text-xl text-[#F4F5F1] mb-6 border-b border-white/5 pb-4">
                Create Your Site
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Honeypot hidden input for spam protection */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botField">Leave this field blank</label>
                  <input
                    id="botField"
                    type="text"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* 1. Business Info */}
                <div className="space-y-4">
                  <h4 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-[10px] tracking-widest text-[#7CA99B] uppercase font-bold">
                    01 / Business Type
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="block text-[11px] text-[#7CA99B] uppercase tracking-wider mb-1.5" htmlFor="business-name">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="business-name"
                        type="text"
                        placeholder="e.g. Elite Wellness Lounge"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full bg-[#061C1A] border border-white/10 rounded-xl px-4 py-3 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="block text-[11px] text-[#7CA99B] uppercase tracking-wider mb-1.5" htmlFor="business-tagline">
                        Business Tagline
                      </label>
                      <input
                        id="business-tagline"
                        type="text"
                        placeholder="e.g. Bespoke organic skin care treatments"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        className="w-full bg-[#061C1A] border border-white/10 rounded-xl px-4 py-3 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE]/50 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="block text-[11px] text-[#7CA99B] uppercase tracking-wider mb-1.5" htmlFor="business-industry">
                          Industry <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="business-industry"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className="w-full appearance-none bg-[#061C1A] border border-white/10 rounded-xl pl-4 pr-10 py-3 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE]/50 transition-colors cursor-pointer"
                          >
                            {INDUSTRIES.map((ind) => (
                              <option key={ind} value={ind}>{ind}</option>
                            ))}
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-[#7CA99B] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="block text-[11px] text-[#7CA99B] uppercase tracking-wider mb-1.5" htmlFor="business-email">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="business-email"
                          type="email"
                          required
                          placeholder="e.g. contact@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#061C1A] border border-white/10 rounded-xl px-4 py-3 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE]/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="block text-[11px] text-[#7CA99B] uppercase tracking-wider mb-1.5" htmlFor="business-phone">
                          Phone Number
                        </label>
                        <input
                          id="business-phone"
                          type="tel"
                          placeholder="e.g. (555) 123-4567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-[#061C1A] border border-white/10 rounded-xl px-4 py-3 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE]/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="block text-[11px] text-[#7CA99B] uppercase tracking-wider mb-1.5" htmlFor="website-url">
                          Current Website URL
                        </label>
                        <input
                          id="website-url"
                          type="text"
                          placeholder="yourbusiness.com"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          className="w-full bg-[#061C1A] border border-white/10 rounded-xl px-4 py-3 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE]/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Logo Upload Interface */}
                    <div>
                      <span style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="block text-[11px] text-[#7CA99B] uppercase tracking-wider mb-1.5">
                        Brand Logo Upload (Optional)
                      </span>
                      <div className="border border-dashed border-white/10 rounded-xl p-4 bg-[#061C1A]/40 text-center relative">
                        {logoUrl ? (
                          <div className="space-y-3">
                            <div className="inline-flex items-center justify-center p-2 bg-[#0D2623] border border-white/5 rounded-lg max-h-16 max-w-full overflow-hidden">
                              <img 
                                src={logoUrl} 
                                alt="Uploaded Logo Preview" 
                                className="max-h-12 object-contain"
                              />
                            </div>
                            <p style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[10px] text-[#7CA99B] truncate px-4">{logoName}</p>
                            <div className="flex justify-center gap-2">
                              <button
                                type="button"
                                onClick={handleReplaceLogo}
                                style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                                className="px-3 py-1.5 rounded-lg bg-[#123B35] hover:bg-[#163C36] text-[#B9D8CE] text-[9px] uppercase tracking-wider transition-colors"
                              >
                                Replace Logo
                              </button>
                              <button
                                type="button"
                                onClick={handleRemoveLogo}
                                style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                                className="px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-950/80 text-red-300 text-[9px] uppercase tracking-wider border border-red-900/30 transition-colors"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Upload className="w-5 h-5 mx-auto text-[#7CA99B]/60" />
                            <p style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[11px] text-[#B8C6C1] font-light">
                              Drag and drop or click to upload PNG, JPG, or SVG
                            </p>
                            <p style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[9px] text-[#7CA99B]">
                              MAX SIZE: 2MB (SVG is sanitized automatically)
                            </p>
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                              className="inline-block mt-1 px-4 py-1.5 rounded-lg bg-[#123B35]/50 border border-white/5 hover:bg-[#123B35] text-[#F4F5F1] text-[9px] uppercase tracking-wider transition-all cursor-pointer"
                            >
                              Choose File
                            </button>
                          </div>
                        )}
                        <input
                          ref={fileInputRef}
                          id="logo-upload"
                          type="file"
                          accept=".png,.jpg,.jpeg,.webp,.svg"
                          className="hidden"
                          onChange={handleLogoUpload}
                        />
                      </div>
                      {logoError && (
                        <p style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-red-400 text-[9px] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {logoError}
                        </p>
                      )}
                    </div>

                    <div>
                      <label style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="block text-[11px] text-[#7CA99B] uppercase tracking-wider mb-1.5" htmlFor="additional-notes">
                        Special Instructions or Brand Notes
                      </label>
                      <textarea
                        id="additional-notes"
                        rows={3}
                        placeholder="Tell us about specific pages, elements, or colors you love."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-[#061C1A] border border-white/10 rounded-xl px-4 py-3 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE]/50 transition-colors resize-none"
                      />
                    </div>

                  </div>
                </div>

                {/* 2. Select Design Direction (4 Options) */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h4 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-[10px] tracking-widest text-[#7CA99B] uppercase font-bold">
                    02 / Design Direction
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {DESIGN_DIRECTIONS.map((direction) => {
                      const isActive = selectedDirection.id === direction.id;
                      return (
                        <button
                          key={direction.id}
                          type="button"
                          onClick={() => setSelectedDirection(direction)}
                          aria-checked={isActive}
                          role="radio"
                          className={`
                            p-4 rounded-xl border text-left transition-all relative focus:outline-none cursor-pointer
                            ${isActive 
                              ? "bg-[#123B35] border-[#B9D8CE]/40 shadow-md scale-[1.02]" 
                              : "bg-[#061C1A]/40 border-white/5 hover:border-white/10 hover:bg-[#061C1A]/60"}
                          `}
                        >
                          {isActive && (
                            <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#B9D8CE] flex items-center justify-center text-[#061C1A]">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                          )}
                          <h5 style={{ fontFamily: direction.id === "luxury-editorial" ? 'Georgia, "Times New Roman", serif' : direction.id === "gen-z-brutalist" ? "'Syne', sans-serif" : "Inter, sans-serif" }} className="text-sm font-semibold text-[#F4F5F1] mb-0.5">
                            {direction.name}
                          </h5>
                          <p style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[9px] text-[#7CA99B] leading-none mb-2">
                            {direction.tagline}
                          </p>
                          <p style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[10px] text-[#B8C6C1] leading-tight font-light">
                            {direction.id === "luxury-editorial" && "Refined spacious structure with minimal serifs."}
                            {direction.id === "clean-modern" && "Conversion-first interface with bold modern shapes."}
                            {direction.id === "hypercolor-modern" && "Neo-brutalist grids with electric gradients and high-contrast block shadows."}
                            {direction.id === "gen-z-brutalist" && "Ultra-bold experimental typography with custom background grids, thick borders, and flat high-contrast offsets."}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Branded Color Palettes (Curated cards) */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <h4 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="text-[10px] tracking-widest text-[#7CA99B] uppercase font-bold">
                      03 / Branded Color Palettes
                    </h4>
                    <span style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[8px] text-[#7CA99B] tracking-wider uppercase border border-[#7CA99B]/20 rounded px-2 py-0.5">
                      IVANA CURATED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CURATED_PALETTES.map((palette) => {
                      const isActive = selectedPalette.id === palette.id;
                      return (
                        <button
                          key={palette.id}
                          type="button"
                          onClick={() => setSelectedPalette(palette)}
                          aria-checked={isActive}
                          role="radio"
                          className={`
                            p-3 rounded-xl border text-left transition-all flex flex-col justify-between focus:outline-none cursor-pointer
                            ${isActive 
                              ? "bg-[#123B35] border-[#B9D8CE]/40 shadow-md scale-[1.02]" 
                              : "bg-[#061C1A]/40 border-white/5 hover:border-white/10 hover:bg-[#061C1A]/60"}
                          `}
                        >
                          <div className="flex items-center justify-between w-full mb-2">
                            <h5 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-serif text-xs text-[#F4F5F1] font-medium">
                              {palette.name}
                            </h5>
                            <span style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[8px] text-[#7CA99B] bg-[#061C1A]/40 px-1.5 py-0.5 rounded border border-white/5">
                              {palette.label}
                            </span>
                          </div>

                          {/* Swatches */}
                          <div className="flex gap-1.5 w-full mt-1">
                            <span 
                              className="w-full h-4 rounded" 
                              style={{ backgroundColor: palette.colors.primary }} 
                              title={`Primary: ${palette.colors.primary}`}
                            />
                            <span 
                              className="w-full h-4 rounded" 
                              style={{ backgroundColor: palette.colors.accent }} 
                              title={`Accent: ${palette.colors.accent}`}
                            />
                            <span 
                              className="w-full h-4 rounded border border-white/10" 
                              style={{ backgroundColor: palette.colors.background }} 
                              title={`Background: ${palette.colors.background}`}
                            />
                            <span 
                              className="w-full h-4 rounded" 
                              style={{ backgroundColor: palette.colors.text }} 
                              title={`Text: ${palette.colors.text}`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Submission & Consent Clause */}
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg text-[#F4F5F1]">
                      Save My Website Direction
                    </h4>
                    <p className="text-xs text-[#B8C6C1] font-light leading-relaxed">
                      Submit your selections and The Ivana Collective will use them as the starting point for your website consultation.
                    </p>
                  </div>

                  {/* Dual Double Consent Checkboxes for High-Fidelity compliance */}
                  <div className="space-y-3.5">
                    
                    {/* Required contact consent */}
                    <div className="flex items-start gap-3">
                      <div className="flex items-center h-5">
                        <input
                          id="consent-contact"
                          type="checkbox"
                          required
                          checked={contactConsent}
                          onChange={(e) => setContactConsent(e.target.checked)}
                          className="w-4 h-4 rounded bg-[#061C1A] border-white/10 text-[#B9D8CE] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                        />
                      </div>
                      <label htmlFor="consent-contact" className="text-[11px] text-[#B8C6C1] leading-relaxed cursor-pointer select-none">
                        By clicking Submit, I agree that The Ivana Collective may use my information to contact me about my website request and send me marketing emails. I understand that I can unsubscribe from marketing emails at any time. <span className="text-red-500">*</span>
                      </label>
                    </div>

                    {/* Optional marketing consent */}
                    <div className="flex items-start gap-3">
                      <div className="flex items-center h-5">
                        <input
                          id="consent-marketing"
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                          className="w-4 h-4 rounded bg-[#061C1A] border-white/10 text-[#B9D8CE] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                        />
                      </div>
                      <label htmlFor="consent-marketing" className="text-[11px] text-[#B8C6C1] leading-relaxed cursor-pointer select-none">
                        Yes, I would also like to receive website tips, offers, and digital marketing insights from The Ivana Collective. I can unsubscribe at any time.
                      </label>
                    </div>

                    {/* Legal Links */}
                    <div style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[10px] text-[#7CA99B] flex items-center gap-3 pt-1">
                      <span className="hover:text-[#B9D8CE] transition-colors cursor-pointer border-b border-[#7CA99B]/30 pb-0.5">
                        Privacy Policy
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/5" />
                      <span className="hover:text-[#B9D8CE] transition-colors cursor-pointer border-b border-[#7CA99B]/30 pb-0.5">
                        Terms and Conditions
                      </span>
                    </div>

                  </div>

                  {/* Submission States Panel */}
                  {submitError && (
                    <div className="p-3 bg-red-950/30 border border-red-900/30 rounded-xl text-red-300 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                      <ShieldAlert className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  {submitSuccess ? (
                    <div className="space-y-4 p-5 bg-[#123B35]/40 border border-[#B9D8CE]/20 rounded-xl text-left animate-in fade-in duration-300">
                      <div className="flex items-start gap-2.5 text-[#B9D8CE]">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="font-serif text-sm font-semibold text-[#F4F5F1]">Your Website Direction has been sent.</h5>
                          <p className="text-xs text-[#B8C6C1] font-light mt-1">
                            {submitSuccess}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitSuccess(null);
                            setBusinessName("");
                            setTagline("");
                            setNotes("");
                            handleRemoveLogo();
                          }}
                          style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                          className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#F4F5F1] uppercase tracking-wider transition-colors flex items-center gap-1"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> Start New
                        </button>
                        <a
                          href={PREVIEW_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                          className="px-4 py-2 rounded-lg bg-[#B9D8CE] text-[#061C1A] hover:bg-[#a3cbbf] text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 shadow-md"
                        >
                          Schedule a Strategy Call <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting || !hasValidEmail}
                      style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                      className={`
                        w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-300
                        flex items-center justify-center gap-2
                        ${hasValidEmail
                          ? "bg-[#B9D8CE] text-[#061C1A] hover:bg-[#a3cbbf] shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          : "bg-gray-600 text-gray-300 shadow-none hover:shadow-none hover:translate-y-0 cursor-not-allowed"
                        }
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4.5 w-4.5 text-[#061C1A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting your website direction…
                        </>
                      ) : (
                        "Submit My Website Direction"
                      )}
                    </button>
                  )}

                </div>

              </form>
            </div>
          </div>

          {/* Right Column (Live website preview) - 65% space equivalent on lg screens */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Device selector panel */}
            <div style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="bg-[#0D2623] border border-[#123B35] rounded-xl px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md min-w-0 max-w-full">
              <span style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="text-[9px] tracking-widest text-[#7CA99B] uppercase font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9D8CE] animate-pulse" /> LIVE WEBSITE PREVIEW
              </span>

              {/* Controls */}
              <div className="grid w-full grid-cols-3 sm:w-auto sm:flex items-center bg-[#061C1A]/60 p-1 rounded-lg border border-white/5 min-w-0">
                <button
                  type="button"
                  onClick={() => setPreviewDevice("desktop")}
                  style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                  className={`min-w-0 justify-center px-1.5 sm:px-3 py-2 rounded-md text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold flex items-center gap-1 transition-all focus:outline-none ${previewDevice === "desktop" ? "bg-[#123B35] text-[#B9D8CE]" : "text-[#B8C6C1] hover:text-[#F4F5F1]"}`}
                  title="Simulate Desktop Layout"
                >
                  <Laptop className="w-3 h-3" /> Desktop
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewDevice("tablet")}
                  style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                  className={`min-w-0 justify-center px-1.5 sm:px-3 py-2 rounded-md text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold flex items-center gap-1 transition-all focus:outline-none ${previewDevice === "tablet" ? "bg-[#123B35] text-[#B9D8CE]" : "text-[#B8C6C1] hover:text-[#F4F5F1]"}`}
                  title="Simulate Tablet Layout (768px)"
                >
                  <TabletIcon className="w-3 h-3" /> Tablet
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewDevice("mobile")}
                  style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                  className={`min-w-0 justify-center px-1.5 sm:px-3 py-2 rounded-md text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold flex items-center gap-1 transition-all focus:outline-none ${previewDevice === "mobile" ? "bg-[#123B35] text-[#B9D8CE]" : "text-[#B8C6C1] hover:text-[#F4F5F1]"}`}
                  title="Simulate Mobile Layout (390px)"
                >
                  <Smartphone className="w-3 h-3" /> Mobile
                </button>
              </div>
            </div>

            {/* Interactive Browser Frame */}
            <div className="w-full min-w-0 max-w-full bg-[#0B211E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center">
              
              {/* Browser Header Bar */}
              <div className="w-full min-w-0 bg-[#0D2623] px-2 sm:px-4 py-3 border-b border-white/10 flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1.5 flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div style={{ fontFamily: 'Inter, Arial, sans-serif' }} className="w-full bg-[#061C1A] text-[9px] text-[#7CA99B] px-3 py-1 rounded-md border border-white/5 truncate max-w-sm mx-auto text-center flex items-center justify-center gap-1">
                  <span>https://preview.{businessName ? businessName.toLowerCase().replace(/\s+/g, "-") : "mybusiness"}.com</span>
                </div>
                <span className="w-5" /> {/* Spacer */}
              </div>

              {/* Dynamic Responsive Workspace Wrapper */}
              <div className="w-full min-w-0 max-w-full p-2 sm:p-4 overflow-hidden flex justify-center bg-[#071D1A]/80 min-h-[600px] md:min-h-[720px]">
                
                {/* Simulated Webpage inside frame */}
                <div 
                  id="rendered-preview-canvas"
                  style={previewCustomStyles}
                  className={`
                    min-w-0 max-w-full overflow-hidden bg-[var(--preview-background)] text-[var(--preview-text)] transition-all duration-500 border border-black/10 shadow-2xl flex flex-col
                    ${getDeviceWidthClass()}
                  `}
                >
                  
                  {/* Web Nav Bar */}
                  <header 
                    className={`${useCompactPreviewNavigation ? "px-3 py-3 grid-cols-[minmax(0,1fr)_auto] gap-2" : "px-6 py-4 grid-cols-3"} border-b ${isGenZ ? "border-b-4 border-black bg-[var(--preview-surface)]" : isHypercolor ? "border-b-[3px] border-black bg-[var(--preview-surface)]" : "border-b border-[var(--preview-border)]"} grid items-center relative min-w-0 max-w-full`}
                    style={{ 
                      borderRadius: selectedDirection.layoutStyle === "organic" ? "0 0 1rem 1rem" : "0"
                    }}
                  >
                    {/* Left Column: Logo Area */}
                    <div className="flex min-w-0 max-w-full items-center gap-2 justify-self-start overflow-hidden">
                      {logoUrl ? (
                        <img 
                          src={logoUrl} 
                          alt={businessName || "Business Logo"} 
                          className="max-h-8 max-w-full object-contain"
                        />
                      ) : (
                        <span 
                          style={{ fontFamily: selectedDirection.fontHeading }}
                          className={`block max-w-full truncate text-xs sm:text-sm font-semibold tracking-wider text-[var(--preview-primary)] uppercase ${isGenZ || isHypercolor ? "font-black" : ""}`}
                        >
                          {businessName.trim() || "Elite Brand"}
                        </span>
                      )}
                    </div>

                    {/* Middle Column: Nav Links (Desktop) OR Call Button (Tablet/Mobile) */}
                    {!useCompactPreviewNavigation && <div className="justify-self-center flex min-w-0 items-center justify-center">
                      {previewDevice === "desktop" && (
                        <nav style={{ fontFamily: selectedDirection.fontBody }} className="flex items-center gap-5 text-[11px] font-medium tracking-wide whitespace-nowrap">
                          <span className="opacity-75 cursor-default hover:text-[var(--preview-accent)] transition-colors">Home</span>
                          <span className="opacity-75 cursor-default hover:text-[var(--preview-accent)] transition-colors">Services</span>
                          <span className="opacity-75 cursor-default hover:text-[var(--preview-accent)] transition-colors">About</span>
                          <span className="opacity-75 cursor-default hover:text-[var(--preview-accent)] transition-colors">Contact</span>
                        </nav>
                      )}
                    </div>}

                    {/* Right Column: CTA button (Desktop) OR Hamburger Menu (Tablet/Mobile) */}
                    <div className="justify-self-end flex min-w-0 items-center">
                      {!useCompactPreviewNavigation ? (
                        <a
                          href={PREVIEW_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: selectedDirection.fontBody }}
                          className={`px-4 py-1.5 text-[9px] font-semibold ${getPrimaryButtonClass()} transition-all whitespace-nowrap`}
                        >
                          Get Started
                        </a>
                      ) : (
                        /* Hamburger Menu in Mobile and Tablet */
                        <button
                          type="button"
                          onClick={() => setIsPreviewMenuOpen(!isPreviewMenuOpen)}
                          className={`
                            p-1.5 cursor-pointer hover:opacity-80 transition-all flex flex-col gap-1 justify-center items-center w-8 h-8
                            ${isGenZ
                              ? "bg-[var(--preview-surface)] border-2 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-none"
                              : isHypercolor 
                                ? "bg-[var(--preview-surface)] border-2 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md" 
                                : "bg-[var(--preview-border)] text-[var(--preview-primary)] rounded-md"}
                          `}
                          aria-label="Toggle navigation menu"
                        >
                          {isPreviewMenuOpen ? (
                            <X className="w-4 h-4 text-[var(--preview-primary)]" />
                          ) : (
                            <>
                              <span className={`block w-4.5 h-0.5 ${isGenZ || isHypercolor ? "bg-black" : "bg-[var(--preview-primary)]"}`} />
                              <span className={`block w-4.5 h-0.5 ${isGenZ || isHypercolor ? "bg-black" : "bg-[var(--preview-primary)]"}`} />
                              <span className={`block w-4.5 h-0.5 ${isGenZ || isHypercolor ? "bg-black" : "bg-[var(--preview-primary)]"}`} />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Mobile/Tablet Collapsible Menu Overlay */}
                    {isPreviewMenuOpen && useCompactPreviewNavigation && (
                      <div 
                        className={`
                          absolute top-full left-0 right-0 p-4 z-50 transition-all duration-300 origin-top
                          ${isGenZ 
                            ? "bg-[var(--preview-surface)] border-b-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]" 
                            : isHypercolor 
                              ? "bg-[var(--preview-surface)] border-b-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                              : "bg-[var(--preview-surface)] border-b border-[var(--preview-border)] shadow-xl"}
                        `}
                        style={{ fontFamily: selectedDirection.fontBody }}
                      >
                        <nav className="flex flex-col gap-3 text-center text-xs font-semibold">
                          <span className="py-2 opacity-75 hover:text-[var(--preview-accent)] cursor-pointer transition-colors border-b border-[var(--preview-border)]/20 pb-2">Home</span>
                          <span className="py-2 opacity-75 hover:text-[var(--preview-accent)] cursor-pointer transition-colors border-b border-[var(--preview-border)]/20 pb-2">Services</span>
                          <span className="py-2 opacity-75 hover:text-[var(--preview-accent)] cursor-pointer transition-colors border-b border-[var(--preview-border)]/20 pb-2">About</span>
                          <span className="py-2 opacity-75 hover:text-[var(--preview-accent)] cursor-pointer transition-colors border-b border-[var(--preview-border)]/20 pb-2">Contact</span>
                          <a
                            href={PREVIEW_BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-2 w-full py-2 text-[10px] font-semibold ${getPrimaryButtonClass()} transition-all`}
                          >
                            Get Started
                          </a>
                        </nav>
                      </div>
                    )}
                  </header>

                  {/* Web Hero Section */}
                  <section 
                    className={`
                      flex flex-col text-left justify-center
                      ${useCompactPreviewLayout ? "py-10 px-4 gap-6" : "py-16 md:py-20 px-8 md:px-12 gap-8"}
                    `}
                  >
                    <div className={`grid min-w-0 grid-cols-1 ${!useCompactPreviewLayout ? "grid-cols-12 gap-8" : "gap-6"} items-center`}>
                      
                      <div className={`${!useCompactPreviewLayout ? "col-span-7" : ""} min-w-0 space-y-4`}>
                        <div 
                          style={{ fontFamily: selectedDirection.fontBody }} 
                          className={`
                            inline-flex items-center gap-1.5 px-3 py-1 text-[9px] font-semibold uppercase tracking-widest
                            ${isGenZ 
                              ? "bg-emerald-500 text-black border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
                              : isHypercolor 
                                ? "bg-yellow-300 text-black border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
                                : "bg-[var(--preview-border)] text-[var(--preview-primary)] rounded-full"}
                          `}
                        >
                          {industry}
                        </div>
                        
                        <h1 
                          style={{ fontFamily: selectedDirection.fontHeading }}
                          className={`
                            text-[var(--preview-primary)] leading-tight tracking-tight
                            ${useCompactPreviewLayout ? "text-[clamp(1.5rem,8vw,2rem)]" : "text-3xl md:text-4xl"}
                            ${selectedDirection.headingClass}
                          `}
                        >
                          Beautiful service. Thoughtfully delivered.
                        </h1>

                        <p 
                          style={{ fontFamily: selectedDirection.fontBody }}
                          className={`text-xs text-[var(--preview-muted)] ${selectedDirection.bodyClass}`}
                        >
                          {tagline.trim() ? `${tagline.trim()}. ` : ""}A polished, strategic website designed to help the right customers understand your value and confidently take the next step with {businessName.trim() || "our elite team"}.
                        </p>

                        <div className="flex max-w-full flex-wrap gap-3 pt-2">
                          <a
                            href={PREVIEW_BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: selectedDirection.id === "luxury-editorial" ? selectedDirection.fontHeading : selectedDirection.fontBody }}
                            className={`px-5 py-2.5 text-[10px] font-semibold ${getPrimaryButtonClass()} transition-all`}
                          >
                            Get Started
                          </a>
                          <button 
                            type="button"
                            style={{ fontFamily: selectedDirection.id === "luxury-editorial" ? selectedDirection.fontHeading : selectedDirection.fontBody }}
                            className={`px-5 py-2.5 text-[10px] font-semibold ${getSecondaryButtonClass()} transition-all`}
                          >
                            Explore Offerings
                          </button>
                        </div>
                      </div>

                      {/* Featured Image placeholder */}
                      <div className={`${!useCompactPreviewLayout ? "col-span-5" : ""} relative min-w-0 max-w-full`}>
                        <div 
                          className={`
                            w-full aspect-[4/3] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden
                            ${getCardClass()}
                          `}
                        >
                          {/* Editorial pattern lines if applicable */}
                          {selectedDirection.layoutStyle === "editorial" && (
                            <div className="absolute inset-4 border border-[var(--preview-primary)]/10 pointer-events-none" />
                          )}
                          <div className={`p-3 ${isGenZ ? "rounded-none border-2 border-black bg-orange-500 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : isHypercolor ? "rounded-none border-2 border-black bg-pink-300 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "rounded-full bg-[var(--preview-border)] text-[var(--preview-primary)]"} mb-3`}>
                            <Check className="w-5 h-5" />
                          </div>
                          <span 
                            style={{ fontFamily: selectedDirection.fontHeading }}
                            className={`text-xs uppercase tracking-widest text-[var(--preview-primary)] mb-1 ${isGenZ || isHypercolor ? "font-black" : "font-serif"}`}
                          >
                            {businessName.trim() || "Elite Design"} Showcase
                          </span>
                          <p style={{ fontFamily: selectedDirection.fontBody }} className="text-[9px] opacity-70">
                            Custom Photography Area
                          </p>
                        </div>
                      </div>

                    </div>
                  </section>

                  {/* Service Cards Section */}
                  <section 
                    className={`border-t ${isGenZ ? "border-t-4 border-black" : isHypercolor ? "border-t-[3px] border-black" : "border-t border-[var(--preview-border)]"}`}
                    style={{ 
                      borderRadius: selectedDirection.layoutStyle === "organic" ? "1.5rem" : "0"
                    }}
                  >
                    <div className={`min-w-0 text-left ${useCompactPreviewLayout ? "p-4 space-y-6" : "p-8 md:p-12 space-y-8"}`}>
                      
                      <div className="space-y-1">
                        <span style={{ fontFamily: selectedDirection.fontBody }} className="text-[9px] tracking-widest text-[var(--preview-accent)] font-bold uppercase">
                          OUR SERVICES
                        </span>
                        <h2 
                          style={{ fontFamily: selectedDirection.fontHeading }}
                          className={`text-xl md:text-2xl text-[var(--preview-primary)] ${selectedDirection.headingClass}`}
                        >
                          Comprehensive Solutions
                        </h2>
                      </div>

                      {/* Cards Grid */}
                      <div className={`grid min-w-0 grid-cols-1 ${!useCompactPreviewLayout ? "grid-cols-3 gap-6" : "gap-4"}`}>
                        
                        {[
                          { title: "Bespoke Consulting", desc: "Tailored strategic architectural blueprints engineered exclusively to scale client-base volume." },
                          { title: "Signature Experience", desc: "Immersive custom-designed interactions fusing premium editorial aesthetic and program rigor." },
                          { title: "Digital Optimization", desc: "Systematic local discovery, maps placement, and technical authority syndication networks." }
                        ].map((serv, sIdx) => (
                          <div 
                            key={sIdx}
                            style={{ fontFamily: selectedDirection.fontBody }}
                            className={`
                              text-left flex flex-col justify-between transition-all p-6
                              ${getCardClass()}
                            `}
                          >
                            <div className="space-y-3">
                              <span style={{ fontFamily: selectedDirection.fontBody }} className={`text-[9px] font-semibold border-b pb-1 inline-block ${isGenZ || isHypercolor ? "border-black text-black font-black" : "text-[var(--preview-accent)] border-[var(--preview-border)]"}`}>
                                0{sIdx + 1}
                              </span>
                              <h3 
                                style={{ fontFamily: selectedDirection.fontHeading }}
                                className={`text-sm font-semibold text-[var(--preview-primary)] leading-tight ${isGenZ || isHypercolor ? "font-black" : ""}`}
                              >
                                {serv.title}
                              </h3>
                              <p className={`text-[10px] text-[var(--preview-muted)] leading-relaxed font-light ${selectedDirection.bodyClass}`}>
                                {serv.desc}
                              </p>
                            </div>

                            <button 
                              type="button" 
                              style={{ fontFamily: selectedDirection.id === "luxury-editorial" ? selectedDirection.fontHeading : selectedDirection.fontBody }}
                              className={`text-[9px] font-bold ${isGenZ || isHypercolor ? "text-black underline uppercase tracking-widest font-black" : "text-[var(--preview-primary)] hover:text-[var(--preview-accent)]"} mt-4 text-left flex items-center gap-1`}
                            >
                              Learn More <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        ))}

                      </div>

                    </div>
                  </section>

                  {/* About Preview */}
                  <section className={`bg-[var(--preview-surface)] border-t border-b ${isGenZ ? "border-t-4 border-b-4 border-black" : isHypercolor ? "border-t-[3px] border-b-[3px] border-black" : "border-t border-b border-[var(--preview-border)]"} py-12 px-6 text-left`}>
                    <div className={`grid min-w-0 grid-cols-1 ${!useCompactPreviewLayout ? "grid-cols-12 gap-8" : "gap-6"} items-center`}>
                      <div className={`${!useCompactPreviewLayout ? "col-span-5" : ""} min-w-0 max-w-full`}>
                        <div className={`aspect-[4/3] bg-[var(--preview-background)] flex items-center justify-center p-4 border ${isGenZ ? "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none" : isHypercolor ? "border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-none" : "border-[var(--preview-border)] rounded-lg"}`}>
                          <span style={{ fontFamily: selectedDirection.fontHeading }} className={`text-xs uppercase tracking-widest text-[var(--preview-primary)] text-center opacity-60 ${isGenZ || isHypercolor ? "font-black" : ""}`}>
                            Studio Environment
                          </span>
                        </div>
                      </div>
                      <div className={`${!useCompactPreviewLayout ? "col-span-7" : ""} min-w-0 space-y-3`}>
                        <span style={{ fontFamily: selectedDirection.fontBody }} className="text-[9px] tracking-widest text-[var(--preview-accent)] font-bold uppercase">
                          BOUTIQUE PHILOSOPHY
                        </span>
                        <h2 style={{ fontFamily: selectedDirection.fontHeading }} className={`text-lg md:text-xl text-[var(--preview-primary)] ${selectedDirection.headingClass}`}>
                          Dedicated to Aesthetic Caliber
                        </h2>
                        <p style={{ fontFamily: selectedDirection.fontBody }} className="text-[10px] text-[var(--preview-muted)] leading-relaxed font-light">
                          We reject cookie-cutter templates. Every system we produce is tailored dynamically to represent your exact local geographical parameters and signature authority.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Testimonial Preview */}
                  <section className={`py-12 px-6 text-center ${isGenZ ? "border-b-4 border-black bg-[var(--preview-background)]" : isHypercolor ? "border-b-[3px] border-black bg-[var(--preview-background)]" : "bg-[var(--preview-background)]"}`}>
                    <div className="max-w-lg mx-auto space-y-4">
                      <span className="text-xs text-[var(--preview-accent)]">★★★★★</span>
                      <p 
                        style={{ fontFamily: selectedDirection.fontHeading }}
                        className="text-xs md:text-sm italic text-[var(--preview-primary)] font-light leading-relaxed"
                      >
                        "The interface of our new digital portal transformed how clients perceive our brand value. Booking volume increased immediately by 40%."
                      </p>
                      <div>
                        <p style={{ fontFamily: selectedDirection.fontBody }} className="text-[10px] font-bold text-[var(--preview-primary)] uppercase">Dr. Alyson Reed</p>
                        <p style={{ fontFamily: selectedDirection.fontBody }} className="text-[9px] opacity-65">Aesthetic Clinician & Founder</p>
                      </div>
                    </div>
                  </section>

                  {/* Final CTA Section */}
                  <section 
                    className={`p-8 md:p-12 text-center bg-[var(--preview-surface)] border-t ${isGenZ ? "border-t-4 border-black" : isHypercolor ? "border-t-[3px] border-black" : "border-t border-[var(--preview-border)]"}`}
                    style={{ 
                      borderRadius: selectedDirection.layoutStyle === "organic" ? "2rem 2rem 0 0" : "0"
                    }}
                  >
                    <div className="max-w-md mx-auto space-y-4">
                      <h2 
                        style={{ fontFamily: selectedDirection.fontHeading }}
                        className={`text-xl md:text-2xl text-[var(--preview-primary)] ${selectedDirection.headingClass}`}
                      >
                        Let's collaborate.
                      </h2>
                      <p 
                        style={{ fontFamily: selectedDirection.fontBody }}
                        className="text-[11px] text-[var(--preview-muted)] leading-relaxed font-light"
                      >
                        Schedule a signature digital consultation with {businessName.trim() || "our studio"} to secure your territory and establish search dominance today.
                      </p>
                      <a
                        href={PREVIEW_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: selectedDirection.id === "luxury-editorial" ? selectedDirection.fontHeading : selectedDirection.fontBody }}
                        className={`px-6 py-3 text-[10px] font-semibold ${getPrimaryButtonClass()} transition-all inline-block`}
                      >
                        Book Your Consultation
                      </a>
                    </div>
                  </section>

                  {/* Web Footer */}
                  <footer style={{ fontFamily: selectedDirection.fontBody }} className={`px-6 py-6 border-t ${isGenZ ? "border-t-4 border-black" : isHypercolor ? "border-t-[3px] border-black" : "border-t border-[var(--preview-border)]"} bg-[var(--preview-surface)] text-[9px] opacity-75 text-left flex flex-col sm:flex-row justify-between items-center gap-4`}>
                    <p>© {new Date().getFullYear()} {businessName.trim() || "Elite Brand"}. All rights reserved.</p>
                    <div className="flex gap-4">
                      <span>Privacy Policy</span>
                      <span>Terms of Service</span>
                    </div>
                  </footer>

                </div>

              </div>

            </div>

            {/* Strategy Insight Callout Card */}
            <div className="bg-[#0D2623] border border-white/5 rounded-2xl p-4 flex items-start gap-3.5 text-left shadow-lg">
              <Info className="w-5 h-5 text-[#B9D8CE] mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase font-bold">EXPERT INTERFACE METRIC</h5>
                <p className="text-[11px] text-[#B8C6C1] leading-relaxed mt-1">
                  Our system utilizes high-contrast color matching and accessible sizing to maintain strict WCAG AAA guidelines. Notice how selecting different curated palettes updates buttons, text styles, and card structures dynamically to safeguard your authority.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
