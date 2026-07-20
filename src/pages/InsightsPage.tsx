import React from "react";
import SeoMeta from "../components/SeoMeta";
import { INSIGHTS_DATA } from "../data";
import { InsightArticle } from "../types";
import { ArrowUpRight, BookOpen, Compass, Calendar, Clock } from "lucide-react";

interface InsightsPageProps {
  onSelectArticle: (article: InsightArticle) => void;
  newsletterEmail: string;
  setNewsletterEmail: (email: string) => void;
  newsletterSuccess: boolean;
  onNewsletterSubmit: (e: React.FormEvent) => void;
}

export default function InsightsPage({ 
  onSelectArticle, 
  newsletterEmail, 
  setNewsletterEmail, 
  newsletterSuccess, 
  onNewsletterSubmit 
}: InsightsPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Organic Briefing: Digital Strategy & Local SEO Insights",
    "publisher": {
      "@type": "ProfessionalService",
      "name": "The Ivana Collective"
    },
    "description": "Expert insights compiling technical search engine optimization (SEO), digital customer experience audits, brand narrative development, and map proximity strategy."
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Insights & Strategy", item: "/insights" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="The Organic Briefing: Digital Strategy & SEO Insights"
        description="Read technical strategy articles on Google Maps local rankings, website performance audits, and conversational search engine optimization (SEO)."
        canonicalPath="/insights"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header section */}
      <div className="max-w-4xl text-left space-y-4 mb-20">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
          THE ORGANIC BRIEFING
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Boutique strategy for brands <br />
          <span className="text-[#B9D8CE]">ready to scale search presence.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          We draft technical guides detailing geocoordinate optimizations, layout speed tuning, brand typography pairs, and local customer conversion metrics. No superficial sales fluff.
        </p>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-24">
        {INSIGHTS_DATA.map((article) => (
          <div 
            key={article.id}
            className="group cursor-pointer bg-[#0D2623] border border-white/5 hover:border-[#B9D8CE]/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6 transition-all duration-300"
            onClick={() => onSelectArticle(article)}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#7CA99B]">
                <span className="bg-[#061C1A] px-2.5 py-0.5 rounded border border-white/5 uppercase tracking-wide">
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

              <p className="text-xs text-[#B8C6C1] leading-relaxed font-light line-clamp-4">
                {article.summary}
              </p>
            </div>

            <div className="flex items-center space-x-1.5 font-mono text-[10px] text-[#B9D8CE] group-hover:text-[#F4F5F1] transition-colors border-t border-white/5 pt-4">
              <span>Read complete article</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Box */}
      <div className="bg-[#0D2623] border border-[#B9D8CE]/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#123B35] to-transparent opacity-20 blur-2xl pointer-events-none" />
        
        <div className="space-y-2 max-w-md">
          <div className="flex items-center space-x-2 text-[#7CA99B]">
            <BookOpen className="w-4 h-4" />
            <h4 className="font-serif text-lg text-[#F4F5F1]">The Monthly Briefing</h4>
          </div>
          <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
            Once a month, we release localized keyword sweeps, speed benchmarks, and high-converting layout templates. Zero spam.
          </p>
        </div>

        {newsletterSuccess ? (
          <div className="bg-[#123B35] border border-[#B9D8CE]/20 rounded-xl px-5 py-4 text-xs font-mono text-[#B9D8CE] flex items-center gap-2 animate-in fade-in duration-300">
            <span>Welcome to the organic briefing circle!</span>
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
              className="px-5 py-3 rounded-lg bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] font-mono text-[10px] uppercase tracking-wider font-semibold cursor-pointer transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
