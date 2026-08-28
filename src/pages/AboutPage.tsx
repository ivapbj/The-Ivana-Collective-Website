import React from "react";
import SeoMeta from "../components/SeoMeta";
import { ArrowRight, Sparkles, Award, ShieldCheck, Cpu, Code2, HeartHandshake, CheckCircle2, ArrowUpRight } from "lucide-react";
import { BOOKING_CALENDAR_URL } from "../data";

interface AboutPageProps {
  onScheduleCall?: () => void;
}

export default function AboutPage({ onScheduleCall }: AboutPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Ivana | The Ivana Collective",
    "description": "Full-stack web developer and AI specialist building authentic, high-converting digital business tools for small businesses."
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About", item: "/about" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="About Ivana | Full-Stack Web Developer & AI Specialist"
        description="I am a full stack web developer who went back to school in my mid-30s during the AI boom to help small businesses turn their websites into working business tools."
        canonicalPath="/about"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header section */}
      <div className="max-w-4xl text-left space-y-4 mb-16">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B] flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B9D8CE]" />
          ABOUT THE FOUNDER & DEVELOPER
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Hi, I&apos;m Ivana. <br />
          <span className="text-[#B9D8CE]">Full-Stack Web Developer & AI Specialist.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          Crafting custom digital tools that keep your voice authentic while turning your website into an active helper in your business.
        </p>
      </div>

      {/* Main Founder Story Section with Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center mb-24 text-left">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#B9D8CE]/20 shadow-2xl max-w-md mx-auto group">
            <img 
              src="/images/founder.jpg" 
              alt="Ivana, Full-Stack Web Developer and founder of The Ivana Collective" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041211]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#061C1A]/85 border border-[#B9D8CE]/20 p-3 rounded-2xl backdrop-blur-md">
              <p className="font-mono text-[10px] tracking-wider uppercase text-[#B9D8CE] font-semibold">
                Ivana · Full-Stack Developer
              </p>
              <p className="text-[11px] text-[#B8C6C1] font-light">
                Founder, The Ivana Collective
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B35] border border-[#B9D8CE]/30 text-[#B9D8CE] font-mono text-[10px] uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>My Journey & Philosophy</span>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#F4F5F1] tracking-tight leading-snug">
            Turning your website from a static business card into a functioning business engine.
          </h2>

          <div className="space-y-4 text-xs md:text-sm text-[#B8C6C1] font-light leading-relaxed">
            <p>
              Like most of us during the pandemic, I realized I needed a change. In my mid-30s, I made the bold decision to go back to school for software engineering.
            </p>
            <p>
              This was also the dawn of the AI boom. I quickly learned that AI could be incredibly beneficial to small businesses if harnessed thoughtfully. I have taken the time to study modern artificial intelligence and learned how to apply it practically to websites—ensuring your site is not just a digital business card, but a functioning business tool.
            </p>
            <p>
              A great website should do three things effortlessly: <strong className="text-[#F4F5F1] font-medium">help you get found online</strong>, make it seamless for your clients to enjoy their experience while browsing, buying, or soliciting your services, and <strong className="text-[#B9D8CE] font-medium">keep your voice authentic</strong> while creating a true helper for your everyday business and brand visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 mt-4">
            <div className="space-y-1.5 p-4 rounded-xl bg-[#061C1A]/60 border border-white/5">
              <h4 className="font-serif text-base text-[#F4F5F1] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#B9D8CE]" />
                <span>AI-Powered Functionality</span>
              </h4>
              <p className="text-xs text-[#B8C6C1] font-light leading-relaxed">
                Applied AI tools, smart search discovery, and automated workflows tailored specifically for small business owners.
              </p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-[#061C1A]/60 border border-white/5">
              <h4 className="font-serif text-base text-[#F4F5F1] flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#B9D8CE]" />
                <span>Authentic Brand Voice</span>
              </h4>
              <p className="text-xs text-[#B8C6C1] font-light leading-relaxed">
                Tech that amplifies your genuine human voice, never replacing it with generic, sterile templates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How I Help Your Business */}
      <div className="mb-24 text-left">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">
            WHAT WE ACCOMPLISH TOGETHER
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F4F5F1]">
            More than code. An active partner in your growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#0D2623]/60 border border-white/8 hover:border-[#B9D8CE]/30 rounded-3xl space-y-4 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#123B35] flex items-center justify-center text-[#B9D8CE] font-mono text-sm font-bold">
              01
            </div>
            <h3 className="font-serif text-xl text-[#F4F5F1]">Get Found Online</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              From hyper-local SEO and structured schema markup to Google Business Profile optimization and AI search crawling, we ensure potential clients discover your services when they are searching.
            </p>
          </div>

          <div className="p-8 bg-[#0D2623]/60 border border-white/8 hover:border-[#B9D8CE]/30 rounded-3xl space-y-4 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#123B35] flex items-center justify-center text-[#B9D8CE] font-mono text-sm font-bold">
              02
            </div>
            <h3 className="font-serif text-xl text-[#F4F5F1]">Delightful Client Experience</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              Frictionless browsing, fast-loading mobile experiences, intuitive appointment booking, and easy e-commerce checkout so your visitors love interacting with your brand.
            </p>
          </div>

          <div className="p-8 bg-[#0D2623]/60 border border-white/8 hover:border-[#B9D8CE]/30 rounded-3xl space-y-4 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#123B35] flex items-center justify-center text-[#B9D8CE] font-mono text-sm font-bold">
              03
            </div>
            <h3 className="font-serif text-xl text-[#F4F5F1]">Your 24/7 Digital Helper</h3>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              Your website works around the clock answering questions, collecting inquiries, processing orders, and building trust while you focus on doing what you love most.
            </p>
          </div>
        </div>
      </div>

      {/* Action / CTA */}
      <div className="text-left bg-[#0D2623] border border-[#B9D8CE]/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#123B35]/40 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#7CA99B]">
              DIRECT COLLABORATION
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1] font-normal">
              Ready to create a functioning business tool for your brand?
            </h2>
            <p className="text-xs md:text-sm text-[#B8C6C1] leading-relaxed font-light">
              Book a free consultation call. We&apos;ll discuss your vision, audit your current visibility, and map out the exact digital tools to help your business grow.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <a
              href={BOOKING_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold
                bg-[#B9D8CE] text-[#061C1A] hover:bg-[#F4F5F1] hover:shadow-lg hover:shadow-[#B9D8CE]/10
                transition-all duration-200 cursor-pointer shadow-md group
              "
            >
              <span>Book A Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
