import React from "react";
import { Link } from "../context/NavigationContext";
import SeoMeta from "../components/SeoMeta";
import { Check, ArrowLeft, ArrowRight, Search, Globe, Shield, Radio, Activity } from "lucide-react";

interface SeoServiceProps {
  onScheduleCall: () => void;
}

export default function SeoService({ onScheduleCall }: SeoServiceProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bespoke SEO & AI Search Engine Visibility Systems",
    "serviceType": "Search Engine Optimization",
    "provider": {
      "@type": "ProfessionalService",
      "name": "The Ivana Collective"
    },
    "description": "Premium technical search engine optimization (SEO), local Google Map Pack visibility, and advanced indexing for conversational AI Search answers (SearchGPT, Gemini, Perplexity).",
    "areaServed": "US"
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "SEO & AI Search", item: "/services/seo" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Bespoke SEO, Google Maps & AI Search Optimization"
        description="Dominate traditional search results, Google Map Pack proximity networks, and AI Search queries. High-performance organic growth systems with zero template bloat."
        canonicalPath="/services/seo"
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

      {/* Hero Section */}
      <div className="max-w-4xl text-left space-y-6 mb-20">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B] bg-[#123B35]/40 border border-[#B9D8CE]/10 px-3 py-1 rounded-full inline-block">
          SECTION 02 · ORGANIC VISIBILITY ECOSYSTEMS
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Findable by searchers. <br />
          <span className="text-[#B9D8CE]">Recommended by Artificial Intelligence.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          Traditional SEO has fundamentally evolved. Buyers no longer simply browse blue links; they ask conversational questions directly to Google Business listings, search maps on mobile, and seek summarized decisions through generative engines like SearchGPT, Perplexity, and Gemini. We align your entire technical posture to be the top-ranked authority across every interface.
        </p>
      </div>

      {/* Section: Optimization */}
      <section id="optimization" className="py-16 border-t border-white/5 scroll-mt-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase font-bold">
              01 · PERFORMANCE OPTIMIZATION
            </span>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">
              Bespoke On-Page and Local Google Maps Authority
            </h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              Proximity is power. We configure your localized schema markups, optimize your Google Business Profiles, and audit citations with absolute surgical precision. Every localized service page we deploy immediately feeds maps robots with accurate geolocated parameters.
            </p>
            <ul className="space-y-2.5 pt-4">
              {[
                "Local Entity Schema injection (JSON-LD)",
                "Proximity optimization for Maps Pack results",
                "High-authority backlink architecture",
                "Speed-optimized core file layouts"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 bg-[#0D2623] border border-white/5 rounded-3xl p-8 md:p-10 space-y-6">
            <h3 className="font-serif text-lg text-[#F4F5F1]">The Organic Local Map Pack Blueprint</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We construct dedicated, indexable neighborhood subpages that map perfectly to the communities you actively serve. Each page is engineered with descriptive coordinates, regional alt text meta-descriptions, and structured Q&A formats that search crawlers parse in fractions of a second.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#061C1A]/40 rounded-xl border border-white/5">
                <span className="font-mono text-xs text-[#7CA99B] block mb-1">GEO-SCHEMAS</span>
                <p className="text-xs text-[#B8C6C1] font-light">Structured scripts tying your brand node directly to physical geocoordinates.</p>
              </div>
              <div className="p-4 bg-[#061C1A]/40 rounded-xl border border-white/5">
                <span className="font-mono text-xs text-[#7CA99B] block mb-1">CITATION TRUST</span>
                <p className="text-xs text-[#B8C6C1] font-light">Clean synchronization of your Name, Address, and Phone details across standard web directories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: AI Search */}
      <section id="ai-search" className="py-16 border-t border-white/5 scroll-mt-24 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-[#0D2623] border border-white/5 rounded-3xl p-8 md:p-10 order-2 lg:order-1 space-y-6">
            <h3 className="font-serif text-lg text-[#F4F5F1]">Sourcing references in the generative loop</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              Generative AI engines aggregate facts from crawlable structured datasets, specialized authority articles, and direct FAQ markups. By writing descriptive conversational guides and compiling microdata layers, we ensure your business is highlighted as the primary verified solution.
            </p>
            <div className="p-5 bg-[#061C1A] border border-white/5 rounded-2xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-mono text-[9px] text-[#7CA99B] uppercase tracking-wider">INDEXING SPEED METRIC</p>
                <p className="font-serif text-2xl text-[#F4F5F1] font-bold">100% LLM Crawlable</p>
              </div>
              <Activity className="w-8 h-8 text-[#B9D8CE] opacity-80" />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <span className="font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase font-bold">
              02 · COGNITIVE OPTIMIZATION
            </span>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">
              AI Search Engine & LLM Answer Optimization
            </h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              Generative search models parse information differently. Instead of simply looking for isolated high-volume keywords, conversational engines evaluate trust, contextual associations, and concise answers to specific client inquiries.
            </p>
            <ul className="space-y-2.5 pt-4">
              {[
                "Direct FAQ structured schema templates",
                "High-context authority publishing strategy",
                "Natural conversational long-tail phrasing maps",
                "Clean machine-readable Markdown metadata layers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Action / CTA */}
      <div className="text-center space-y-6 border border-white/5 bg-[#0A2C28]/40 rounded-3xl p-12 max-w-4xl mx-auto mt-16">
        <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1]">Ready to lock in organic visibility?</h2>
        <p className="text-xs text-[#B8C6C1] max-w-xl mx-auto leading-relaxed font-light">
          Request an advanced AI Search and SEO Audit. Our team will review your business coordinates, competitor density, and map index parameters to construct a direct roadmap.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button
            onClick={onScheduleCall}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer"
          >
            <span>Schedule Search Strategy Call</span>
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
