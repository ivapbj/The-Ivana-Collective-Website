import React from "react";
import { X, CheckCircle, Award, Layout, ShieldAlert, ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "../types";
import { ProjectImage } from "./ProjectImage";

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
        {project.websiteUrl ? (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full rounded-xl overflow-hidden mb-6 border border-white/5 shadow-inner bg-[#061C1A] flex items-center justify-center block group/modal-img"
            title={`Visit ${project.client} at ${project.websiteUrl}`}
          >
            <ProjectImage 
              project={project}
              className="w-full h-auto max-h-[75vh] object-contain object-top transition-transform duration-500 group-hover/modal-img:scale-[1.02]"
              style={{ width: "100%", height: "auto", objectFit: "contain", objectPosition: "center top" }}
            />
            
            <div className="absolute bottom-4 left-4 z-10 flex items-center space-x-2">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#B9D8CE] bg-[#123B35]/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 shadow">
                {project.industry}
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-10">
              <span className="inline-flex items-center space-x-1.5 font-mono text-[9px] tracking-wider uppercase text-[#061C1A] bg-[#B9D8CE] px-3 py-1 rounded-full font-semibold shadow">
                <span>Visit Live Site</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        ) : (
          <div className="relative w-full rounded-xl overflow-hidden mb-6 border border-white/5 shadow-inner bg-[#061C1A] flex items-center justify-center">
            <ProjectImage 
              project={project}
              className="w-full h-auto max-h-[75vh] object-contain object-top"
              style={{ width: "100%", height: "auto", objectFit: "contain", objectPosition: "center top" }}
            />
            
            <div className="absolute bottom-4 left-4 z-10">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#B9D8CE] bg-[#123B35]/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 shadow">
                {project.industry}
              </span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            {project.websiteUrl ? (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group/title"
                title={`Visit ${project.client} (${project.websiteUrl})`}
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F5F1] leading-tight group-hover/title:text-[#B9D8CE] transition-colors">
                  {project.client}
                </h3>
              </a>
            ) : (
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F5F1] leading-tight">
                {project.client}
              </h3>
            )}
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
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            {project.websiteUrl ? (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold
                  bg-[#B9D8CE] text-[#061C1A] hover:bg-white transition-all cursor-pointer shadow-md
                "
              >
                <span>Visit {project.websiteUrl.replace(/^https?:\/\//, '')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : <div />}

            <button
              onClick={onClose}
              className="
                px-5 py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold
                bg-[#123B35] text-[#F4F5F1] hover:bg-[#B9D8CE] hover:text-[#061C1A]
                border border-[#B9D8CE]/25 transition-all cursor-pointer shadow-md
              "
              id="project-modal-return-btn"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
