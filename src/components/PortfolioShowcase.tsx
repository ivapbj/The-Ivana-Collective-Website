import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "../context/NavigationContext";
import "./PortfolioShowcase.css";

type PortfolioProject = {
  name: string;
  category: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  unavailable?: boolean;
};

const projects: PortfolioProject[] = [
  { name: "Rebar & Rose", category: "E-commerce", description: "A complete online shop for women’s construction apparel, built to make browsing collections, choosing sizes, and checking out simple.", url: "https://rebarandrose.com", unavailable: true },
  { name: "LaBoy Properties", category: "Property management & vacation rentals", description: "A complete property-management system where renters can explore homes, apply, pay rent, and submit requests—making day-to-day operations easier for the real estate team.", url: "https://laboyproperties.com", image: "/images/portfolio/laboy-properties.webp", imageAlt: "Full LaBoy Properties homepage showing a residential rental home", imageFit: "contain" },
  { name: "Foreclosure Buy Homes", category: "Custom real estate auction platform", description: "A custom investor system with controlled online auctions, bidder approval, and a Gemini-powered property analysis tool—all built around the foreclosure buying process.", url: "https://foreclosurebuyhomes.com", image: "/images/portfolio/foreclosure-buy-homes.webp", imageAlt: "Foreclosure Buy Homes homepage showing the investor auction platform" },
  { name: "Legacy Economic Development", category: "Community & nonprofit", description: "A clear resource hub that helps local entrepreneurs find grants, workshops, and one-on-one business support without getting lost in the details.", url: "https://legacyedc.org", image: "/images/agency-economic-mockup.png", imageAlt: "Legacy Economic Development homepage" },
  { name: "Posh Body Wellness Spa", category: "Wellness, booking & e-commerce", description: "A luxury wellness website that brings service booking, skincare shopping, and social content together in one polished client experience.", url: "https://poshbwellnessspa.com", image: "/images/posh-body-wellness-mockup.png", imageAlt: "Posh Body Wellness Spa homepage" },
  { name: "Dr. Sheds", category: "Construction & local search", description: "A custom construction website designed to showcase finished sheds, build trust with local customers, and turn more searches into inquiries.", url: "https://www.drsheds.com/", image: "/images/drsheds-mockup.png", imageAlt: "Dr. Sheds website showing a custom shed" },
];

export default function PortfolioShowcase({ onScheduleCall }: { onScheduleCall: () => void }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = scroller.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let last = performance.now();
    const move = (time: number) => {
      const elapsed = time - last;
      last = time;
      if (!paused && !element.matches(":focus-within")) {
        const end = element.scrollWidth - element.clientWidth;
        if (end > 0) element.scrollLeft = element.scrollLeft >= end - 1 ? 0 : element.scrollLeft + elapsed * 0.018;
      }
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  const scrollByCard = (direction: number) => scroller.current?.scrollBy({ left: direction * Math.min(scroller.current.clientWidth * 0.85, 520), behavior: "smooth" });

  return <section className="portfolio-showcase" aria-labelledby="featured-work-heading">
    <div className="portfolio-showcase__header">
      <div>
        <p className="portfolio-showcase__eyebrow">FEATURED PORTFOLIO</p>
        <h2 id="featured-work-heading">Work made for real businesses.</h2>
        <p className="portfolio-showcase__intro">Take a look at websites I&apos;ve created for businesses ready to stand out online.</p>
      </div>
      <Link href="/portfolio" className="portfolio-showcase__all">View our portfolio <ArrowRight size={16} aria-hidden="true" /></Link>
    </div>

    <div className="portfolio-showcase__controls" aria-label="Portfolio gallery controls">
      <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous projects"><ArrowLeft size={19} /></button>
      <button type="button" onClick={() => scrollByCard(1)} aria-label="Next projects"><ArrowRight size={19} /></button>
    </div>

    <div className="portfolio-showcase__scroller" ref={scroller} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} tabIndex={0} aria-label="Featured website projects. Scroll or use the previous and next buttons to browse.">
      {projects.map((project) => <article className="portfolio-card" key={project.name}>
        <a href={project.url} target="_blank" rel="noreferrer" className="portfolio-card__visual" aria-label={`View ${project.name} website (opens in a new tab)`}>
          <div className="portfolio-laptop">
            <div className="portfolio-laptop__camera" aria-hidden="true" />
            <div className={`portfolio-laptop__screen ${project.unavailable ? "portfolio-laptop__screen--unavailable" : ""}`}>
              {project.image ? <img className={project.imageFit === "contain" ? "portfolio-laptop__image--full" : undefined} src={project.image} alt={project.imageAlt} loading="lazy" width="1440" height="1000" /> : <div className="portfolio-laptop__unavailable"><span>Live e-commerce website</span><strong>Rebar &amp; Rose</strong><small>Open the live shop to explore the collection.</small></div>}
            </div>
            <div className="portfolio-laptop__base" aria-hidden="true" />
          </div>
        </a>
        <div className="portfolio-card__copy">
          <p>{project.category}</p><h3>{project.name}</h3><span>{project.description}</span>
          <div className="portfolio-card__actions"><a href={project.url} target="_blank" rel="noreferrer">View Website <ExternalLink size={14} aria-hidden="true" /></a><Link href="/portfolio">See Project Details</Link></div>
        </div>
      </article>)}
    </div>

    <div className="portfolio-showcase__cta">
      <div><p>YOUR TURN</p><h3>Love what you see? Let&apos;s create something for your business.</h3><span>See what your own website could look like before getting started.</span></div>
      <div className="portfolio-showcase__cta-actions"><Link href="/website-generator">Try Your Free Website Preview <ArrowRight size={17} /></Link><button type="button" onClick={onScheduleCall}>Schedule a Call</button></div>
    </div>
  </section>;
}
