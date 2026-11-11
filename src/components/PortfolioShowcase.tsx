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
  unavailable?: boolean;
};

// Images in this list are captured from the live sites. A couple of sites block
// automated capture, so they deliberately remain link-only instead of showing a made-up preview.
const projects: PortfolioProject[] = [
  { name: "Rebar & Rose", category: "E-commerce", description: "A bold online shop made for women who work hard and want gear that keeps up.", url: "https://rebarandrose.com", unavailable: true },
  { name: "LaBoy Properties", category: "Real estate & vacation rentals", description: "A welcoming place for renters and guests to explore homes and book their stay.", url: "https://laboyproperties.com", image: "/images/portfolio/laboy-properties.webp", imageAlt: "LaBoy Properties homepage showing a home exterior" },
  { name: "Foreclosure Buy Homes", category: "Real estate & auctions", description: "A clear, professional place for investors to find opportunities and get started.", url: "https://foreclosurebuyhomes.com", image: "/images/portfolio/foreclosure-buy-homes.webp", imageAlt: "Foreclosure Buy Homes homepage" },
  { name: "The Field Club", category: "Membership & recreation", description: "A polished club website that makes programs, events, and membership information easy to find.", url: "https://field-club.com", unavailable: true },
  { name: "Legacy Economic Development", category: "Community & nonprofit", description: "A resource hub that helps local entrepreneurs find programs, support, and next steps.", url: "https://legacyedc.org", image: "/images/agency-economic-mockup.png", imageAlt: "Legacy Economic Development homepage" },
  { name: "Posh Body Wellness Spa", category: "Wellness & services", description: "A luxury wellness experience built to make services, shopping, and booking feel effortless.", url: "https://poshbwellnessspa.com", image: "/images/posh-body-wellness-mockup.png", imageAlt: "Posh Body Wellness Spa homepage" },
  { name: "Dr. Sheds", category: "Construction", description: "A hardworking local-business website that puts custom work and customer trust front and center.", url: "https://www.drsheds.com/", image: "/images/drsheds-mockup.png", imageAlt: "Dr. Sheds website showing a custom shed" },
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
              {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" width="1440" height="1000" /> : <div className="portfolio-laptop__unavailable"><span>Live website</span><strong>Preview capture unavailable</strong><small>Open the project to view it live.</small></div>}
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
