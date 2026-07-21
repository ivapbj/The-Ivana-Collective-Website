import React from "react";
import { Mail, MapPin, ArrowUp, Calendar, Instagram, Linkedin, FileText } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";

interface FooterProps {
  onScheduleCall: () => void;
}

export default function Footer({ onScheduleCall }: FooterProps) {
  const { currentPath, navigate } = useNavigation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (id: string, path: string) => {
    if (currentPath === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate(path);
  };

  return (
    <footer id="footer" className="relative bg-[#041211] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute bottom-0 right-0 aspect-square w-full max-w-[400px] rounded-full bg-gradient-to-t from-[#123B35]/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Statement */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl tracking-widest text-[#F4F5F1]">
              THE IVANA COLLECTIVE
            </h3>
            <p className="text-sm text-[#B8C6C1] leading-relaxed max-w-xs">
              Bespoke high-performing digital systems fusing visual editorial design with technical search engine visibility. Designed for small businesses ready to be found, trusted, and chosen.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#B8C6C1] hover:text-[#B9D8CE] hover:border-[#B9D8CE]/40 transition-colors"
                id="social-link-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#B8C6C1] hover:text-[#B9D8CE] hover:border-[#B9D8CE]/40 transition-colors"
                id="social-link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:info@theivanacollective.com" 
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#B8C6C1] hover:text-[#B9D8CE] hover:border-[#B9D8CE]/40 transition-colors"
                id="social-link-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B] mb-6">
              SERVICES
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Website Design", id: "services", path: "/services" },
                { label: "Local SEO & Map Packs", id: "services", path: "/services" },
                { label: "WordPress & Shopify", id: "services", path: "/services" },
                { label: "Authority Copywriting", id: "services", path: "/services" },
                { label: "AI Search Optimization", id: "services", path: "/services" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.id, link.path)}
                    className="text-sm text-[#B8C6C1] hover:text-[#B9D8CE] transition-colors focus:outline-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B] mb-6">
              COMPANY
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Services Portfolio", id: "services", path: "/services" },
                { label: "Selected Case Studies", id: "work", path: "/work" },
                { label: "The Architectural Path", id: "method", path: "/method" },
                { label: "Boutique Philosophy", id: "about", path: "/about" },
                { label: "Insights & Strategy", id: "insights", path: "/insights" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.id, link.path)}
                    className="text-sm text-[#B8C6C1] hover:text-[#B9D8CE] transition-colors focus:outline-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Access */}
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
              ENGAGE
            </h4>
            <div className="space-y-4 text-sm text-[#B8C6C1]">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#7CA99B]" />
                <a href="mailto:info@theivanacollective.com" className="hover:text-[#B9D8CE] transition-colors font-mono text-xs">
                  info@theivanacollective.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#7CA99B]" />
                <span>Boutique Remote agency. Servicing globally with localized SEO focus.</span>
              </div>
            </div>
            <button
              onClick={onScheduleCall}
              className="
                w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold
                bg-[#123B35] text-[#F4F5F1] hover:bg-[#B9D8CE] hover:text-[#061C1A]
                border border-[#B9D8CE]/25 transition-all duration-200 cursor-pointer shadow-md
              "
              id="footer-cta-booking"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule a Strategy Call</span>
            </button>
          </div>
        </div>

        {/* Big Wordmark Detail - Architectural Backing */}
        <div className="relative py-8 select-none pointer-events-none text-center">
          <h2 className="
            font-serif text-[4vw] sm:text-[6vw] md:text-[8vw] lg:text-[10vw] font-bold text-center 
            tracking-wider text-white/[0.015] leading-none select-none uppercase
          ">
            THE IVANA COLLECTIVE
          </h2>
        </div>

        {/* Bottom copyright & disclosures */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-[11px] font-mono text-[#B8C6C1]/40 space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <span>&copy; {new Date().getFullYear()} The Ivana Collective. All rights reserved.</span>
            <span className="flex items-center gap-1">
              <FileText className="w-3 h-3" />
              Designed for compliance (ADA & WCAG AA)
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="hover:text-[#B9D8CE] transition-colors focus:outline-none">Privacy Policy</button>
            <button className="hover:text-[#B9D8CE] transition-colors focus:outline-none">Terms & Conditions</button>
            <button 
              onClick={handleScrollToTop}
              className="flex items-center space-x-1 hover:text-[#B9D8CE] transition-colors focus:outline-none group cursor-pointer"
              id="back-to-top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
