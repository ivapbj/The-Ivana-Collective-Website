import React from "react";
import { ArrowRight } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import StylePreviewSection from "../components/StylePreviewSection";
import { Link } from "../context/NavigationContext";

export default function WordPressComparisonGuide({ onScheduleCall }: { onScheduleCall: () => void }) {
  const title="WordPress or Custom Website? A Small Business Guide";
  const description="Compare WordPress, WooCommerce, custom React development and integrations for your business. Understand editing, costs, maintenance, SEO and when to choose each.";
  const path="/guides/wordpress-vs-custom-website";
  const sections=[
    {
      heading:"Choose WordPress when ongoing content editing is central",
      text:"WordPress makes sense for many business websites with service pages, news, local information and staff-managed content. With the right hosting, theme and maintenance practices, it can support bookings, forms, memberships and storefronts. The tradeoff is that plugin compatibility, updates and security need an accountable maintenance process.",
      bullets:["Your team regularly updates service pages or articles","You want a familiar content-editing interface","Suitable integrations already exist and are maintained"]
    },
    {
      heading:"Consider WooCommerce when the store is part of a WordPress strategy",
      text:"WooCommerce is useful for product catalogs, variations and flexible checkout workflows within WordPress. But shipping, tax rules, payment processing, performance and plugin licensing all add operational considerations. A working storefront needs real checkout tests and a plan for fulfilling orders, not only attractive product pages.",
      bullets:["You need a configurable catalog with product variations","Your team can maintain WordPress and its extensions","Required payment and shipping providers support the workflow"]
    },
    {
      heading:"Choose custom development when business logic is the differentiator",
      text:"A custom React application or tailored business system may be appropriate when users have different permissions, workflows require approvals, or several systems need secure coordination. This can reduce compromises from stacking plugins, but it introduces responsibilities for code maintenance, deployment, hosting, testing and data security.",
      bullets:["Different user roles need distinct dashboards or actions","Existing tools cannot represent the actual approval or customer workflow","The value of tailored behavior justifies ongoing development"]
    }
  ];
  const checklist=[
    ["Who edits content?","A nontechnical staff member editing weekly may benefit from a CMS; occasional changes can work with a managed development arrangement."],
    ["What customer actions matter?","Map the inquiry, booking, purchase or application steps before choosing the platform."],
    ["What is the lifetime cost?","Include hosting, software, updates, payment processing, support and future integrations—not just the launch price."],
    ["How sensitive is the data?","Customer, tenant and payment workflows demand suitable providers, access controls and security review."],
    ["What happens after launch?","Choose an approach your team can realistically update, monitor, back up and improve."]
  ];
  const schema={"@context":"https://schema.org","@type":"Article",headline:title,description,
    author:{"@type":"Organization",name:"The Ivana Collective"}};
  return (
    <article className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-left sm:px-6 md:py-32 lg:px-8">
      <SeoMeta title={title} description={description} canonicalPath={path} schema={schema}
        breadcrumbs={[{name:"Home",item:"/"},{name:"Services",item:"/services"},{name:"WordPress or Custom Website?",item:path}]}/>
      <header className="space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B9D8CE]">PRACTICAL WEBSITE PLANNING GUIDE</p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] text-[#F4F5F1]">WordPress or a custom website? Choose what fits your business.</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-[#E0EBE5]">There's no single best platform for every business. The right answer depends on how your team updates content, what customers need to accomplish, and the systems that support your operations.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/website-generator" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Try a Website Preview <ArrowRight size={17}/></Link>
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#B9D8CE] bg-[#061C1A]/70 px-6 font-semibold text-[#F4F5F1]">Discuss Your Website <ArrowRight size={17}/></button>
        </div>
      </header>
      <StylePreviewSection onScheduleCall={onScheduleCall} />
      <section aria-labelledby="comparison" className="mt-14 rounded-3xl border border-[#B9D8CE]/20 bg-[#123B35]/70 p-7 md:p-10">
        <h2 id="comparison" className="mb-6 font-serif text-3xl text-[#F4F5F1]">Quick comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm text-[#E0EBE5]">
            <thead><tr className="border-b border-white/20"><th className="py-3 pr-5">Priority</th><th className="py-3 pr-5">WordPress</th><th className="py-3">Custom development</th></tr></thead>
            <tbody>{[
              ["Frequent content editing","Built-in publishing experience","CMS can be integrated if needed"],
              ["Specialized workflows","Possible with vetted plugins/custom code","More freedom to tailor business logic"],
              ["Ongoing maintenance","Core, plugins, themes and hosting","Application, dependencies and deployment"],
              ["Online store","WooCommerce is a common fit","Depends on commerce platform/integrations"],
              ["SEO potential","Strong with good implementation","Strong with crawlable rendering and good implementation"]
            ].map(([a,b,c])=><tr key={a} className="border-b border-white/10"><th className="py-3 pr-5 font-medium">{a}</th><td className="py-3 pr-5">{b}</td><td className="py-3">{c}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
      {sections.map((section,i)=><section key={section.heading} className="border-b border-white/10 py-14">
        <p className="font-mono text-xs text-[#B9D8CE]">OPTION 0{i+1}</p>
        <h2 className="mb-5 mt-3 font-serif text-3xl text-[#F4F5F1]">{section.heading}</h2>
        <p className="max-w-3xl text-base leading-relaxed text-[#E0EBE5]">{section.text}</p>
        <h3 className="mt-7 font-semibold text-[#F4F5F1]">A good fit when:</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[#E0EBE5]">{section.bullets.map(x=><li key={x}>{x}</li>)}</ul>
      </section>)}
      <section className="py-14" aria-labelledby="decision-checklist">
        <h2 id="decision-checklist" className="mb-8 font-serif text-3xl text-[#F4F5F1]">Five questions before choosing your platform</h2>
        <div className="space-y-4">{checklist.map(([question,answer],i)=><div key={question} className="rounded-2xl border border-white/10 bg-[#0D2623]/70 p-6">
          <h3 className="font-serif text-xl text-[#F4F5F1]">{i+1}. {question}</h3><p className="mt-2 text-base leading-relaxed text-[#B8C6C1]">{answer}</p>
        </div>)}</div>
      </section>
      <section aria-label="Related services" className="mb-12 flex flex-wrap gap-6">
        <Link href="/services/wordpress-development" className="text-[#B9D8CE] underline underline-offset-4">WordPress development</Link>
        <Link href="/services/custom-business-systems" className="text-[#B9D8CE] underline underline-offset-4">Custom business systems</Link>
        <Link href="/services/woocommerce-development" className="text-[#B9D8CE] underline underline-offset-4">WooCommerce</Link>
      </section>
      <section className="rounded-3xl border border-[#B9D8CE]/20 bg-[#0D2623] p-8 md:p-12">
        <h2 className="font-serif text-3xl text-[#F4F5F1]">Not sure which approach makes sense?</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8C6C1]">Describe the business process and customer experience first. We can compare realistic platform options without committing to a rebuild.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/website-generator" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Try Your Website Preview <ArrowRight size={17}/></Link>
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#B9D8CE] px-6 font-semibold text-[#F4F5F1]">Discuss My Website <ArrowRight size={17}/></button>
        </div>
      </section>
    </article>
  );
}
