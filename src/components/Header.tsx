import React, { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";

interface HeaderProps {
  onScheduleCall: () => void;
}

export default function Header({ onScheduleCall }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { currentPath, navigate } = useNavigation();

  // Monitor scroll for header styling & active section highlighting (only on homepage)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentPath !== "/") {
        return;
      }

      // Detect active section
      const sections = ["hero", "services", "system", "work", "pricing", "results", "about", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  const menuItems = [
    { id: "hero", label: "Home", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "work", label: "Portfolio", path: "/work" },
    { id: "pricing", label: "Pricing", path: "/pricing" },
    { id: "about", label: "About", path: "/about" },
    { id: "contact", label: "Contact", path: "/contact" }
  ];

  const handleLinkClick = (item: typeof menuItems[0]) => {
    setIsMobileMenuOpen(false);
    
    navigate(item.path);
  };

  const handleBrandClick = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
    if (currentPath === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      id="header-navigation"
      className={`
        fixed top-0 inset-x-0 transition-all duration-300
        ${isMobileMenuOpen ? "z-[90] lg:z-50" : "z-50"}
        ${isMobileMenuOpen
          ? "py-2 bg-[#061C1A] border-b border-white/8 shadow-lg"
          : isScrolled 
          ? "py-4 backdrop-blur-[18px] bg-[#061C1A]/85 border-b border-white/8 shadow-lg" 
          : "py-6 bg-transparent border-b border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo / Wordmark */}
        <button
          id="brand-wordmark"
          onClick={handleBrandClick}
          className="font-serif text-lg sm:text-xl tracking-widest text-[#F4F5F1] hover:text-[#B9D8CE] transition-colors focus:outline-none cursor-pointer"
        >
          THE IVANA COLLECTIVE
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary Navigation">
          {menuItems.map((item) => {
            const isPageActive = item.id === "hero"
              ? (currentPath === "/" && (activeSection === "hero" || !menuItems.some(m => m.id === activeSection)))
              : (currentPath === item.path || currentPath.startsWith(item.path + "/") || (currentPath === "/" && activeSection === item.id));
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item)}
                className="relative py-1 font-mono text-[11px] tracking-widest uppercase text-[#B8C6C1] hover:text-[#B9D8CE] transition-colors cursor-pointer group focus:outline-none"
              >
                {item.label}
                
                {/* Dynamic bottom underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B9D8CE] transition-all duration-250 group-hover:w-full" />
                
                {/* Active Section Indicator Dot */}
                {isPageActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#B9D8CE]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Call Button */}
        <div className="hidden lg:block">
          <button
            id="nav-schedule-btn"
            onClick={() => navigate("/website-generator")}
            className="
              flex items-center space-x-2 px-5 py-2.5 rounded-lg font-mono text-[11px] uppercase tracking-wider font-semibold
              bg-[#123B35] text-[#F4F5F1] hover:bg-[#B9D8CE] hover:text-[#061C1A]
              border border-[#B9D8CE]/20 transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5
            "
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Try Live Website Preview</span>
          </button>
        </div>

        {/* Mobile Burger Trigger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden min-h-11 min-w-11 grid place-items-center text-[#F4F5F1] hover:text-[#B9D8CE] transition-colors focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls={isMobileMenuOpen ? "mobile-navigation-overlay" : undefined}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          id="mobile-navigation-overlay"
          className="
            absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-[#061C1A] lg:hidden
            flex flex-col gap-6 p-5 sm:p-8 border-t border-white/5 animate-in fade-in duration-200
          "
        >
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const isPageActive = item.id === "hero"
                ? (currentPath === "/" && (activeSection === "hero" || !menuItems.some(m => m.id === activeSection)))
                : (currentPath === item.path || currentPath.startsWith(item.path + "/") || (currentPath === "/" && activeSection === item.id));
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item)}
                  className="
                    text-left font-serif text-2xl tracking-wide min-h-11 py-2 text-[#B8C6C1] hover:text-[#F4F5F1]
                    border-b border-white/5 transition-colors flex items-center justify-between group
                   font-light"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#7CA99B]/50 group-hover:text-[#B9D8CE] transition-colors">
                    {isPageActive ? "● ACTIVE" : ""}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col space-y-4">
            <button
              id="mobile-nav-schedule-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/website-generator");
              }}
              className="
                w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold
                bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-colors shadow-lg cursor-pointer
              "
            >
              <Calendar className="w-4 h-4" />
              <span>Try Live Website Preview</span>
            </button>
            
            <p className="text-[10px] text-center font-mono text-[#B8C6C1]/40 tracking-wider">
              THE IVANA COLLECTIVE &copy; 2026
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
