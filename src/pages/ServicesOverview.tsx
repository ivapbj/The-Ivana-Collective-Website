import React from "react";
import { Link } from "../context/NavigationContext";
import SeoMeta from "../components/SeoMeta";
import { ArrowRight, Globe, Search, TrendingUp, Cpu, Check, HelpCircle } from "lucide-react";

interface ServicesOverviewProps {
  onScheduleCall: () => void;
}

export default function ServicesOverview({ onScheduleCall }: ServicesOverviewProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bespoke Digital Foundation & Organic Growth Services",
    "provider": {
      "@type": "ProfessionalService",
      "name": "The Ivana Collective"
    },
    "description": "Full-stack organic digital foundation services including custom web design, traditional & local SEO optimization, search readiness, and content growth syndication.",
    "areaServed": "US"
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Bespoke Digital Services Overview"
        description="Discover our integrated organic systems. From high-end custom web design to map proximity SEO and high-converting audience syndication loops."
        canonicalPath="/services"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header section */}
      <div className="max-w-4xl text-left space-y-4 mb-20">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
          INTEGRATED SPECIALTIES
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Systems designed to amplify your <br />
          <span className="text-[#B9D8CE]">boutique digital presence.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          We construct complete, high-performing organic structures that connect luxury brand style with traditional & local search dominance, automated calendars, and high-nurture client pathways.
        </p>
      </div>

      {/* Sections Grid with matching anchors */}
      <div className="space-y-24">
        
        {/* Section: Web Design */}
        <section id="web-design" className="scroll-mt-24 bg-[#0D2623]/40 border border-white/5 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-[#B9D8CE]">
              <div className="p-3 bg-[#061C1A] border border-white/5 rounded-2xl">
                <Globe className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">SERVICE ONE</span>
            </div>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">Luxury Editorial Web Design & Custom Web Development</h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We design custom layouts completely balanced by generous negative space, sophisticated typography, and stunning imagery. Our code is entirely free from visual website builder bloat, translating directly into flawless responsive scaling and perfect mobile page speeds.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {["Custom grid configurations", "High-contrast viewport scales", "Tactile Micro-interactions", "SEO-crawlable semantic structure"].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/web-design"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-[#123B35] border border-[#B9D8CE]/20 text-xs font-mono text-[#F4F5F1] uppercase tracking-wider font-semibold hover:bg-[#B9D8CE] hover:text-[#061C1A] transition-all"
              >
                <span>Explore Web Design Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/5 aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
              alt="Custom website layout on screens" 
              className="w-full h-full object-cover filter grayscale brightness-[0.7] hover:brightness-[0.9] transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Section: SEO */}
        <section id="seo" className="scroll-mt-24 bg-[#0D2623]/40 border border-white/5 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 lg:order-1">
            <div className="flex items-center space-x-3 text-[#B9D8CE]">
              <div className="p-3 bg-[#061C1A] border border-white/5 rounded-2xl">
                <Search className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">SERVICE TWO</span>
            </div>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">Traditional, Local Maps Proximity & Conversational AI Search</h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We position your business where premium customers look. We combine technical SEO architecture with robust local map proximity profiles, and inject semantic structured data arrays that feed answers to conversational AI indexes.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {["Local map pack proximity", "Conversational entity schemas", "Advanced technical diagnostics", "In-depth speed optimization"].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/seo"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-[#123B35] border border-[#B9D8CE]/20 text-xs font-mono text-[#F4F5F1] uppercase tracking-wider font-semibold hover:bg-[#B9D8CE] hover:text-[#061C1A] transition-all"
              >
                <span>Explore SEO & AI Search</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/5 aspect-[4/3] lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1572177215152-32f247303126?auto=format&fit=crop&q=80&w=800" 
              alt="Search engine analytics and reporting interface" 
              className="w-full h-full object-cover filter grayscale brightness-[0.7] hover:brightness-[0.9] transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Section: Content Growth */}
        <section id="content-growth" className="scroll-mt-24 bg-[#0D2623]/40 border border-white/5 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-[#B9D8CE]">
              <div className="p-3 bg-[#061C1A] border border-white/5 rounded-2xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">SERVICE THREE</span>
            </div>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">Social Media Syndication, Editorial Content & Nurturing Loops</h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We translate your professional expertise into cohesive, premium social carousels, bi-weekly editorial briefings, and high-authority case studies that drive qualified organic traffic back to your primary digital flagship.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {["High-contrast social infographics", "Monthly email briefs", "Continuous content recycling", "Direct authority blog posts"].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/content-growth"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-[#123B35] border border-[#B9D8CE]/20 text-xs font-mono text-[#F4F5F1] uppercase tracking-wider font-semibold hover:bg-[#B9D8CE] hover:text-[#061C1A] transition-all"
              >
                <span>Explore Content & Growth</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/5 aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
              alt="Editorial content creation and social marketing assets" 
              className="w-full h-full object-cover filter grayscale brightness-[0.7] hover:brightness-[0.9] transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Section: Maintenance */}
        <section id="maintenance" className="scroll-mt-24 bg-[#0D2623]/40 border border-white/5 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 lg:order-1">
            <div className="flex items-center space-x-3 text-[#B9D8CE]">
              <div className="p-3 bg-[#061C1A] border border-white/5 rounded-2xl">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">MAINTENANCE & ENGINE HYDRATION</span>
            </div>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">Active Engine Care & Continuous Performance Tuning</h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              Websites are dynamic engines. Standard visual visual builders rot over time, exposing security gaps and degrading load speeds. We provide persistent maintenance passes, Core Web Vital security updates, and daily analytical performance logging to preserve search power.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {["Daily structural database snapshots", "Proactive API token synchronization", "Continuous server-level defense pass", "Ongoing metadata index refresh"].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/5 aspect-[4/3] lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
              alt="Server maintenance and code infrastructure support" 
              className="w-full h-full object-cover filter grayscale brightness-[0.7] hover:brightness-[0.9] transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

      </div>

      {/* Action / CTA */}
      <div className="text-center space-y-6 border border-white/5 bg-[#0A2C28]/40 rounded-3xl p-12 max-w-4xl mx-auto mt-24">
        <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1]">Unlock your digital organic growth.</h2>
        <p className="text-xs text-[#B8C6C1] max-w-xl mx-auto leading-relaxed font-light">
          Let&apos;s map your local competitive landscape. Direct consultation with our senior digital systems builder guarantees aesthetic consistency and absolute search performance.
        </p>
        <button
          onClick={onScheduleCall}
          className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer"
        >
          <span>Schedule an Introductory Review</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
