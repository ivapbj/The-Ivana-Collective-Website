import React from 'react';
import './PortfolioConcept.css';

type Props = {
  name: string;
  tagline: string;
  industry: string;
  email: string;
  phone: string;
  logo: string | null;
  description?: string;
  services?: string;
  image?: string;
};

export default function PortfolioConcept({ name, tagline, industry, email, phone, logo, description, services, image }: Props) {
  const displayName = name.trim() || 'Your portfolio';
  const projects = services?.split(/[\n,]/).map(item => item.trim()).filter(Boolean).slice(0, 6) || [];
  const headline = tagline.trim() || 'Work with a point of view.';
  const photo = image || '/images/concept-portfolio.webp';

  return (
    <div className="portfolio-immersive">
      <section className="portfolio-immersive-hero">
        <img className="portfolio-immersive-image" src={photo} alt="" />
        <header className="portfolio-immersive-nav">
          {logo ? <img src={logo} alt={`${displayName} logo`} /> : <strong>{displayName}</strong>}
          <nav aria-label="Portfolio preview"><a href="#portfolio-about">About</a><a href="#portfolio-work">Work</a><a href="#portfolio-contact">Contact</a></nav>
        </header>
        <div className="portfolio-immersive-title"><h2>{headline}</h2></div>
        <a className="portfolio-immersive-jump" href="#portfolio-work">Selected work <span aria-hidden="true">↓</span></a>
      </section>
      <section id="portfolio-about" className="portfolio-immersive-about">
        {industry && <p>{industry}</p>}
        <h3>{displayName}</h3>
        {description && <p className="portfolio-immersive-description">{description}</p>}
      </section>
      <section id="portfolio-work" className="portfolio-immersive-work">
        <h3>Selected work</h3>
        <ol>{(projects.length ? projects : ['Featured project', 'Recent work', 'Independent projects']).map((project, index) => (
          <li key={`${project}-${index}`}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><strong>{project}</strong></li>
        ))}</ol>
      </section>
      <footer id="portfolio-contact" className="portfolio-immersive-contact">
        <h3>Get in touch</h3>
        {email && <a href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>}
        {phone && <a href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a>}
        <small>© {new Date().getFullYear()} {displayName}</small>
      </footer>
    </div>
  );
}
