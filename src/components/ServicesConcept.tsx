import React from 'react';
import './ServicesConcept.css';

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

const editorialImages = ['concept-services', 'concept-portfolio', 'concept-store', 'concept-restaurant'];

export default function ServicesConcept({ name, tagline, industry, email, phone, logo, description, services, image }: Props) {
  const business = name.trim() || 'Your business';
  const offerings = services?.split(/[\n,]/).map(service => service.trim()).filter(Boolean).slice(0, 6) || [];
  const headline = tagline.trim() || 'Good work. Done with care.';
  const intro = description?.trim() || 'Thoughtful services built around what matters to you.';

  return (
    <div className="services-editorial">
      <header className="services-editorial-header">
        {logo ? <img src={logo} alt={`${business} logo`} /> : <strong>{business}</strong>}
        <nav aria-label="Sample site"><a href="#concept-services">Services</a><a href="#concept-contact">Contact</a></nav>
      </header>
      <section className="services-editorial-hero">
        <div className="services-editorial-title">
          {industry && <p className="services-editorial-label">{industry}</p>}
          <h2>{headline}</h2>
          <a className="services-editorial-link" href="#concept-contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
        <div className="services-editorial-strip" aria-hidden="true">
          {editorialImages.map((photo, index) => (
            <img key={photo} src={index === 0 && image ? image : `/images/${photo}.webp`} alt="" />
          ))}
        </div>
        <p className="services-editorial-intro">{intro}</p>
      </section>
      <section id="concept-services" className="services-editorial-offerings">
        <div className="services-editorial-heading">
          <h3>What we <em>do</em></h3>
          <span aria-hidden="true" />
        </div>
        <div className="services-editorial-feature">
          <img src={image || '/images/concept-services.webp'} alt="" loading="lazy" />
          <ul>{(offerings.length ? offerings : ['Consultation', 'Planning', 'Project support']).map((service, index) => (
            <li key={`${service}-${index}`}>{service}</li>
          ))}</ul>
        </div>
      </section>
      <footer id="concept-contact" className="services-editorial-contact">
        <h3>Let’s work <em>together.</em></h3>
        <div>
          {email && <a href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>}
          {phone && <a href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a>}
        </div>
        <small>© {new Date().getFullYear()} {business}</small>
      </footer>
    </div>
  );
}
