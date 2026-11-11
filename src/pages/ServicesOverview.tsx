import React from "react";
import { Link } from "../context/NavigationContext";
import SeoMeta from "../components/SeoMeta";
import { ArrowRight, Globe, Search, TrendingUp, Cpu, Check, HelpCircle } from "lucide-react";

interface ServicesOverviewProps {
  onScheduleCall: () => void;
}

export default function ServicesOverview({ onScheduleCall }: ServicesOverviewProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website, Google and Social Media Help",
    "provider": {
      "@type": "ProfessionalService",
      "name": "The Ivana Collective"
    },
    "description": "Practical help with websites, Google search, social media and ongoing website care.",
    "areaServed": "US"
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Website, Google & Social Media Help"
        description="Explore simple, practical help with your website, Google listing, social media, and ongoing updates."
        canonicalPath="/services"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header section */}
      <div className="max-w-4xl text-left space-y-4 mb-20">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B]">
          HOW WE CAN HELP
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Practical support for your <br />
          <span className="text-[#B9D8CE]">website and online presence.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          Whether you need a website, more help showing up on Google, or someone to keep things updated, we make the process clear and manageable.
        </p>
      </div>

      {/* Sections Grid with matching anchors */}
      <div className="space-y-24">
        
        {/* Section: Web Design */}
        <section id="web-design" className="scroll-mt-24 bg-[#0D2623]/40 border border-white/5 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-[#B9D8CE]">
              <div className="p-3 bg-[#061C1A] border border-white/5 rounded-2xl">
                <Globe className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">SERVICE ONE</span>
            </div>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">A Website That Feels Like Your Business</h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We build clean, thoughtful websites that look great on phones and computers, explain what you do, and make it easy for people to contact or book with you.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {["A look that fits your business", "Easy-to-read pages on every screen", "Simple contact or booking paths", "Built to be easy for Google to understand"].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/web-design"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-[#123B35] border border-[#B9D8CE]/20 text-xs font-mono text-[#F4F5F1] uppercase tracking-wider font-semibold hover:bg-[#B9D8CE] hover:text-[#061C1A] transition-all"
              >
                <span>Explore Web Design Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/5 aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
              alt="Custom website layout on screens" 
              className="w-full h-full object-cover filter grayscale brightness-[0.7] hover:brightness-[0.9] transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Section: SEO */}
        <section id="seo" className="scroll-mt-24 bg-[#0D2623]/40 border border-white/5 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 lg:order-1">
            <div className="flex items-center space-x-3 text-[#B9D8CE]">
              <div className="p-3 bg-[#061C1A] border border-white/5 rounded-2xl">
                <Search className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">SERVICE TWO</span>
            </div>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">Help More Local Customers Find You</h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We improve the parts of your website and Google Business Profile that help nearby customers find you when they are ready to call, visit, or book.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {["Google Business Profile support", "Clear local service information", "Website checkups and fixes", "Faster, easier-to-use pages"].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/seo"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-[#123B35] border border-[#B9D8CE]/20 text-xs font-mono text-[#F4F5F1] uppercase tracking-wider font-semibold hover:bg-[#B9D8CE] hover:text-[#061C1A] transition-all"
              >
                <span>Explore Google & Search Help</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/5 aspect-[4/3] lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1572177215152-32f247303126?auto=format&fit=crop&q=80&w=800" 
              alt="Search engine analytics and reporting interface" 
              className="w-full h-full object-cover filter grayscale brightness-[0.7] hover:brightness-[0.9] transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Section: Content Growth */}
        <section id="content-growth" className="scroll-mt-24 bg-[#0D2623]/40 border border-white/5 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-[#B9D8CE]">
              <div className="p-3 bg-[#061C1A] border border-white/5 rounded-2xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">SERVICE THREE</span>
            </div>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">Keep Showing Up Online</h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              We help turn what you already do into useful posts, updates, and emails that keep your business visible and point people back to your website.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {["Social posts that match your brand", "Simple email updates", "Reuse the content you already have", "Helpful website articles when they make sense"].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/content-growth"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-[#123B35] border border-[#B9D8CE]/20 text-xs font-mono text-[#F4F5F1] uppercase tracking-wider font-semibold hover:bg-[#B9D8CE] hover:text-[#061C1A] transition-all"
              >
                <span>Explore Content & Growth</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/5 aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
              alt="Editorial content creation and social marketing assets" 
              className="w-full h-full object-cover filter grayscale brightness-[0.7] hover:brightness-[0.9] transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Section: Maintenance */}
        <section id="maintenance" className="scroll-mt-24 bg-[#0D2623]/40 border border-white/5 rounded-3xl p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 lg:order-1">
            <div className="flex items-center space-x-3 text-[#B9D8CE]">
              <div className="p-3 bg-[#061C1A] border border-white/5 rounded-2xl">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#7CA99B]">MAINTENANCE & ENGINE HYDRATION</span>
            </div>
            <h2 className="font-serif text-3xl text-[#F4F5F1] tracking-tight">Keep Your Website in Good Shape</h2>
            <p className="text-xs text-[#B8C6C1] leading-relaxed font-light">
              Websites need occasional care. We handle updates, backups, security checks, and small fixes so your site stays dependable and you do not have to figure it out alone.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {["Regular backups", "Important updates handled", "Security checks", "Help when something needs attention"].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-[#B8C6C1] font-light">
                  <Check className="w-3.5 h-3.5 text-[#B9D8CE]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/5 aspect-[4/3] lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
              alt="Server maintenance and code infrastructure support" 
              className="w-full h-full object-cover filter grayscale brightness-[0.7] hover:brightness-[0.9] transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

      </div>

      {/* Action / CTA */}
      <div className="text-center space-y-6 border border-white/5 bg-[#0A2C28]/40 rounded-3xl p-12 max-w-4xl mx-auto mt-24">
        <h2 className="font-serif text-2xl md:text-3xl text-[#F4F5F1]">Not sure where to start?</h2>
        <p className="text-xs text-[#B8C6C1] max-w-xl mx-auto leading-relaxed font-light">
          Let&apos;s talk through what your business needs most right now and make a simple plan together.
        </p>
        <button
          onClick={onScheduleCall}
          className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold bg-[#F4F5F1] text-[#061C1A] hover:bg-[#B9D8CE] transition-all cursor-pointer"
        >
          <span>Schedule a Free Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
