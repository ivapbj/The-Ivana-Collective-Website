import React from "react";
import SeoMeta from "../components/SeoMeta";
import { ArrowRight, Compass, Sparkles, Award, ShieldCheck } from "lucide-react";

interface AboutPageProps {
  onScheduleCall: () => void;
}

export default function AboutPage({ onScheduleCall }: AboutPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Ivana Collective",
    "description": "Learn about our boutique approach to custom editorial web design, search engine proximity optimization, and direct professional collaboration."
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Boutique Digital Architects & SEO Strategists"
        description="Learn how we pair luxury editorial style with custom-coded performance. Direct collaboration, zero middle-men, and total system integration."
        canonicalPath="/about"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header section */}
      <div className="max-w-4xl text-left space-y-4 mb-20">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
          THE COLLECTIVE MANIFESTO
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Strategy, design, and coding— <br />
          <span className="text-[#B9D8CE]">without the corporate agency layers.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          We established The Ivana Collective to solve a major structural problem: standard agencies charge premium retainer rates, only to hand your account over to entry-level managers. We connect high-intent clients directly with an elite technical and visual craftsman.
        </p>
      </div>

      {/* Intro block with side image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center mb-24 text-left">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 shadow-2xl max-w-sm mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Ivana Collective principal workspace" 
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.7] hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041211] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-[#123B35]/80 border border-white/10 px-4 py-2 rounded-xl backdrop-blur">
              <p className="font-mono text-[9px] tracking-widest uppercase text-[#B9D8CE]">
                ESTABLISHED · 2024
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">Boutique representation. Massive digital authority.</h2>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            We partner with wellness clinics, financial firms, boutique retailers, and specialized organizations that expect aesthetic quality. We understand that your digital presence is the ultimate parameter of your real-world reputation.
          </p>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            By avoiding bloated content management templates and building custom-coded systems from scratch, we deliver load speeds that are 4-6 times faster than standard builds. This means your visitors stay engaged, and search crawlers immediately rank your content higher.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 mt-4">
            <div className="space-y-1">
              <h4 className="font-serif text-base text-[#F4F5F1] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B9D8CE]" />
                <span>Zero Intermediaries</span>
              </h4>
              <p className="text-xs text-[#B8C6C1] font-light">Collaborate directly with our senior strategist. Clear, immediate, and high-fidelity output.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-base text-[#F4F5F1] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B9D8CE]" />
                <span>Engine Integrations</span>
              </h4>
              <p className="text-xs text-[#B8C6C1] font-light">We cleanly sync search maps, automated calendars, contact channels, and analytics databases.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Philosophy Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
        <div className="p-8 bg-[#0D2623]/40 border border-white/5 rounded-2xl space-y-4">
          <span className="font-mono text-xs text-[#7CA99B] block font-bold">AESTHETICS</span>
          <h3 className="font-serif text-xl text-[#F4F5F1]">Tactile Balance</h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            We design asymmetric visual compositions balanced by meticulous modern typography. We reject loud, generic, flashing layout paradigms to focus entirely on calm, immersive editorial experiences.
          </p>
        </div>
        <div className="p-8 bg-[#0D2623]/40 border border-white/5 rounded-2xl space-y-4">
          <span className="font-mono text-xs text-[#7CA99B] block font-bold">PERFORMANCE</span>
          <h3 className="font-serif text-xl text-[#F4F5F1]">Pristine Source Code</h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            We believe elegant code is a prerequisite for successful search engine ranking. We compile clean, accessible HTML5 structures and Tailwind CSS components with zero third-party visual builder bloat.
          </p>
        </div>
        <div className="p-8 bg-[#0D2623]/40 border border-white/5 rounded-2xl space-y-4">
          <span className="font-mono text-xs text-[#7CA99B] block font-bold">RESULTS</span>
          <h3 className="font-serif text-xl text-[#F4F5F1]">Crawlable Dominance</h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            We align your metadata, local geocoordinates, maps packs, and conversational LLM query structures to establish immediate and persistent search authority for your primary business.
          </p>
        </div>
      </div>

      {/* Action / CTA */}
      <div className="text-center space-y-6 border border-white/5 bg-[#0A2C28]/40 rounded-3xl p-12 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1]">Ready to align your brand narrative?</h2>
        <p className="text-xs text-[#B8C6C1] max-w-xl mx-auto leading-relaxed font-light">
          Let&apos;s map your visual identity and technical structure. Direct direct collaboration with our principal engineer ensures flawless aesthetic and functional consistency.
        </p>
        <button
          onClick={onScheduleCall}
          className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer"
        >
          <span>Schedule an Introductory Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
