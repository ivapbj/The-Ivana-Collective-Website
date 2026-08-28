import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import ProjectModal from "./components/ProjectModal";
import BlogModal from "./components/BlogModal";

// Pages
import Home from "./pages/Home";
import ServicesOverview from "./pages/ServicesOverview";
import WebDesign from "./pages/WebDesign";
import SeoService from "./pages/SeoService";
import ContentGrowth from "./pages/ContentGrowth";
import WorkPage from "./pages/WorkPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Navigation
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { Project, InsightArticle } from "./types";

function AppContent() {
  const { currentPath, navigate } = useNavigation();

  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingBusinessName, setBookingBusinessName] = useState("");
  const [bookingWebsiteUrl, setBookingWebsiteUrl] = useState("");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  // Growth System active stage
  const [activeStageId, setActiveStageId] = useState<string>("found");

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactBusiness, setContactBusiness] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState<string | null>(null);
  const [contactError, setContactError] = useState<string | null>(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Cookie Consent banner state
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  // Active highlighted key on the keyboard
  const [activeKey, setActiveKey] = useState<string>("ivana-collective");

  // Callback when user clicks on a keycap
  const handleKeycapClick = (target: string) => {
    setActiveKey(target);

    switch (target) {
      case "ivana-collective":
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "web-design":
        navigate("/services/web-design");
        break;
      case "seo":
      case "seo-visibility":
      case "ai-search":
        navigate("/services/seo");
        break;
      case "social-media":
      case "content-growth":
        navigate("/services/content-growth");
        break;
      case "strategy":
      case "build":
      case "optimize":
        navigate("/services");
        break;
      case "pricing":
        navigate("/pricing");
        break;
      case "grow":
        navigate("/pricing");
        break;
      case "arrow-cta":
        window.open("https://calendar.app.google/KYrg1R1surXjfRbn7", "_blank");
        break;
      default:
        console.log(`Key ${target} clicked.`);
        break;
    }
  };

  // Open booking calendar in new tab or with prefilled data
  const handleScheduleWithAuditData = (business: string, webUrl: string) => {
    window.open("https://calendar.app.google/KYrg1R1surXjfRbn7", "_blank");
  };

  // Open Google booking calendar directly in a new tab
  const handleScheduleGeneral = () => {
    window.open("https://calendar.app.google/KYrg1R1surXjfRbn7", "_blank");
  };

  // Contact form handler
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      setContactError("Please complete all required fields (Name, Email, Message).");
      return;
    }

    setContactLoading(true);
    setContactError(null);
    setContactSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          businessName: contactBusiness,
          message: contactMessage
        })
      });

      if (!res.ok) {
        throw new Error("Failed to dispatch email submission. Please check connection.");
      }

      let data: any = {};
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      }
      setContactSuccess(data.message || "Thank you! Your message has been received.");
      setContactName("");
      setContactEmail("");
      setContactBusiness("");
      setContactMessage("");
    } catch (err: any) {
      setContactError(err.message || "An unexpected error occurred.");
    } finally {
      setContactLoading(false);
    }
  };

  // Newsletter handler
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  return (
    <div className="relative min-h-screen selection:bg-[#B9D8CE]/20 selection:text-[#F4F5F1] bg-[#061C1A] text-[#F4F5F1]">
      {/* Fine grain layout overlay */}
      <div className="fine-grain-overlay" />

      {/* Sticky Top Header */}
      <Header onScheduleCall={handleScheduleGeneral} />

      {/* Conditional router screen */}
      <main className="min-h-screen">
        {(() => {
          switch (currentPath) {
            case "/":
              return (
                <Home
                  activeKey={activeKey}
                  onKeyClick={handleKeycapClick}
                  setActiveKey={setActiveKey}
                  activeStageId={activeStageId}
                  setActiveStageId={setActiveStageId}
                  onScheduleCall={handleScheduleGeneral}
                  onScheduleWithAuditData={handleScheduleWithAuditData}
                  onSelectProject={setSelectedProject}
                  onSelectArticle={setSelectedArticle}
                  newsletterEmail={newsletterEmail}
                  setNewsletterEmail={setNewsletterEmail}
                  newsletterSuccess={newsletterSuccess}
                  onNewsletterSubmit={handleNewsletterSubmit}
                />
              );
            case "/services":
              return <ServicesOverview onScheduleCall={handleScheduleGeneral} />;
            case "/services/web-design":
              return <WebDesign onScheduleCall={handleScheduleGeneral} />;
            case "/services/seo":
              return <SeoService onScheduleCall={handleScheduleGeneral} />;
            case "/services/content-growth":
              return <ContentGrowth onScheduleCall={handleScheduleGeneral} />;
            case "/work":
              return (
                <WorkPage
                  onSelectProject={setSelectedProject}
                  onScheduleCall={handleScheduleGeneral}
                />
              );
            case "/pricing":
            case "/method":
              return <PricingPage onScheduleCall={handleScheduleGeneral} />;
            case "/about":
              return <AboutPage onScheduleCall={handleScheduleGeneral} />;
            case "/insights":
              return <PricingPage onScheduleCall={handleScheduleGeneral} />;
            case "/contact":
              return (
                <ContactPage
                  contactName={contactName}
                  setContactName={setContactName}
                  contactEmail={contactEmail}
                  setContactEmail={setContactEmail}
                  contactBusiness={contactBusiness}
                  setContactBusiness={setContactBusiness}
                  contactMessage={contactMessage}
                  setContactMessage={setContactMessage}
                  contactLoading={contactLoading}
                  contactSuccess={contactSuccess}
                  setContactSuccess={setContactSuccess}
                  contactError={contactError}
                  onContactSubmit={handleContactSubmit}
                />
              );
            default:
              return (
                <Home
                  activeKey={activeKey}
                  onKeyClick={handleKeycapClick}
                  activeStageId={activeStageId}
                  setActiveStageId={setActiveStageId}
                  onScheduleCall={handleScheduleGeneral}
                  onScheduleWithAuditData={handleScheduleWithAuditData}
                  onSelectProject={setSelectedProject}
                  onSelectArticle={setSelectedArticle}
                  newsletterEmail={newsletterEmail}
                  setNewsletterEmail={setNewsletterEmail}
                  newsletterSuccess={newsletterSuccess}
                  onNewsletterSubmit={handleNewsletterSubmit}
                />
              );
          }
        })()}
      </main>

      {/* Footer component */}
      <Footer onScheduleCall={handleScheduleGeneral} />

      {/* Modals & Overlays */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        prefillBusinessName={bookingBusinessName}
        prefillWebsiteUrl={bookingWebsiteUrl}
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <BlogModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />

      {/* Cookie Consent banner (high fidelity compliance detail) */}
      {showCookieConsent && (
        <div 
          id="cookie-consent-bar"
          className="
            fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-[80] 
            bg-[#0D2623] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col sm:flex-row items-center gap-4 text-left
            animate-in slide-in-from-bottom-8 duration-500
          "
        >
          <div className="space-y-1">
            <h5 className="font-mono text-[9px] tracking-wider text-[#7CA99B] uppercase font-bold">DIGITAL PRIVACY MARKUP</h5>
            <p className="text-[11px] text-[#B8C6C1] leading-relaxed">
              We leverage cookies to benchmark custom SEO strategies and compile organic interface audits securely.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto flex-shrink-0 justify-end">
            <button 
              onClick={() => setShowCookieConsent(false)}
              className="px-4 py-2 rounded bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] font-mono text-[9px] uppercase tracking-wider font-semibold cursor-pointer transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
