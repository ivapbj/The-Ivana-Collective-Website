import React from "react";
import { Link } from "../context/NavigationContext";
import SeoMeta from "../components/SeoMeta";
import { Check, ArrowLeft, ArrowRight, Sparkles, Megaphone, Share2, Compass, HeartHandshake } from "lucide-react";

interface ContentGrowthProps {
  onScheduleCall: () => void;
}

export default function ContentGrowth({ onScheduleCall }: ContentGrowthProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media, Content & Organic Growth Systems",
    "serviceType": "Content Marketing & Social Media Management",
    "provider": {
      "@type": "ProfessionalService",
      "name": "The Ivana Collective"
    },
    "description": "Bespoke social media content syndication, narrative authority writing, email newsletter briefings, and long-term brand growth strategies.",
    "areaServed": "US"
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Content & Growth", item: "/services/content-growth" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Social Media Management & Content Strategy"
        description="Strategic social media management, content creation and brand growth for small businesses. Build visibility with consistent, search-informed content."
        canonicalPath="/services/content-growth"
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
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B] bg-[#123B35]/40 border border-[#B9D8CE]/10 px-3 py-1 rounded-full inline-block">
            SECTION 03 · CONTENT GROWTH SYSTEMS
          </span>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
            Establish authority. <br />
            <span className="text-[#B9D8CE]">Syndicate your brand narrative.</span>
          </h1>
          <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-2xl">
            A visual flagship website is only powerful if high-value prospects discover it. We engineer organic content machines that translate your physical expertise into beautiful social assets, professional newsletters, and high-authority blog articles that command attention across the entire digital ecosystem.
          </p>
        </div>
        <div className="lg:col-span-5 bg-[#0D2623] border border-white/5 rounded-3xl p-8 space-y-6 text-left">
          <h3 className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B] font-bold">
            GROWTH CHANNELS
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3.5">
              <Share2 className="w-4 h-4 text-[#B9D8CE] mt-0.5" />
              <div>
                <h4 className="font-serif text-sm text-[#F4F5F1]">Social Media Syndication</h4>
                <p className="text-xs text-[#B8C6C1] font-light mt-0.5">Bespoke graphic assets and strategic text copy tailored for LinkedIn, Instagram, and key networks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3.5">
              <Megaphone className="w-4 h-4 text-[#B9D8CE] mt-0.5" />
              <div>
                <h4 className="font-serif text-sm text-[#F4F5F1]">Editorial Briefings</h4>
                <p className="text-xs text-[#B8C6C1] font-light mt-0.5">High-end email campaigns and monthly briefings designed to capture interest and build loyalty.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3.5">
              <Compass className="w-4 h-4 text-[#B9D8CE] mt-0.5" />
              <div>
                <h4 className="font-serif text-sm text-[#F4F5F1]">Authority Publications</h4>
                <p className="text-xs text-[#B8C6C1] font-light mt-0.5">Surgical, highly informative case study articles and technical blogs indexed as primary references.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Strategy Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-left">
        <div className="p-8 bg-[#0D2623]/40 border border-white/5 rounded-2xl space-y-4">
          <h3 className="font-serif text-xl text-[#F4F5F1] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#B9D8CE]" />
            <span>Premium Visual Narrative Assets</span>
          </h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            We don&apos;t do low-effort template spam. Every carousel, infographic, and article banner we construct matches the exact design DNA of your flagship website. We deliver polished typography, intentional layouts, and curated imagery that stands out on highly cluttered social feeds.
          </p>
        </div>
        <div className="p-8 bg-[#0D2623]/40 border border-white/5 rounded-2xl space-y-4">
          <h3 className="font-serif text-xl text-[#F4F5F1] flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#B9D8CE]" />
            <span>Nurturing High-Intent Clients</span>
          </h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            Getting traffic is only half the battle. We build continuous automated marketing systems that capture, tag, and nurture visitors. Through carefully paced, value-first monthly briefings, we guide prospects along a premium conversion corridor directly into scheduling calls with your firm.
          </p>
        </div>
      </div>

      {/* Interactive Feature Block */}
      <div className="bg-[#0D2623] border border-white/10 rounded-3xl p-8 md:p-12 mb-24 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#123B35] to-transparent opacity-20 blur-3xl pointer-events-none" />
        <div className="max-w-2xl space-y-6">
          <h3 className="font-serif text-2xl text-[#F4F5F1]">The Organic Syndication Loop</h3>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            Our strategic methodology leverages a single high-value insight into multiple assets. A deeply researched blog article becomes:
          </p>
          <div className="space-y-3 pl-4 border-l-2 border-[#B9D8CE]/20">
            <div className="space-y-1">
              <h5 className="font-serif text-xs text-[#F4F5F1]">1. A high-impact LinkedIn Carousel</h5>
              <p className="text-[11px] text-[#B8C6C1] font-light">Formatted with premium typography and high-contrast styling targeting decision makers.</p>
            </div>
            <div className="space-y-1">
              <h5 className="font-serif text-xs text-[#F4F5F1]">2. An elegant Instagram graphic slide</h5>
              <p className="text-[11px] text-[#B8C6C1] font-light">Clean aesthetic crop focusing on core, shareable pull-quotes.</p>
            </div>
            <div className="space-y-1">
              <h5 className="font-serif text-xs text-[#F4F5F1]">3. An automated brief for your email audience</h5>
              <p className="text-[11px] text-[#B8C6C1] font-light">Paced directly with custom parameters, linking back to your geolocated landing page.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action / CTA */}
      <div className="text-center space-y-6 border border-white/5 bg-[#0A2C28]/40 rounded-3xl p-12 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1]">Ready to scale your organic reach?</h2>
        <p className="text-xs text-[#B8C6C1] max-w-xl mx-auto leading-relaxed font-light">
          Let&apos;s build a custom authority syndication map for your brand. Direct direct collaboration with our senior growth architects ensures elegant aesthetic alignment and massive long-term search value.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button
            onClick={onScheduleCall}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer"
          >
            <span>Schedule Growth Strategy Call</span>
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
