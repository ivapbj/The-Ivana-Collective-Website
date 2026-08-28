import React, { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Globe, 
  TrendingUp, 
  Smartphone, 
  Sliders, 
  ChevronRight, 
  Loader2, 
  AlertCircle 
} from "lucide-react";
import { AuditResponse } from "../types";

interface AuditToolProps {
  onScheduleCallWithData: (businessName: string, websiteUrl: string) => void;
}

export default function AuditTool({ onScheduleCallWithData }: AuditToolProps) {
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [services, setServices] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AuditResponse | null>(null);

  const loadingMessages = [
    "Synthesizing regional organic search intent data...",
    "Querying Google Map Pack proximity density formulas...",
    "Benchmarking conversational AI search answer models...",
    "Evaluating semantic schema hierarchy requirements...",
    "Compiling bespoke tactical conversion recommendations..."
  ];

  // Rotate loading messages for high-end feel
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !location || !services) {
      setError("Please fill in all required fields (Business Name, Location, Services).");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          location,
          websiteUrl,
          services
        })
      });

      if (!response.ok) {
        throw new Error("Failed to process your strategy audit. Please check your connection.");
      }

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        throw new Error("Invalid response format received from audit server.");
      }
      setResult(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while compiling your strategy audit.");
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score < 50) return "text-rose-400 stroke-rose-400";
    if (score < 75) return "text-amber-400 stroke-amber-400";
    return "text-[#B9D8CE] stroke-[#B9D8CE]";
  };

  return (
    <div className="w-full bg-[#0D2623] rounded-3xl border border-white/8 p-6 md:p-10 shadow-2xl relative overflow-hidden" id="audit-system-card">
      {/* Decorative ambient subtle light corner */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#123B35] to-transparent opacity-40 blur-3xl pointer-events-none" />

      {!result && !isLoading && (
        <div className="animate-in fade-in duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-lg bg-[#123B35] text-[#B9D8CE] border border-white/10">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              REAL-TIME AI DIAGNOSTIC
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F5F1] leading-tight mb-4">
            Benchmark Your Digital System
          </h3>
          
          <p className="text-[#B8C6C1] text-sm leading-relaxed mb-8 max-w-2xl">
            Enter your business parameters below. Our custom analysis engine parses local organic keyword intent, Map Pack proximity, and conversational search patterns to formulate a bespoke digital roadmap.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-rose-950/40 border border-rose-900/50 rounded-xl flex items-start space-x-3 text-rose-200 text-xs font-mono">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Name */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
                  BUSINESS NAME *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g., Legacy Economic Development"
                  className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] focus:ring-1 focus:ring-[#B9D8CE]/20 transition-all placeholder:text-white/20"
                />
              </div>

              {/* Service Location */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
                  LOCATION & AREA *
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Springfield, MA (Western MA)"
                  className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] focus:ring-1 focus:ring-[#B9D8CE]/20 transition-all placeholder:text-white/20"
                />
              </div>

              {/* Current Website URL */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
                  CURRENT WEBSITE (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="e.g., mybusiness.org (no https:// needed)"
                  className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] focus:ring-1 focus:ring-[#B9D8CE]/20 transition-all placeholder:text-white/20"
                />
              </div>

              {/* Services Offered */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
                  SERVICES OFFERED *
                </label>
                <input
                  type="text"
                  required
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  placeholder="e.g., micro-business grants, business coaching, workshops"
                  className="w-full bg-[#061C1A] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F4F5F1] focus:outline-none focus:border-[#B9D8CE] focus:ring-1 focus:ring-[#B9D8CE]/20 transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="
                w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold
                bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all duration-200 cursor-pointer shadow-lg
              "
              id="audit-submit-btn"
            >
              <span>Compile Bespoke Strategy Audit</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Loading Posture */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-300">
          <Loader2 className="w-10 h-10 text-[#B9D8CE] animate-spin mb-6" />
          <h4 className="font-serif text-xl text-[#F4F5F1] mb-2">Analyzing Digital Footprint</h4>
          <p className="text-[#7CA99B] font-mono text-xs tracking-wider animate-pulse max-w-md h-8">
            {loadingMessages[loadingStep]}
          </p>
          <div className="w-48 h-[2px] bg-white/5 rounded-full mt-6 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#7CA99B] to-[#B9D8CE] w-1/3 animate-[infinite-scroll_2s_ease-in-out_infinite]" style={{
              animation: "shimmer 1.5s infinite"
            }} />
          </div>
        </div>
      )}

      {/* Audit Report Results */}
      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-500 space-y-10">
          
          {/* Header row with score and level */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/5">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B9D8CE] animate-ping" />
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#7CA99B]">
                  AUDIT SUITE COMPLETE
                </span>
              </div>
              <h3 className="font-serif text-3xl text-[#F4F5F1] leading-tight mb-2">
                Digital Posture Audit
              </h3>
              <p className="font-mono text-xs text-[#B8C6C1]">
                Bespoke Analysis for <span className="text-[#F4F5F1] font-semibold">{businessName}</span> · {location}
              </p>
            </div>

            {/* Score Ring */}
            <div className="flex items-center space-x-4 bg-[#061C1A] border border-white/5 p-4 rounded-2xl self-start md:self-auto">
              <div className="relative w-16 h-16 flex items-center justify-center">
                {/* SVG circular track */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    className="stroke-white/5"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    className={`${getScoreColor(result.readinessScore)} transition-all duration-1000`}
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={163.36}
                    strokeDashoffset={163.36 - (163.36 * result.readinessScore) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute font-mono text-sm font-bold text-[#F4F5F1]">{result.readinessScore}</span>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#7CA99B] tracking-wider uppercase">READINESS POSTURE</p>
                <p className="text-sm font-serif text-[#F4F5F1] font-semibold">{result.readinessLevel}</p>
              </div>
            </div>
          </div>

          {/* Executive Summary Section */}
          <div className="bg-[#123B35]/40 border border-[#B9D8CE]/10 rounded-2xl p-6">
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#B9D8CE] mb-3">
              EXECUTIVE STATEMENT
            </h4>
            <p className="text-sm text-[#F4F5F1] leading-relaxed italic font-serif font-light">
              &ldquo;{result.executiveSummary}&rdquo;
            </p>
          </div>

          {/* 3 Pillar Visibility Analysis Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Google Search */}
            <div className="bg-[#061C1A]/60 border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3 text-[#7CA99B]">
                <Globe className="w-4 h-4" />
                <h5 className="font-mono text-[10px] tracking-widest uppercase font-semibold">
                  Google Search Opportunity
                </h5>
              </div>
              <p className="text-xs text-[#B8C6C1] leading-relaxed">
                {result.searchVisibilityAnalysis.googleSearch}
              </p>
            </div>

            {/* Google Map Pack */}
            <div className="bg-[#061C1A]/60 border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3 text-[#7CA99B]">
                <MapPin className="w-4 h-4" />
                <h5 className="font-mono text-[10px] tracking-widest uppercase font-semibold">
                  Map Pack Proximity Projections
                </h5>
              </div>
              <p className="text-xs text-[#B8C6C1] leading-relaxed">
                {result.searchVisibilityAnalysis.googleMaps}
              </p>
            </div>

            {/* AI Search Engine Visibility */}
            <div className="bg-[#061C1A]/60 border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3 text-[#7CA99B]">
                <TrendingUp className="w-4 h-4" />
                <h5 className="font-mono text-[10px] tracking-widest uppercase font-semibold">
                  Conversational AI Indexing
                </h5>
              </div>
              <p className="text-xs text-[#B8C6C1] leading-relaxed">
                {result.searchVisibilityAnalysis.aiSearch}
              </p>
            </div>
          </div>

          {/* Actionable Plan Checklist Rows */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl text-[#F4F5F1]">Your Actionable Strategy Plan</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Web Optimizations */}
              <div className="space-y-4">
                <h5 className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase border-b border-white/5 pb-2">
                  01 · WEBSITE STRUCTURE
                </h5>
                <ul className="space-y-3">
                  {result.actionablePlan.websiteOptimizations.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-[#B8C6C1] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Local SEO Tasks */}
              <div className="space-y-4">
                <h5 className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase border-b border-white/5 pb-2">
                  02 · MAP PACK & PROXIMITY
                </h5>
                <ul className="space-y-3">
                  {result.actionablePlan.localSeoTasks.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-[#B8C6C1] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content Strategy */}
              <div className="space-y-4">
                <h5 className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase border-b border-white/5 pb-2">
                  03 · AUTHORITY SYNDICATION
                </h5>
                <ul className="space-y-3">
                  {result.actionablePlan.contentStrategy.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-[#B8C6C1] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Boutique Architect Pro Tip */}
          <div className="bg-[#061C1A] border border-[#B9D8CE]/20 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="p-3 bg-[#123B35] text-[#B9D8CE] rounded-xl border border-white/10 flex-shrink-0">
              <Sliders className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h5 className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
                BOUTIQUE SYSTEM RECOMMENDATION
              </h5>
              <p className="text-xs text-[#B8C6C1] leading-relaxed">
                {result.customTips}
              </p>
            </div>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
            <p className="text-xs font-mono text-[#B8C6C1] max-w-md text-center sm:text-left">
              These recommendations work together as an interconnected organic digital ecosystem. Ready to architect this roadmap correctly?
            </p>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setResult(null)}
                className="px-5 py-3 rounded-lg border border-white/10 font-mono text-[10px] uppercase tracking-wider text-[#B8C6C1] hover:text-[#F4F5F1] hover:bg-white/5 transition-all cursor-pointer"
              >
                Reset Audit
              </button>
              <button
                onClick={() => onScheduleCallWithData(businessName, websiteUrl)}
                className="
                  flex items-center space-x-2 px-6 py-3 rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold
                  bg-[#B9D8CE] text-[#061C1A] hover:bg-[#F4F5F1] transition-all cursor-pointer shadow-md
                "
                id="audit-schedule-btn"
              >
                <span>Schedule Implementation Call</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
