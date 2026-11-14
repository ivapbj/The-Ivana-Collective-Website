import React from "react";
import "./SocialMediaPage.css";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";
import { BOOKING_CALENDAR_URL } from "../data";
import { ArrowRight, Check, ChevronRight, Instagram, Facebook, Video } from "lucide-react";

const plans = [
  {
    name: "Essential Visibility",
    price: "$449",
    platforms: "Facebook, Instagram & TikTok",
    videos: "4 short videos",
    posts: "8 branded posts",
    description: "A consistent, professional presence for businesses ready to stop posting at random.",
    features: ["Monthly content calendar", "Branded graphics, captions & calls to action", "Scheduling and publishing", "Monthly performance recap"],
    featured: false,
  },
  {
    name: "Growth Visibility",
    price: "$649",
    platforms: "Facebook, Instagram & TikTok",
    videos: "5 short videos",
    posts: "12 branded posts",
    description: "More opportunities to get noticed and stay top of mind across every core channel.",
    features: ["Monthly content calendar", "Branded graphics, captions & calls to action", "Scheduling and publishing", "Monthly performance recap"],
    featured: true,
  },
  {
    name: "Local Authority",
    price: "$949",
    platforms: "Facebook, Instagram & TikTok",
    videos: "10 short videos",
    posts: "18 branded posts",
    description: "For businesses that want a stronger, more frequent presence without managing it themselves.",
    features: ["Monthly content calendar", "Branded graphics, captions & calls to action", "Scheduling and publishing", "Monthly performance recap", "Complimentary mobile-friendly Link Hub mini-site while your plan is active"],
    featured: false,
  },
];

const setupFees = [
  ["Instagram", "$125"],
  ["Facebook", "$125"],
  ["TikTok", "$99"],
  ["All three social platforms", "$349"],
  ["Google Business Profile (separate setup)", "$150"],
];

const faqs = [
  ["Do I have to post the content myself?", "No. We plan, prepare, schedule, and publish approved content across Facebook, Instagram and TikTok."],
  ["Are the videos and posts created separately for every platform?", "The monthly counts are unique content pieces. We adapt and cross-post them across Facebook, Instagram and TikTok rather than counting the same piece three times."],
  ["What do you need from me?", "We start with your goals, brand information, and access to any existing photos or video clips. We will discuss what source material is needed for your content plan."],
  ["Do you guarantee followers, leads, or sales?", "No agency can responsibly guarantee specific results. We focus on consistent quality, relevant messaging, strategic publishing, and transparent reporting."],
  ["Is there a commitment?", "Packages have a three-month initial commitment. Choose a six-month agreement and setup fees for Facebook, Instagram and TikTok are waived. Google Business Profile setup remains a separate service."],
];

export default function SocialMediaPage({ onScheduleCall }: { onScheduleCall: () => void }) {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: "Social Media Management", item: "/services/social-media" },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Social Media Management",
    serviceType: "Social Media Management and Content Creation",
    provider: { "@type": "ProfessionalService", name: "The Ivana Collective" },
    areaServed: [{ "@type": "Place", name: "Western Massachusetts" }, { "@type": "Place", name: "Northern Connecticut" }],
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price.replace("$", ""),
      priceCurrency: "USD",
      description: plan.platforms + "; " + plan.videos + " and " + plan.posts + " per month",
    })),
  };
  return (
    <div className="social-media-page relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-24 text-[#F4F5F1] sm:px-6 md:pt-32 lg:px-8">
      <SeoMeta
        title="Social Media Management Packages & Pricing | The Ivana Collective"
        description="Social media management for small businesses in Western MA and Northern CT. Explore Instagram, Facebook, TikTok packages starting at $449/month."
        canonicalPath="/services/social-media"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />
      <Link href="/services" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#B9D8CE] hover:text-white">
        <span aria-hidden="true">←</span> Back to services
      </Link>

      <section className="mb-20 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#B9D8CE]">Social media management for small businesses</p>
          <h1 className="max-w-4xl font-serif text-[clamp(2.65rem,5.8vw,5.4rem)] leading-[1.07] tracking-tight">
            Show up consistently. <span className="text-[#B9D8CE]">Grow with intention.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#D4DEDA] sm:text-lg">
            Your business deserves more than an occasional post. We create branded videos, scroll-stopping posts, and clear messages—then schedule them across the channels your customers use. You stay focused on running your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#packages" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#B9D8CE] px-6 py-3 text-sm font-bold text-[#061C1A] hover:bg-white">Explore packages <ArrowRight size={16} /></a>
            <button type="button" onClick={onScheduleCall} className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#B9D8CE]/70 bg-[#0D2623]/80 px-6 py-3 text-sm font-semibold text-white hover:bg-[#123B35]">Schedule a free consultation</button>
          </div>
        </div>
        <aside className="rounded-3xl border border-[#B9D8CE]/25 bg-[#09241F]/90 p-7 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9D8CE]">Where we'll help you show up</p>
          <ul className="mt-6 grid gap-4 text-base font-medium">
            <li className="flex items-center gap-3"><Instagram size={21} className="text-[#B9D8CE]" /> Instagram</li>
            <li className="flex items-center gap-3"><Facebook size={21} className="text-[#B9D8CE]" /> Facebook</li>
            <li className="flex items-center gap-3"><Video size={21} className="text-[#B9D8CE]" /> TikTok</li>
            
          </ul>
          <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-[#D4DEDA]">One coordinated content plan, adapted for each included platform.</p>
        </aside>
      </section>

      <section className="mb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9D8CE]">Why social media matters</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl sm:text-4xl">Customers notice the businesses they see regularly.</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {[
            ["Build trust", "Show customers the real people, services, and experience behind your business."],
            ["Stay top of mind", "Be present when someone needs a recommendation, makes a buying decision, or is ready to book."],
            ["Make it easy to take action", "Use clear content and calls to action that guide visitors toward your website, booking page, or inbox."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-white/15 bg-[#0B2823]/90 p-6">
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D4DEDA]">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="packages" className="scroll-mt-28">
        <div className="mb-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9D8CE]">Straightforward monthly pricing</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Choose the support your business needs.</h2>
          <p className="mt-4 text-base leading-7 text-[#D4DEDA]">Every package includes planning, branded content, captions, scheduled publishing, and monthly reporting. No need to figure out what to post on your own.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`social-package-card flex flex-col rounded-2xl border p-6 sm:p-8 ${plan.featured ? "border-[#B9D8CE]" : "border-[#D9D5C9]"}`}>
              <h3 className="font-serif text-2xl">{plan.name}</h3>
              <p className="mt-2 min-h-16 text-sm leading-6 text-[#263D36]">{plan.description}</p>
              <div className="mt-5 flex items-end gap-2 border-b border-[#A7B4AA] pb-6">
                <strong className="font-serif text-5xl font-medium">{plan.price}</strong><span className="mb-2 text-sm text-[#263D36]">/ month</span>
              </div>
              <p className="mt-6 font-semibold text-[#103F34]">{plan.platforms}</p>
              <div className="mt-4 grid gap-2 text-base font-medium"><p>{plan.videos} / month</p><p>{plan.posts} / month</p></div>
              <ul className="mt-6 flex-1 space-y-3 border-t border-[#A7B4AA] pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#23372E]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#103F34]" aria-hidden="true" />{feature}</li>
                ))}
              </ul>
              <a href={BOOKING_CALENDAR_URL} target="_blank" rel="noreferrer" className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-bold ${plan.featured ? "bg-[#103F34] text-white hover:bg-[#1D594A]" : "border border-[#103F34] text-[#103F34] hover:bg-[#E0E8DE]"}`}>Let's talk about this plan <ChevronRight size={16} /></a>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-[#D4DEDA]">Content counts represent unique assets each month, adapted and cross-posted across the included platforms. Paid advertising spend, on-site filming, and additional services are not included unless agreed separately.</p>
      </section>

      <section className="mb-12 rounded-3xl border border-[#B9D8CE]/30 bg-[#0B2823]/95 p-7 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9D8CE]">Google Business Profile</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Help customers find you on Google.</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#E1E9E4]">Your Google Business Profile helps people see your business in Google Search and Maps. We can help you set it up with accurate business details, categories, contact information, and essential profile settings.</p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <p className="font-serif text-4xl text-white">$150 <span className="font-sans text-sm text-[#D4DEDA]">one-time setup</span></p>
          <a href={BOOKING_CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#B9D8CE] px-6 py-3 text-sm font-bold text-[#061C1A] hover:bg-white">Ask about Google Business Profile</a>
        </div>
        <p className="mt-4 text-sm leading-6 text-[#D4DEDA]">Separate from the Facebook, Instagram and TikTok monthly content packages. Ongoing Google profile management is not included in the one-time setup.</p>
      </section>
      <section className="my-20 rounded-3xl border border-[#B9D8CE]/30 bg-[#0B2823]/90 p-7 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9D8CE]">Six-month partnership offer</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl sm:text-4xl">Commit to six months. We'll waive your account setup fees.</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#D4DEDA]">Our regular plans have a three-month initial commitment. When you choose six months, Facebook, Instagram and TikTok setup fees are waived. Google Business Profile setup is quoted separately.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">One-time account setup prices</h3>
            <dl className="mt-4 divide-y divide-white/10">
              {setupFees.map(([label, price]) => (
                <div key={label} className="flex justify-between gap-4 py-3 text-sm"><dt className="text-[#D4DEDA]">{label}</dt><dd className="font-semibold text-white">{price}</dd></div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-[#B9D8CE]">Facebook, Instagram and TikTok total $349 in one-time setup fees, waived with a six-month management agreement. Google Business Profile setup is a separate $150 service.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#071F1B] p-6">
            <h3 className="font-serif text-2xl">Need extra content?</h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#E1E9E4]">
              <li><strong>Extra weekly short video:</strong> +$199/month</li>
              <li><strong>Extra weekly branded post:</strong> +$99/month</li>
              
            </ul>
            <p className="mt-5 text-sm leading-6 text-[#D4DEDA]">We'll confirm what fits your goals before adding anything to your plan.</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="font-serif text-3xl sm:text-4xl">How we'll work together</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Tell us about your business", "We talk about your customers, goals, brand, and where you want to be seen."],
            ["02", "Review your content plan", "We map out videos, branded posts, captions, and publishing dates."],
            ["03", "Stay visible without the daily workload", "We schedule your approved content and share a monthly performance recap."],
          ].map(([number, title, description]) => (
            <div key={number} className="rounded-2xl border border-white/15 bg-[#0B2823]/85 p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-[#B9D8CE]">{number}</p>
              <h3 className="mt-4 font-serif text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#D4DEDA]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 max-w-4xl">
        <h2 className="font-serif text-3xl sm:text-4xl">Common questions</h2>
        <div className="mt-7 divide-y divide-white/15 rounded-2xl border border-white/15 bg-[#0B2823]/90 px-6">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="cursor-pointer list-none pr-6 text-base font-semibold marker:hidden">{question} <span aria-hidden="true" className="float-right text-[#B9D8CE] group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#D4DEDA]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[#B9D8CE]/30 bg-[#0B2823]/95 p-8 text-center sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9D8CE]">Let's make your business more visible</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl sm:text-4xl">Ready to stop worrying about what to post next?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#D4DEDA]">Tell me about your business. We'll find the right content rhythm and platform mix for your goals.</p>
        <button type="button" onClick={onScheduleCall} className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#B9D8CE] px-7 py-3 text-sm font-bold text-[#061C1A] hover:bg-white">Schedule your free consultation <ArrowRight size={16}/></button>
      </section>
    </div>
  );
}
