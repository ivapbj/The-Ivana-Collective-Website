import React, { useEffect, useRef, useState } from "react";
import SeoMeta from "../components/SeoMeta";
import { ProjectImage } from "../components/ProjectImage";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import { ArrowUpRight } from "lucide-react";
import "./WorkPage.css";

interface WorkPageProps {
  onSelectProject: (project: Project) => void;
  onScheduleCall: () => void;
}

function DeviceImage({ project }: { project: Project }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className="work-image-holder" onErrorCapture={(event) => {
      const image = event.target as HTMLImageElement;
      if (project.id === "aunalux" && image.getAttribute("src") === "/images/IMG_5900.png") setMissing(true);
    }}>
      {missing
        ? <span className="work-missing-image">Project image currently unavailable</span>
        : <ProjectImage project={project} className="work-device-image" />}
    </div>
  );
}

function DeviceDisplay({ project }: { project: Project }) {
  return (
    <div className="work-device-wrap">
      <div className="work-laptop" aria-label={`Desktop image of ${project.client}`}>
        <div className="work-laptop-lid">
          <div className="work-laptop-camera" />
          <div className="work-laptop-screen">
            <DeviceImage project={project} />
          </div>
        </div>
        <div className="work-laptop-base"><span /></div>
      </div>
      <div className="work-phone">
        <div className="work-phone-screen">
          <div className="work-phone-island" aria-hidden="true" />
          <DeviceImage project={project} />
        </div>
      </div>
      <p className="work-phone-caption">Desktop project image shown within phone frame.</p>
    </div>
  );
}

export default function WorkPage({ onSelectProject, onScheduleCall }: WorkPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(page.querySelectorAll<HTMLElement>(".work-reveal"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("work-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });
    page.classList.add("work-motion-ready");
    items.forEach(item => observer.observe(item as HTMLElement));
    return () => {
      observer.disconnect();
      page.classList.remove("work-motion-ready");
    };
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkPortfolio",
    "name": "The Ivana Collective Digital Portfolio",
    "creator": { "@type": "ProfessionalService", "name": "The Ivana Collective" },
    "description": "A collection of websites and online projects created for real businesses."
  };
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Selected Work", item: "/work" }
  ];

  return (
    <div className="work-page" ref={pageRef}>
      <SeoMeta title="Selected Work & Case Studies"
        description="Explore websites we have created for real businesses and organizations."
        canonicalPath="/work" schema={schema} breadcrumbs={breadcrumbs} />
      <div className="work-forest" aria-hidden="true" />
      <div className="work-shade" aria-hidden="true" />

      <div className="work-container">
        <header className="work-intro">
          <span className="work-eyebrow">OUR WORK</span>
          <h1>Websites made for <br /><span>real businesses.</span></h1>
          <p>Take a look at a few of the websites we have created—each one shaped around the client’s business, customers, and goals.</p>
        </header>

        <div className="work-list">
          {PROJECTS_DATA.map((project, index) => (
            <article className={`work-project ${index % 2 ? "work-project-reverse" : ""}`} key={project.id}>
              <div className="work-visual work-reveal">
                <div className="work-project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")} / {String(PROJECTS_DATA.length).padStart(2, "0")}</div>
                {project.websiteUrl ? (
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.client} website (opens in a new tab)`} className="work-device-link">
                    <DeviceDisplay project={project} />
                  </a>
                ) : (
                  <button type="button" onClick={() => onSelectProject(project)} className="work-device-link" aria-label={`View ${project.client} case study`}>
                    <DeviceDisplay project={project} />
                  </button>
                )}
              </div>

              <div className="work-copy work-reveal">
                <span className="work-eyebrow">{project.industry}</span>
                <h2>{project.client}</h2>
                <p className="work-description">{project.title}</p>
                <div className="work-tags">
                  {project.services.map((tag, idx) => <span key={idx}>{tag}</span>)}
                </div>
                <div className="work-outcome">
                  <span>Primary outcome</span>
                  <p>{project.results[0]}</p>
                </div>
                <div className="work-actions">
                  <button type="button" onClick={() => onSelectProject(project)} className="work-action work-action-primary">View case study <ArrowUpRight size={16} aria-hidden="true" /></button>
                  {project.websiteUrl && <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="work-action work-action-secondary" aria-label={`Visit ${project.client} website (opens in a new tab)`}>Visit website <ArrowUpRight size={16} aria-hidden="true" /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="work-cta">
          <h2>Ready for a website that works for you?</h2>
          <p>Let’s talk about what your business needs and what would make the biggest difference.</p>
          <button onClick={onScheduleCall} className="work-action work-action-primary">Schedule a Free Call <ArrowUpRight size={16} aria-hidden="true" /></button>
        </section>
      </div>
    </div>
  );
}
