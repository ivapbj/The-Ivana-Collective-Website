import React, { useState } from "react";
import { ArrowRight, BarChart3, Globe2, Search, Wrench } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";
import PortfolioShowcase from "../components/PortfolioShowcase";
import CinematicBinaryIntro from "../components/CinematicBinaryIntro";
import "./Home.css";

const services = [
  [Globe2, "Websites That Feel Like You", "A polished, easy-to-use website that explains what you do and helps people contact you."],
  [Search, "Help People Find You", "Clear Google and local-search help, so nearby customers can find your business."],
  [BarChart3, "Social Media Help", "Posts and content that keep your business visible without adding another job to your week."],
  [Wrench, "Ongoing Website Help", "Updates, backups, and a real person to call when you need something changed."],
];

export default function ConciseHome({ onScheduleCall }: { onScheduleCall: () => void }) {
  const [growComplete, setGrowComplete] = useState(false);
  return <div className="home-page">
    <div className="home-forest" aria-hidden="true" />
    <div className="home-shade" aria-hidden="true" />
    <SeoMeta title="Websites, Google Help & Social Media Support" description="The Ivana Collective helps small businesses build a website, get found on Google, and stay active online." canonicalPath="/" />
    <section id="hero" className="relative z-40 min-h-[72vh] flex items-center px-5 pt-28 pb-16 overflow-hidden">
      <div className="relative z-40 max-w-4xl mx-auto w-full">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[#B9D8CE]">The Ivana Collective</p>
        <h1 className="mt-5 max-w-2xl font-serif text-[clamp(3rem,7vw,6rem)] leading-[.98]">Websites built to <span id="home-grow-word" className={`home-grow-word${growComplete ? " is-shimmering" : ""}`}>grow</span> with your business.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#E0EBE5]">We help small businesses look professional online, show up when people search, and make it easy for customers to reach out.</p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Link href="/website-generator" data-binary-intro-cta className="inline-flex justify-center items-center gap-2 min-h-12 px-6 rounded-xl bg-[#B9D8CE] text-[#061C1A] font-semibold">Try Live Website Preview <ArrowRight size={17}/></Link>
          <Link href="/work" data-binary-intro-cta className="inline-flex justify-center items-center min-h-12 px-6 rounded-xl border border-[#B9D8CE] font-semibold">View My Work</Link>
        </div>
      </div>
    </section>
    <CinematicBinaryIntro onComplete={() => setGrowComplete(true)} />

    <section className="px-5 py-20 bg-[#061C1A]"><div className="max-w-7xl mx-auto"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">HOW WE CAN HELP</p><h2 className="font-serif text-4xl sm:text-5xl mt-4">The online help your business actually needs.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">{services.map(([Icon, title, copy]) => <div key={title as string}><Link href="/services" className="block h-full rounded-2xl border border-white/10 bg-[#0D2623] p-6 hover:border-[#B9D8CE]/60 transition-colors"><Icon className="text-[#B9D8CE]"/><h3 className="font-serif text-2xl mt-6">{title as string}</h3><p className="mt-3 text-sm leading-relaxed text-[#B8C6C1]">{copy as string}</p><span className="mt-6 inline-block text-xs font-mono uppercase tracking-widest text-[#B9D8CE]">Explore services →</span></Link></div>)}</div>
    </div></section>

    <section className="px-5 py-20 bg-[#0D2623]"><div className="max-w-6xl mx-auto rounded-3xl border border-[#B9D8CE]/30 bg-[#123B35] p-8 md:p-14 grid lg:grid-cols-[1.4fr_.6fr] gap-8 items-center"><div><p className="font-mono text-xs tracking-widest text-[#B9D8CE]">TRY A WEBSITE IDEA</p><h2 className="font-serif text-4xl sm:text-5xl mt-4">See what your business could look like online.</h2><p className="mt-5 text-[#E0EBE5] leading-relaxed">Pick a style, add a few details about your business, and we’ll show you a personalized website idea.</p></div><Link href="/website-generator" className="min-h-12 inline-flex items-center justify-center rounded-xl bg-[#B9D8CE] text-[#061C1A] px-6 font-semibold">Start My Website Idea</Link></div></section>

    <PortfolioShowcase onScheduleCall={onScheduleCall} />

    <section className="px-5 py-20 bg-[#0D2623]"><div className="max-w-5xl mx-auto"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">HOW IT WORKS</p><h2 className="font-serif text-4xl sm:text-5xl mt-4">A straightforward path from idea to launch.</h2><ol className="grid md:grid-cols-3 gap-7 mt-10">{[["01","Tell us about your business."],["02","Design and preview your website."],["03","Work with us to bring it to life."]].map(([n,text])=><li key={n} className="border-t border-[#B9D8CE]/40 pt-5"><span className="font-mono text-[#B9D8CE]">{n}</span><p className="font-serif text-2xl mt-5">{text}</p></li>)}</ol></div></section>

    <section className="px-5 py-24 text-center bg-[#061C1A]"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">READY WHEN YOU ARE</p><h2 className="font-serif text-4xl sm:text-6xl mt-5">Ready to see your business online?</h2><div className="flex flex-col sm:flex-row justify-center gap-3 mt-9"><Link href="/website-generator" className="min-h-12 px-6 inline-flex justify-center items-center rounded-xl bg-[#B9D8CE] text-[#061C1A] font-semibold">Try Your Free Website Preview</Link><button onClick={onScheduleCall} className="min-h-12 px-6 rounded-xl border border-[#B9D8CE] font-semibold">Schedule a Consultation</button></div></section>
  </div>;
}
