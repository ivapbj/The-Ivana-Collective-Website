import React from "react";
import { Link } from "../context/NavigationContext";
import SeoMeta from "../components/SeoMeta";
import { Check, ArrowLeft, ArrowRight, Smartphone, Compass, Sparkles, LayoutGrid } from "lucide-react";

interface WebDesignProps {
  onScheduleCall: () => void;
}

export default function WebDesign({ onScheduleCall }: WebDesignProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Editorial Web Design & Web Development",
    "serviceType": "Web Design",
    "provider": {
      "@type": "ProfessionalService",
      "name": "The Ivana Collective"
    },
    "description": "Bespoke editorial website design combined with lightning-fast technical performance, tailored specifically for local businesses, premium boutique agencies, and wellness brands.",
    "areaServed": "US",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "4500.00"
    }
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Web Design", item: "/services/web-design" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Luxury Editorial Web Design & Development"
        description="We create stunning, responsive, high-converting websites using advanced typography, custom grids, and editorial styling. Explore custom luxury web design services."
        canonicalPath="/services/web-design"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Back to Services link */}
      <div className="mb-10">
        <Link 
          href="/services"
          className="inline-flex items-center space-x-2 text-xs font-mono text-[#7CA99B] hover:text-[#B9D8CE] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Services Overview</span>
        </Link>
      </div>

      {/* Title / Hero section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        <div className="lg:col-span-7 space-y-6 text-left">
          // <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B] bg-[#123B35]/40 border border-[#B9D8CE]/10 px-3 py-1 rounded-full inline-block">
          //   SECTION 01 · BESPOKE WEB DEVELOPMENT
          // </span>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
            High-end editorial web design. <br />
            <span className="text-[#B9D8CE]">Immersive brand experiences.</span>
          </h1>
          <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-2xl">
            At The Ivana Collective, we believe your website is your digital flagship store. We refuse to use cookie-cutter templates. Instead, we craft immersive, custom-coded digital interfaces that tell your story with luxury editorial layout grids, elegant font-family pairings, and meticulous details that instantly build elite client trust.
          </p>
        </div>
        <div className="lg:col-span-5 bg-[#0D2623] border border-white/5 rounded-3xl p-8 space-y-6 text-left">
          <h3 className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B] font-bold">
            SPECIFICATION OVERVIEW
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3.5">
              <Sparkles className="w-4 h-4 text-[#B9D8CE] mt-0.5" />
              <div>
                <h4 className="font-serif text-sm text-[#F4F5F1]">Custom Layout Grids</h4>
                <p className="text-xs text-[#B8C6C1] font-light mt-0.5">Asymmetric, modern CSS-grid containers balanced by pristine negative space.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3.5">
              <Smartphone className="w-4 h-4 text-[#B9D8CE] mt-0.5" />
              <div>
                <h4 className="font-serif text-sm text-[#F4F5F1]">Mobile-First Responsiveness</h4>
                <p className="text-xs text-[#B8C6C1] font-light mt-0.5">Perfect tactile scaling for phone screens and touch targets above 44px.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3.5">
              <Compass className="w-4 h-4 text-[#B9D8CE] mt-0.5" />
              <div>
                <h4 className="font-serif text-sm text-[#F4F5F1]">Core Web Vitals Optimized</h4>
                <p className="text-xs text-[#B8C6C1] font-light mt-0.5">Blazing fast load speeds, optimized asset delivery, and 100% SEO-crawlable markup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Design Values & Copy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-left">
        <div className="p-8 bg-[#0D2623]/40 border border-white/5 rounded-2xl space-y-4">
          <div className="w-10 h-10 rounded-xl bg-[#061C1A] border border-white/5 flex items-center justify-center text-[#B9D8CE]">
            <span className="font-mono text-xs font-bold">A</span>
          </div>
          <h3 className="font-serif text-xl text-[#F4F5F1]">Aesthetic Perfection</h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            We pair custom modern grotesques and editorial serifs with rich emerald greens and warm sand hues to establish an premium visual atmosphere.
          </p>
        </div>
        <div className="p-8 bg-[#0D2623]/40 border border-white/5 rounded-2xl space-y-4">
          <div className="w-10 h-10 rounded-xl bg-[#061C1A] border border-white/5 flex items-center justify-center text-[#B9D8CE]">
            <span className="font-mono text-xs font-bold">B</span>
          </div>
          <h3 className="font-serif text-xl text-[#F4F5F1]">Tactile Transitions</h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            We design intentional, performance-driven micro-interactions and transitions using standard hardware-accelerated CSS properties.
          </p>
        </div>
        <div className="p-8 bg-[#0D2623]/40 border border-white/5 rounded-2xl space-y-4">
          <div className="w-10 h-10 rounded-xl bg-[#061C1A] border border-white/5 flex items-center justify-center text-[#B9D8CE]">
            <span className="font-mono text-xs font-bold">C</span>
          </div>
          <h3 className="font-serif text-xl text-[#F4F5F1]">Conversion Alignment</h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            Behind the beauty lies calculated friction-free navigation maps that guide visitors directly toward interactive scheduling portals and high-intent contact triggers.
          </p>
        </div>
      </div>

      {/* Interactive Demonstration Frame / Crawlable Text */}
      <div className="bg-[#0D2623] border border-white/10 rounded-3xl p-8 md:p-12 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left relative overflow-hidden">
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-[#F4F5F1]">Why Custom-Coded Beats Standard Templates</h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            Standard visual website builders (Squarespace, generic Elementor) inject thousands of lines of redundant script bloat, forcing visitors on mobile networks to wait 4-8 seconds. Google penalizes slow load speeds instantly. 
          </p>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            Our boutique builds use streamlined clean markup. We combine clean HTML structure, custom-tailored Tailwind CSS utilities, and modular components to compile in milliseconds.
          </p>
          <ul className="space-y-3 pt-4 border-t border-white/5">
            {[
              "100/100 Google Lighthouse Speed benchmarks",
              "Bespoke layout structures optimized for high premium branding",
              "Deep, built-in search robot accessibility and dynamic Local SEO hooks"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2.5 text-xs text-[#B8C6C1] font-light">
                <Check className="w-3.5 h-3.5 text-[#B9D8CE] flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl aspect-[4/3] bg-[#061C1A]">
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
            alt="Editorial website wireframe and visual design process" 
            className="w-full h-full object-cover filter grayscale brightness-[0.7] hover:brightness-[0.9] transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2623] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6">
            <span className="font-mono text-[8px] tracking-widest text-[#7CA99B] uppercase block mb-1">AESTHETIC PORTAL</span>
            <p className="font-serif text-lg text-[#F4F5F1] font-light">The Visual Blueprint</p>
          </div>
        </div>
      </div>

      {/* Action / CTA */}
      <div className="text-center space-y-6 border border-white/5 bg-[#0A2C28]/40 rounded-3xl p-12 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1]">Ready to establish your digital flagship?</h2>
        <p className="text-xs text-[#B8C6C1] max-w-xl mx-auto leading-relaxed font-light">
          Let&apos;s map out your visual strategy, typographical pairings, and unique digital client journey. Work directly with our design architects to create a stellar flagship.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button
            onClick={onScheduleCall}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer"
          >
            <span>Schedule Design Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            href="/services"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold bg-transparent text-[#F4F5F1] border border-white/10 hover:border-[#B9D8CE] transition-all"
          >
            <span>All Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
