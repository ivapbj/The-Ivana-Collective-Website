import React from "react";
import Keycap from "./Keycap";
import { Link } from "../context/NavigationContext";
import { ArrowRight } from "lucide-react";

const premiumKeyboardHero = "/images/premium-keyboard-hero.jpg";

interface KeycapCompositionProps {
  onKeyClick: (target: string) => void;
  activeKey?: string;
}

const HOTSPOTS = [
  {
    id: "web-design",
    category: "DESIGN",
    label: "Web Design",
    tooltip: "Beautiful, easy-to-use custom websites built specifically for your small business. No templates, just high-end custom quality.",
    left: "8.5%",
    top: "39.5%",
    href: "/services/web-design"
  },
  {
    id: "seo-visibility",
    category: "GOOGLE VISIBILITY",
    label: "Google Search (SEO)",
    tooltip: "Helping local customers find your website easily when they search on Google and Google Maps.",
    left: "16%",
    top: "33%",
    href: "/services/seo"
  },
  {
    id: "grow",
    category: "SOCIAL MEDIA",
    label: "Social Media",
    tooltip: "Engaging social media posts, email newsletters, and local updates to grow your active customer base.",
    left: "30.5%",
    top: "48%",
    href: "/services/content-growth"
  },
  {
    id: "optimize",
    category: "WEBSITE SPEED",
    label: "Fast Pages",
    tooltip: "We clean up photos and structure code so your pages load instantly on any mobile phone or tablet.",
    left: "49.5%",
    top: "84%",
    href: "/method"
  },
  {
    id: "ivana-collective",
    category: "OUR STUDIO",
    label: "The Ivana Collective",
    tooltip: "Our main home page. We are a custom design studio dedicated to helping local brands and wellness creators look amazing online.",
    left: "53.5%",
    top: "61%",
    href: "/"
  }
];

export default function KeycapComposition({ onKeyClick, activeKey }: KeycapCompositionProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [hoveredHotspot, setHoveredHotspot] = React.useState<string | null>(null);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div 
      className="relative w-full flex flex-col items-center justify-center overflow-visible py-4"
      id="hero-key-composition"
    >
      {/* Background radial ambient glow under the keyboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-gradient-to-r from-[#123B35]/35 to-[#7CA99B]/5 rounded-full blur-[120px] pointer-events-none" />

      {isMobile ? (
        /* MOBILE / TABLET COMPACT DECK with Preview Image */
        <div className="w-full max-w-[480px] flex flex-col items-center gap-6 z-10 px-4">
          {/* Stunning Preview of the mechanical keyboard */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_15px_30px_rgba(6,28,26,0.6)] aspect-[16/9] bg-[#0d2623]/40">
            <img 
              src={premiumKeyboardHero} 
              alt="The Ivana Collective mechanical keyboard" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              id="mobile-keyboard-preview"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061C1A] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#7CA99B] bg-[#123B35]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#B9D8CE]/10">
                CONSOLE METRIC DECK
              </span>
              <span className="font-mono text-[9px] text-[#B8C6C1]/60">
                ACTIVE
              </span>
            </div>
          </div>

          <div className="text-center space-y-1">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
              Tactile Navigation Console
            </span>
            <p className="text-[11px] text-[#B8C6C1]/60 font-mono">
              Tap any console key below to interact with our systems
            </p>
          </div>

          {/* Large Enter Key - The Ivana Collective */}
          <div className="w-full flex justify-center">
            <Keycap
              label={["The Ivana", "Collective"]}
              size="xl"
              isActive={activeKey === "ivana-collective"}
              onClick={() => onKeyClick("ivana-collective")}
              className="w-full max-w-[280px]"
            />
          </div>

          {/* Clean grid of key service buttons */}
          <div className="grid grid-cols-2 gap-3.5 w-full">
            <Keycap
              label={["WEB", "DESIGN"]}
              size="md"
              isActive={activeKey === "web-design"}
              onClick={() => onKeyClick("web-design")}
              className="w-full h-20"
            />
            <Keycap
              label="GOOGLE SEO"
              size="md"
              isActive={activeKey === "seo-visibility"}
              onClick={() => onKeyClick("seo-visibility")}
              className="w-full h-20"
            />
            <Keycap
              label={["SOCIAL", "MEDIA"]}
              size="md"
              isActive={activeKey === "grow"}
              onClick={() => onKeyClick("grow")}
              className="w-full h-20"
            />
            <Keycap
              label="FAST PAGES"
              size="md"
              isActive={activeKey === "optimize"}
              onClick={() => onKeyClick("optimize")}
              className="w-full h-20"
            />
          </div>
        </div>
      ) : (
        /* DESKTOP ADVANCED INTERACTIVE LAYOUT */
        <div className="w-full max-w-5xl flex flex-col items-center gap-6 z-10 px-4">
          
          {/* Header/Legend bar */}
          <div className="w-full flex items-center justify-between border-b border-white/5 pb-4 px-2">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#B9D8CE] animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-[#7CA99B] uppercase">
                THE IVANA COLLECTIVE · INTERACTIVE HARDWARE ENGINE
              </span>
            </div>
            <div className="font-mono text-[10px] text-[#B8C6C1]/50">
              [ 45° DIAGONAL PERSPECTIVE / STUDIO LIGHT ]
            </div>
          </div>

          {/* Core Mechanical Keyboard Frame Container */}
          <div className="relative w-full aspect-[16/9] rounded-3xl border border-white/10 shadow-[0_25px_60px_rgba(4,16,14,0.9)] bg-[#0A2320]/40 group/keyboard">
            
            {/* The Stunning Mechanical Keyboard Photograph wrapped inside a helper to avoid clipping tooltips */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <img 
                src={premiumKeyboardHero} 
                alt="Premium custom mechanical keyboard featuring deep emerald green matte keycaps" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/keyboard:scale-[1.01]"
                referrerPolicy="no-referrer"
                id="desktop-keyboard-image"
              />

              {/* Subtle Gradient Overlays for High Luxury Mood */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061C1A]/45 via-transparent to-[#061C1A]/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#123B35]/5" />
            </div>

            {/* Interactive Hotspots Overlaid */}
            {HOTSPOTS.map((hotspot) => {
              const isActive = activeKey === hotspot.id;
              const isHovered = hoveredHotspot === hotspot.id;

              const leftPercent = parseFloat(hotspot.left);
              const topPercent = parseFloat(hotspot.top);

              const alignLeft = leftPercent < 25;
              const alignRight = leftPercent > 75;
              const positionBelow = topPercent < 25;

              // Horizontal positioning classes
              let positionXClass = "left-1/2 -translate-x-1/2";
              if (alignLeft) {
                positionXClass = "left-0 translate-x-0";
              } else if (alignRight) {
                positionXClass = "right-0 left-auto translate-x-0";
              }

              // Vertical positioning classes
              let positionYClass = "bottom-full mb-3";
              if (positionBelow) {
                positionYClass = "top-full mt-3";
              }

              // Chevron positioning and styling classes
              let chevronClass = "";
              if (positionBelow) {
                let chevronX = "left-1/2 -translate-x-1/2";
                if (alignLeft) {
                  chevronX = "left-6 translate-x-0";
                } else if (alignRight) {
                  chevronX = "right-6 left-auto translate-x-0";
                }
                chevronClass = `w-2.5 h-2.5 bg-[#061C1A] border-l border-t border-[#B9D8CE]/35 rotate-45 absolute -top-1.25 ${chevronX}`;
              } else {
                let chevronX = "left-1/2 -translate-x-1/2";
                if (alignLeft) {
                  chevronX = "left-6 translate-x-0";
                } else if (alignRight) {
                  chevronX = "right-6 left-auto translate-x-0";
                }
                chevronClass = `w-2.5 h-2.5 bg-[#061C1A] border-r border-b border-[#B9D8CE]/35 rotate-45 absolute -bottom-1.25 ${chevronX}`;
              }

              let zIndexClass = "z-30";
              if (isHovered) {
                zIndexClass = "z-[110]";
              } else if (isActive) {
                zIndexClass = "z-[100]";
              }

              return (
                <div
                  key={hotspot.id}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none transition-all duration-300 ${zIndexClass}`}
                  style={{ left: hotspot.left, top: hotspot.top }}
                  onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                >
                  {/* Glowing Tap/Click Trigger Area */}
                  <button
                    onClick={() => onKeyClick(hotspot.id)}
                    className={`
                      w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full
                      transition-all duration-300 focus:outline-none relative group/btn cursor-pointer pointer-events-auto
                    `}
                    id={`hotspot-${hotspot.id}`}
                  >
                    {/* Pulsing Backing Shadow Glow */}
                    <div className={`
                      absolute inset-0 rounded-full transition-all duration-300
                      ${isActive 
                        ? "bg-[#B9D8CE]/25 scale-150 animate-pulse border border-[#B9D8CE]/40" 
                        : "bg-black/40 scale-100 group-hover/btn:bg-[#B9D8CE]/15 group-hover/btn:scale-135 border border-white/5 group-hover/btn:border-[#B9D8CE]/30"}
                    `} />

                    {/* Central Glow Core */}
                    <div className={`
                      w-3 h-3 rounded-full transition-all duration-300 relative z-10
                      ${isActive 
                        ? "bg-[#B9D8CE] shadow-[0_0_15px_#B9D8CE] scale-125" 
                        : "bg-[#7CA99B] group-hover/btn:bg-[#B9D8CE] shadow-[0_0_5px_rgba(124,169,155,0.5)] group-hover/btn:shadow-[0_0_10px_#B9D8CE]"}
                    `} />

                    {/* Ping Animation for Passive discovery */}
                    {!isActive && (
                      <div className="absolute w-5 h-5 rounded-full border border-[#B9D8CE]/40 animate-ping opacity-30 pointer-events-none" />
                    )}
                  </button>

                  {/* High Luxury Floating Tooltip */}
                  <div className={`
                    absolute ${positionXClass} ${positionYClass} transition-all duration-300 z-50
                    ${isHovered || isActive 
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
                      : "opacity-0 translate-y-2 scale-95 pointer-events-none"}
                  `}>
                    <div className="bg-[#061C1A]/95 backdrop-blur-md border border-[#B9D8CE]/35 rounded-xl px-4.5 py-3 shadow-[0_15px_30px_rgba(6,28,26,0.85)] flex flex-col gap-1 text-center min-w-[200px]">
                      <span className="font-mono text-[9px] tracking-widest text-[#7CA99B] uppercase font-bold">
                        {hotspot.category || hotspot.id.replace("-", " ").toUpperCase()}
                      </span>
                      <p className="text-[#F4F5F1] font-serif text-xs font-semibold whitespace-nowrap">
                        {hotspot.label}
                      </p>
                      <p className="text-[#B8C6C1]/75 font-sans text-[10px] leading-relaxed max-w-[220px]">
                        {hotspot.tooltip}
                      </p>
                      
                      {/* Interactive link inside tooltip */}
                      <div className="mt-2 pt-2 border-t border-white/5 flex flex-col items-center gap-1">
                        <Link 
                          href={hotspot.href}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[9px] font-mono font-semibold uppercase tracking-wider text-[#B9D8CE] hover:text-[#061C1A] hover:bg-[#B9D8CE] rounded bg-[#123B35]/40 border border-[#B9D8CE]/20 transition-all cursor-pointer"
                        >
                          <span>Explore {hotspot.label}</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </Link>
                        <span className="text-[7px] font-mono text-[#B8C6C1]/30 uppercase tracking-widest mt-0.5">
                          or click keycap to navigate [↵]
                        </span>
                      </div>
                    </div>
                    {/* Tooltip Chevron */}
                    <div className={chevronClass} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Informational help legend underneath the keyboard */}
          <div className="w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-2 text-[#B8C6C1]/40 text-[10px] font-mono select-none">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7CA99B]" />
              Hover keycaps to scan blueprints
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9D8CE] animate-pulse" />
              Click keycaps to navigate sections
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9D8CE]" />
              Glowing point marks active selection
            </span>
          </div>

        </div>
      )}
    </div>
  );
}
