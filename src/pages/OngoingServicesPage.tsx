import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";

type Offering = "website-redesign" | "website-maintenance";
type Props = { offering: Offering; onScheduleCall: () => void };

const offerings = {
  "website-redesign": {
    path: "/services/website-redesign",
    eyebrow: "WEBSITE REDESIGN SERVICES",
    title: "Your business has evolved. Your website should too.",
    seoTitle: "Website Redesign Services for Growing Businesses",
    description: "Website redesign services for businesses ready to improve their online presence, mobile experience, customer journeys, SEO and everyday functionality. Nationwide support from New England.",
    intro: "A redesign should do more than give your business a different look. We help growing businesses rethink outdated pages, improve how visitors find information, and make the site better support the work happening behind the scenes.",
    serviceName: "Website Redesign Services",
    features: [
      ["Audit the current website", "Review content, site structure, search visibility, navigation and existing integrations before deciding what needs to change."],
      ["Retain what is working", "Protect useful content, recognizable branding, URLs and functioning systems while improving the experience around them."],
      ["Improve the mobile experience", "Make it easier to explore services, request quotes, book appointments or contact your business from smaller screens."],
      ["Plan the transition for SEO", "Map old pages to their replacements, protect valuable URLs and test redirects so a redesign does not unnecessarily discard search visibility."],
      ["Extend your functionality", "Connect forms, scheduling, commerce, applications or customer management software as your business needs evolve."],
      ["Support the site afterward", "Keep your content and technology updated instead of treating launch day as the end of the project."]
    ],
    caseTitle: "A practical example: Llanos Electrolysis",
    caseText: "A growing service business needs a website that can keep pace with updated treatments, service information, and local search needs. Website revitalization and targeted content expansion can help its visitors discover the right services and understand how to book. Specific search or business outcomes are not claimed without verified analytics.",
    faqs: [
      ["Can I keep my current brand and content?", "Yes. A redesign can preserve your existing identity and valuable pages while improving the experience and functionality."],
      ["Will redesigning affect my Google rankings?", "It can. That is why we audit current URLs, content, internal links and indexing before launch, then plan redirects and monitor the transition."],
      ["Do I have to rebuild everything?", "Not necessarily. We first examine the existing platform, code, content and integrations. Some businesses need focused improvements rather than a full rebuild."]
    ]
  },
  "website-maintenance": {
    path: "/services/website-maintenance",
    eyebrow: "ONGOING WEBSITE MAINTENANCE",
    title: "A website that keeps working as your business grows.",
    seoTitle: "Website Maintenance & Ongoing Support",
    description: "Ongoing website maintenance and support for busy businesses: content updates, routine care, troubleshooting and practical improvements as your business changes. Nationwide support.",
    intro: "Your website cannot stay frozen while your business changes. Whether you are adding new services, updating a rental, changing a price, or fixing an unexpected problem, dependable website support makes those updates manageable.",
    serviceName: "Website Maintenance and Support",
    features: [
      ["Routine updates and care", "Keep software, plugins and other applicable dependencies current with a tested maintenance workflow."],
      ["Content and page changes", "Update service descriptions, photos, staff information, calls to action and key business details as needed."],
      ["Troubleshooting", "Investigate broken links, display issues, forms and integration problems before they affect more customers."],
      ["Backups and recovery planning", "Review hosting and backup coverage, recovery procedures and maintenance responsibilities for the specific platform."],
      ["Search visibility upkeep", "Catch technical SEO issues, broken redirects and outdated page content as the website evolves."],
      ["A developer who knows your site", "Work with someone familiar with your website and business systems instead of repeatedly explaining how everything is connected."]
    ],
    caseTitle: "Support shaped around real businesses",
    caseText: "Businesses such as LaBoy Properties and Llanos Electrolysis have changing listings, service information and website needs. Ongoing support helps keep their digital presence aligned with day-to-day operations. Maintenance coverage and turnaround times are defined in each service agreement.",
    faqs: [
      ["What is included in monthly website maintenance?", "Coverage depends on your platform and service plan. Typical work may include routine updates, checks, troubleshooting and agreed content changes. We'll confirm the specific scope before starting."],
      ["Can you maintain a website you did not build?", "Often, yes. We first review the hosting, platform, access and current condition of the site to determine a safe support approach."],
      ["Can I request changes as my business grows?", "Yes. Maintenance and ongoing development can support changes to services, business hours, content, forms and other website needs. Larger feature requests may require a separate quote."]
    ]
  }
} as const;

export default function OngoingServicesPage({ offering, onScheduleCall }: Props) {
  const page = offerings[offering];
  const schema = {
    "@context":"https://schema.org",
    "@type":"Service",
    name:page.serviceName,
    description:page.description,
    provider:{"@type":"ProfessionalService","@id":"https://theivanacollective.com/#organization",name:"The Ivana Collective"},
    areaServed:{"@type":"Country",name:"United States"}
  };
  const breadcrumbs=[
    {name:"Home",item:"/"},
    {name:"Services",item:"/services"},
    {name:page.serviceName,item:page.path}
  ];

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-left sm:px-6 md:py-32 lg:px-8">
      <SeoMeta title={page.seoTitle} description={page.description} canonicalPath={page.path} schema={schema} breadcrumbs={breadcrumbs}/>
      <header className="mb-16 max-w-4xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B9D8CE]">{page.eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] text-[#F4F5F1]">{page.title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#E0EBE5] md:text-lg">{page.intro}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Schedule a Consultation <ArrowRight size={17}/></button>
          <Link href="/work" className="inline-flex min-h-12 items-center rounded-xl border border-[#B9D8CE] px-6 font-semibold text-[#F4F5F1] hover:bg-[#123B35]">View My Work</Link>
        </div>
      </header>
      <section aria-labelledby="service-options" className="border-t border-white/10 py-14">
        <h2 id="service-options" className="mb-9 font-serif text-3xl text-[#F4F5F1] md:text-4xl">How we can help</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {page.features.map(([heading,copy])=>(
            <article key={heading} className="rounded-3xl border border-white/10 bg-[#0D2623]/70 p-7">
              <CheckCircle2 size={23} className="mb-5 text-[#B9D8CE]"/>
              <h3 className="mb-3 font-serif text-2xl text-[#F4F5F1]">{heading}</h3>
              <p className="text-base leading-relaxed text-[#B8C6C1]">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="experience" className="my-12 rounded-3xl border border-[#B9D8CE]/20 bg-[#123B35]/70 p-8 md:p-12">
        <p className="font-mono text-xs uppercase tracking-widest text-[#B9D8CE]">REAL BUSINESS EXPERIENCE</p>
        <h2 id="experience" className="mb-4 mt-5 font-serif text-3xl text-[#F4F5F1]">{page.caseTitle}</h2>
        <p className="max-w-4xl text-base leading-relaxed text-[#E0EBE5]">{page.caseText}</p>
        <Link href="/work" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-[#B9D8CE] underline underline-offset-4">Explore selected projects <ArrowRight size={17}/></Link>
      </section>
      <section aria-labelledby="common-questions" className="border-t border-white/10 py-14">
        <h2 id="common-questions" className="mb-8 font-serif text-3xl text-[#F4F5F1] md:text-4xl">Frequently asked questions</h2>
        <div className="max-w-4xl divide-y divide-white/10">
          {page.faqs.map(([question,answer])=><article key={question} className="py-6">
            <h3 className="mb-3 font-serif text-xl text-[#F4F5F1]">{question}</h3>
            <p className="text-base leading-relaxed text-[#B8C6C1]">{answer}</p>
          </article>)}
        </div>
      </section>
      <section className="rounded-3xl border border-[#B9D8CE]/20 bg-[#0D2623] p-8 md:p-12">
        <h2 className="font-serif text-3xl text-[#F4F5F1]">Let's make your website work harder for your business.</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8C6C1]">Tell me where your business is today, what is changing, and what you need your website to handle next.</p>
        <button type="button" onClick={onScheduleCall} className="mt-7 inline-flex min-h-12 items-center rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A]">Schedule a Website Call</button>
      </section>
    </div>
  );
}
