import React from "react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";
import "./CaseStudyPage.css";

type Study = {
  slug: string; name: string; industry: string; title: string; description: string; background: string;
  challenge: string; solution: string; features: string[]; technologies: string[];
  outcome: string; heroImages: Array<[string, string]>; gallery: Array<[string, string]>; services: Array<[string, string]>;
};

const image = (name: string) => `/images/case-studies/${name}`;

const studies: Record<string, Study> = {
  "rebar-and-rose": {
    slug: "rebar-and-rose", name: "Rebar & Rose", industry: "E-commerce / WooCommerce",
    title: "A storefront made for the women who build.",
    description: "A private case-study review of Rebar & Rose, a WooCommerce workwear storefront with product variations, shopping flows and customer contact paths.",
    background: "IMG_1436.jpeg",
    challenge: "Translate a distinctive construction-workwear identity into a store that makes products, options and customer next steps easy to understand.",
    solution: "This was a brand-led WooCommerce implementation, not a generic product grid. The storefront brings the workwear collection, category browsing, variation selection, cart feedback and customer contact path into one consistent shopping experience that feels as considered as the brand itself.",
    outcome: "For product-based businesses, the goal is a store that makes it easier to understand what is being sold, choose the right option and move confidently to the next step—while giving the owner a manageable product structure behind the scenes.",
    features: ["Catalog and category browsing", "Color and size variations", "Cart feedback", "Customer contact pathway"],
    technologies: ["WordPress", "WooCommerce", "Elementor", "Responsive storefront"],
    heroImages: [["Shop the collection", "crops/rebar-shop-all.webp"], ["Browse the collection", "crops/rebar-categories.webp"]],
    gallery: [["Shop collections", "crops/rebar-shop-all.webp"], ["Products and categories", "crops/rebar-categories.webp"], ["Product options", "crops/rebar-options.webp"], ["Cart confirmation", "crops/rebar-cart.webp"], ["Customer contact", "crops/rebar-contact.webp"]],
    services: [["WooCommerce development", "/services/woocommerce-development"], ["E-commerce websites", "/services/ecommerce-websites"]]
  },
  "laboy-properties": {
    slug: "laboy-properties", name: "LaBoy Properties", industry: "Property management / rentals",
    title: "A property system built to give managers time back.",
    description: "A private case-study review of LaBoy Properties: a custom property-management and booking experience connecting rental discovery, applications, availability and tenant next steps.",
    background: "IMG_1437.jpeg",
    challenge: "Marie needed more than a brochure site. Residential rentals and vacation stays needed a clear way to be discovered, evaluated and acted on—without pushing every renter question and admin task back into a manual process.",
    solution: "The work created a custom property-management and booking experience: filterable available properties, detailed listing pages, galleries, amenities, availability and calls to apply or book. Custom functionality supports the rental workflow and connects renters to Innago for tenant-facing steps. The featured 1 Crystal Way listing is in Palm Coast, Florida.",
    outcome: "This is the kind of connected system that helps property managers reduce repetitive admin, give applicants and renters a clearer path, and support rent collection, applications and maintenance-request workflows through the right connected tools—without representing every workflow as fully automated.",
    features: ["Custom property discovery", "Booking and availability experience", "Application pathways", "Connected tenant workflows"],
    technologies: ["WordPress", "Elementor", "Custom functionality", "Innago-connected tenant tools"],
    heroImages: [["Available properties", "IMG_1444.jpeg"], ["Property detail", "IMG_1446.jpeg"]],
    gallery: [["Available properties", "IMG_1444.jpeg"], ["Property detail", "IMG_1446.jpeg"], ["Availability calendar", "IMG_1449.jpeg"], ["Mobile navigation", "IMG_1450.jpeg"], ["Amenities and apply", "IMG_1452.jpeg"]],
    services: [["Property management websites", "/industries/property-management"], ["Custom website design", "/services/web-design"]]
  },
  "llanos-electrolysis": {
    slug: "llanos-electrolysis", name: "Llanos Electrolysis", industry: "Beauty & wellness / local service",
    title: "A refined digital home for specialized care.",
    description: "A private case-study review of Llanos Electrolysis, combining editorial service design, local content structure and clear appointment paths.",
    background: "IMG_1435.jpeg",
    challenge: "Present specialized electrolysis, skin and nail services in a calm, understandable experience while helping visitors find the relevant service and consultation path.",
    solution: "The redesign uses individual service pages, clear content hierarchy, appointment calls to action, mobile-first presentation and location-focused content. Each service is given a more understandable path from first question to consultation, without making medical-outcome, ranking or business-result claims.",
    outcome: "For wellness businesses with several specialized services, a clearer content system can make the site feel easier to trust and easier to use—especially from a phone.",
    features: ["Specialized service pages", "Consultation and appointment paths", "Location-focused content", "Mobile-first hierarchy"],
    technologies: ["WordPress", "Elementor", "Rank Math SEO", "Structured service content"],
    heroImages: [["Specialized electrolysis service", "IMG_1455.jpeg"], ["Skin and nail treatments", "IMG_1456.jpeg"]],
    gallery: [["Specialized electrolysis service", "IMG_1455.jpeg"], ["Skin and nail treatments", "IMG_1456.jpeg"], ["Seasonal spa services", "IMG_1454.jpeg"]],
    services: [["Beauty and wellness websites", "/industries/beauty-wellness"], ["Website redesign", "/services/website-redesign"]]
  },
  "foreclosurebuyhomes": {
    slug: "foreclosurebuyhomes", name: "ForeclosureBuyHomes", industry: "Custom platform / investor tools",
    title: "Property discovery backed by purposeful technology.",
    description: "A private case-study review of ForeclosureBuyHomes, a custom real-estate platform with investor access paths and Gemini-powered analysis integration.",
    background: "IMG_1438.jpeg",
    challenge: "Organize property discovery and distinct investor or homeowner pathways for a specialized real-estate workflow without exposing private account or transaction information.",
    solution: "The implementation provides regional property discovery, investor registration and approval concepts, gated research access and separate information paths. Gemini-powered investor analysis is integrated. Auction and post-auction workflows change over time, so this review does not characterize unverified or planned transaction features as live.",
    outcome: "This demonstrates what happens when a business needs more than pages: the website can become a structured front end for specialized roles, guided access and custom operational workflows.",
    features: ["Regional property discovery", "Investor registration concepts", "Gated analysis", "Separate investor and homeowner journeys"],
    technologies: ["WordPress", "WooCommerce", "YITH Auctions", "Gemini API integration"],
    heroImages: [["Investor market analysis", "IMG_1461.jpeg"], ["Property discovery by region", "IMG_1459.jpeg"]],
    gallery: [["Investor market analysis", "IMG_1461.jpeg"], ["Property discovery by region", "IMG_1459.jpeg"], ["Registration to bid", "IMG_1458.jpeg"], ["Investor and homeowner journeys", "IMG_1457.jpeg"]],
    services: [["Custom auction platforms", "/industries/auction-platforms"], ["Custom business systems", "/services/custom-business-systems"]]
  }
};

export default function CaseStudyPage({ slug, onScheduleCall }: { slug: string; onScheduleCall: () => void }) {
  const study = studies[slug];
  if (!study) return null;
  const path = `/case-studies/${study.slug}`;
  return <article className="case-study-page">
    <SeoMeta title={`${study.name} Case Study`} description={study.description} canonicalPath={path} noIndex
      breadcrumbs={[{ name: "Home", item: "/" }, { name: "Selected Work", item: "/work" }, { name: study.name, item: path }]}
      schema={{ "@type": "CreativeWork", "@id": `https://theivanacollective.com${path}#case-study`, name: `${study.name} private case study`, description: study.description, author: { "@id": "https://theivanacollective.com/#organization" } }} />
    <section className="case-study-hero">
      <div className="case-study-review">Private review only · Not approved for publication</div>
      <nav className="case-study-crumbs" aria-label="Breadcrumb"><Link href="/work">Selected Work</Link><span>/</span><span>{study.name}</span></nav>
      <p className="case-study-eyebrow">{study.industry}</p>
      <h1>{study.title}</h1>
      <p className="case-study-lead">{study.description.replace("A private case-study review of ", "")}</p>
      <button className="case-study-button" onClick={onScheduleCall}>Discuss a similar project <span aria-hidden="true">↗</span></button>
      <div className="case-study-hero-media" aria-label={`${study.name} project previews`}>
        {study.heroImages.map(([label, file], index) => <figure key={file} className={`case-study-hero-shot case-study-hero-shot--${index + 1}`}>
          <img src={image(file)} alt={`Original ${study.name} website screenshot: ${label}`} fetchPriority={index === 0 ? "high" : "auto"} />
          <figcaption>{label}</figcaption>
        </figure>)}
      </div>
    </section>
    <section className="case-study-surface">
      <div className="case-study-grid">
        <div><p className="case-study-label">The challenge</p><h2>Design that supports the real work.</h2><p>{study.challenge}</p></div>
        <div><p className="case-study-label">The solution</p><p>{study.solution}</p><div className="case-study-pills">{study.features.map(item => <span key={item}>{item}</span>)}</div></div>
      </div>
      <div className="case-study-stack"><p className="case-study-label">Platforms and implementation</p>{study.technologies.map(item => <span key={item}>{item}</span>)}</div>
      <section className="case-study-outcome"><p className="case-study-label">Why this matters</p><h2>Built around the business, not a template.</h2><p>{study.outcome}</p><button className="case-study-text-button" onClick={onScheduleCall}>Talk about a similar system <span aria-hidden="true">↗</span></button></section>
      <div className="case-study-gallery-heading"><p className="case-study-label">Original website screenshots</p><h2>Explore the experience.</h2><p>These unmodified client screenshots are included only for private review.</p></div>
      <div className="case-study-gallery">{study.gallery.map(([label, file], i) => <figure key={file} className={i === 0 ? "case-study-gallery__feature" : ""}><img src={image(file)} alt={`Original ${study.name} website screenshot: ${label}`} loading={i > 1 ? "lazy" : "eager"} decoding="async" /><figcaption>{label}</figcaption></figure>)}</div>
      <aside className="case-study-note">Client publication permission is still pending. This route is intentionally noindex and excluded from the production sitemap.</aside>
      <div className="case-study-footer"><div><p className="case-study-label">Related services</p>{study.services.map(([label, href]) => <span key={href}><Link className="case-study-service" href={href}>{label} <span aria-hidden="true">↗</span></Link></span>)}</div><div className="case-study-actions"><Link className="case-study-back" href="/work">Back to Selected Work</Link><button className="case-study-button" onClick={onScheduleCall}>Start a conversation</button></div></div>
    </section>
  </article>;
}
