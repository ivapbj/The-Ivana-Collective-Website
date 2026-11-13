import React from "react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";
import "./CaseStudyPage.css";

type Study = {
  slug: string; name: string; industry: string; title: string; description: string; background: string;
  challenge: string; solution: string; features: string[]; technologies: string[];
  gallery: Array<[string, string]>; services: Array<[string, string]>;
};

const image = (name: string) => `/images/case-studies/${name}`;

const studies: Record<string, Study> = {
  "rebar-and-rose": {
    slug: "rebar-and-rose", name: "Rebar & Rose", industry: "E-commerce / WooCommerce",
    title: "A storefront made for the women who build.",
    description: "A private case-study review of Rebar & Rose, a WooCommerce workwear storefront with product variations, shopping flows and customer contact paths.",
    background: "IMG_1436.jpeg",
    challenge: "Translate a distinctive construction-workwear identity into a store that makes products, options and customer next steps easy to understand.",
    solution: "The build organizes the product catalog and category browsing around real workwear, presents color and size selections on product pages, gives shoppers cart feedback, and keeps the contact path visible. Payment, shipping and any future integrations are intentionally not represented as completed here unless independently verified.",
    features: ["Catalog and category browsing", "Color and size variations", "Cart feedback", "Customer contact pathway"],
    technologies: ["WordPress", "WooCommerce", "Elementor", "Responsive storefront"],
    gallery: [["Shop collections", "IMG_1439.png"], ["Products and categories", "IMG_1440.png"], ["Product options", "IMG_1442.jpeg"], ["Cart confirmation", "IMG_1443.jpeg"], ["Customer contact", "IMG_1441.jpeg"]],
    services: [["WooCommerce development", "/services/woocommerce-development"], ["E-commerce websites", "/services/ecommerce-websites"]]
  },
  "laboy-properties": {
    slug: "laboy-properties", name: "LaBoy Properties", industry: "Property management / rentals",
    title: "A clearer way to explore, apply and book.",
    description: "A private case-study review of LaBoy Properties, a property-management website connecting rental discovery, property details and tenant next steps.",
    background: "IMG_1437.jpeg",
    challenge: "Make residential-rental and vacation-stay journeys easier to navigate while giving each property enough context for an informed next step.",
    solution: "The site organizes available properties with filters, detailed listing pages, property galleries, amenities, application calls to action and an availability-calendar experience for short stays. The featured 1 Crystal Way listing is in Palm Coast, Florida. The case study does not claim booking or occupancy results.",
    features: ["Rental discovery and filters", "Listing detail and galleries", "Availability calendar", "Application and booking calls to action"],
    technologies: ["WordPress", "Elementor", "Innago tenant portal links", "Responsive navigation"],
    gallery: [["Available properties", "IMG_1444.jpeg"], ["Property detail", "IMG_1446.jpeg"], ["Availability calendar", "IMG_1449.jpeg"], ["Mobile navigation", "IMG_1450.jpeg"], ["Amenities and apply", "IMG_1452.jpeg"]],
    services: [["Property management websites", "/industries/property-management"], ["Custom website design", "/services/web-design"]]
  },
  "llanos-electrolysis": {
    slug: "llanos-electrolysis", name: "Llanos Electrolysis", industry: "Beauty & wellness / local service",
    title: "A refined digital home for specialized care.",
    description: "A private case-study review of Llanos Electrolysis, combining editorial service design, local content structure and clear appointment paths.",
    background: "IMG_1435.jpeg",
    challenge: "Present specialized electrolysis, skin and nail services in a calm, understandable experience while helping visitors find the relevant service and consultation path.",
    solution: "The redesign uses individual service pages, clear content hierarchy, appointment calls to action, mobile-first presentation and location-focused content. It documents the work completed without making claims about treatment outcomes, search rankings or business results.",
    features: ["Specialized service pages", "Consultation and appointment paths", "Location-focused content", "Mobile-first hierarchy"],
    technologies: ["WordPress", "Elementor", "Rank Math SEO", "Structured service content"],
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
    features: ["Regional property discovery", "Investor registration concepts", "Gated analysis", "Separate investor and homeowner journeys"],
    technologies: ["WordPress", "WooCommerce", "YITH Auctions", "Gemini API integration"],
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
    </section>
    <section className="case-study-surface">
      <div className="case-study-grid">
        <div><p className="case-study-label">The challenge</p><h2>Design that supports the real work.</h2><p>{study.challenge}</p></div>
        <div><p className="case-study-label">The solution</p><p>{study.solution}</p><div className="case-study-pills">{study.features.map(item => <span key={item}>{item}</span>)}</div></div>
      </div>
      <div className="case-study-stack"><p className="case-study-label">Platforms and implementation</p>{study.technologies.map(item => <span key={item}>{item}</span>)}</div>
      <div className="case-study-gallery-heading"><p className="case-study-label">Original website screenshots</p><h2>Explore the experience.</h2><p>These unmodified client screenshots are included only for private review.</p></div>
      <div className="case-study-gallery">{study.gallery.map(([label, file], i) => <figure key={file} className={i === 0 ? "case-study-gallery__feature" : ""}><img src={image(file)} alt={`Original ${study.name} website screenshot: ${label}`} loading={i > 1 ? "lazy" : "eager"} decoding="async" /><figcaption>{label}</figcaption></figure>)}</div>
      <aside className="case-study-note">Client publication permission is still pending. This route is intentionally noindex and excluded from the production sitemap.</aside>
      <div className="case-study-footer"><div><p className="case-study-label">Related services</p>{study.services.map(([label, href]) => <span key={href}><Link className="case-study-service" href={href}>{label} <span aria-hidden="true">↗</span></Link></span>)}</div><div className="case-study-actions"><Link className="case-study-back" href="/work">Back to Selected Work</Link><button className="case-study-button" onClick={onScheduleCall}>Start a conversation</button></div></div>
    </section>
  </article>;
}
