import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";

/** Service descriptions only: named client case studies require separate approval. */
export type CommerceWellnessTopic = "wordpress-development" | "woocommerce-development" | "ecommerce-websites" | "beauty-wellness-websites";
type Props = { topic: CommerceWellnessTopic; onScheduleCall: () => void };

const topics = {
  "wordpress-development": {
    path: "/services/wordpress-development",
    title: "WordPress Website Development for Growing Businesses",
    description: "Custom WordPress website development, redesigns, integrations and ongoing support for businesses nationwide. Built around your goals, not a generic theme.",
    eyebrow: "WORDPRESS DEVELOPMENT",
    headline: "A WordPress website that works the way your business does.",
    introduction: "WordPress is a practical choice when your team needs editable content, reliable integrations and room to grow. We build around your services, customers and day-to-day operations instead of asking you to fit a one-size-fits-all template.",
    service: "WordPress Website Development",
    cards: [
      ["Custom site structure", "Thoughtful pages, navigation and content organization that explain your services and help visitors take action."],
      ["Business integrations", "Connect appropriate booking, application, contact, property or membership systems to your WordPress site."],
      ["Content you can manage", "Set up sensible editing workflows and training so routine updates don't always require a developer."],
      ["Responsive implementation", "Check usability on phones, tablets and desktops, including forms, navigation and important calls to action."],
      ["Technical SEO", "Use understandable page structure, crawlable content, metadata and site performance practices as part of development."],
      ["Maintenance and improvements", "Plan updates, backups, plugin compatibility and future enhancements according to your hosting and support arrangements."]
    ],
    faqs: [
      ["Is WordPress the right platform for my business?", "It depends on the content, integrations, budget and amount of custom logic involved. We can recommend WordPress, a custom frontend or a hybrid approach after understanding your needs."],
      ["Can you improve my existing WordPress website?", "Yes. An audit can identify opportunities for a redesign, accessibility work, performance improvements, better integrations or ongoing support."],
      ["Will I be able to make updates myself?", "For many sites, yes. We can organize editable content and show your team how to update routine information without changing the site's design."]
    ],
    secondary: "/services/website-maintenance",
    secondaryLabel: "Ongoing WordPress support"
  },
  "woocommerce-development": {
    path: "/services/woocommerce-development",
    title: "WooCommerce Store Development & Customization",
    description: "Custom WooCommerce development for product catalogs, variations, checkout, shipping, payments and ongoing store support. Nationwide e-commerce solutions.",
    eyebrow: "WOOCOMMERCE DEVELOPMENT",
    headline: "An online store built for more than a beautiful product grid.",
    introduction: "Your shop needs accurate product details, clear purchasing steps and dependable connections between checkout, payments, fulfillment and customer service. We develop and customize WooCommerce stores to fit the way you sell.",
    service: "WooCommerce Development and Store Customization",
    cards: [
      ["Products and variations", "Organize collections, sizing, inventory details and product options so customers can choose accurately."],
      ["Checkout and payments", "Configure suitable payment providers and test checkout, taxes and customer communications with the store owner's requirements."],
      ["Shipping integrations", "Connect supported shipping and label providers, rates and fulfillment workflows when appropriate."],
      ["Customer order journeys", "Improve order status information, transactional emails and the way customers request help."],
      ["Store usability", "Make product browsing and purchasing practical on smaller screens, with accessible controls and clear calls to action."],
      ["Store maintenance", "Coordinate WooCommerce updates, theme and extension compatibility, backups and ongoing troubleshooting."]
    ],
    faqs: [
      ["Can you add features to an existing WooCommerce shop?", "Yes. We first check whether the feature can be handled by a maintained extension or whether focused custom development is more appropriate."],
      ["Can WooCommerce connect to shipping software?", "Often. The exact setup depends on the shipping provider, store location, products, required services and supported integrations."],
      ["Do you handle sales-tax compliance?", "We can configure the agreed tax software and settings, but the business owner should confirm tax obligations with a qualified tax professional."]
    ],
    secondary: "/services/website-maintenance",
    secondaryLabel: "Ongoing store maintenance"
  },
  "ecommerce-websites": {
    path: "/services/ecommerce-websites",
    title: "Custom E-commerce Website Development",
    description: "E-commerce website design and development for growing brands: product catalogs, checkout, integrations and scalable operations. WooCommerce and custom solutions nationwide.",
    eyebrow: "E-COMMERCE WEBSITES",
    headline: "Your online store should support the business behind the brand.",
    introduction: "An e-commerce website isn't finished when the product photos look good. Your customers need to find the right items and complete an order, while your team needs dependable catalog, payment and fulfillment workflows.",
    service: "E-commerce Website Design and Development",
    cards: [
      ["Platform fit", "Compare store requirements and operating costs before choosing WooCommerce, Shopify or an appropriately custom approach."],
      ["Catalogs and collections", "Structure product categories, variants, descriptions, photography and filtering around how shoppers browse."],
      ["Checkout clarity", "Make cart, payment, shipping and confirmation steps easy to understand and test them before launch."],
      ["Operational integrations", "Connect supported tools for shipping, email, inventory and customer service rather than adding disconnected admin tasks."],
      ["Mobile shopping", "Pay attention to sizing selection, product details, touch targets and checkout flow on real mobile layouts."],
      ["Growth and maintenance", "Prepare a store for new products, evolving policies, seasonal campaigns and future integrations."]
    ],
    faqs: [
      ["Should I use WooCommerce or Shopify?", "WooCommerce offers extensive WordPress customization; Shopify may simplify some hosted commerce operations. We'll compare costs, features, integrations and maintenance responsibilities before advising."],
      ["Can you build around my existing branding?", "Yes. The store should reflect your brand while keeping shopping and checkout usable and consistent."],
      ["Can you migrate an existing store?", "Migration is possible after reviewing products, URLs, redirects, customer information, platform limitations and the risks of moving orders or accounts."]
    ],
    secondary: "/services/woocommerce-development",
    secondaryLabel: "Explore WooCommerce development"
  },
  "beauty-wellness-websites": {
    path: "/industries/beauty-wellness",
    title: "Beauty & Wellness Website Design and SEO",
    description: "Websites for electrolysis practices, salons, spas and wellness studios with service pages, booking paths, location-aware content and maintenance. New England roots, nationwide service.",
    eyebrow: "BEAUTY & WELLNESS WEB DEVELOPMENT",
    headline: "A welcoming website for the services your clients are searching for.",
    introduction: "Beauty and wellness businesses need to explain specialized services clearly, establish confidence and make booking straightforward. We plan your website around the questions clients ask before choosing an appointment.",
    service: "Beauty and Wellness Website Design",
    cards: [
      ["Clear treatment and service pages", "Explain services, suitable audiences, preparation and next steps without confusing visitors."],
      ["Appointment pathways", "Connect the existing booking provider and place relevant scheduling calls to action where people need them."],
      ["Location-aware content", "Help people understand your real service area and studio information without creating repetitive city pages."],
      ["Mobile accessibility", "Make phone numbers, directions, service menus and booking controls usable on small screens."],
      ["Search-friendly structure", "Organize service topics, FAQs, page titles, internal links and technical fundamentals for organic discovery."],
      ["Updates as your practice changes", "Keep pricing, service availability, policies, staff details and booking integrations current."]
    ],
    faqs: [
      ["Can I keep my existing booking system?", "Usually, yes. We review how your booking provider supports direct links, embedded tools or other safe integrations."],
      ["Can a wellness website target nearby communities?", "Yes, when information is genuinely useful and reflects the business's actual location and services. We avoid duplicate location pages designed only for search engines."],
      ["Can you redesign an existing practice website?", "Yes. We first check existing service content, SEO URLs, appointment flows, visual identity and accessibility needs."]
    ],
    secondary: "/services/website-redesign",
    secondaryLabel: "Explore website redesigns"
  }
} as const;

export default function CommerceWellnessPage({ topic, onScheduleCall }: Props) {
  const page = topics[topic];
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
      <SeoMeta title={page.title} description={page.description} canonicalPath={page.path} schema={schema} breadcrumbs={breadcrumbs} />
      <header className="mb-16 max-w-4xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B9D8CE]">{page.eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.06] text-[#F4F5F1]">{page.headline}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#E0EBE5] md:text-lg">{page.introduction}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A] hover:bg-[#F4F5F1]">Talk About Your Project <ArrowRight size={17}/></button>
          <Link href="/work" className="inline-flex min-h-12 items-center rounded-xl border border-[#B9D8CE] px-6 font-semibold text-[#F4F5F1] hover:bg-[#123B35]">View Selected Work</Link>
        </div>
      </header>

      <section aria-labelledby="solutions" className="border-t border-white/10 py-14">
        <h2 id="solutions" className="mb-9 font-serif text-3xl text-[#F4F5F1] md:text-4xl">What we can build and improve</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {page.cards.map(([heading, description]) => (
            <article key={heading} className="rounded-3xl border border-white/10 bg-[#0D2623]/70 p-7">
              <CheckCircle2 className="mb-5 text-[#B9D8CE]" size={23}/>
              <h3 className="mb-3 font-serif text-2xl text-[#F4F5F1]">{heading}</h3>
              <p className="text-base leading-relaxed text-[#B8C6C1]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="questions" className="border-t border-white/10 py-14">
        <h2 id="questions" className="mb-8 font-serif text-3xl text-[#F4F5F1] md:text-4xl">Questions before we start</h2>
        <div className="max-w-4xl divide-y divide-white/10">
          {page.faqs.map(([question, answer]) => (
            <article key={question} className="py-6">
              <h3 className="mb-3 font-serif text-xl text-[#F4F5F1]">{question}</h3>
              <p className="text-base leading-relaxed text-[#B8C6C1]">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[#B9D8CE]/20 bg-[#0D2623] p-8 md:p-12">
        <h2 className="font-serif text-3xl text-[#F4F5F1]">Build around your business, not a generic template.</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8C6C1]">Tell me what you sell or offer, which tools you already use, and what you need the website to make easier.</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A]">Schedule a Consultation</button>
          <Link href={page.secondary} className="inline-flex min-h-12 items-center gap-2 font-semibold text-[#B9D8CE] underline underline-offset-4">{page.secondaryLabel} <ArrowRight size={17}/></Link>
        </div>
      </section>
    </div>
  );
}
