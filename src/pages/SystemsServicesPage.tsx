import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";

type Offering = "custom-business-systems" | "business-automation";
type Props = { offering: Offering; onScheduleCall: () => void };

const offerings = {
  "custom-business-systems": {
    path: "/services/custom-business-systems",
    seoTitle: "Custom Business Systems & Web Applications",
    description: "Custom web applications and business systems for organizations that need more than a standard website: user roles, workflows, integrations and secure data handling. Nationwide services.",
    eyebrow: "CUSTOM BUSINESS SYSTEM DEVELOPMENT",
    title: "When off-the-shelf websites don't fit how your business works.",
    introduction: "A website can be the front door to a business system: customer accounts, approvals, online transactions and services tailored to your actual process. We design practical solutions around business needs rather than force every business into a generic template.",
    service: "Custom Business Systems and Web Applications",
    capabilities: [
      ["Custom workflows", "Map the steps your staff and customers follow, from intake through review, approval and completion."],
      ["Accounts and permissions", "Create the right experiences for visitors, customers and administrators with appropriate access controls."],
      ["System integrations", "Connect suitable services for scheduling, forms, payments, notifications, analytics and customer records."],
      ["Operational dashboards", "Bring relevant tasks and information into an organized interface for your team."],
      ["Security and reliability", "Design around data sensitivity, validation, error handling, testing and long-term maintainability."],
      ["Extend an existing platform", "Evaluate whether WordPress, WooCommerce, React or another approach makes the most sense before recommending a rebuild."]
    ],
    exampleTitle: "Example: ForeclosureBuyHomes",
    example: "A real-estate auction platform has needs beyond a typical brochure website. ForeclosureBuyHomes includes specialized auction functionality, bidder approvals and work around post-auction steps, alongside a Gemini-powered investor-analysis integration. Delivery of individual workflows is subject to testing, operational requirements and legal review.",
    questions: [
      ["Do I need an entirely custom application?", "Not always. Existing platforms and integrations may meet your needs with less cost and complexity. We evaluate those options before proposing custom code."],
      ["Can you connect software we already use?", "Often. We review the provider's documented APIs, permission model and practical limitations before planning an integration."],
      ["How do you estimate development cost?", "We start by defining the users, workflows, data, integrations and acceptance criteria, then propose an appropriately scoped build."]
    ]
  },
  "business-automation": {
    path: "/services/business-automation",
    seoTitle: "Business Automation & Website Integrations",
    description: "Make business workflows easier with custom website automation, intake forms, approvals, notifications, scheduling and integrations. Nationwide support rooted in New England.",
    eyebrow: "BUSINESS AUTOMATION SERVICES",
    title: "Spend less time repeating the same administrative steps.",
    introduction: "Customer requests, applications, notifications and updates should flow through a clear process. We connect the systems you already depend on, reducing unnecessary data entry and keeping important steps visible to your team.",
    service: "Business Process Automation and Website Integrations",
    capabilities: [
      ["Inquiry and intake workflows", "Route contact forms and applications to the right tools, with acknowledgments and reliable notification handling."],
      ["Application and approval steps", "Design review queues, status changes and communications that fit your actual business rules."],
      ["Booking and scheduling", "Connect scheduling providers so customers can take the next step without unnecessary back-and-forth."],
      ["Payment and order processes", "Coordinate suitable payment or commerce providers with business-specific customer journeys."],
      ["Notifications and follow-ups", "Create useful customer and administrator notifications with clear delivery and failure handling."],
      ["Maintainable integrations", "Document the system connections, access requirements and points where human review is still necessary."]
    ],
    exampleTitle: "Example: LaBoy Properties",
    example: "A rental website can connect property discovery, tenant applications, tenant portal access and rent-payment services into an easier customer journey. LaBoy Properties illustrates the value of integrating business tools rather than making property managers maintain disconnected pages and processes.",
    questions: [
      ["Can you automate everything in my business?", "Not every task should be automated. We identify repetitive, rules-based steps and retain human approval for situations that require judgment."],
      ["Do you replace my current software?", "Usually not. We begin with existing systems and integrations, replacing tools only where there is a clear business reason."],
      ["What happens if an automated step fails?", "A reliable implementation needs validation, logging, clear failure messages and a defined recovery or manual-review path."]
    ]
  }
} as const;

export default function SystemsServicesPage({ offering, onScheduleCall }: Props) {
  const page = offerings[offering];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.service,
    description: page.description,
    provider: { "@type": "ProfessionalService", "@id": "https://theivanacollective.com/#organization", name: "The Ivana Collective" },
    areaServed: { "@type": "Country", name: "United States" }
  };
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: page.service, item: page.path }
  ];
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-left sm:px-6 md:py-32 lg:px-8">
      <SeoMeta title={page.seoTitle} description={page.description} canonicalPath={page.path} schema={schema} breadcrumbs={breadcrumbs}/>
      <header className="mb-16 max-w-4xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B9D8CE]">{page.eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] text-[#F4F5F1]">{page.title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#E0EBE5] md:text-lg">{page.introduction}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Discuss Your Project <ArrowRight size={17}/></button>
          <Link href="/work" className="inline-flex min-h-12 items-center rounded-xl border border-[#B9D8CE] px-6 font-semibold text-[#F4F5F1] hover:bg-[#123B35]">View My Work</Link>
        </div>
      </header>
      <section aria-labelledby="solutions" className="border-t border-white/10 py-14">
        <h2 id="solutions" className="mb-9 font-serif text-3xl text-[#F4F5F1] md:text-4xl">Solutions built around your work</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {page.capabilities.map(([name,copy])=>(
            <article key={name} className="rounded-3xl border border-white/10 bg-[#0D2623]/70 p-7">
              <CheckCircle2 size={23} className="mb-5 text-[#B9D8CE]"/>
              <h3 className="mb-3 font-serif text-2xl text-[#F4F5F1]">{name}</h3>
              <p className="text-base leading-relaxed text-[#B8C6C1]">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="example" className="my-12 rounded-3xl border border-[#B9D8CE]/20 bg-[#123B35]/70 p-8 md:p-12">
        <p className="font-mono text-xs uppercase tracking-widest text-[#B9D8CE]">REAL PROJECT EXPERIENCE</p>
        <h2 id="example" className="mb-4 mt-5 font-serif text-3xl text-[#F4F5F1]">{page.exampleTitle}</h2>
        <p className="max-w-4xl text-base leading-relaxed text-[#E0EBE5]">{page.example}</p>
        <Link href="/work" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-[#B9D8CE] underline underline-offset-4">Explore selected projects <ArrowRight size={17}/></Link>
      </section>
      <section aria-labelledby="faqs" className="border-t border-white/10 py-14">
        <h2 id="faqs" className="mb-8 font-serif text-3xl text-[#F4F5F1] md:text-4xl">Common questions</h2>
        <div className="max-w-4xl divide-y divide-white/10">
          {page.questions.map(([question,answer])=><article key={question} className="py-6">
            <h3 className="mb-3 font-serif text-xl text-[#F4F5F1]">{question}</h3>
            <p className="text-base leading-relaxed text-[#B8C6C1]">{answer}</p>
          </article>)}
        </div>
      </section>
      <section className="rounded-3xl border border-[#B9D8CE]/20 bg-[#0D2623] p-8 md:p-12">
        <h2 className="font-serif text-3xl text-[#F4F5F1]">Your business deserves a system that makes sense.</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8C6C1]">Bring the process you want to improve. We'll explore the right mix of existing tools, integrations and custom development.</p>
        <button type="button" onClick={onScheduleCall} className="mt-7 inline-flex min-h-12 items-center rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A]">Schedule a Website Consultation</button>
      </section>
    </div>
  );
}
