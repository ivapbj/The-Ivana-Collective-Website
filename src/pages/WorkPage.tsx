import React from "react";
import SeoMeta from "../components/SeoMeta";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import { ArrowUpRight, Check, Award, Compass, Sparkles } from "lucide-react";

interface WorkPageProps {
  onSelectProject: (project: Project) => void;
  onScheduleCall: () => void;
}

export default function WorkPage({ onSelectProject, onScheduleCall }: WorkPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkPortfolio",
    "name": "The Ivana Collective Digital Portfolio",
    "creator": {
      "@type": "ProfessionalService",
      "name": "The Ivana Collective"
    },
    "description": "Showcase of boutique custom-coded digital flagships, high-performing localized SEO architectures, and content growth syndication systems."
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Selected Work", item: "/work" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Selected Work & Case Studies"
        description="Explore our portfolio of high-performing digital flagships. Custom coding, technical maps pack SEO positioning, and luxury brand design."
        canonicalPath="/work"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header section */}
      <div className="max-w-4xl text-left space-y-4 mb-20">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
          AESTHETIC PORTFOLIO
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Exceptional design. <br />
          <span className="text-[#B9D8CE]">Impeccable performance.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          Browse our selected case studies. Each project highlights a complete synthesis of custom typography, premium visual compositions, zero template bloat, and highly-lucrative search rankings.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-24">
        {PROJECTS_DATA.map((project) => (
          <div 
            key={project.id}
            className="group cursor-pointer bg-[#0D2623] border border-white/5 hover:border-[#B9D8CE]/20 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            onClick={() => onSelectProject(project)}
          >
            <div>
              {/* Fake Browser window top-bar */}
              <div className="bg-[#0A2C28] px-4 py-3 border-b border-white/5 flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="ml-3 bg-[#061C1A] text-[8px] font-mono text-[#7CA99B] px-2 py-0.5 rounded border border-white/5 truncate max-w-[150px]">
                  {project.client.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>

              {/* Image with overlay gradient */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.client} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.8] group-hover:brightness-[0.95]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text metadata and specs */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[8px] tracking-widest text-[#7CA99B] uppercase">
                    {project.industry}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F4F5F1] leading-tight font-light group-hover:text-[#B9D8CE] transition-colors">
                    {project.client}
                  </h3>
                </div>

                <p className="text-xs text-[#B8C6C1] leading-relaxed font-light line-clamp-3">
                  {project.title}
                </p>

                {/* Tags block */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.services.map((tag, idx) => (
                    <span key={idx} className="font-mono text-[8px] uppercase bg-[#061C1A] text-[#B8C6C1] px-2 py-0.5 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics footer */}
            <div className="p-6 border-t border-white/5 flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-[8px] font-mono text-[#7CA99B] uppercase tracking-wider">PRIMARY OUTCOME</p>
                <p className="font-serif text-xs italic text-[#F4F5F1]">{project.results[2]}</p>
              </div>
              <div className="p-2.5 bg-[#061C1A] text-[#B9D8CE] border border-white/5 rounded-xl group-hover:bg-[#123B35] transition-colors flex-shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action / CTA */}
      <div className="text-center space-y-6 border border-white/5 bg-[#0A2C28]/40 rounded-3xl p-12 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1]">Build a digital system designed to scale.</h2>
        <p className="text-xs text-[#B8C6C1] max-w-xl mx-auto leading-relaxed font-light">
          Your brand narrative deserves elite visual execution. Connect directly with our lead developer to discuss your custom project.
        </p>
        <button
          onClick={onScheduleCall}
          className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer"
        >
          <span>Schedule Strategy Call</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
