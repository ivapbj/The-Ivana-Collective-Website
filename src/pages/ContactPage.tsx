import React from "react";
import SeoMeta from "../components/SeoMeta";
import { Mail, Loader2, MessageSquare, User, Building2 } from "lucide-react";

interface ContactPageProps {
  contactName: string;
  setContactName: (val: string) => void;
  contactEmail: string;
  setContactEmail: (val: string) => void;
  contactBusiness: string;
  setContactBusiness: (val: string) => void;
  contactMessage: string;
  setContactMessage: (val: string) => void;
  contactLoading: boolean;
  contactSuccess: string | null;
  setContactSuccess: (val: string | null) => void;
  contactError: string | null;
  onContactSubmit: (e: React.FormEvent) => void;
}

export default function ContactPage({
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  contactBusiness,
  setContactBusiness,
  contactMessage,
  setContactMessage,
  contactLoading,
  contactSuccess,
  setContactSuccess,
  contactError,
  onContactSubmit
}: ContactPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact The Ivana Collective",
    "description": "Get in touch with The Ivana Collective boutique office to request a digital experience audit or schedule an introductory strategy call."
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Initiate Your System: Contact Us"
        description="Connect with our design, development, and SEO architects. Deliver your project parameters directly to get started."
        canonicalPath="/contact"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Title / Hero */}
      <div className="max-w-4xl text-left space-y-4 mb-20">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
          COMMENCE ENGAGEMENT
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Initiate your system. <br />
          <span className="text-[#B9D8CE]">Connect with our studio.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          Have a premium web layout request, specialized keyword questions, or complete project parameters? Reach out directly through our dedicated specification portal below.
        </p>
      </div>

      {/* Main Form + Info grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
        
        {/* Left column info details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-[#F4F5F1]">The Boutique Office</h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We focus on a small, selective list of active partnerships each quarter to ensure total aesthetic quality and high-authority search placements.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-3 text-sm text-[#B8C6C1]">
              <Mail className="w-5 h-5 text-[#7CA99B]" />
              <a href="mailto:theivanacollective@gmail.com" className="hover:text-[#B9D8CE] transition-colors font-mono text-xs">
                theivanacollective@gmail.com
              </a>
            </div>
            
            <div className="p-4 bg-[#0D2623] border border-white/5 rounded-2xl max-w-xs space-y-2">
              <p className="font-mono text-[8px] tracking-widest uppercase text-[#7CA99B]">
                TYPICAL SYSTEM LATENCY
              </p>
              <p className="text-xs text-[#B8C6C1] leading-relaxed">
                Strategic proposals and custom specifications are reviewed and dispatched within 24 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Right column form */}
        <div className="lg:col-span-7 bg-[#0D2623] border border-white/8 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#123B35] to-transparent opacity-20 blur-2xl pointer-events-none" />

          {contactSuccess ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#123B35] border border-[#B9D8CE]/20 flex items-center justify-center text-[#B9D8CE] mx-auto">
                <span className="text-xl">✓</span>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-[#F4F5F1]">Parameter Relay Complete</h3>
                <p className="font-mono text-[9px] text-[#7CA99B] uppercase tracking-wider">
                  STATUS · SYSTEM LOCKED
                </p>
              </div>

              <p className="text-xs text-[#B8C6C1] max-w-sm mx-auto leading-relaxed">
                {contactSuccess}
              </p>

              <button
                onClick={() => setContactSuccess(null)}
                className="px-5 py-2.5 rounded-lg border border-white/15 font-mono text-[10px] uppercase tracking-wider text-[#B8C6C1] hover:text-[#F4F5F1] hover:bg-white/5 transition-all cursor-pointer"
              >
                Send Another Specification
              </button>
            </div>
          ) : (
            <form onSubmit={onContactSubmit} className="space-y-5">
              <h3 className="font-serif text-xl text-[#F4F5F1] mb-6">Specification Parameter Intake</h3>
              
              {contactError && (
                <div className="p-3 bg-rose-950/20 border border-rose-900/30 text-rose-300 rounded-lg text-xs font-mono">
                  {contactError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7CA99B]/50" />
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g., Dr. Laura Vance"
                      className="w-full bg-[#061C1A] border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] placeholder:text-white/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7CA99B]/50" />
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="e.g., laura@elitepilates.com"
                      className="w-full bg-[#061C1A] border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] placeholder:text-white/10"
                    />
                  </div>
                </div>
              </div>

              {/* Business Name */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                  Business Name & Website URL
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7CA99B]/50" />
                  <input
                    type="text"
                    value={contactBusiness}
                    onChange={(e) => setContactBusiness(e.target.value)}
                    placeholder="e.g., Elite Pilates (elitepilates.com)"
                    className="w-full bg-[#061C1A] border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] placeholder:text-white/10"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                  Project Parameter Specifications *
                </label>
                <textarea
                  required
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Tell us about your active business targets, design aesthetics, or local competitor details."
                  className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] placeholder:text-white/10 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={contactLoading}
                className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer disabled:opacity-50"
              >
                {contactLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Relaying data to office...</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-4 h-4" />
                    <span>Relay Specifications</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
