import React from "react";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";

/** Regional pages reflect actual service area, not fictional offices or rankings. */
export type Region = "massachusetts" | "connecticut" | "new-england";
type Props = { region: Region; onScheduleCall: () => void };

const content = {
  massachusetts: {
    path: "/locations/massachusetts",
    title: "Massachusetts Website Design & Custom Development",
    description: "Massachusetts website design and custom development for service businesses, independent shops and property companies. Western Massachusetts roots, nationwide capabilities.",
    eyebrow: "MASSACHUSETTS WEBSITE DEVELOPMENT",
    headline: "Website development with roots in Western Massachusetts.",
    intro: "Based in the Western Massachusetts community, The Ivana Collective works with businesses that need more than a polished homepage. Whether you're refreshing a local practice's website or connecting business systems, we focus on understandable content and practical operations.",
    service: "Massachusetts Website Design and Development",
    contextTitle: "Built for local businesses with real operational needs",
    context: "In communities around Springfield and Western Massachusetts, customers often find businesses through service searches, referrals and maps. A strong site should explain the service, show the business's real location or service area, and make contact or booking simple.",
    steps: [
      ["Local service clarity", "Organize services, business details and relevant nearby communities without duplicating entire pages for every town."],
      ["Search fundamentals", "Make page titles, headings, internal links and Google Business Profile information consistent with actual business operations."],
      ["Reliable customer actions", "Help visitors call, request a quote, book an appointment or send information with minimal confusion."],
      ["Room for growth", "Support new offerings, locations, e-commerce or custom workflows while retaining a familiar brand experience."]
    ],
    faq: [
      ["Do you only serve Western Massachusetts?", "No. The agency has roots in Western Massachusetts and works remotely with businesses across the United States."],
      ["Can you improve an established local website?", "Yes. A redesign or maintenance engagement can preserve useful content while improving navigation, SEO fundamentals and booking pathways."]
    ]
  },
  connecticut: {
    path: "/locations/connecticut",
    title: "Connecticut Website Design & Business Systems",
    description: "Website design, custom integrations and ongoing support for Connecticut businesses, from local services to growing online stores. New England-based development nationwide.",
    eyebrow: "CONNECTICUT WEBSITE DEVELOPMENT",
    headline: "Thoughtful websites and systems for Connecticut businesses.",
    intro: "For a Connecticut business, the website often connects new customers to the real work of scheduling, quoting, selling or managing accounts. We create digital experiences that support those tasks instead of treating the site as a static advertisement.",
    service: "Connecticut Website Design and Development",
    contextTitle: "Connecting local discovery to everyday operations",
    context: "Businesses serving communities across Northern Connecticut may need clear service boundaries, practical appointment paths, consistent business information and reliable content updates. We build to the needs of the individual business rather than claim a presence in every town.",
    steps: [
      ["Clear service areas", "Explain where a business actually serves customers and how to book, visit or request service."],
      ["Effective contact paths", "Connect phone, forms, booking and inquiry workflows to the tools the business already uses."],
      ["Custom requirements", "Evaluate commerce, memberships, applications or operational dashboards when a basic website is not enough."],
      ["Ongoing support", "Maintain a usable website as seasonal offerings, services, software or internal processes change."]
    ],
    faq: [
      ["Can you work with businesses anywhere in Connecticut?", "Yes, subject to project scope. Most discovery, design and development work can be done remotely."],
      ["Do we need to move to WordPress?", "Not necessarily. We assess your existing technology and the best way to support content editing, integrations and long-term maintenance."]
    ]
  },
  "new-england": {
    path: "/locations/new-england",
    title: "New England Web Development & Digital Systems",
    description: "New England-rooted web development for businesses across Massachusetts, Connecticut and beyond. Custom websites, e-commerce, integrations, maintenance and SEO support.",
    eyebrow: "NEW ENGLAND DIGITAL DEVELOPMENT",
    headline: "New England roots. Custom technology for businesses everywhere.",
    intro: "The Ivana Collective combines the practicality of a small, relationship-driven New England business with the flexibility of full-stack web development. We build sites that communicate who you are and handle the systems that keep your business moving.",
    service: "New England Web Development and Business Systems",
    contextTitle: "Creative identity and technical problem-solving belong together",
    context: "A boutique studio, service practice, construction company and e-commerce brand have different customer journeys. We start by mapping those needs, choose suitable tools and build around the business—not around an agency template.",
    steps: [
      ["Sites with personality", "Carry the real brand through readable pages and responsive design without sacrificing speed or usability."],
      ["Business functionality", "Connect scheduling, commerce, applications, customer communications or approvals when needed."],
      ["Search visibility", "Support useful local service content, technical SEO and authentic business location signals."],
      ["Long-term partnership", "Plan for updates and integrations as the business, customer base and operations grow."]
    ],
    faq: [
      ["Do you work with clients outside New England?", "Yes. New England describes the agency's roots, not a limit on where we provide services."],
      ["Can you build a custom business system rather than a standard website?", "Yes. We evaluate the workflows, integrations, security needs and long-term costs to decide what approach makes sense."]
    ]
  }
} as const;

export default function RegionalServicePage({ region, onScheduleCall }: Props) {
  const p = content[region];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.service,
    description: p.description,
    provider: { "@type": "ProfessionalService", "@id": "https://theivanacollective.com/#organization", name: "The Ivana Collective" },
    areaServed: region === "new-england" ? [{ "@type": "State", name: "Massachusetts" },{ "@type": "State", name: "Connecticut" }] : [{ "@type": "State", name: region === "massachusetts" ? "Massachusetts" : "Connecticut" }]
  };
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-left sm:px-6 md:py-32 lg:px-8">
      <SeoMeta title={p.title} description={p.description} canonicalPath={p.path} schema={schema} breadcrumbs={[{name:"Home",item:"/"},{name:"Services",item:"/services"},{name:p.service,item:p.path}]} />
      <header className="mb-16 max-w-4xl space-y-6">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#B9D8CE]"><MapPin size={16} aria-hidden="true"/>{p.eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] text-[#F4F5F1]">{p.headline}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#E0EBE5] md:text-lg">{p.intro}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Schedule a Conversation <ArrowRight size={17}/></button>
          <Link href="/services" className="inline-flex min-h-12 items-center rounded-xl border border-[#B9D8CE] px-6 font-semibold text-[#F4F5F1] hover:bg-[#123B35]">Explore Services</Link>
        </div>
      </header>
      <section className="my-12 rounded-3xl border border-[#B9D8CE]/20 bg-[#123B35]/70 p-8 md:p-12">
        <h2 className="mb-4 font-serif text-3xl text-[#F4F5F1]">{p.contextTitle}</h2>
        <p className="max-w-4xl text-base leading-relaxed text-[#E0EBE5]">{p.context}</p>
      </section>
      <section aria-labelledby="regional-approach" className="border-t border-white/10 py-14">
        <h2 id="regional-approach" className="mb-9 font-serif text-3xl text-[#F4F5F1] md:text-4xl">Our approach</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {p.steps.map(([heading,copy])=>(
            <article key={heading} className="rounded-3xl border border-white/10 bg-[#0D2623]/70 p-7">
              <CheckCircle2 className="mb-5 text-[#B9D8CE]" size={23}/>
              <h3 className="mb-3 font-serif text-2xl text-[#F4F5F1]">{heading}</h3>
              <p className="text-base leading-relaxed text-[#B8C6C1]">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="regional-faq" className="border-t border-white/10 py-14">
        <h2 id="regional-faq" className="mb-8 font-serif text-3xl text-[#F4F5F1] md:text-4xl">Frequently asked questions</h2>
        <div className="max-w-4xl divide-y divide-white/10">
          {p.faq.map(([q,a])=><article key={q} className="py-6"><h3 className="mb-3 font-serif text-xl text-[#F4F5F1]">{q}</h3><p className="text-base leading-relaxed text-[#B8C6C1]">{a}</p></article>)}
        </div>
      </section>
      <section className="rounded-3xl border border-[#B9D8CE]/20 bg-[#0D2623] p-8 md:p-12">
        <h2 className="font-serif text-3xl text-[#F4F5F1]">Let's make your website fit your business.</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8C6C1]">Share the website, customer experience or business process you want to improve. We'll discuss a practical direction.</p>
        <button type="button" onClick={onScheduleCall} className="mt-7 inline-flex min-h-12 items-center rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A]">Book a Consultation</button>
      </section>
    </div>
  );
}
