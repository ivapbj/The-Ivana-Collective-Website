import { useEffect, useState } from "react";
import { Calendar, Menu, X } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";

interface HeaderProps {
  onScheduleCall: () => void;
}

export default function Header({ onScheduleCall }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { currentPath, navigate } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      if (currentPath !== "/") return;

      const sections = ["hero", "services", "system", "work", "method", "results", "about", "pricing", "insights", "contact"];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { id: "hero", label: "Home", path: "/" },
    { id: "services", label: "Services", path: "/services" },
    { id: "work", label: "Work", path: "/work" },
    { id: "method", label: "The Method", path: "/method" },
    { id: "about", label: "About", path: "/about" },
    { id: "insights", label: "Insights", path: "/insights" },
    { id: "contact", label: "Contact", path: "/contact" }
  ];

  const handleLinkClick = (item: typeof menuItems[number]) => {
    setIsMobileMenuOpen(false);
    if (currentPath === "/") {
      const targetId = item.id === "contact" ? "final-cta" : item.id;
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate(item.path);
  };

  const handleBrandClick = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
    if (currentPath === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isItemActive = (item: typeof menuItems[number]) => item.id === "hero"
    ? currentPath === "/" && (activeSection === "hero" || !menuItems.some((menuItem) => menuItem.id === activeSection))
    : currentPath === item.path || currentPath.startsWith(`${item.path}/`) || (currentPath === "/" && activeSection === item.id);

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 inset-x-0 transition-all duration-300 ${isMobileMenuOpen ? "z-[1000]" : "z-50"} ${
        isScrolled
          ? "py-4 backdrop-blur-[18px] bg-[#061C1A]/85 border-b border-white/8 shadow-lg"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        <button
          id="brand-wordmark"
          onClick={handleBrandClick}
          className="min-w-0 font-serif text-base sm:text-xl tracking-[0.14em] sm:tracking-widest text-[#F4F5F1] hover:text-[#B9D8CE] transition-colors focus:outline-none cursor-pointer text-left"
        >
          THE IVANA COLLECTIVE
        </button>

        <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary Navigation">
          {menuItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleLinkClick(item)}
              className="relative py-1 font-mono text-[11px] tracking-widest uppercase text-[#B8C6C1] hover:text-[#B9D8CE] transition-colors cursor-pointer group focus:outline-none"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#B9D8CE] transition-all duration-250 group-hover:w-full" />
              {isItemActive(item) && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#B9D8CE]" />}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            id="nav-schedule-btn"
            onClick={onScheduleCall}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-lg font-mono text-[11px] uppercase tracking-wider font-semibold bg-[#123B35] text-[#F4F5F1] hover:bg-[#B9D8CE] hover:text-[#061C1A] border border-[#B9D8CE]/20 transition-all duration-200 cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule a Call</span>
          </button>
        </div>

        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center text-[#F4F5F1] transition-colors hover:text-[#B9D8CE] focus:outline-none lg:hidden"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          className="fixed inset-0 z-[1000] flex h-[100dvh] min-h-[100dvh] w-full flex-col overflow-hidden bg-[#061C1A] animate-in fade-in duration-200 lg:hidden"
        >
          <div className="flex min-h-[72px] flex-shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 sm:px-6">
            <button onClick={handleBrandClick} className="min-w-0 text-left font-serif text-base tracking-[0.16em] text-[#F4F5F1] hover:text-[#B9D8CE] transition-colors">
              THE IVANA COLLECTIVE
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-[#F4F5F1] hover:bg-[#123B35] hover:text-[#B9D8CE] transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6">
            <nav className="flex flex-col" aria-label="Mobile Navigation">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item)}
                  className="group flex min-h-12 w-full items-center justify-between gap-4 border-b border-white/10 py-2 text-left font-serif text-[clamp(1.35rem,7vw,2rem)] font-light tracking-wide text-[#B8C6C1] hover:text-[#F4F5F1] transition-colors"
                >
                  <span className="min-w-0">{item.label}</span>
                  <span className="flex-shrink-0 font-mono text-[9px] tracking-wider text-[#7CA99B] group-hover:text-[#B9D8CE] transition-colors">
                    {isItemActive(item) ? "● ACTIVE" : ""}
                  </span>
                </button>
              ))}
            </nav>

            <button
              id="mobile-nav-schedule-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onScheduleCall();
              }}
              className="mt-6 min-h-12 w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-colors shadow-lg cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Strategy Call</span>
            </button>

            <p className="mt-5 pb-[max(1rem,env(safe-area-inset-bottom))] text-[10px] text-center font-mono text-[#B8C6C1]/40 tracking-wider">
              THE IVANA COLLECTIVE &copy; 2026
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
