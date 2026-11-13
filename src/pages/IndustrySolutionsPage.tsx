import React from "react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Industry = "property-management" | "auction-platforms";
type Props = { industry: Industry; onScheduleCall: () => void };

const contentByIndustry = {
  "property-management": {
    eyebrow: "PROPERTY MANAGEMENT WEBSITE DEVELOPMENT",
    title: "Property management websites that do more than list rentals.",
    introduction: "Give prospective tenants a clear way to discover your properties, apply for rentals, and reach the right person. Connect your website to the tools your team already uses so managing inquiries takes less time.",
    titleTag: "Property Management Website Development | The Ivana Collective",
    description: "Custom property management websites with rental listings, application flows, tenant portal links and rent-payment integrations. Serving property managers nationwide.",
    path: "/industries/property-management",
    service: "Property Management Website Development",
    features: [
      ["Property and rental listings", "Present available homes with photos, descriptions, amenities, pricing, and clear next steps."],
      ["Rental applications", "Guide prospects into appropriate online application and screening workflows."],
      ["Tenant portals and payments", "Connect to established property-management and rent-payment services rather than rebuilding sensitive financial tools unnecessarily."],
      ["Ongoing property updates", "Keep availability, details, links, and rental policies current as your portfolio changes."]
    ],
    proofTitle: "Real-world example: LaBoy Properties",
    proof: "The LaBoy Properties website brings residential rentals, vacation stays, application paths, and tenant-service links into one experience. The goal is easier property discovery and less repetitive administration for the business.",
    faq: [
      ["Can prospective tenants apply online?", "Yes. We can integrate your existing rental application and screening provider, or design a custom application flow appropriate to your operation."],
      ["Can the website support rent collection?", "Yes, through an appropriate property-management or payment-provider integration. The exact workflow depends on your current software and compliance requirements."],
      ["Can I update listings as properties become available?", "Yes. We'll choose a manageable listing workflow so details and availability can change as your portfolio evolves."]
    ]
  },
  "auction-platforms": {
    eyebrow: "CUSTOM ONLINE AUCTION PLATFORM DEVELOPMENT",
    title: "Auction websites built around your business rules.",
    introduction: "An online auction is more than a countdown and a bid button. Build a structured experience for listings, qualified bidders, auction activity, and the steps that follow a winning bid.",
    titleTag: "Custom Auction Website Development | The Ivana Collective",
    description: "Custom online auction websites with bidder registration, approvals, bidding rules, post-auction workflows and API integrations. Built for businesses nationwide.",
    path: "/industries/auction-platforms",
    service: "Custom Online Auction Platform Development",
    features: [
      ["Registration and bidder approval", "Collect applicant information and manage approval workflows before enabling auction participation."],
      ["Auction listings and rules", "Support individual item pages, deadlines, bidding conditions, and relevant purchase options where appropriate."],
      ["Post-auction workflows", "Guide winning bidders through required documents, confirmations, and payments using suitable providers."],
      ["Custom integrations", "Connect business-specific APIs, notifications, and reporting tools to reduce duplicated administrative work."]
    ],
    proofTitle: "Real-world example: ForeclosureBuyHomes",
    proof: "ForeclosureBuyHomes was developed around specialized real-estate auction requirements, including bidder approvals, auction functionality, post-win steps, and a Gemini-powered investor-analysis integration. Features and legal requirements vary by business.",
    faq: [
      ["Can an auction require bidder approval?", "Yes. Bidder registration can include a review-and-approval process before bidding access is granted."],
      ["Can an auction end in a custom winner workflow?", "Yes. The workflow can guide a winner toward documents, proof-of-funds requests, deposits, or manual review as appropriate."],
      ["Can you integrate existing auction or payment services?", "Often, yes. We'll assess provider APIs, licensing, security, operational requirements, and payment rules before selecting an approach."]
    ]
  }
} as const;

export default function IndustrySolutionsPage({ industry, onScheduleCall }: Props) {
  const page = contentByIndustry[industry];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": page.service,
    "description": page.description,
    "provider": { "@type": "ProfessionalService", "@id": "https://theivanacollective.com/#organization", "name": "The Ivana Collective" },
    "areaServed": { "@type": "Country", "name": "United States" }
  };
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: page.service, item: page.path }
  ];

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-left sm:px-6 md:py-32 lg:px-8">
      <SeoMeta title={page.titleTag} description={page.description} canonicalPath={page.path} schema={schema} breadcrumbs={breadcrumbs} />
      <header className="mb-16 max-w-4xl space-y-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B9D8CE]">{page.eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] text-[#F4F5F1]">{page.title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#E0EBE5] md:text-lg">{page.introduction}</p>
        <div className="flex flex-wrap gap-3 pt-4">
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Discuss Your Project <ArrowRight size={17}/></button>
          <Link href="/work" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#B9D8CE] px-6 font-semibold text-[#F4F5F1] hover:bg-[#123B35]">View My Work</Link>
        </div>
      </header>

      <section aria-labelledby="capabilities" className="border-t border-white/10 py-14">
        <h2 id="capabilities" className="mb-9 font-serif text-3xl text-[#F4F5F1] md:text-4xl">What your system can do</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {page.features.map(([name, explanation]) => (
            <article key={name} className="rounded-3xl border border-white/10 bg-[#0D2623]/70 p-7">
              <CheckCircle2 className="mb-5 text-[#B9D8CE]" size={23}/>
              <h3 className="mb-3 font-serif text-2xl text-[#F4F5F1]">{name}</h3>
              <p className="text-base leading-relaxed text-[#B8C6C1]">{explanation}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="client-example" className="my-12 rounded-3xl border border-[#B9D8CE]/20 bg-[#123B35]/70 p-8 md:p-12">
        <p className="font-mono text-xs uppercase tracking-widest text-[#B9D8CE]">Actual client project</p>
        <h2 id="client-example" className="mb-4 mt-5 font-serif text-3xl text-[#F4F5F1]">{page.proofTitle}</h2>
        <p className="max-w-4xl text-base leading-relaxed text-[#E0EBE5]">{page.proof}</p>
        <Link href="/work" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-[#B9D8CE] underline underline-offset-4">Explore the portfolio <ArrowRight size={17}/></Link>
      </section>

      <section aria-labelledby="questions" className="border-t border-white/10 py-14">
        <h2 id="questions" className="mb-8 font-serif text-3xl text-[#F4F5F1] md:text-4xl">Common questions</h2>
        <div className="max-w-4xl divide-y divide-white/10">
          {page.faq.map(([question, answer]) => (
            <article key={question} className="py-6">
              <h3 className="mb-3 font-serif text-xl text-[#F4F5F1]">{question}</h3>
              <p className="text-base leading-relaxed text-[#B8C6C1]">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[#B9D8CE]/20 bg-[#0D2623] p-8 md:p-12">
        <h2 className="font-serif text-3xl text-[#F4F5F1]">Let's build around the way your business works.</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8C6C1]">Tell me what you need your website to handle, what software you already use, and what you'd like to simplify.</p>
        <button type="button" onClick={onScheduleCall} className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A]">Schedule a Website Consultation</button>
      </section>
    </div>
  );
}
