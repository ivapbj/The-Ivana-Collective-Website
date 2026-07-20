import React from "react";
import { X, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { InsightArticle } from "../types";

interface BlogModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export default function BlogModal({ article, onClose }: BlogModalProps) {
  if (!article) return null;

  return (
    <div 
      id="blog-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-black/60 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="blog-modal-container"
        className="
          relative w-full max-w-3xl bg-[#0D2623] rounded-3xl border border-white/10 shadow-2xl p-6 md:p-10
          animate-in zoom-in-95 duration-200 overflow-hidden text-left max-h-[90vh] overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="blog-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#B8C6C1] hover:text-[#F4F5F1] transition-colors rounded-full hover:bg-white/5 cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-[#7CA99B]">
            <span className="bg-[#123B35] px-2.5 py-1 rounded-full border border-white/5 uppercase tracking-widest">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl text-[#F4F5F1] leading-tight max-w-2xl">
            {article.title}
          </h3>

          <p className="text-sm text-[#B8C6C1] leading-relaxed italic border-l-2 border-[#7CA99B] pl-4 py-1">
            {article.summary}
          </p>
        </div>

        {/* Render Formatted Content */}
        <div className="mt-8 border-t border-white/5 pt-8 text-[#B8C6C1] text-xs leading-relaxed space-y-6 max-w-none">
          {article.content.split("\n\n").map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            // Simple format parsing for markdown elements
            if (trimmed.startsWith("### ")) {
              return (
                <h4 key={idx} className="font-serif text-lg text-[#F4F5F1] font-semibold mt-6 mb-2">
                  {trimmed.replace("### ", "")}
                </h4>
              );
            }
            if (trimmed.startsWith("#### ")) {
              return (
                <h5 key={idx} className="font-mono text-xs text-[#7CA99B] tracking-wider uppercase font-semibold mt-4 mb-2">
                  {trimmed.replace("#### ", "")}
                </h5>
              );
            }
            if (trimmed.startsWith("- ")) {
              return (
                <ul key={idx} className="list-disc list-inside space-y-1.5 pl-4 text-[#B8C6C1] text-xs">
                  {trimmed.split("\n").map((li, lidx) => (
                    <li key={lidx}>{li.replace("- ", "").trim()}</li>
                  ))}
                </ul>
              );
            }
            if (trimmed.includes("|")) {
              // Parse simple tables
              const rows = trimmed.split("\n").filter(r => r.trim());
              return (
                <div key={idx} className="overflow-x-auto my-6 border border-white/5 rounded-xl bg-[#061C1A]/40">
                  <table className="w-full text-left text-xs text-[#B8C6C1]">
                    <thead>
                      <tr className="border-b border-white/10 bg-[#123B35]/30">
                        {rows[0].split("|").filter(c => c.trim()).map((cell, cidx) => (
                          <th key={cidx} className="px-4 py-2.5 font-mono text-[9px] uppercase tracking-widest text-[#7CA99B]">
                            {cell.trim()}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.slice(2).map((row, ridx) => (
                        <tr key={ridx} className="border-b border-white/5 hover:bg-[#123B35]/15 transition-colors">
                          {row.split("|").filter(c => c.trim()).map((cell, cidx) => (
                            <td key={cidx} className="px-4 py-2.5">
                              {cell.trim()}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return (
              <p key={idx} className="text-xs text-[#B8C6C1] leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
          <button
            onClick={onClose}
            className="
              px-5 py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold
              bg-[#123B35] text-[#F4F5F1] hover:bg-[#B9D8CE] hover:text-[#061C1A]
              border border-[#B9D8CE]/25 transition-all cursor-pointer shadow-md
            "
            id="blog-modal-return-btn"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}
