import React from "react";
import SeoMeta from "../components/SeoMeta";
import { ArrowUpRight } from "lucide-react";
import { BOOKING_CALENDAR_URL } from "../data";
import { Link } from "../context/NavigationContext";

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
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#B9D8CE] flex items-center gap-2">
          ABOUT THE FOUNDER & DEVELOPER
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Hi, I&apos;m Ivana. <br />
          <span className="text-[#B9D8CE]">Full-Stack Web Developer & AI Specialist.</span>
        </h1>
        <p className="text-sm md:text-base text-[#E6EAE7] leading-relaxed font-light max-w-3xl">
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
              <p className="text-[11px] text-[#E6EAE7] font-light">
                Founder, The Ivana Collective
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B35] border border-[#B9D8CE]/30 text-[#B9D8CE] font-mono text-[10px] uppercase tracking-wider">
            <span>My Journey & Philosophy</span>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#F4F5F1] tracking-tight leading-snug">
            Turning your website from a static business card into a functioning business engine.
          </h2>

          <div className="space-y-4 text-xs md:text-sm text-[#E6EAE7] font-light leading-relaxed">
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

        </div>
      </div>

      {/* Personal story, with original photographs placed alongside the story they illustrate */}
      <section className="mb-24 space-y-12 text-left" aria-labelledby="personal-story-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-12 space-y-5">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#B9D8CE]">
              A LITTLE MORE ABOUT ME
            </span>
            <h2 id="personal-story-title" className="font-serif text-3xl md:text-4xl text-[#F4F5F1]">
              More Than One Thing. Always Evolving.
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-[#E6EAE7] font-light leading-relaxed">
              <p>Red lipstick. Chopping off my hair. Going on a hike through the mountains of New England.</p>
              <p>This is who I am. This is what I do. This is what I love.</p>
              <p>I’ve never believed that a person has to fit into just one box. I’m creative and technical, feminine and adventurous, practical and imaginative. And I think the same is true for the businesses I work with.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#B9D8CE]/20 shadow-2xl max-w-xl mx-auto">
              <img
                src="/images/about-founder-hiking.webp"
                srcSet="/images/about-founder-hiking.webp 1x, /images/about-founder-hiking-2x.webp 2x"
                alt="Ivana hiking among the mountains and forests of New England"
                className="w-full h-full object-cover object-center"
                width="1536"
                height="1152"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4 text-xs md:text-sm text-[#E6EAE7] font-light leading-relaxed lg:order-2">
            <p>Living in New England has taught me to appreciate change. Every season brings something different, and every stage of life gives us an opportunity to grow.</p>
            <p>Businesses are no different. They’re multifaceted, constantly evolving, and shaped by the people behind them. A business can be professional and playful, established and innovative, structured and creative—all at once.</p>
            <p>That’s why I don’t believe in creating websites that force every business into the same mold.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-4 text-xs md:text-sm text-[#E6EAE7] font-light leading-relaxed">
              <p>I take the time to understand who you are, what makes your business different, and where you want to go. Then I bring those pieces together to create something that feels authentic, works beautifully, and grows with you.</p>
              <p>Because your business isn’t one-dimensional. Your website shouldn’t be either.</p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold bg-[#B9D8CE] text-[#061C1A] hover:bg-[#F4F5F1] hover:shadow-lg hover:shadow-[#B9D8CE]/10 transition-all duration-200 cursor-pointer shadow-md group"
            >
              <span>View My Work</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#B9D8CE]/20 shadow-2xl max-w-xl mx-auto">
              <img
                src="/images/founder.jpg"
                alt="Ivana sharing a relaxed moment with her dog"
                className="w-full h-full object-cover object-center"
                width="1536"
                height="1152"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How I Help Your Business */}
      <div className="mb-24 text-left">
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="font-mono text-[10px] tracking-widest uppercase text-[#B9D8CE]">
            WHAT WE ACCOMPLISH TOGETHER
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F4F5F1]">
            More than code. An active partner in your growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0D2623]/60 border border-white/8 hover:border-[#B9D8CE]/30 rounded-3xl space-y-3 transition-all duration-300">
            <h3 className="font-serif text-xl text-[#F4F5F1]">Get Found Online</h3>
            <p className="text-sm text-[#183B32] leading-relaxed font-light">
              Local SEO and a well-built Google Business Profile help nearby customers find you when they search for the services you offer.
            </p>
          </div>

          <div className="p-6 bg-[#0D2623]/60 border border-white/8 hover:border-[#B9D8CE]/30 rounded-3xl space-y-3 transition-all duration-300">
            <h3 className="font-serif text-xl text-[#F4F5F1]">Delightful Client Experience</h3>
            <p className="text-sm text-[#183B32] leading-relaxed font-light">
              Clear navigation, simple booking, and easy checkout help customers get what they need without confusion or extra calls.
            </p>
          </div>

          <div className="p-6 bg-[#0D2623]/60 border border-white/8 hover:border-[#B9D8CE]/30 rounded-3xl space-y-3 transition-all duration-300">
            <h3 className="font-serif text-xl text-[#F4F5F1]">Your 24/7 Digital Helper</h3>
            <p className="text-sm text-[#183B32] leading-relaxed font-light">
              Your site can answer common questions, collect inquiries, take bookings, and accept orders while you focus on your customers.
            </p>
          </div>
        </div>
      </div>

      {/* Action / CTA */}
      <div className="text-left bg-[#0D2623] border border-[#B9D8CE]/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#123B35]/40 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9D8CE]">
              DIRECT COLLABORATION
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1] font-normal">
              Ready to create a functioning business tool for your brand?
            </h2>
            <p className="text-xs md:text-sm text-[#E6EAE7] leading-relaxed font-light">
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
