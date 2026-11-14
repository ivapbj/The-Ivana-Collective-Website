import React from "react";
import { ArrowRight } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";
import PortfolioShowcase from "../components/PortfolioShowcase";
import StylePreviewSection from "../components/StylePreviewSection";
import "./Home.css";

export default function ConciseHome({ onScheduleCall }: { onScheduleCall: () => void }) {
  return <div className="home-page">
    <div className="home-forest" aria-hidden="true" />
    <div className="home-shade" aria-hidden="true" />
    <SeoMeta title="Custom Web Designer. Automated Systems for Businesses, SEO, Social Media" description="The Ivana Collective helps businesses with custom website design, automated systems, SEO and social media support." canonicalPath="/" />
    <section id="hero" className="relative z-40 min-h-[72vh] flex items-center px-5 pt-28 pb-16 overflow-hidden">
      <div className="relative z-40 max-w-4xl mx-auto w-full">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[#B9D8CE]">The Ivana Collective</p>
        <h1 className="mt-5 max-w-2xl font-serif text-[clamp(3rem,7vw,6rem)] leading-[.98]">Websites built to <span id="home-grow-word" className="home-grow-word">grow</span> with your business.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#E0EBE5]">We help small businesses look professional online, show up when people search, and make it easy for customers to reach out.</p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Link href="/website-generator" className="inline-flex justify-center items-center gap-2 min-h-12 px-6 rounded-xl bg-[#B9D8CE] text-[#061C1A] font-semibold">Try Live Website Preview <ArrowRight size={17}/></Link>
          <Link href="/work" className="inline-flex justify-center items-center min-h-12 px-6 rounded-xl border border-[#B9D8CE] font-semibold">View My Work</Link>
        </div>
      </div>
    </section>
    <StylePreviewSection onScheduleCall={onScheduleCall} />

    <PortfolioShowcase onScheduleCall={onScheduleCall} />

    <section className="px-5 py-20 bg-[#0D2623]"><div className="max-w-5xl mx-auto"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">HOW IT WORKS</p><h2 className="font-serif text-4xl sm:text-5xl mt-4">A straightforward path from idea to launch.</h2><ol className="grid md:grid-cols-3 gap-7 mt-10">{[["01","Tell us about your business."],["02","Design and preview your website."],["03","Work with us to bring it to life."]].map(([n,text])=><li key={n} className="border-t border-[#B9D8CE]/40 pt-5"><span className="font-mono text-[#B9D8CE]">{n}</span><p className="font-serif text-2xl mt-5">{text}</p></li>)}</ol></div></section>

    <section className="px-5 py-24 text-center bg-[#061C1A]"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">READY WHEN YOU ARE</p><h2 className="font-serif text-4xl sm:text-6xl mt-5">Ready to see your business online?</h2><div className="flex flex-col sm:flex-row justify-center gap-3 mt-9"><Link href="/website-generator" className="min-h-12 px-6 inline-flex justify-center items-center rounded-xl bg-[#B9D8CE] text-[#061C1A] font-semibold">Try Your Free Website Preview</Link><button onClick={onScheduleCall} className="min-h-12 px-6 rounded-xl border border-[#B9D8CE] font-semibold">Schedule a Consultation</button></div></section>
  </div>;
}
