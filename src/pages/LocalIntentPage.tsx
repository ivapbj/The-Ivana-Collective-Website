import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";

/**
 * Distinct local-intent pages: do not claim an office, ranking, reviews, or
 * in-person service that has not been verified.
 */
type Focus = "springfield-web-design" | "western-ma-wordpress";
type Props = { focus: Focus; onScheduleCall: () => void };

const pages = {
  "springfield-web-design": {
    path: "/locations/springfield-ma-web-design",
    eyebrow: "SPRINGFIELD, MASSACHUSETTS · WEB DEVELOPMENT",
    title: "Web Design for Springfield, MA Businesses | The Ivana Collective",
    description: "Custom web design and development for Springfield and Western Massachusetts businesses. WordPress, booking, e-commerce and custom systems from a New England-rooted developer.",
    headline: "A Springfield-area web designer who thinks beyond the homepage.",
    intro: "Your website should help someone understand what you offer, trust your business, and take the next step. The Ivana Collective works with businesses around Springfield and Western Massachusetts on distinctive websites with practical tools behind them.",
    service: "Web Design and Website Development for Springfield Businesses",
    problemHeading: "Your business deserves more than a generic template",
    problem: "Whether customers are looking for a local service, trying to book an appointment, or comparing providers on their phones, the website needs clear answers and easy actions. We start with the customer journey, then choose technology that suits the way you operate.",
    capabilities: [
      ["A clear service story", "Show prospective customers what you do, who you serve, and how to reach you without unnecessary clicking."],
      ["Mobile-first customer paths", "Make phone calls, appointment requests, contact forms and location or service-area information accessible on small screens."],
      ["Built around your platform", "Use WordPress where easy editing makes sense, or custom React development when your workflow needs a tailored application."],
      ["Local search fundamentals", "Structure location and service content, page metadata, internal links and eligible business information around real customer needs."],
      ["Integrations that save steps", "Connect appropriate scheduling, payment, application or contact systems rather than forcing staff to copy information manually."],
      ["Support after launch", "Maintain and adapt the website as services, priorities and business processes change."]
    ],
    process: [
      ["Discover", "Review your existing site, customers, booking or lead flow, and the work your staff does after an inquiry."],
      ["Design and build", "Keep the brand distinct while improving mobile layout, content structure and useful functionality."],
      ["Launch and improve", "Test important actions, protect relevant URLs, and establish an appropriate maintenance and measurement plan."]
    ],
    faq: [
      ["Do you only work with Springfield businesses?", "No. The Ivana Collective has roots in Western Massachusetts and works with businesses throughout the United States."],
      ["Can you redesign my current business website?", "Yes. We can review your current content, SEO URLs and integrations before proposing a redesign or more focused improvements."],
      ["Can you build something beyond a standard website?", "Yes. Custom forms, approvals, commerce and integrations can be part of the project when your business needs them."],
      ["Do you provide Google Business Profile help?", "We can help align your website's information and eligible local search presence with what customers actually need. Rankings are not guaranteed."]
    ],
    related: [
      ["/services/web-design", "Custom website development"],
      ["/services/website-redesign", "Website redesign services"],
      ["/services/business-automation", "Business automation"],
      ["/locations/massachusetts", "Massachusetts service overview"]
    ]
  },
  "western-ma-wordpress": {
    path: "/locations/western-ma-wordpress-developer",
    eyebrow: "WESTERN MASSACHUSETTS · WORDPRESS DEVELOPMENT",
    title: "WordPress Developer in Western Massachusetts | The Ivana Collective",
    description: "WordPress development and WooCommerce customization for Western Massachusetts businesses. Custom pages, integrations, site care and practical workflows.",
    headline: "WordPress development for businesses ready to do more.",
    intro: "Maybe your WordPress website looks outdated, its plugins are competing with each other, or a form isn't connecting to the system your team uses. We help Western Massachusetts businesses make WordPress a more dependable part of their operations.",
    service: "WordPress Development for Western Massachusetts Businesses",
    problemHeading: "An editable website doesn't have to be a limiting one",
    problem: "WordPress is often an excellent foundation for service websites, memberships and online stores—but adding plugins indefinitely isn't a strategy. We review the theme, hosting, site structure and integrations before choosing a maintainable approach.",
    capabilities: [
      ["WordPress builds and rebuilds", "Organize service pages, navigation, forms and editable content while preserving the actual business identity."],
      ["WooCommerce support", "Plan product categories, variations, payment configuration, shipping tools and store-management workflows."],
      ["Plugin and integration decisions", "Choose maintained plugins or focused custom code based on security, compatibility, costs and practical requirements."],
      ["Performance and usability", "Review images, responsive layouts, navigation, accessible controls and pages that customers actually visit."],
      ["Technical SEO without guesswork", "Set up crawlable content, appropriate page titles, clean links, redirects and a site structure that can grow."],
      ["Ongoing support", "Establish a realistic update, backup, troubleshooting and content-change workflow for your site."]
    ],
    process: [
      ["Audit the stack", "Review WordPress, hosting, plugins, theme, integrations and the changes you're trying to make."],
      ["Prioritize the work", "Separate critical fixes, design improvements and optional features to avoid rebuilding what already works."],
      ["Test and maintain", "Verify mobile tasks, forms, backups and checkout when applicable, then document care responsibilities."]
    ],
    faq: [
      ["Can you work on an existing WordPress or Elementor website?", "Yes. We can inspect an existing site and determine whether focused changes or a more comprehensive rebuild are appropriate."],
      ["Can you customize WooCommerce?", "Yes. Scope depends on store requirements, supported provider integrations and the existing site configuration."],
      ["Do I need custom code for every new feature?", "No. A well-maintained plugin may be the safer and more affordable option. We recommend custom development where it creates real value."],
      ["Do you offer maintenance after the build?", "Yes. Ongoing plans can cover agreed updates, troubleshooting and content support, depending on the platform and scope."]
    ],
    related: [
      ["/services/wordpress-development", "WordPress development services"],
      ["/services/woocommerce-development", "WooCommerce development"],
      ["/services/website-maintenance", "Ongoing website care"],
      ["/guides/wordpress-vs-custom-website", "WordPress or a custom website?"]
    ]
  }
} as const;

export default function LocalIntentPage({ focus, onScheduleCall }: Props) {
  const p=pages[focus];
  const schema={ "@context":"https://schema.org", "@type":"Service", name:p.service, description:p.description,
    provider:{"@id":"https://theivanacollective.com/#organization"},
    areaServed:{"@type":"AdministrativeArea",name:focus==="springfield-web-design"?"Springfield and Western Massachusetts":"Western Massachusetts"}
  };
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-left sm:px-6 md:py-32 lg:px-8">
      <SeoMeta title={p.title} description={p.description} canonicalPath={p.path} schema={schema}
        breadcrumbs={[{name:"Home",item:"/"},{name:"Services",item:"/services"},{name:p.service,item:p.path}]}/>
      <header className="mb-16 max-w-4xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B9D8CE]">{p.eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] text-[#F4F5F1]">{p.headline}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#E0EBE5] md:text-lg">{p.intro}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Discuss Your Website <ArrowRight size={17}/></button>
          <Link href="/website-generator" className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-[#B9D8CE] bg-[#061C1A]/70 px-6 font-semibold text-[#F4F5F1] hover:bg-[#123B35]">Try a Website Preview <ArrowRight size={17}/></Link>
          <Link href="/work" className="inline-flex min-h-12 items-center rounded-xl border border-white/40 px-6 font-semibold text-[#F4F5F1]">See Selected Work</Link>
        </div>
      </header>
      <section className="my-12 rounded-3xl border border-[#B9D8CE]/20 bg-[#123B35]/70 p-8 md:p-12">
        <h2 className="mb-4 font-serif text-3xl text-[#F4F5F1]">{p.problemHeading}</h2>
        <p className="max-w-4xl text-base leading-relaxed text-[#E0EBE5]">{p.problem}</p>
      </section>
      <section aria-labelledby="what-we-build" className="border-t border-white/10 py-14">
        <h2 id="what-we-build" className="mb-9 font-serif text-3xl text-[#F4F5F1] md:text-4xl">What we can help you build</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {p.capabilities.map(([name,copy])=><article key={name} className="rounded-3xl border border-white/10 bg-[#0D2623]/70 p-7">
            <CheckCircle2 className="mb-5 text-[#B9D8CE]" size={23}/><h3 className="mb-3 font-serif text-2xl text-[#F4F5F1]">{name}</h3>
            <p className="text-base leading-relaxed text-[#B8C6C1]">{copy}</p>
          </article>)}
        </div>
      </section>
      <section aria-labelledby="approach" className="border-t border-white/10 py-14">
        <h2 id="approach" className="mb-8 font-serif text-3xl text-[#F4F5F1] md:text-4xl">How a project moves forward</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {p.process.map(([name,copy],i)=><article key={name} className="rounded-3xl border border-white/10 bg-[#0D2623]/70 p-6">
            <p className="font-mono text-xs text-[#B9D8CE]">0{i+1}</p><h3 className="mt-3 font-serif text-2xl text-[#F4F5F1]">{name}</h3>
            <p className="mt-3 text-base leading-relaxed text-[#B8C6C1]">{copy}</p>
          </article>)}
        </div>
      </section>
      <section aria-labelledby="local-faqs" className="border-t border-white/10 py-14">
        <h2 id="local-faqs" className="mb-8 font-serif text-3xl text-[#F4F5F1] md:text-4xl">Questions people ask</h2>
        <div className="max-w-4xl divide-y divide-white/10">{p.faq.map(([q,a])=><article key={q} className="py-6"><h3 className="mb-3 font-serif text-xl text-[#F4F5F1]">{q}</h3><p className="text-base leading-relaxed text-[#B8C6C1]">{a}</p></article>)}</div>
      </section>
      <section className="my-12 rounded-3xl border border-white/10 bg-[#0D2623]/70 p-8">
        <h2 className="mb-5 font-serif text-2xl text-[#F4F5F1]">Explore related services</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-4">{p.related.map(([href,label])=><Link key={href} href={href} className="inline-flex min-h-11 items-center gap-2 text-[#B9D8CE] underline underline-offset-4">{label}<ArrowRight size={16}/></Link>)}</div>
      </section>
      <section className="rounded-3xl border border-[#B9D8CE]/20 bg-[#0D2623] p-8 md:p-12">
        <h2 className="font-serif text-3xl text-[#F4F5F1]">Let's make the website work for your business.</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8C6C1]">Tell me what's working, what's frustrating, and what you'd like to make easier for customers or your team.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/website-generator" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Try Your Website Preview <ArrowRight size={17}/></Link>
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#B9D8CE] px-6 font-semibold text-[#F4F5F1]">Schedule a Consultation <ArrowRight size={17}/></button>
        </div>
      </section>
    </div>
  );
}
