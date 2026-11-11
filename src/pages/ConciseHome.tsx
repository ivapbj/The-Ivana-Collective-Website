import React from "react";
import { ArrowRight, BarChart3, Globe2, Search, Wrench } from "lucide-react";
import SeoMeta from "../components/SeoMeta";
import { Link } from "../context/NavigationContext";
import "./Home.css";

const services = [
  [Globe2, "Website Design & Development", "Professional, responsive websites built around the way your customers decide."],
  [Search, "SEO & Google Business Profile", "Local search foundations that help the right people find you."],
  [BarChart3, "Social Media & Digital Marketing", "Practical content support that connects your channels to your website."],
  [Wrench, "Website Maintenance & Support", "Reliable updates, security, and a real person to keep your site working."],
];

export default function ConciseHome({ onScheduleCall }: { onScheduleCall: () => void }) {
  return <div className="home-page">
    <div className="home-forest" aria-hidden="true" />
    <div className="home-shade" aria-hidden="true" />
    <SeoMeta title="Web Design, SEO & Digital Support" description="The Ivana Collective builds professional websites, SEO foundations and digital support for small businesses in Western Massachusetts and beyond." canonicalPath="/" />
    <section id="hero" className="relative min-h-[72vh] flex items-center px-5 pt-28 pb-16 overflow-hidden">
      <div className="relative max-w-4xl mx-auto w-full">
        <p className="font-mono text-xs tracking-[.2em] uppercase text-[#B9D8CE]">The Ivana Collective</p>
        <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,6rem)] leading-[.98]">Websites built to grow with your business.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#E0EBE5]">Professional websites and digital solutions for small businesses ready to be found, trusted, and chosen.</p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Link href="/website-generator" className="inline-flex justify-center items-center gap-2 min-h-12 px-6 rounded-xl bg-[#B9D8CE] text-[#061C1A] font-semibold">Try Live Website Preview <ArrowRight size={17}/></Link>
          <Link href="/services" className="inline-flex justify-center items-center min-h-12 px-6 rounded-xl border border-[#B9D8CE] font-semibold">Explore Services</Link>
        </div>
      </div>
    </section>

    <section className="px-5 py-20 bg-[#061C1A]"><div className="max-w-7xl mx-auto"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">WHAT WE DO</p><h2 className="font-serif text-4xl sm:text-5xl mt-4">A clearer digital foundation.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">{services.map(([Icon, title, copy]) => <div key={title as string}><Link href="/services" className="block h-full rounded-2xl border border-white/10 bg-[#0D2623] p-6 hover:border-[#B9D8CE]/60 transition-colors"><Icon className="text-[#B9D8CE]"/><h3 className="font-serif text-2xl mt-6">{title as string}</h3><p className="mt-3 text-sm leading-relaxed text-[#B8C6C1]">{copy as string}</p><span className="mt-6 inline-block text-xs font-mono uppercase tracking-widest text-[#B9D8CE]">Explore services →</span></Link></div>)}</div>
    </div></section>

    <section className="px-5 py-20 bg-[#0D2623]"><div className="max-w-6xl mx-auto rounded-3xl border border-[#B9D8CE]/30 bg-[#123B35] p-8 md:p-14 grid lg:grid-cols-[1.4fr_.6fr] gap-8 items-center"><div><p className="font-mono text-xs tracking-widest text-[#B9D8CE]">LIVE WEBSITE GENERATOR</p><h2 className="font-serif text-4xl sm:text-5xl mt-4">See your website before you commit.</h2><p className="mt-5 text-[#E0EBE5] leading-relaxed">Choose a direction, add your business details, and unlock a personalized website preview when you are ready.</p></div><Link href="/website-generator" className="min-h-12 inline-flex items-center justify-center rounded-xl bg-[#B9D8CE] text-[#061C1A] px-6 font-semibold">Create My Website Preview</Link></div></section>

    <section className="px-5 py-20 bg-[#061C1A]"><div className="max-w-7xl mx-auto"><div className="flex justify-between gap-5 items-end"><div><p className="font-mono text-xs tracking-widest text-[#7CA99B]">FEATURED PORTFOLIO</p><h2 className="font-serif text-4xl sm:text-5xl mt-4">Work made for real businesses.</h2></div><Link href="/portfolio" className="text-[#B9D8CE] underline">View our portfolio</Link></div><div className="grid md:grid-cols-3 gap-5 mt-10">{[["Legacy Economic Development","Community and small-business resource hub"],["Posh Body Wellness Spa","Luxury wellness, services, and e-commerce"],["Dr. Sheds","Custom construction website and SEO"]].map(([name,copy])=><div key={name}><Link href="/portfolio" className="block h-full rounded-2xl border border-white/10 p-6 bg-[#0D2623]"><p className="font-serif text-2xl">{name}</p><p className="text-sm mt-3 text-[#B8C6C1]">{copy}</p></Link></div>)}</div></div></section>

    <section className="px-5 py-20 bg-[#0D2623]"><div className="max-w-5xl mx-auto"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">HOW IT WORKS</p><h2 className="font-serif text-4xl sm:text-5xl mt-4">A straightforward path from idea to launch.</h2><ol className="grid md:grid-cols-3 gap-7 mt-10">{[["01","Tell us about your business."],["02","Design and preview your website."],["03","Work with us to bring it to life."]].map(([n,text])=><li key={n} className="border-t border-[#B9D8CE]/40 pt-5"><span className="font-mono text-[#B9D8CE]">{n}</span><p className="font-serif text-2xl mt-5">{text}</p></li>)}</ol></div></section>

    <section className="px-5 py-24 text-center bg-[#061C1A]"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">READY WHEN YOU ARE</p><h2 className="font-serif text-4xl sm:text-6xl mt-5">Ready to see your business online?</h2><div className="flex flex-col sm:flex-row justify-center gap-3 mt-9"><Link href="/website-generator" className="min-h-12 px-6 inline-flex justify-center items-center rounded-xl bg-[#B9D8CE] text-[#061C1A] font-semibold">Try Your Free Website Preview</Link><button onClick={onScheduleCall} className="min-h-12 px-6 rounded-xl border border-[#B9D8CE] font-semibold">Schedule a Consultation</button></div></section>
  </div>;
}
