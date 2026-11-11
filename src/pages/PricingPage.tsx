import React from "react";
import SeoMeta from "../components/SeoMeta";
import { BOOKING_CALENDAR_URL } from "../data";

const EMAIL = "info@theivanacollective.com";
const mailto = (service: string) =>
  "mailto:" + EMAIL + "?subject=" + encodeURIComponent(service + " Inquiry — The Ivana Collective");

const buttonPrimary =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-[#B9D8CE] px-5 py-3 text-center text-sm font-semibold text-[#061C1A] transition-colors hover:bg-[#F4F5F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B9D8CE]";
const buttonSecondary =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-[#B9D8CE]/35 bg-[#0D2623] px-5 py-3 text-center text-sm font-semibold text-[#F4F5F1] transition-colors hover:border-[#B9D8CE] hover:bg-[#123B35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B9D8CE]";

const socialPlans = [
  {
    name: "Starter",
    price: "$449",
    platforms: "Choose 3 platforms",
    content: ["4 short videos each month", "8 branded posts each month"],
    note: "Choose three: Facebook, Instagram, TikTok, or Google Business Profile.",
    highlighted: false,
    cta: "Start Growing My Brand",
  },
  {
    name: "Growth",
    price: "$649",
    platforms: "All 4 platforms",
    content: ["5 short videos each month", "12 branded posts each month"],
    note: "Facebook, Instagram, TikTok, and Google Business Profile.",
    highlighted: true,
    cta: "Choose Growth",
  },
  {
    name: "Local Authority",
    price: "$949",
    platforms: "All 4 platforms",
    content: [
      "10 short videos each month",
      "18 branded posts each month",
      "Mobile-friendly Link Hub mini-site while the package is active",
    ],
    note: "Premium content cadence and visibility support.",
    highlighted: false,
    cta: "Let’s Talk Social Media",
  },
];

const socialSetup = [
  ["Instagram", "$149"],
  ["Facebook", "$99"],
  ["TikTok", "$149"],
  ["Google Business Profile", "$249"],
  ["All-four setup bundle", "$499"],
];

const emailPlans = [
  { name: "Email Starter", price: "$99" },
  { name: "Email Growth", price: "$179" },
];

function SectionIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className="mb-8 max-w-3xl space-y-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7CA99B]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-normal leading-tight text-[#F4F5F1] sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-[#B8C6C1] sm:text-base">
        {subtitle}
      </p>
    </header>
  );
}

function PriceCard({
  name,
  price,
  period,
  description,
  features,
  href,
  cta,
  highlighted = false,
  note,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features?: string[];
  href: string;
  cta: string;
  highlighted?: boolean;
  note?: string;
}) {
  return (
    <article
      className={
        "flex h-full flex-col rounded-2xl border p-6 sm:p-7 " +
        (highlighted
          ? "border-[#B9D8CE]/60 bg-[#0D2623]"
          : "border-white/10 bg-[#0D2623]/55")
      }
    >
      <div className="flex-1">
        <h3 className="font-serif text-2xl font-medium text-[#F4F5F1]">{name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-[#B8C6C1]">{description}</p>
        <p className="mt-5 flex flex-wrap items-baseline gap-x-2 border-b border-white/10 pb-4">
          <span className="font-serif text-4xl font-semibold tracking-tight text-[#F4F5F1]">
            {price}
          </span>
          {period && (
            <span className="text-xs uppercase tracking-wide text-[#7CA99B]">{period}</span>
          )}
        </p>
        {features && (
          <ul className="mt-5 space-y-3 text-sm leading-6 text-[#D4DEDA]">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-1 text-[#B9D8CE]">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {note && <p className="mt-4 text-xs leading-5 text-[#91AAA1]">{note}</p>}
      </div>
      <a
        href={href}
        className={(highlighted ? buttonPrimary : buttonSecondary) + " mt-7 w-full"}
      >
        {cta}
      </a>
    </article>
  );
}

export default function PricingPage() {
  const schema = {
    "@type": "WebPage",
    name: "Pricing | The Ivana Collective",
    description:
      "Explore website design, maintenance, social media, email marketing, and local SEO services from The Ivana Collective.",
  };
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Pricing", item: "/pricing" },
  ];

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 md:pt-28 lg:px-8">
      <SeoMeta
        title="Pricing for Websites, Social Media & SEO | The Ivana Collective"
        description="Explore transparent starting prices for website design, maintenance, social media management, email marketing, and local SEO."
        canonicalPath="/pricing"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      <section aria-labelledby="pricing-title" className="pb-16 sm:pb-20">
        <div className="max-w-4xl">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#7CA99B]">
            Thoughtful digital support for growing businesses
          </p>
          <h1
            id="pricing-title"
            className="font-serif text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[1.02] tracking-tight text-[#F4F5F1]"
          >
            Simple, Transparent Pricing for Your Business
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#B8C6C1] sm:text-lg">
            Whether you’re launching your first website or growing your online presence, find the
            right digital solution for your business.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#91AAA1]">
            Every business is different. We can tailor the scope to your goals, timeline, and budget
            before you commit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className={buttonPrimary} href={BOOKING_CALENDAR_URL} target="_blank" rel="noreferrer">
              Schedule a Free Consultation
            </a>
            <a className={buttonSecondary} href="#website-design">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <section id="website-design" className="scroll-mt-28 border-t border-white/10 py-14 sm:py-16">
        <SectionIntro
          eyebrow="01 · Website projects"
          title="Website Design & Development"
          subtitle="Beautiful, functional websites built to help your business stand out and grow."
        />
        <div className="mb-7 rounded-xl border border-[#B9D8CE]/20 bg-[#0D2623]/65 p-5 sm:p-6">
          <p className="text-sm leading-6 text-[#D4DEDA]">
            Website projects start at <strong className="text-[#F4F5F1]">$1,800</strong>. Your
            written proposal confirms the exact scope, price, timeline, hosting, and any ongoing
            support before work begins.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <PriceCard
            name="Business & Service Websites"
            price="$1,800+"
            description="A polished, mobile-friendly home for your services, story, and inquiries."
            features={["Service-focused page structure", "Clear contact and booking paths"]}
            href={mailto("Website Design")}
            cta="Start My Website"
          />
          <PriceCard
            name="E-commerce & Online Stores"
            price="Custom quote"
            description="A tailored storefront that helps customers browse and place orders."
            features={["Product and category structure", "Checkout and payment setup scoped to your store"]}
            href={mailto("E-commerce Website")}
            cta="Let’s Build Your Store"
          />
          <PriceCard
            name="Landing Pages"
            price="Custom quote"
            description="A focused page for a campaign, service, launch, or lead-generation goal."
            features={["Clear message and next step", "Mobile-first layout"]}
            href={mailto("Landing Page")}
            cta="Plan My Landing Page"
          />
          <PriceCard
            name="Custom Development"
            price="$250"
            period="per page"
            description="Custom websites coded in HTML, CSS, JavaScript, and React."
            features={["Bespoke design and development", "Project scope confirmed before work begins"]}
            href={mailto("Custom Website Development")}
            cta="Discuss Custom Development"
          />
        </div>
        <div className="mt-6 rounded-xl border border-white/10 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h3 className="font-serif text-xl text-[#F4F5F1]">Want to see your business in a design?</h3>
            <p className="mt-1 text-sm leading-6 text-[#B8C6C1]">
              Choose a template and create a personalized preview in the website generator.
            </p>
          </div>
          <a
            className={buttonSecondary + " mt-4 w-full shrink-0 sm:mt-0 sm:w-auto"}
            href="/#interactive-preview"
          >
            Preview Your Own Website
          </a>
        </div>
        <p className="mt-4 text-sm text-[#91AAA1]">
          <a className="underline decoration-[#7CA99B]/60 underline-offset-4 hover:text-[#F4F5F1]" href="/services/web-design">
            Explore website design services
          </a>
        </p>
      </section>

      <section id="maintenance" className="scroll-mt-28 border-t border-white/10 py-14 sm:py-16">
        <SectionIntro
          eyebrow="02 · Ongoing care"
          title="Website Maintenance & Support"
          subtitle="Keep your website secure, updated, and performing at its best."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.42fr)]">
          <PriceCard
            name="Essential Website Maintenance"
            price="$99"
            period="per month"
            description="An ongoing care option for businesses that want help looking after their website."
            features={["Website hosting included"]}
            note="Your proposal will spell out the care, update, and support scope for your specific website."
            href={mailto("Website Maintenance")}
            cta="Protect My Website"
            highlighted
          />
          <aside className="rounded-2xl border border-white/10 bg-[#0D2623]/35 p-6 sm:p-7">
            <h3 className="font-serif text-2xl text-[#F4F5F1]">Need more hands-on support?</h3>
            <p className="mt-3 text-sm leading-6 text-[#B8C6C1]">
              Additional updates, technical help, and ongoing website care can be scoped to your
              platform and needs.
            </p>
            <a className={buttonSecondary + " mt-6 w-full"} href={mailto("Website Care and Support")}>
              Ask About Website Care
            </a>
          </aside>
        </div>
      </section>

      <section id="social-media" className="scroll-mt-28 border-t border-white/10 py-14 sm:py-16">
        <SectionIntro
          eyebrow="03 · Consistent content"
          title="Social Media Management"
          subtitle="Consistent, engaging content that builds your brand and keeps your business connected with customers."
        />
        <div className="mb-7 rounded-xl border border-[#B9D8CE]/25 bg-[#0D2623] p-5 sm:flex sm:items-start sm:justify-between sm:gap-6">
          <div>
            <h3 className="font-serif text-xl text-[#F4F5F1]">
              Commit to 6 Months. We’ll Waive Your Setup Fee.
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#B8C6C1]">
              Choose an eligible six-month social media agreement and we’ll waive the setup fee for
              the marketing accounts included in that package. Monthly service fees still apply;
              shorter agreements use the standard setup fees listed below.
            </p>
          </div>
          <span className="mt-4 inline-block shrink-0 rounded-full border border-[#B9D8CE]/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-[#B9D8CE] sm:mt-1">
            6-month enrollment
          </span>
        </div>
        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {socialPlans.map((plan) => (
            <div key={plan.name}>
              <PriceCard
                name={plan.name}
                price={plan.price}
                period="per month"
                description={plan.platforms}
                features={[
                  ...plan.content,
                  "Content planning, captions, scheduling, and monthly review",
                  "Branded graphics with clear calls to action",
                ]}
                note={
                  plan.note +
                  " Content counts are unique monthly assets adapted for selected channels, not separate assets for each platform."
                }
                href={mailto("Social Media Management — " + plan.name)}
                cta={plan.cta}
                highlighted={plan.highlighted}
              />
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-white/10 p-5">
          <h3 className="font-serif text-xl text-[#F4F5F1]">One-time platform setup</h3>
          <p className="mt-1 text-sm leading-6 text-[#B8C6C1]">
            Setup and profile optimization can also be purchased separately. The six-month waiver
            applies to eligible package setup fees.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-[#D4DEDA] sm:grid-cols-2 lg:grid-cols-5">
            {socialSetup.map(([platform, price]) => (
              <li key={platform} className="flex justify-between gap-3 border-t border-white/10 pt-2">
                <span>{platform}</span>
                <strong className="whitespace-nowrap text-[#F4F5F1]">{price}</strong>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-[#91AAA1]">
          <a className="underline decoration-[#7CA99B]/60 underline-offset-4 hover:text-[#F4F5F1]" href="/services/content-growth">
            Explore content and social media services
          </a>
        </p>
      </section>

      <section id="email-marketing" className="scroll-mt-28 border-t border-white/10 py-14 sm:py-16">
        <SectionIntro
          eyebrow="04 · Audience connection"
          title="Email Marketing & Automation"
          subtitle="Stay connected with your audience, nurture leads, and turn interest into lasting customer relationships."
        />
        <div className="mb-6 rounded-xl border border-white/10 p-5">
          <p className="text-sm leading-6 text-[#B8C6C1]">
            These are email marketing management packages. Website lead-response messages and
            transactional notices, such as order confirmations, are separate systems and are not
            included here by default.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {emailPlans.map((plan) => (
            <div key={plan.name}>
              <PriceCard
                name={plan.name}
                price={plan.price}
                period="per month"
                description="Monthly email marketing service."
                note="Campaign volume, audience setup, and automation deliverables will be confirmed in your written proposal."
                href={mailto("Email Marketing — " + plan.name)}
                cta={plan.name === "Email Starter" ? "Start My Email Campaign" : "Discuss Email Automation"}
                highlighted={plan.name === "Email Growth"}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="seo" className="scroll-mt-28 border-t border-white/10 py-14 sm:py-16">
        <SectionIntro
          eyebrow="05 · Search visibility"
          title="SEO & Local Business Visibility"
          subtitle="Help more customers discover your business when they’re searching for services like yours."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Search engine optimization", "On-page and ongoing search improvements"],
            ["Local SEO", "Location-focused visibility and service area planning"],
            ["Google Business Profile", "Profile setup and optimization"],
            ["Technical SEO", "Site health and search readiness"],
          ].map(([name, description]) => (
            <div key={name} className="rounded-xl border border-white/10 bg-[#0D2623]/45 p-5">
              <h3 className="font-serif text-xl text-[#F4F5F1]">{name}</h3>
              <p className="mt-1 text-sm leading-6 text-[#B8C6C1]">{description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-4xl text-xs leading-5 text-[#91AAA1]">
          SEO work is scoped separately unless your written proposal says it is included. Google
          Business Profile publishing already covered by a social media package is not charged again
          as the same work under SEO.
        </p>
        <a className={buttonPrimary + " mt-6"} href={mailto("SEO and Local Visibility")}>
          Improve My Online Visibility
        </a>
        <p className="mt-4 text-sm text-[#91AAA1]">
          <a className="underline decoration-[#7CA99B]/60 underline-offset-4 hover:text-[#F4F5F1]" href="/services/seo">
            Explore SEO services
          </a>
        </p>
      </section>

      <section className="mt-4 rounded-2xl border border-[#B9D8CE]/25 bg-[#0D2623] px-6 py-10 sm:px-9 sm:py-12">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7CA99B]">
              A thoughtful fit for your business
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#F4F5F1] sm:text-4xl">
              Need Something More Custom?
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#B8C6C1] sm:text-base">
              Not every business fits into a standard package. Let’s build a solution around your
              goals, timeline, and budget.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[380px] lg:flex-col">
            <a className={buttonPrimary} href={BOOKING_CALENDAR_URL} target="_blank" rel="noreferrer">
              Let’s Build Something Great
            </a>
            <a className={buttonSecondary} href={mailto("New Project Inquiry")}>
              Email Us About Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
