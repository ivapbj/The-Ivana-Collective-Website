import React from "react";
import { Link } from "../context/NavigationContext";
import SeoMeta from "../components/SeoMeta";
import KeycapComposition from "../components/KeycapComposition";
import AuditTool from "../components/AuditTool";
import StylePreviewSection from "../components/StylePreviewSection";
import { 
  SERVICES_DATA, 
  PROJECTS_DATA, 
  SYSTEM_STAGES, 
  METHOD_STEPS, 
  RESULT_METRICS, 
  TESTIMONIALS_DATA, 
  PRICING_PACKAGES, 
  INSIGHTS_DATA, 
  FAQS_DATA 
} from "../data";
import { Project, InsightArticle } from "../types";
import { 
  Globe, 
  Search, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  Calendar, 
  ChevronRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Loader2, 
  MessageSquare, 
  Clock 
} from "lucide-react";

interface HomeProps {
  activeKey: string;
  onKeyClick: (keyId: string) => void;
  setActiveKey?: (keyId: string) => void;
  activeStageId: string;
  setActiveStageId: (stageId: string) => void;
  onScheduleCall: () => void;
  onSelectProject: (p: Project) => void;
  onSelectArticle: (a: InsightArticle) => void;
  newsletterEmail: string;
  setNewsletterEmail: (email: string) => void;
  newsletterSuccess: boolean;
  onNewsletterSubmit: (e: React.FormEvent) => void;
}

export default function Home({
  activeKey,
  onKeyClick,
  setActiveKey,
  activeStageId,
  setActiveStageId,
  onScheduleCall,
  onSelectProject,
  onSelectArticle,
  newsletterEmail,
  setNewsletterEmail,
  newsletterSuccess,
  onNewsletterSubmit
}: HomeProps) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Ivana Collective",
    "description": "Bespoke digital architecture studio fusing premium editorial design, custom programming, and advanced organic search engine optimization.",
    "url": "https://theivanacollective.com",
    "telephone": "+1-555-0199"
  };

  return (
    <div className="animate-in fade-in duration-500">
      <SeoMeta
        title="Bespoke Editorial Web Design & Technical SEO Agency"
        description="We craft premium custom-coded digital flagships paired with map Pack SEO position networks and AI search indexing. Build your custom system."
        canonicalPath="/"
        schema={schema}
      />

      {/* 2. Hero Section */}
      <section 
        id="hero" 
        className="relative pt-24 min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#061C1A]"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#123B35]/20 to-[#7CA99B]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center py-12 z-10">
          <KeycapComposition onKeyClick={onKeyClick} activeKey={activeKey} />
        </div>
      </section>

      {/* Credibility Strip */}
      <section id="credibility-strip" className="bg-[#0A2C28] py-8 border-b border-white/5 text-center relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase mb-5">
            SUPPORTING & OPTIMIZING PRIMARY ECOSYSTEMS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30">
            {["WordPress", "Hostinger", "Shopify", "WooCommerce", "Google Maps", "Meta Ads", "Stripe API"].map((brand, idx) => (
              <span key={idx} className="font-serif text-sm sm:text-base tracking-widest text-[#F4F5F1] font-light">
                {brand.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Website Style Preview Section */}
      <StylePreviewSection />

      {/* 3. Services preview */}
      <section id="services" className="py-24 md:py-32 bg-[#061C1A] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              WHAT WE BUILD
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
              A complete digital foundation for your business.
            </h2>
            <p className="text-sm text-[#B8C6C1] leading-relaxed max-w-2xl font-light">
              Your website should not exist in isolation. It should connect your brand, search engine visibility, content syndication, automated bookings, and localized client experiences into one coherent, high-performing organic machine.
            </p>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, idx) => {
              const ServiceIcon = idx === 0 ? Globe : idx === 1 ? Search : TrendingUp;
              const detailsPath = idx === 0 ? "/services/web-design" : idx === 1 ? "/services/seo" : "/services/content-growth";

              // Map service.id to activeKey equivalents
              const isCardActive = 
                activeKey === service.id || 
                (service.id === "content-growth" && activeKey === "grow") || 
                (service.id === "seo-visibility" && activeKey === "seo-visibility");

              return (
                <div 
                  key={service.id}
                  className={`
                    group relative bg-[#0D2623] border rounded-3xl p-8 md:p-10 text-left
                    transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl
                    ${isCardActive 
                      ? "border-[#B9D8CE] ring-1 ring-[#B9D8CE]/40 shadow-[0_0_30px_rgba(185,216,206,0.15)] scale-[1.01]" 
                      : "border-white/5 hover:border-[#B9D8CE]/30"}
                  `}
                  onMouseEnter={() => {
                    // Map content-growth back to grow for keycap highlight
                    const mappedKey = service.id === "content-growth" ? "grow" : service.id;
                    setActiveKey?.(mappedKey);
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#123B35]/20 to-transparent rounded-t-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#7CA99B] font-bold">
                      {service.number}
                    </span>
                    <div className="p-3 bg-[#061C1A] text-[#B9D8CE] border border-white/5 rounded-2xl group-hover:bg-[#123B35] transition-colors">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F4F5F1] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#B8C6C1] leading-relaxed mb-8 font-light min-h-[50px]">
                    {service.description}
                  </p>

                  <ul className="space-y-3.5 mb-8 border-t border-white/5 pt-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 text-xs text-[#B8C6C1] font-light">
                        <Check className="w-4 h-4 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Link
                      href={detailsPath}
                      className="
                        w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-mono text-[10px] uppercase tracking-wider font-semibold
                        bg-[#123B35] text-[#F4F5F1] border border-[#B9D8CE]/15 hover:bg-[#B9D8CE] hover:text-[#061C1A]
                        transition-all duration-200 cursor-pointer shadow-sm
                      "
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center space-x-2 font-mono text-[10px] uppercase tracking-wider text-[#B9D8CE] hover:text-[#F4F5F1] transition-colors"
            >
              <span>Explore All Our Integrated Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Organic Digital Growth System Timeline Section */}
      <section id="system" className="py-24 md:py-32 bg-[#041211] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              THE ARCHITECTURE
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
              One system. Every part working together.
            </h2>
            <p className="text-sm text-[#B8C6C1] leading-relaxed font-light">
              We connect search discovery, high-end interfaces, and authority syndication. Observe how each stage leverages and reinforces the other.
            </p>
          </div>

          {/* Timeline Stages Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Stages Left Column Timeline Steps */}
            <div className="lg:col-span-5 flex flex-col space-y-4 relative">
              <div className="absolute left-[26px] top-4 bottom-4 w-[1px] bg-white/5 hidden sm:block pointer-events-none" />

              {SYSTEM_STAGES.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`
                    w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 focus:outline-none cursor-pointer
                    ${activeStageId === stage.id 
                      ? "bg-[#0D2623] border-[#B9D8CE]/20 shadow-xl translate-x-1" 
                      : "bg-[#061C1A]/20 border-white/5 hover:border-white/10 hover:bg-[#061C1A]/40"}
                  `}
                >
                  <span className={`
                    w-12 h-12 rounded-xl flex items-center justify-center font-mono text-xs font-bold border flex-shrink-0 transition-colors
                    ${activeStageId === stage.id
                      ? "bg-[#123B35] text-[#B9D8CE] border-[#B9D8CE]/25"
                      : "bg-[#061C1A] text-[#B8C6C1] border-white/5"}
                  `}>
                    {stage.number}
                  </span>
                  
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-medium text-[#F4F5F1]">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-[#7CA99B] font-mono tracking-wider">
                      {stage.tagline}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Stages Right Column Details Panel */}
            <div className="lg:col-span-7 bg-[#0D2623] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative min-h-[380px] flex flex-col justify-between overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#123B35] to-transparent opacity-20 blur-2xl pointer-events-none" />

              {SYSTEM_STAGES.map((stage) => {
                if (stage.id !== activeStageId) return null;

                return (
                  <div key={stage.id} className="space-y-8 animate-in fade-in duration-300">
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#7CA99B] border-b border-[#7CA99B]/20 pb-1 inline-block mb-3">
                        STAGE {stage.number} · {stage.title.toUpperCase()}
                      </span>
                      <h3 className="font-serif text-3xl text-[#F4F5F1] tracking-tight leading-snug">
                        {stage.tagline}
                      </h3>
                      <p className="text-sm text-[#B8C6C1] leading-relaxed font-light mt-4">
                        {stage.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B] font-semibold">
                        INTEGRATED OPERATIONS
                      </h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stage.items.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-3 bg-[#061C1A]/40 border border-white/5 rounded-xl">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B9D8CE]" />
                            <span className="text-xs text-[#B8C6C1] font-light">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-[11px] font-mono text-[#7CA99B]">
                  * Stage triggers are interactive. Play with the timeline.
                </p>
                <button
                  onClick={onScheduleCall}
                  className="
                    flex items-center space-x-1.5 font-mono text-[10px] uppercase tracking-wider font-semibold text-[#B9D8CE] hover:text-[#F4F5F1] transition-colors focus:outline-none cursor-pointer
                  "
                >
                  <span>Build your system</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. Selected Work Section */}
      <section id="work" className="py-24 md:py-32 bg-[#061C1A] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-20 space-y-4 text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              SELECTED WORK
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
              Built to look exceptional.<br />Designed to produce results.
            </h2>
          </div>

          {/* Case Studies Alternating Grid list (showing first 2 for preview) */}
          <div className="space-y-24 md:space-y-36">
            {PROJECTS_DATA.slice(0, 2).map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={project.id}
                  className={`
                    grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center
                    ${isEven ? "" : "lg:flex-row-reverse"}
                  `}
                >
                  {/* Project Image Panel */}
                  <div className={`
                    lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5 shadow-2xl
                    ${isEven ? "lg:order-1" : "lg:order-2"}
                  `}
                    onClick={() => onSelectProject(project)}
                  >
                    <div className="bg-[#0D2623] px-4 py-3 border-b border-white/5 flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="ml-4 bg-[#061C1A] text-[9px] font-mono text-[#7CA99B] px-3 py-0.5 rounded border border-white/5 truncate max-w-[200px]">
                        {project.client.toLowerCase().replace(/\s+/g, "")}.com
                      </div>
                    </div>
                    
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.client}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] group-hover:brightness-[0.95]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Copy Panel */}
                  <div className={`
                    lg:col-span-5 space-y-6 text-left
                    ${isEven ? "lg:order-2" : "lg:order-1"}
                  `}>
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase">
                        {project.industry}
                      </span>
                      <h3 className="font-serif text-3xl text-[#F4F5F1] leading-tight font-light">
                        {project.client}
                      </h3>
                    </div>

                    <p className="text-sm text-[#B8C6C1] leading-relaxed font-light">
                      {project.title}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-white/5 py-5 my-4">
                      {project.results.slice(0, 2).map((resText, rIdx) => (
                        <div key={rIdx} className="border-l border-[#B9D8CE]/20 pl-3">
                          <p className="text-[#B9D8CE] font-mono text-[10px] uppercase tracking-wider font-semibold">METRIC RESULT</p>
                          <p className="text-xs text-[#F4F5F1] font-serif italic mt-0.5">{resText}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="
                          flex items-center space-x-2 px-5 py-3 rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold
                          bg-[#123B35] text-[#F4F5F1] hover:bg-[#B9D8CE] hover:text-[#061C1A]
                          border border-[#B9D8CE]/20 transition-all cursor-pointer shadow-md
                        "
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/work" 
              className="inline-flex items-center space-x-2 font-mono text-[10px] uppercase tracking-wider text-[#B9D8CE] hover:text-[#F4F5F1] transition-colors"
            >
              <span>Explore Complete Digital Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. The Method Section */}
      <section id="method" className="py-24 md:py-32 bg-[#041211] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-20 space-y-4 text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              THE PARTNERSHIP
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
              The Architectural Path
            </h2>
            <p className="text-sm text-[#B8C6C1] leading-relaxed font-light">
              We apply systematic rigor. Your client experience flows through four key stages, ensuring absolute aesthetic quality and continuous search prominence.
            </p>
          </div>

          {/* Full Width Steps List */}
          <div className="border-t border-white/10">
            {METHOD_STEPS.slice(0, 3).map((step) => (
              <div 
                key={step.number}
                className="
                  group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-12 border-b border-white/5 items-start
                  hover:bg-[#0D2623]/20 transition-all duration-300 px-4 -mx-4 rounded-xl text-left
                "
              >
                <div className="md:col-span-2">
                  <span className="
                    font-mono text-5xl md:text-6xl text-transparent font-bold tracking-tighter
                    [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover:[-webkit-text-stroke:1px_#B9D8CE]
                    transition-all duration-300
                  ">
                    {step.number}
                  </span>
                </div>

                <div className="md:col-span-4 space-y-1">
                  <h4 className="font-serif text-xl text-[#F4F5F1] group-hover:text-[#B9D8CE] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <p className="text-xs text-[#B8C6C1]/75 leading-relaxed font-light">
                    {step.details}
                  </p>
                </div>

                <div className="md:col-span-1 flex justify-end">
                  <ChevronRight className="
                    w-5 h-5 text-white/10 group-hover:text-[#B9D8CE] transform group-hover:translate-x-1.5 transition-all
                  " />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/method" 
              className="inline-flex items-center space-x-2 font-mono text-[10px] uppercase tracking-wider text-[#B9D8CE] hover:text-[#F4F5F1] transition-colors"
            >
              <span>See the Complete Methodology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. Results Section */}
      <section id="results" className="py-24 md:py-32 bg-[#061C1A] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              MEASURABILITY
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
              Growth should be visible.
            </h2>
            <p className="text-sm text-[#B8C6C1] leading-relaxed font-light">
              We compile metrics directly showing search traffic, mapping positions, booking numbers, and true client acquisition.
            </p>
          </div>

          {/* Results Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULT_METRICS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#0D2623] border border-white/5 rounded-2xl p-6 md:p-8 space-y-4 text-left"
              >
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#7CA99B]">
                  {item.label}
                </span>
                
                <p className="font-serif text-4xl md:text-5xl text-[#F4F5F1] font-semibold tracking-tight">
                  {item.metric}
                </p>
                
                <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. About Section Preview */}
      <section id="about" className="py-24 md:py-32 bg-[#041211] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-2xl max-w-sm mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Ivana Collective Workspace" 
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

            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
                THE BOUTIQUE APPROACH
              </span>
              
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-[#F4F5F1]">
                Strategy, design, and development—without the agency layers.
              </h2>
              
              <p className="text-sm text-[#B8C6C1] leading-relaxed font-light">
                Large agencies often have high overhead costs, meaning you pay premium prices but get passed down to junior account managers. At The Ivana Collective, you collaborate directly with an experienced, boutique digital professional who understands brand strategy, visual editorial design, modern software development, and advanced SEO analysis.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/about"
                  className="
                    inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold
                    bg-[#123B35] text-[#F4F5F1] hover:bg-[#B9D8CE] hover:text-[#061C1A]
                    border border-[#B9D8CE]/20 transition-all cursor-pointer shadow-md
                  "
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-[#061C1A] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              VOICES
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
              What clients say after launch.
            </h2>
          </div>

          {/* Testimonial cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS_DATA.map((t) => (
              <div 
                key={t.id}
                className="bg-[#0D2623] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 relative"
              >
                <span className="absolute top-6 right-8 text-5xl font-serif text-[#7CA99B]/10 select-none pointer-events-none font-bold">
                  &ldquo;
                </span>

                <p className="text-sm text-[#F4F5F1] leading-relaxed font-serif font-light italic relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="space-y-4 border-t border-white/5 pt-6">
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-[#F4F5F1]">{t.author}</h4>
                    <p className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase mt-0.5">{t.business}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {t.services.map((serv, sIdx) => (
                      <span 
                        key={sIdx}
                        className="font-mono text-[8px] uppercase bg-[#061C1A] text-[#B8C6C1] px-2 py-0.5 rounded border border-white/5"
                      >
                        {serv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Pricing Preview Section */}
      <section id="pricing" className="py-24 md:py-32 bg-[#041211] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              TRANSPARENCY
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
              Choose the support your business needs.
            </h2>
            <p className="text-sm text-[#B8C6C1] leading-relaxed font-light">
              Clear structures. Six-month commitments ensure continuous content loop and Map pack prominence.
            </p>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
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
                {pkg.isPopular && (
                  <span className="absolute top-5 right-6 font-mono text-[8px] tracking-[0.2em] font-bold text-[#061C1A] bg-[#B9D8CE] px-3 py-1 rounded-full border border-white/10 uppercase">
                    MOST COMPLETE
                  </span>
                )}

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-[#F4F5F1] font-semibold">{pkg.title}</h3>
                  <p className="text-xs text-[#B8C6C1] leading-relaxed font-light min-h-[40px]">{pkg.tagline}</p>
                  
                  <div className="pt-2 border-b border-white/5 pb-4">
                    <div className="flex items-baseline space-x-1.5">
                      <span className="font-serif text-4xl text-[#F4F5F1] font-semibold">{pkg.price}</span>
                      <span className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase">{pkg.period}</span>
                    </div>
                    <p className="text-[10px] font-mono text-[#B8C6C1]/50 mt-1 uppercase tracking-wide">{pkg.commitment}</p>
                  </div>

                  <p className="text-xs text-[#B8C6C1]/80 leading-relaxed font-light py-2">
                    {pkg.bestFor}
                  </p>

                  <ul className="space-y-3.5 pt-2">
                    {pkg.deliverables.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs text-[#B8C6C1] font-light">
                        <Check className="w-4 h-4 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/pricing"
                    className="
                      w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer
                      bg-[#123B35] text-[#F4F5F1] border border-[#B9D8CE]/15 hover:bg-[#B9D8CE] hover:text-[#061C1A]
                      transition-all duration-200 shadow-md
                    "
                  >
                    <span>View Pricing Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/pricing" 
              className="inline-flex items-center space-x-2 font-mono text-[10px] uppercase tracking-wider text-[#B9D8CE] hover:text-[#F4F5F1] transition-colors"
            >
              <span>View Full Packages & Inclusions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 11. Insights Preview Section (CMS) */}
      <section id="insights" className="py-24 md:py-32 bg-[#061C1A] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              LATEST INSIGHTS
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
              Strategy for businesses ready to grow online.
            </h2>
          </div>

          {/* Blog cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {INSIGHTS_DATA.slice(0, 3).map((article) => (
              <div 
                key={article.id}
                className="group cursor-pointer bg-[#0D2623] border border-white/5 hover:border-[#B9D8CE]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 transition-all duration-300"
                onClick={() => onSelectArticle(article)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#7CA99B]">
                    <span className="bg-[#061C1A] px-2 py-0.5 rounded border border-white/5 uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#F4F5F1] leading-snug group-hover:text-[#B9D8CE] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#B8C6C1] leading-relaxed font-light line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="flex items-center space-x-1 font-mono text-[10px] text-[#B9D8CE] group-hover:text-[#F4F5F1] transition-colors">
                  <span>Read full insights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/insights" 
              className="inline-flex items-center space-x-2 font-mono text-[10px] uppercase tracking-wider text-[#B9D8CE] hover:text-[#F4F5F1] transition-colors"
            >
              <span>See All Strategy Insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Newsletter Box */}
          <div className="bg-[#0D2623] border border-[#B9D8CE]/20 rounded-3xl p-8 md:p-12 mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#123B35] to-transparent opacity-20 blur-2xl pointer-events-none" />
            
            <div className="space-y-2 max-w-md">
              <h4 className="font-serif text-xl text-[#F4F5F1]">The Organic Briefing</h4>
              <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
                Once a month, we send out a highly curated local search analysis, speed audit highlights, and clean authority syndication templates. Zero sales fluff.
              </p>
            </div>

            {newsletterSuccess ? (
              <div className="bg-[#123B35] border border-[#B9D8CE]/20 rounded-xl px-5 py-4 text-xs font-mono text-[#B9D8CE] flex items-center gap-2 animate-in fade-in duration-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscription Locked! Welcome to the briefing.</span>
              </div>
            ) : (
              <form onSubmit={onNewsletterSubmit} className="flex w-full md:w-auto items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#061C1A] border border-white/10 rounded-lg px-4 py-3 text-xs text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] w-full md:w-64 placeholder:text-white/10 font-mono"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] font-mono text-[10px] uppercase tracking-wider font-semibold cursor-pointer transition-colors flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Dynamic SEO Audit Section */}
      <section id="audit" className="py-24 md:py-32 bg-[#041211] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              STRATEGIC BENCHMARK
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] leading-none text-[#F4F5F1]">
              Your roadmap, compiled.
            </h2>
            <p className="text-sm text-[#B8C6C1] leading-relaxed font-light">
              Don&apos;t guess where your business ranks or how ready you are for AI Answers. Build your diagnostic report instantly.
            </p>
          </div>

          {/* Audit Tool master component */}
          <AuditTool onScheduleCall={onScheduleCall} />
        </div>
      </section>

      {/* FAQS Accordion Block */}
      <section id="faqs" className="py-24 md:py-32 bg-[#061C1A] border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F5F1]">
              System Specifications
            </h2>
          </div>

          <div className="space-y-4 text-left">
            {FAQS_DATA.map((faq, idx) => (
              <details 
                key={idx} 
                className="group bg-[#0D2623] border border-white/5 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer focus:outline-none list-none">
                  <h3 className="font-serif text-base sm:text-lg text-[#F4F5F1] group-hover:text-[#B9D8CE] transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#7CA99B]">
                    ▼
                  </span>
                </summary>
                
                <p className="text-xs text-[#B8C6C1] leading-relaxed mt-4 pt-4 border-t border-white/5 font-light">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* 12. Final CTA */}
      <section id="final-cta" className="relative py-32 overflow-hidden bg-gradient-to-b from-[#061C1A] to-[#041211] border-b border-white/5 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#123B35]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
            READY TO COMMENCE?
          </span>
          
          <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[1.05] tracking-tight text-[#F4F5F1] max-w-3xl mx-auto">
            Your business deserves more than a website that simply exists.
          </h2>

          <p className="text-sm text-[#B8C6C1] max-w-xl mx-auto leading-relaxed font-light">
            Build a digital system designed to help customers find you, understand your boutique authority, and confidently choose your services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={onScheduleCall}
              className="
                w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold
                bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] hover:text-[#061C1A]
                transition-all cursor-pointer shadow-lg hover:-translate-y-0.5 duration-200
              "
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Strategy Call</span>
            </button>

            <Link
              href="/services"
              className="
                w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold
                bg-[#0D2623] text-[#F4F5F1] border border-white/10 hover:border-[#B9D8CE]
                transition-all cursor-pointer hover:bg-[#123B35] duration-200
              "
            >
              <span>View Services</span>
            </Link>
          </div>
        </div>

        {/* Diagonal, cropped massive bottom decoration Keycap "LET'S BUILD" */}
        <div className="absolute bottom-[-60px] right-[-40px] opacity-20 hover:opacity-40 transition-opacity duration-300 hidden md:block">
          <div className="w-72 h-44 bg-gradient-to-br from-[#123B35] via-[#0A2C28] to-[#041211] rounded-3xl border border-[#B9D8CE]/20 shadow-2xl p-6 flex flex-col justify-end transform rotate-[-12deg] relative">
            <div className="absolute inset-[3px] rounded-2xl bg-[#061C1A]/90 flex flex-col justify-end p-6 border border-white/5">
              <span className="font-serif text-3xl font-bold tracking-widest text-[#B9D8CE]">LET&apos;S</span>
              <span className="font-serif text-3xl font-bold tracking-widest text-[#F4F5F1] mt-1">BUILD</span>
              <div className="absolute top-4 right-4 text-[7px] text-white/15 font-mono">SYS.ENTER_</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
