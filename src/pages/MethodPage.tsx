import React from "react";
import SeoMeta from "../components/SeoMeta";
import { ArrowRight, Compass, Edit3, Cpu, Activity, UserCheck, ShieldAlert } from "lucide-react";

interface MethodPageProps {
  onScheduleCall: () => void;
}

export default function MethodPage({ onScheduleCall }: MethodPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "The Organic Digital Growth Method",
    "description": "Our systematic process for designing, engineering, optimizing, and scaling high-converting luxury digital systems for boutique organizations.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Discovery & Strategy Map",
        "text": "Deep research analyzing regional search volumes, client competitor parameters, keyword landscapes, and ideal user corridors."
      },
      {
        "@type": "HowToStep",
        "name": "Bespoke Interface Design",
        "text": "Structuring premium typography, modern layout grids, and visual pairs centered entirely around your brand story."
      },
      {
        "@type": "HowToStep",
        "name": "Custom System Engineering",
        "text": "Coding fast, clean websites using modern frameworks with zero CMS template bloat for instant response latency."
      },
      {
        "@type": "HowToStep",
        "name": "Performance Optimization & Launch",
        "text": "Injecting geocoordinate schemas, map packs, and FAQ parameters before deploying with standard hardware acceleration."
      },
      {
        "@type": "HowToStep",
        "name": "Active Client Conversion",
        "text": "Activating automated client scheduling calendars, feedback portals, and email briefing workflows to convert high-intent traffic."
      }
    ]
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "The Method", item: "/method" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Our Methodology: Structured Digital Growth Process"
        description="We follow a five-stage system: Discovery & Strategy, Bespoke Editorial Design, Custom Coding, Map Proximity Optimization, and Automated Conversions."
        canonicalPath="/method"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header section */}
      <div className="max-w-4xl text-left space-y-4 mb-20">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
          THE SYSTEMIC METHODOLOGY
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Systematic rigor. <br />
          <span className="text-[#B9D8CE]">Designed for absolute precision.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          We believe high-converting websites aren&apos;t built by accident. They require careful strategic sequencing, stunning typographical and spatial choices, clean custom programming, and continuous search database synchronization. Here is our architectural path.
        </p>
      </div>

      {/* Stages block */}
      <div className="space-y-16">
        
        {/* Stage 1: Strategy & Discovery */}
        <section id="strategy" className="scroll-mt-24 p-8 md:p-12 bg-[#0D2623]/40 border border-white/5 rounded-3xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-2">
            <span className="font-mono text-5xl md:text-6xl text-transparent font-bold tracking-tighter [-webkit-text-stroke:1px_#B9D8CE]">01</span>
          </div>
          <div className="lg:col-span-10 space-y-4">
            <div className="flex items-center space-x-2.5 text-[#7CA99B]">
              <Compass className="w-5 h-5" />
              <h4 className="font-mono text-[10px] uppercase tracking-wider font-bold">STAGE 01 · STRATEGY & DISCOVERY MAP</h4>
            </div>
            <h3 className="font-serif text-2xl text-[#F4F5F1]">Competitive research and search territory profiling.</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              Before a single line of CSS is written or a mockup is assembled, we map your territory. We perform a technical sweep analyzing your local geocoordinate search densities, keyword competition metrics, and standard client conversion bottlenecks. This compiles into a pristine, actionable digital growth road map.
            </p>
          </div>
        </section>

        {/* Stage 2: Design */}
        <section id="design" className="scroll-mt-24 p-8 md:p-12 bg-[#0D2623]/40 border border-white/5 rounded-3xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-2">
            <span className="font-mono text-5xl md:text-6xl text-transparent font-bold tracking-tighter [-webkit-text-stroke:1px_#B9D8CE]">02</span>
          </div>
          <div className="lg:col-span-10 space-y-4">
            <div className="flex items-center space-x-2.5 text-[#7CA99B]">
              <Edit3 className="w-5 h-5" />
              <h4 className="font-mono text-[10px] uppercase tracking-wider font-bold">STAGE 02 · BESPOKE INTERFACE DESIGN</h4>
            </div>
            <h3 className="font-serif text-2xl text-[#F4F5F1]">Pairing editorial typography with high-contrast layouts.</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We define a beautiful visual brand language. We choose curated font pairings (like elegant Inter paired with Space Grotesk or Playfair Display), configure high-end asymmetric spacing layout templates, and compose visual assets that immediately position you as a luxurious, trustable industry leader.
            </p>
          </div>
        </section>

        {/* Stage 3: Build */}
        <section id="build" className="scroll-mt-24 p-8 md:p-12 bg-[#0D2623]/40 border border-[#B9D8CE]/20 rounded-3xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ring-1 ring-[#B9D8CE]/5">
          <div className="lg:col-span-2">
            <span className="font-mono text-5xl md:text-6xl text-transparent font-bold tracking-tighter [-webkit-text-stroke:1px_#B9D8CE]">03</span>
          </div>
          <div className="lg:col-span-10 space-y-4">
            <div className="flex items-center space-x-2.5 text-[#B9D8CE]">
              <Cpu className="w-5 h-5" />
              <h4 className="font-mono text-[10px] uppercase tracking-wider font-bold">STAGE 03 · CUSTOM SYSTEM ENGINEERING</h4>
            </div>
            <h3 className="font-serif text-2xl text-[#F4F5F1]">Clean, template-free custom programming and local APIs.</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We write standard-compliant, extremely lightweight code. We implement custom layouts using fast frontend structures and robust backend Express nodes. Your site is fully self-contained, completely eliminating database latency lags, visual builder rendering blockages, and third-party plugin bloat.
            </p>
          </div>
        </section>

        {/* Stage 4: Optimize */}
        <section id="optimization" className="scroll-mt-24 p-8 md:p-12 bg-[#0D2623]/40 border border-white/5 rounded-3xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-2">
            <span className="font-mono text-5xl md:text-6xl text-transparent font-bold tracking-tighter [-webkit-text-stroke:1px_#B9D8CE]">04</span>
          </div>
          <div className="lg:col-span-10 space-y-4">
            <div className="flex items-center space-x-2.5 text-[#7CA99B]">
              <Activity className="w-5 h-5" />
              <h4 className="font-mono text-[10px] uppercase tracking-wider font-bold">STAGE 04 · PERFORMANCE & MAP PROXIMITY</h4>
            </div>
            <h3 className="font-serif text-2xl text-[#F4F5F1]">Deploying local schemas, map optimizations, and core speeds.</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We align your systems to rank. Before deploying, we inject localized postal address microdata (JSON-LD), establish Google Business Map configurations, index page assets into search consoles, and execute automated audit passes to guarantee 100/100 performance marks.
            </p>
          </div>
        </section>

        {/* Stage 5: Convert */}
        <section id="conversion" className="scroll-mt-24 p-8 md:p-12 bg-[#0D2623]/40 border border-white/5 rounded-3xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-2">
            <span className="font-mono text-5xl md:text-6xl text-transparent font-bold tracking-tighter [-webkit-text-stroke:1px_#B9D8CE]">05</span>
          </div>
          <div className="lg:col-span-10 space-y-4">
            <div className="flex items-center space-x-2.5 text-[#7CA99B]">
              <UserCheck className="w-5 h-5" />
              <h4 className="font-mono text-[10px] uppercase tracking-wider font-bold">STAGE 05 · ACTIVE CLIENT CONVERSION</h4>
            </div>
            <h3 className="font-serif text-2xl text-[#F4F5F1]">Automated calendars, booking corridors, and review gathering.</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              The ultimate metric of growth is client acquisition. We connect your main visual flagship with custom automated calendar modules, feedback acquisition workflows, and high-intent contact specification forms to capture and retain high-value leads.
            </p>
          </div>
        </section>

      </div>

      {/* Action / CTA */}
      <div className="text-center space-y-6 border border-white/5 bg-[#0A2C28]/40 rounded-3xl p-12 max-w-4xl mx-auto mt-24">
        <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1]">Ready to build your digital organic system?</h2>
        <p className="text-xs text-[#B8C6C1] max-w-xl mx-auto leading-relaxed font-light">
          Let&apos;s map out your visual strategy, typography choices, and search engine integration timeline. Our boutique agency model connects you directly with our leading developer.
        </p>
        <button
          onClick={onScheduleCall}
          className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer"
        >
          <span>Initiate the Systemic Path</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
