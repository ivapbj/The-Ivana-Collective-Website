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

const editorialImages = [
  'concept-services',
  'services-wedding-reception',
  'services-wedding-details',
  'services-wedding-couple',
];

export default function ServicesConcept({ name, tagline, industry, email, phone, logo, description, services, image }: Props) {
  const business = name.trim() || 'Your business';
  const offerings = services?.split(/[\n,]/).map(service => service.trim()).filter(Boolean).slice(0, 6) || [];
  const headline = tagline.trim() || 'Good work. Done with care.';
  const showWeddingSample = !industry.trim() && !name.trim();
  const intro = description?.trim() || (showWeddingSample
    ? 'From finding your venue to the final toast, we plan weddings that feel like you.'
    : 'Thoughtful services built around what matters to you.');
  const sampleOfferings = showWeddingSample
    ? ['Full-service wedding planning', 'Wedding design and styling', 'Wedding-day coordination']
    : ['Consultation', 'Planning', 'Project support'];

  return (
    <div className="services-editorial">
      <header className="services-editorial-header">
        {logo ? <img src={logo} alt={`${business} logo`} /> : <strong>{business}</strong>}
        <nav aria-label="Sample site"><a href="#concept-services">Services</a><a href="#concept-contact">Contact</a></nav>
      </header>
      <section className="services-editorial-hero">
        <div className="services-editorial-title">
          {(industry || showWeddingSample) && <p className="services-editorial-label">{industry || 'Wedding Planning & Design'}</p>}
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
          <img src={image || '/images/services-wedding-reception.webp'} alt="" loading="lazy" />
          <ul>{(offerings.length ? offerings : sampleOfferings).map((service, index) => (
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
