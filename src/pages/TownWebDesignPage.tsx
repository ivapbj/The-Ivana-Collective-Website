import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import StylePreviewSection from "../components/StylePreviewSection";
import { Link } from "../context/NavigationContext";

/**
 * Service-area pages, not claims of staffed offices or Google rankings.
 * Each page addresses a specific customer journey and has distinct content.
 */
type Town = "wilbraham" | "east-longmeadow" | "longmeadow" | "enfield";
const towns = {
  wilbraham: {
    name: "Wilbraham, MA", path: "/locations/wilbraham-ma-web-design",
    eyebrow: "WILBRAHAM, MASSACHUSETTS · WEBSITE DESIGN",
    title: "Wilbraham, MA Web Design & Website Development | The Ivana Collective",
    description: "Custom website design for Wilbraham, Massachusetts businesses. Clear service pages, customer inquiries, booking tools, WordPress and ongoing site support.",
    headline: "A website that makes it easier for Wilbraham customers to choose you.",
    intro: "If someone hears about your Wilbraham business and looks you up, can they quickly understand what you offer, where you work, and how to get started? I design websites that answer those questions clearly and make contacting you simple.",
    challengeTitle: "Turn a recommendation into a real inquiry",
    challenge: "A referral is only the beginning. Whether your business provides home services, personal care, or professional appointments, prospective customers need understandable services, mobile-friendly contact options, and information that matches what you actually offer.",
    exampleTitle: "For an appointment-based Wilbraham business",
    example: "Picture a visitor arriving from a recommendation. They can compare services, see whether you serve their location, request an appointment, and receive the next steps without having to search through social media posts. We can build that experience with WordPress or a tailored solution based on the business.",
    capabilities: [
      ["Help customers understand what you do", "Clear descriptions of services, who they're for, and what a first appointment or project looks like."],
      ["Make it easy to reach you", "Mobile-friendly forms, click-to-call options and scheduling links that lead to the right place."],
      ["Make updating information manageable", "An editing system or ongoing care plan for changing service details, hours and offerings."],
      ["Support local discovery", "Useful service and location content, accurate titles, internal links and search-friendly page structure."]
    ],
    faqs: [
      ["Can you redesign my current Wilbraham business website?", "Yes. I can review your existing content, traffic-sensitive URLs and contact forms, then recommend focused improvements or a rebuild."],
      ["Will I be able to edit the site myself?", "If that's important to you, we can choose an editing-friendly platform such as WordPress and agree on what you'll manage."],
      ["Can you connect my booking or contact software?", "Often, yes. We'll review the software you use and how its supported integrations work before deciding on the best setup."]
    ],
    related: [["/locations/springfield-ma-web-design","Springfield web design"],["/services/website-redesign","Website redesign"],["/services/wordpress-development","WordPress development"]]
  },
  "east-longmeadow": {
    name: "East Longmeadow, MA", path: "/locations/east-longmeadow-ma-web-design",
    eyebrow: "EAST LONGMEADOW, MASSACHUSETTS · WEB DESIGN",
    title: "East Longmeadow, MA Web Design & Business Websites | The Ivana Collective",
    description: "East Longmeadow, MA website design for service providers, shops and growing businesses. Mobile-first pages, online inquiries, WordPress and business integrations.",
    headline: "Give your East Longmeadow business a website that works as hard as you do.",
    intro: "Your website is often the first place a potential customer checks before calling, booking or visiting. I help East Longmeadow businesses create a professional first impression and a clear next step—whether that's a quote request, appointment or purchase.",
    challengeTitle: "Make the next step obvious",
    challenge: "A website shouldn't leave visitors guessing where to click or what happens after they fill out a form. We can simplify your navigation, clarify services and set up an inquiry process your team can actually manage.",
    exampleTitle: "For an East Longmeadow service business",
    example: "Imagine a customer comparing several providers on their phone. Your site explains which services you offer, helps them request a quote with the right details, and sends the inquiry into an organized workflow rather than a scattered email thread.",
    capabilities: [
      ["Turn visits into useful requests", "Quote forms that ask the right questions and provide a clear confirmation to customers."],
      ["Show your business at its best", "Distinctive, responsive layouts using your actual photos, work and brand—not generic claims or made-up testimonials."],
      ["Organize the work after someone clicks", "Practical email notifications, scheduling and integrations with tools you already use."],
      ["Keep pages search-ready", "Crawlable text, relevant service headings, descriptive metadata, and properly linked pages."]
    ],
    faqs: [
      ["Can my website collect quote requests?", "Yes. We can create a straightforward request form that collects the details you need while avoiding unnecessary steps."],
      ["Do I need to replace my current website?", "Not necessarily. We can inspect the current site first and decide whether improvements are enough."],
      ["Can you help after the website goes live?", "Yes. Ongoing maintenance and updates can be included in an agreed support plan."]
    ],
    related: [["/services/business-automation","Business automation"],["/services/web-design","Custom web design"],["/locations/massachusetts","Massachusetts website services"]]
  },
  longmeadow: {
    name: "Longmeadow, MA", path: "/locations/longmeadow-ma-web-design",
    eyebrow: "LONGMEADOW, MASSACHUSETTS · WEBSITE DEVELOPMENT",
    title: "Longmeadow, MA Web Design & Custom Websites | The Ivana Collective",
    description: "Longmeadow, MA custom website design for organizations and local businesses. Modern service pages, member information, forms, scheduling and ongoing WordPress care.",
    headline: "Thoughtful websites for Longmeadow businesses and organizations.",
    intro: "A great website should help the people you serve find accurate information quickly. From professional services to clubs and community organizations, I build clear, distinctive digital experiences with the practical functionality that keeps your day-to-day work moving.",
    challengeTitle: "Give visitors the right information, without the extra back-and-forth",
    challenge: "Organizations often need to keep schedules, announcements, program details or membership information current. Other businesses need easy inquiries and appointment requests. The right site structure makes these everyday tasks easier for both visitors and staff.",
    exampleTitle: "For a Longmeadow organization with programs and updates",
    example: "Consider a website with clearly organized program pages, public event information and a defined path for members to reach the appropriate portal. Staff can update what's public without accidentally displaying information meant for members.",
    capabilities: [
      ["Organize programs and services", "Navigation that separates important offerings, schedules, visitor information and contact options."],
      ["Make updates less frustrating", "Manageable content sections so routine changes don't require a full redesign."],
      ["Handle inquiries appropriately", "Contact forms, registration paths and links to existing membership or booking systems."],
      ["Design for all screen sizes", "Readable typography, accessible controls and mobile layouts for people checking details on the go."]
    ],
    faqs: [
      ["Can you work with a club or member-based organization?", "Yes. We can organize public information and connect visitors to an existing member portal where appropriate."],
      ["Can staff update classes, schedules or announcements?", "We can plan an editing workflow around the tools and permissions your team needs."],
      ["Will our existing links still work after a redesign?", "We'll review the important URLs and plan redirects where appropriate before changing the site's structure."]
    ],
    related: [["/services/website-maintenance","Website maintenance"],["/services/custom-business-systems","Custom business systems"],["/locations/springfield-ma-web-design","Springfield-area web design"]]
  },
  enfield: {
    name: "Enfield, CT", path: "/locations/enfield-ct-web-design",
    eyebrow: "ENFIELD, CONNECTICUT · WEBSITE DESIGN",
    title: "Enfield, CT Web Design & Website Development | The Ivana Collective",
    description: "Custom web design for Enfield, Connecticut businesses. Service and e-commerce websites, online booking, WordPress, local SEO fundamentals and automation.",
    headline: "Help Enfield customers find you, trust you and take the next step.",
    intro: "For businesses serving Enfield and the surrounding Connecticut–Massachusetts area, your website can do more than display a phone number. It can explain your offerings, guide visitors to the right service, and keep inquiries or orders organized.",
    challengeTitle: "Build around your customers—not a one-size-fits-all theme",
    challenge: "A local retailer, contractor and appointment-based practice all need different customer journeys. We'll start with what someone is trying to accomplish, then build the pages, store or forms that support it.",
    exampleTitle: "For an Enfield business serving customers across state lines",
    example: "If your business legitimately serves customers in both Connecticut and Massachusetts, the website can make your real service area and offerings easy to understand, without creating duplicate town pages or claiming offices you don't have.",
    capabilities: [
      ["Service pages that answer questions", "Explain what you offer, who you serve, and how customers should get in touch."],
      ["E-commerce when you need it", "Build online catalogs, product variants and checkout experiences with appropriate platform choices."],
      ["Booking and inquiry workflows", "Connect customer requests to scheduling, email or other supported business tools."],
      ["Technical foundations for search", "Crawlable page content, descriptive metadata, canonical URLs and honest service-area information."]
    ],
    faqs: [
      ["Do you work with Connecticut businesses?", "Yes. The Ivana Collective supports businesses in Connecticut, Western Massachusetts and elsewhere in the United States."],
      ["Can you build an online store?", "Yes. We can discuss WooCommerce or other appropriate solutions based on your catalog and how you fulfill orders."],
      ["Can you improve an existing business website?", "Yes. We'll review the current experience, forms and search-sensitive URLs before recommending changes."]
    ],
    related: [["/locations/connecticut","Connecticut web development"],["/services/ecommerce-websites","E-commerce websites"],["/services/business-automation","Business automation"]]
  }
} as const;

export default function TownWebDesignPage({ town, onScheduleCall }: { town: Town; onScheduleCall: () => void }) {
  const p = towns[town];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Web Design and Website Development for ${p.name} Businesses`,
    description: p.description,
    provider: { "@id": "https://theivanacollective.com/#organization" },
    areaServed: { "@type": "Place", name: p.name }
  };
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-left sm:px-6 md:py-32 lg:px-8">
      <SeoMeta title={p.title} description={p.description} canonicalPath={p.path} schema={schema} breadcrumbs={[
        {name:"Home",item:"/"}, {name:"Services",item:"/services"}, {name:p.name+" Web Design",item:p.path}
      ]}/>
      <header className="mb-12 max-w-4xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-[.2em] text-[#B9D8CE]">{p.eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] text-[#F4F5F1]">{p.headline}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#E0EBE5] md:text-lg">{p.intro}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/website-generator" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Try a Website Preview <ArrowRight size={17}/></Link>
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#B9D8CE] bg-[#061C1A]/80 px-6 font-semibold text-[#F4F5F1]">Schedule a Consultation <ArrowRight size={17}/></button>
        </div>
      </header>
      <StylePreviewSection onScheduleCall={onScheduleCall}/>
      <section className="my-12 rounded-3xl border border-[#B9D8CE]/20 bg-[#123B35]/70 p-8 md:p-12">
        <h2 className="font-serif text-3xl text-[#F4F5F1]">{p.challengeTitle}</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#E0EBE5]">{p.challenge}</p>
      </section>
      <section className="border-t border-white/10 py-14" aria-labelledby="town-solutions">
        <h2 id="town-solutions" className="mb-9 font-serif text-3xl text-[#F4F5F1] md:text-4xl">How your website can help</h2>
        <div className="grid gap-5 md:grid-cols-2">{p.capabilities.map(([title,copy])=>
          <article key={title} className="rounded-3xl border border-white/10 bg-[#0D2623]/70 p-7">
            <CheckCircle2 className="mb-4 text-[#B9D8CE]" size={23}/>
            <h3 className="font-serif text-2xl text-[#F4F5F1]">{title}</h3>
            <p className="mt-3 text-base leading-relaxed text-[#B8C6C1]">{copy}</p>
          </article>
        )}</div>
      </section>
      <section className="border-t border-white/10 py-14">
        <p className="font-mono text-xs uppercase tracking-[.2em] text-[#B9D8CE]">A REAL-WORLD WEBSITE SCENARIO</p>
        <h2 className="mt-3 font-serif text-3xl text-[#F4F5F1]">{p.exampleTitle}</h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#E0EBE5]">{p.example}</p>
        <p className="mt-4 text-sm leading-relaxed text-[#B8C6C1]">This is an example of a possible solution, not a claim that this specific project has been completed.</p>
      </section>
      <section className="border-t border-white/10 py-14">
        <h2 className="mb-8 font-serif text-3xl text-[#F4F5F1]">Questions about your website</h2>
        <div className="max-w-4xl divide-y divide-white/10">{p.faqs.map(([q,a])=>
          <article className="py-6" key={q}><h3 className="font-serif text-xl text-[#F4F5F1]">{q}</h3><p className="mt-3 text-base leading-relaxed text-[#E0EBE5]">{a}</p></article>
        )}</div>
      </section>
      <section className="my-12 rounded-3xl border border-white/10 bg-[#0D2623]/70 p-8">
        <h2 className="font-serif text-2xl text-[#F4F5F1]">Explore related services</h2>
        <div className="mt-5 flex flex-wrap gap-6">{p.related.map(([href,label])=><Link href={href} key={href} className="inline-flex min-h-11 items-center gap-2 text-[#B9D8CE] underline underline-offset-4">{label}<ArrowRight size={16}/></Link>)}</div>
      </section>
      <section className="rounded-3xl border border-[#B9D8CE]/20 bg-[#0D2623] p-8 md:p-12">
        <h2 className="font-serif text-3xl text-[#F4F5F1]">Have a website idea—or a site that isn't working for you?</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#E0EBE5]">Tell me about your business and what you want customers to be able to do. We'll discuss a practical direction without jargon.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A]">Schedule a Consultation <ArrowRight size={17}/></button>
          <Link href="/website-generator" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#B9D8CE] px-6 font-semibold text-[#F4F5F1]">Try Another Website Idea <ArrowRight size={17}/></Link>
        </div>
      </section>
    </div>
  );
}
