import React from "react";
import SeoMeta from "../components/SeoMeta";
import { PRICING_PACKAGES } from "../data";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

interface PricingPageProps {
  onScheduleCall: () => void;
}

export default function PricingPage({ onScheduleCall }: PricingPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "The Ivana Collective Service Packages",
    "description": "Integrated digital growth, search prominence, and luxury web maintenance packages."
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Pricing Packages", item: "/pricing" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Bespoke Digital Growth Packages & Pricing"
        description="Transparent pricing packages for high-end web design, local maps pack visibility, and automated client conversion pathways."
        canonicalPath="/pricing"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header section */}
      <div className="max-w-4xl text-left space-y-4 mb-20">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
          INVESTMENT MATRIX
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Transparent structures. <br />
          <span className="text-[#B9D8CE]">Designed to support long-term growth.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          We don&apos;t build isolated landing pages that get buried in search indexes. We establish complete organic networks. Review our curated monthly packages, engineered for continuous growth.
        </p>
      </div>

      {/* Grid of Pricing Packages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
        {PRICING_PACKAGES.map((pkg) => (
          <div 
            key={pkg.id}
            className={`
              relative rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 text-left transition-transform duration-300 hover:-translate-y-1
              ${pkg.isPopular 
                ? "bg-[#0D2623] border border-[#B9D8CE]/30 shadow-2xl ring-1 ring-[#B9D8CE]/10" 
                : "bg-[#061C1A]/40 border border-white/5"}
            `}
          >
            {/* Popular Badge */}
            {pkg.isPopular && (
              <span className="absolute top-5 right-6 font-mono text-[8px] tracking-[0.25em] font-bold text-[#061C1A] bg-[#B9D8CE] px-3.5 py-1 rounded-full uppercase">
                RECOMMENDED
              </span>
            )}

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#F4F5F1] font-semibold">{pkg.title}</h3>
              <p className="text-xs text-[#B8C6C1] leading-relaxed font-light min-h-[40px]">{pkg.tagline}</p>
              
              {/* Price */}
              <div className="pt-2 border-b border-white/5 pb-4">
                <div className="flex items-baseline space-x-1.5">
                  <span className="font-serif text-4xl text-[#F4F5F1] font-semibold">{pkg.price}</span>
                  <span className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase">{pkg.period}</span>
                </div>
                <p className="text-[10px] font-mono text-[#B8C6C1]/50 mt-1 uppercase tracking-wide">{pkg.commitment}</p>
              </div>

              <p className="text-xs text-[#B8C6C1]/85 leading-relaxed font-light py-2 italic">
                Best For: {pkg.bestFor}
              </p>

              {/* Deliverables list */}
              <ul className="space-y-3.5 pt-2 border-t border-white/5">
                {pkg.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs text-[#B8C6C1] font-light">
                    <Check className="w-4 h-4 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onScheduleCall}
              className={`
                w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer
                ${pkg.isPopular 
                  ? "bg-[#B9D8CE] text-[#061C1A] hover:bg-[#F4F5F1]" 
                  : "bg-[#123B35] text-[#F4F5F1] border border-[#B9D8CE]/15 hover:bg-[#B9D8CE] hover:text-[#061C1A]"}
                transition-all duration-200 shadow-md
              `}
            >
              <span>Select Package Level</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Advisory Note */}
      <div className="bg-[#0D2623] border border-white/10 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center space-x-2 text-[#7CA99B]">
            <HelpCircle className="w-5 h-5" />
            <h4 className="font-mono text-[10px] uppercase tracking-wider font-bold">COMMITMENT SPECIFICATION</h4>
          </div>
          <h3 className="font-serif text-xl text-[#F4F5F1]">Why We Require a Six-Month Initial Window</h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            Search engine crawlers, geographical map pack associations, and organic authority syndications require persistent parameters to rank. Short-sighted changes yield short-sighted outcomes. Our minimum partnership ensures we continuously feed search models, secure localized citations, and optimize conversion grids until your organic pipeline is fully self-sustaining.
          </p>
        </div>
        <div className="lg:col-span-4 flex justify-end w-full">
          <button
            onClick={onScheduleCall}
            className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer"
          >
            <span>Ask a Pricing Question</span>
          </button>
        </div>
      </div>
    </div>
  );
}
