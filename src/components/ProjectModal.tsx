import React from "react";
import { X, CheckCircle, Award, Layout, ShieldAlert } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      id="project-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-black/60 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="project-modal-container"
        className="
          relative w-full max-w-2xl bg-[#0D2623] rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8
          animate-in zoom-in-95 duration-200 overflow-hidden text-left max-h-[90vh] overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#B8C6C1] hover:text-[#F4F5F1] transition-colors rounded-full hover:bg-white/5 cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image frame */}
        <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 border border-white/5 shadow-inner">
          <img 
            src={project.imageUrl} 
            alt={project.client}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2623] via-[#0D2623]/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#B9D8CE] bg-[#123B35] px-2.5 py-1 rounded-full border border-white/10">
              {project.industry}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F5F1] leading-tight">
              {project.client}
            </h3>
            <p className="font-sans text-sm text-[#B8C6C1] leading-relaxed">
              {project.title}
            </p>
          </div>

          {/* Delivered Services */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-b border-white/5 py-3">
            {project.services.map((service, idx) => (
              <span 
                key={idx}
                className="font-mono text-[9px] tracking-wider uppercase bg-[#061C1A] text-[#B8C6C1] px-3 py-1 rounded-md border border-white/5"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Detail Explanation */}
          <div className="space-y-3">
            <h4 className="font-mono text-[10px] tracking-widest text-[#7CA99B] uppercase font-semibold">
              PROJECT ARCHITECTURE & APPROACH
            </h4>
            <p className="text-xs text-[#B8C6C1] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics / Key Results */}
          <div className="space-y-3 bg-[#061C1A]/60 border border-white/5 p-5 rounded-2xl">
            <div className="flex items-center space-x-2 text-[#B9D8CE] mb-2">
              <Award className="w-4 h-4" />
              <h4 className="font-mono text-[10px] tracking-widest uppercase font-semibold">
                MEASURED IMPACT RESULTS
              </h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((resultStr, idx) => {
                // Try to extract metrics or bold components
                return (
                  <div key={idx} className="border-l border-[#7CA99B]/30 pl-3 py-1">
                    <p className="text-[#F4F5F1] text-xs font-serif font-light leading-snug">
                      {resultStr}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex justify-end pt-4 border-t border-white/5">
            <button
              onClick={onClose}
              className="
                px-5 py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold
                bg-[#123B35] text-[#F4F5F1] hover:bg-[#B9D8CE] hover:text-[#061C1A]
                border border-[#B9D8CE]/25 transition-all cursor-pointer shadow-md
              "
              id="project-modal-return-btn"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
