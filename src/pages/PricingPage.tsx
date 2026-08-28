import React from "react";
import SeoMeta from "../components/SeoMeta";
import { 
  WORDPRESS_PRICING_PLANS, 
  ECOMMERCE_GROWTH_PLANS, 
  SERVICE_GROWTH_PLANS, 
  WEBSITE_ONLY_PLANS, 
  CUSTOM_CODED_PLAN,
  BOOKING_CALENDAR_URL 
} from "../data";
import { 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  Layers, 
  ShoppingBag, 
  Briefcase, 
  Code2, 
  CheckCircle2,
  Clock,
  HelpCircle,
  Zap,
  ArrowRight
} from "lucide-react";

interface PricingPageProps {
  onScheduleCall?: () => void;
}

export default function PricingPage({ onScheduleCall }: PricingPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "The Ivana Collective Digital Growth & Website Pricing",
    "description": "WordPress sites, growth packages for e-commerce and service businesses, website-only builds, and custom coded web applications."
  };

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Pricing", item: "/pricing" }
  ];

  return (
    <div className="py-24 md:py-32 relative z-10 animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Website & Growth Packages Pricing | The Ivana Collective"
        description="Transparent pricing for WordPress websites, e-commerce growth plans, service business maintenance, website-only builds, and custom coded platforms."
        canonicalPath="/pricing"
        schema={schema}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Header */}
      <div className="max-w-4xl text-left space-y-4 mb-14">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7CA99B] flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B9D8CE]" />
          TRANSPARENT INVESTMENT MATRIX
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] text-[#F4F5F1] font-normal tracking-tight">
          Website & Growth Packages. <br />
          <span className="text-[#B9D8CE]">Engineered for sustainable visibility.</span>
        </h1>
        <p className="text-sm md:text-base text-[#B8C6C1] leading-relaxed font-light max-w-3xl">
          Every site includes 1-year free hosting, SSL security, and foundational SEO setup so customers can find you online. Choose the right build and care package for your stage of growth.
        </p>
      </div>

      {/* Explanatory Commitment & Pricing Structure Banner */}
      <div className="bg-[#0D2623] border border-[#B9D8CE]/20 rounded-3xl p-8 md:p-10 mb-20 relative overflow-hidden text-left shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#123B35]/40 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B35] border border-[#B9D8CE]/30 text-[#B9D8CE] font-mono text-[10px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>How Our 6-Month Term Works</span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-[#F4F5F1] font-normal">
              Built to be affordable upfront, lower cost long-term.
            </h3>
            
            <div className="space-y-3 text-xs md:text-sm text-[#B8C6C1] font-light leading-relaxed">
              <p>
                All website packages require an initial <strong className="text-[#F4F5F1] font-medium">6-month commitment</strong>. During those first six months, your monthly payment includes both the cost of building your website and your ongoing website maintenance.
              </p>
              <p>
                After the first six months, the website is <strong className="text-[#B9D8CE] font-medium">fully paid for</strong>, so the website-building portion is removed from your monthly payment. You only continue paying for maintenance, updates, hosting, and ongoing support.
              </p>
              <div className="p-3.5 rounded-xl bg-[#061C1A]/70 border border-white/5 text-[#B9D8CE] text-xs font-mono">
                💡 <strong>Example:</strong> The $239/month Service Website Package decreases to approximately <span className="text-[#F4F5F1] underline font-bold">$106/month</span> after the initial six-month term.
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3">
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
              <Calendar className="w-4 h-4" />
              <span>Book My Free Consult</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span className="text-[11px] font-mono text-[#7CA99B] text-center lg:text-right">
              Free 30-min strategy call · No obligation
            </span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. WORDPRESS SITES (FIRST AS REQUESTED)                   */}
      {/* ======================================================== */}
      <section id="wordpress-pricing" className="mb-28 scroll-mt-28">
        <div className="text-left space-y-3 mb-10 pb-6 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7CA99B] bg-[#123B35]/60 border border-[#7CA99B]/30 px-3 py-1 rounded-full">
              Category 01
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-[#B8C6C1]/70">
              CMS Architecture
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-[#F4F5F1] font-normal">
            WORDPRESS SITES
          </h2>
          
          <div className="p-4 rounded-2xl bg-[#061C1A] border border-[#7CA99B]/20 max-w-4xl space-y-2">
            <p className="font-mono text-xs text-[#B9D8CE]">
              🎯 <strong>Perfect for:</strong> Real Estate and Law firms, Marketing Agencies, Insurance Agencies, and Industries focused on selling & shipping.
            </p>
            <p className="text-xs text-[#B8C6C1] font-light leading-relaxed">
              Every WordPress website includes one year of hosting, domain registration or renewal, SSL security, foundational SEO setup, backups, and six months of website care. Website packages may be paid over an initial six-month term. During those six months, the monthly payment includes both the website build and the included care plan. After the website has been paid in full, the website-building portion ends. Clients may continue with a monthly WordPress Care Plan for hosting, security, updates, maintenance and ongoing support.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid for WordPress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {WORDPRESS_PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-3xl p-7 md:p-8 flex flex-col justify-between space-y-6 text-left transition-all duration-300 hover:-translate-y-1.5
                ${plan.isPopular 
                  ? "bg-[#0D2623] border border-[#B9D8CE]/40 shadow-2xl ring-1 ring-[#B9D8CE]/20" 
                  : "bg-[#061C1A]/60 border border-white/8 hover:border-[#7CA99B]/30"}
              `}
            >
              {plan.isPopular && (
                <span className="absolute top-4 right-4 font-mono text-[8px] tracking-[0.2em] font-bold text-[#061C1A] bg-[#B9D8CE] px-3 py-1 rounded-full uppercase shadow">
                  Popular
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#F4F5F1] font-semibold">{plan.title}</h3>
                  <p className="text-xs text-[#B8C6C1] font-light mt-1 min-h-[34px]">{plan.subtitle}</p>
                </div>

                <div className="pt-2 border-b border-white/5 pb-3">
                  <div className="flex items-baseline space-x-1">
                    <span className="font-serif text-3xl md:text-4xl text-[#F4F5F1] font-bold">{plan.price}</span>
                    <span className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase">{plan.period}</span>
                  </div>
                  {plan.commitment && (
                    <p className="text-[9px] font-mono text-[#B8C6C1]/50 mt-1 uppercase tracking-wide">
                      {plan.commitment}
                    </p>
                  )}
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 pt-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#B8C6C1] font-light">
                      <Check className="w-3.5 h-3.5 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer transition-all duration-200
                    ${plan.isPopular 
                      ? "bg-[#B9D8CE] text-[#061C1A] hover:bg-[#F4F5F1] shadow-md" 
                      : "bg-[#123B35] text-[#F4F5F1] border border-[#B9D8CE]/15 hover:bg-[#B9D8CE] hover:text-[#061C1A]"}
                  `}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. GROWTH PACKAGES FOR E-COMMERCE WEBSITES               */}
      {/* ======================================================== */}
      <section id="ecommerce-growth-pricing" className="mb-28 scroll-mt-28">
        <div className="text-left space-y-3 mb-10 pb-6 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7CA99B] bg-[#123B35]/60 border border-[#7CA99B]/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <ShoppingBag className="w-3 h-3" />
              Category 02
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-[#B8C6C1]/70">
              Commerce & Products
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-[#F4F5F1] font-normal">
            GROWTH PACKAGES FOR E-COMMERCE WEBSITES
          </h2>
          
          <div className="p-4 rounded-2xl bg-[#061C1A] border border-[#7CA99B]/20 max-w-4xl">
            <p className="font-mono text-xs text-[#B9D8CE]">
              🛍️ <strong>Perfect for:</strong> Candle Businesses, Bakeries selling custom orders, Skincare and beauty product companies. Industries focused on selling & shipping.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid for E-Commerce */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {ECOMMERCE_GROWTH_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-3xl p-7 md:p-8 flex flex-col justify-between space-y-6 text-left transition-all duration-300 hover:-translate-y-1.5
                ${plan.isPopular 
                  ? "bg-[#0D2623] border border-[#B9D8CE]/40 shadow-2xl ring-1 ring-[#B9D8CE]/20" 
                  : "bg-[#061C1A]/60 border border-white/8 hover:border-[#7CA99B]/30"}
              `}
            >
              {plan.isPopular && (
                <span className="absolute top-4 right-4 font-mono text-[8px] tracking-[0.2em] font-bold text-[#061C1A] bg-[#B9D8CE] px-3 py-1 rounded-full uppercase shadow">
                  Popular
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#F4F5F1] font-semibold">{plan.title}</h3>
                  <p className="text-xs text-[#B8C6C1] font-light mt-1 min-h-[34px]">{plan.subtitle}</p>
                </div>

                <div className="pt-2 border-b border-white/5 pb-3">
                  <div className="flex items-baseline space-x-1">
                    <span className="font-serif text-3xl md:text-4xl text-[#F4F5F1] font-bold">{plan.price}</span>
                    <span className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase">{plan.period}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 pt-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#B8C6C1] font-light">
                      <Check className="w-3.5 h-3.5 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer transition-all duration-200
                    ${plan.isPopular 
                      ? "bg-[#B9D8CE] text-[#061C1A] hover:bg-[#F4F5F1] shadow-md" 
                      : "bg-[#123B35] text-[#F4F5F1] border border-[#B9D8CE]/15 hover:bg-[#B9D8CE] hover:text-[#061C1A]"}
                  `}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2b. GROWTH PACKAGES FOR SERVICE WEBSITES                 */}
      {/* ======================================================== */}
      <section id="service-growth-pricing" className="mb-28 scroll-mt-28">
        <div className="text-left space-y-3 mb-10 pb-6 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7CA99B] bg-[#123B35]/60 border border-[#7CA99B]/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Briefcase className="w-3 h-3" />
              Category 02b
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-[#B8C6C1]/70">
              Services & Booking
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-[#F4F5F1] font-normal">
            GROWTH PACKAGES FOR SERVICE WEBSITES
          </h2>
          
          <div className="p-4 rounded-2xl bg-[#061C1A] border border-[#7CA99B]/20 max-w-4xl">
            <p className="font-mono text-xs text-[#B9D8CE]">
              🔧 <strong>Perfect for:</strong> Plumbers, Roofers, Electricians, Salons, Personal Trainers. Industries focused on booking.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid for Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICE_GROWTH_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-3xl p-7 md:p-8 flex flex-col justify-between space-y-6 text-left transition-all duration-300 hover:-translate-y-1.5
                ${plan.isPopular 
                  ? "bg-[#0D2623] border border-[#B9D8CE]/40 shadow-2xl ring-1 ring-[#B9D8CE]/20" 
                  : "bg-[#061C1A]/60 border border-white/8 hover:border-[#7CA99B]/30"}
              `}
            >
              {plan.isPopular && (
                <span className="absolute top-4 right-4 font-mono text-[8px] tracking-[0.2em] font-bold text-[#061C1A] bg-[#B9D8CE] px-3 py-1 rounded-full uppercase shadow">
                  Popular
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#F4F5F1] font-semibold">{plan.title}</h3>
                  <p className="text-xs text-[#B8C6C1] font-light mt-1 min-h-[34px]">{plan.subtitle}</p>
                </div>

                <div className="pt-2 border-b border-white/5 pb-3">
                  <div className="flex items-baseline space-x-1">
                    <span className="font-serif text-3xl md:text-4xl text-[#F4F5F1] font-bold">{plan.price}</span>
                    <span className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase">{plan.period}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 pt-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs text-[#B8C6C1] font-light">
                      <Check className="w-3.5 h-3.5 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer transition-all duration-200
                    ${plan.isPopular 
                      ? "bg-[#B9D8CE] text-[#061C1A] hover:bg-[#F4F5F1] shadow-md" 
                      : "bg-[#123B35] text-[#F4F5F1] border border-[#B9D8CE]/15 hover:bg-[#B9D8CE] hover:text-[#061C1A]"}
                  `}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WEBSITE ONLY PRICES                                   */}
      {/* ======================================================== */}
      <section id="website-only-pricing" className="mb-28 scroll-mt-28">
        <div className="text-left space-y-3 mb-10 pb-6 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7CA99B] bg-[#123B35]/60 border border-[#7CA99B]/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Layers className="w-3 h-3" />
              Category 03
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-[#B8C6C1]/70">
              One-Time Builds & Revamps
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-[#F4F5F1] font-normal">
            WEBSITE ONLY
          </h2>
          
          <p className="text-xs text-[#B8C6C1] font-light max-w-2xl">
            Clean standalone builds with no monthly maintenance obligation. Includes 1-year free hosting, full SSL security, and complete mobile optimization.
          </p>
        </div>

        {/* 3 Cards Grid for Website Only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {WEBSITE_ONLY_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-3xl p-8 md:p-9 flex flex-col justify-between space-y-6 text-left transition-all duration-300 hover:-translate-y-1.5
                ${plan.isPopular 
                  ? "bg-[#0D2623] border border-[#B9D8CE]/40 shadow-2xl ring-1 ring-[#B9D8CE]/20" 
                  : "bg-[#061C1A]/60 border border-white/8 hover:border-[#7CA99B]/30"}
              `}
            >
              {plan.isPopular && (
                <span className="absolute top-5 right-5 font-mono text-[8px] tracking-[0.2em] font-bold text-[#061C1A] bg-[#B9D8CE] px-3.5 py-1 rounded-full uppercase shadow">
                  Popular
                </span>
              )}

              <div className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl text-[#F4F5F1] font-semibold">{plan.title}</h3>
                  <p className="text-xs text-[#B8C6C1] font-light mt-1">{plan.subtitle}</p>
                </div>

                <div className="pt-2 border-b border-white/5 pb-4">
                  <div className="flex items-baseline space-x-1.5">
                    <span className="font-serif text-4xl text-[#F4F5F1] font-bold">{plan.price}</span>
                    <span className="font-mono text-[10px] text-[#7CA99B] tracking-wider uppercase">{plan.period}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-3 pt-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs text-[#B8C6C1] font-light">
                      <Check className="w-4 h-4 text-[#B9D8CE] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer transition-all duration-200
                    ${plan.isPopular 
                      ? "bg-[#B9D8CE] text-[#061C1A] hover:bg-[#F4F5F1] shadow-md" 
                      : "bg-[#123B35] text-[#F4F5F1] border border-[#B9D8CE]/15 hover:bg-[#B9D8CE] hover:text-[#061C1A]"}
                  `}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CUSTOM CODED SITES                                    */}
      {/* ======================================================== */}
      <section id="custom-coded-pricing" className="mb-20 scroll-mt-28">
        <div className="text-left space-y-3 mb-10 pb-6 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7CA99B] bg-[#123B35]/60 border border-[#7CA99B]/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Code2 className="w-3 h-3" />
              Category 04
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-[#B8C6C1]/70">
              Bespoke Engineering
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-[#F4F5F1] font-normal">
            CUSTOM CODED WEBSITES
          </h2>
        </div>

        {/* Custom Coded Feature Showcase Card */}
        <div className="bg-[#0D2623] border border-[#B9D8CE]/30 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7CA99B]/10 via-[#123B35]/30 to-transparent pointer-events-none rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7CA99B] uppercase tracking-wider">
                <Zap className="w-4 h-4 text-[#B9D8CE]" />
                <span>HTML / CSS / JavaScript / React</span>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#F4F5F1] font-normal leading-snug">
                Fully custom websites coded in HTML/CSS/JS and React.
              </h3>
              
              <p className="text-sm md:text-base text-[#B8C6C1] font-light leading-relaxed max-w-2xl">
                {CUSTOM_CODED_PLAN.description} Built from scratch with zero template constraints, flawless Core Web Vitals, custom animations, custom API integrations, and unmatched page speeds.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "100% Bespoke UI/UX Design",
                  "Ultra-Fast Load Times (< 1s)",
                  "Custom React / Next.js Components",
                  "API & Database Integrations",
                  "Clean Semantic Code & Schema",
                  "Full Intellectual Property Ownership"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-[#B8C6C1]">
                    <Check className="w-3.5 h-3.5 text-[#B9D8CE] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Badge and CTA */}
            <div className="lg:col-span-4 bg-[#061C1A]/80 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7CA99B]">
                Per-Page Flat Rate
              </span>
              
              <div className="flex items-baseline justify-center space-x-1.5">
                <span className="font-serif text-5xl text-[#F4F5F1] font-bold">{CUSTOM_CODED_PLAN.price}</span>
                <span className="font-mono text-xs text-[#7CA99B] uppercase tracking-wider">{CUSTOM_CODED_PLAN.period}</span>
              </div>
              
              <p className="text-[11px] text-[#B8C6C1] font-light leading-relaxed">
                Scaled directly to your scope without hidden fees.
              </p>

              <a
                href={CUSTOM_CODED_PLAN.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold
                  bg-[#B9D8CE] text-[#061C1A] hover:bg-[#F4F5F1] transition-all duration-200 cursor-pointer shadow-lg group
                "
              >
                <span>{CUSTOM_CODED_PLAN.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom FAQ / Assurance */}
      <div className="mt-20 p-8 rounded-3xl bg-[#061C1A]/40 border border-white/5 text-left max-w-4xl mx-auto space-y-6">
        <h4 className="font-serif text-xl text-[#F4F5F1] flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#7CA99B]" />
          <span>Have questions before booking?</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#B8C6C1] font-light leading-relaxed">
          <div>
            <strong className="text-[#F4F5F1] block mb-1">What happens during the initial 6-month term?</strong>
            Your monthly rate covers your entire custom website build, initial SEO setup, and complete ongoing maintenance. After 6 months, your build is 100% paid off, and your monthly investment decreases to standard care.
          </div>
          <div>
            <strong className="text-[#F4F5F1] block mb-1">Can I upgrade or customize my package?</strong>
            Yes. Every package can be tailored to add custom features, e-commerce products, additional blogs, or multi-location SEO. Book a consultation to get a tailored plan.
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#7CA99B]">Ready to take your digital presence to the next level?</span>
          <a
            href={BOOKING_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-mono text-xs text-[#B9D8CE] hover:text-[#F4F5F1] uppercase tracking-wider transition-colors"
          >
            <span>Open Booking Calendar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
