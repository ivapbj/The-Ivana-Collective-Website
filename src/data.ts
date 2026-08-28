import {
  Service,
  Project,
  Stage,
  MethodStep,
  ResultMetric,
  Testimonial,
  PricingPackage,
  InsightArticle
} from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "web-design",
    number: "01",
    title: "Website Design",
    description: "Responsive service websites, e-commerce stores, and WordPress platforms built around your customer journey.",
    features: [
      "Mobile-first responsive architecture",
      "Integrated booking and contact systems",
      "ADA-conscious accessible structure",
      "Schema markup & technical foundation"
    ],
    iconName: "Globe"
  },
  {
    id: "seo-visibility",
    number: "02",
    title: "SEO and Visibility",
    description: "Search optimization designed to help your business appear exactly where customers are already looking.",
    features: [
      "Keyword & competitive intent strategy",
      "Hyper-local Google Map pack SEO",
      "Google Business Profile optimization",
      "AI search engine visibility (SearchGPT, Gemini)"
    ],
    iconName: "Search"
  },
  {
    id: "content-growth",
    number: "03",
    title: "Content and Growth",
    description: "Strategic content that connects social media, your website, search engines, and email marketing.",
    features: [
      "Social media content and templates",
      "SEO-optimized insights and blogs",
      "Email newsletter campaigns",
      "Google Business Profile weekly updates"
    ],
    iconName: "TrendingUp"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "legacy-economic-development",
    client: "Legacy Economic Development",
    industry: "Nonprofit & Community Micro-Business Support",
    services: ["Web Design", "Grants & Programs Hub", "Technical Assistance Portal"],
    title: "Empowering Western MA micro-businesses and local entrepreneurs with accessible grants and business education.",
    description: "Designed and built an intuitive, community-first digital platform for Legacy Economic Development Corporation in Springfield, MA. Created clear pathways for micro-entrepreneurs to easily discover grant opportunities, register for business education workshops, and access 1-on-1 technical assistance.",
    results: [
      "Centralized grant & technical assistance portal",
      "Empowered 150+ Western MA micro-enterprises",
      "Streamlined community education & workshops"
    ],
    imageName: "legacy_economic_mockup",
    imageUrl: "/images/agency-economic-mockup.png",
    websiteUrl: "https://legacyedc.org",
    accentColor: "#123B35"
  },
  {
    id: "posh-body-wellness",
    client: "Posh Body Wellness Spa",
    industry: "Luxury Med Spa & Aesthetics",
    services: ["Hostinger Web Builder", "E-Commerce", "Local SEO & Social Media"],
    title: "A luxury RN-run med spa in Orlando, FL combining seamless e-commerce, high-converting service booking, and viral social reach.",
    description: "Designed and launched on Hostinger Web Builder for effortless management and lightning speed. Features an integrated product checkout for medical-grade skincare, treatment appointment scheduling, targeted Orlando local SEO, and synchronized social media content funnels.",
    results: [
      "+185% Orlando med spa search visibility",
      "Integrated e-commerce & treatment bookings",
      "High-converting social biolink & campaign funnel"
    ],
    imageName: "posh_body_wellness_mockup",
    imageUrl: "/images/posh-body-wellness-mockup.png",
    websiteUrl: "https://poshbwellnessspa.com",
    accentColor: "#843354"
  },
  {
    id: "dr-sheds",
    client: "Dr. Sheds",
    industry: "Custom Sheds & Construction",
    services: ["Web Development", "Monthly SEO & GEO", "Google Business Profile"],
    title: "Custom website development, monthly SEO, and GEO search optimization driving Top 3 Google organic rankings without ads.",
    description: "Designed and built the official web presence for Dr. Sheds (Drsheds.com). Delivered an ongoing monthly SEO & GEO visibility strategy and local search architecture that propelled Dr. Sheds into the Top 3 on Google organic search results with zero paid ad spend.",
    results: [
      "Top 3 Google Search ranking (0 ad spend)",
      "Ongoing monthly SEO & GEO visibility",
      "#1 Google Rated custom shed builder"
    ],
    imageName: "drsheds_mockup",
    imageUrl: "/images/drsheds-mockup.png",
    websiteUrl: "https://www.drsheds.com/",
    accentColor: "#1D4ED8"
  },
  {
    id: "aunalux",
    client: "Aunalux",
    industry: "Luxury Candles & Fragrance E-Commerce",
    services: ["WordPress & WooCommerce", "E-Commerce Architecture", "Brand Aesthetic & Catalog"],
    title: "Custom WordPress and WooCommerce luxury e-commerce experience crafted for an artisanal candle & fragrance brand.",
    description: "Engineered a bespoke, high-converting digital storefront for Aunalux (aunalux.com) utilizing WordPress and WooCommerce. Structured seamless shopping flows for natural oil scented candles, room sprays, and linen collections with elegant typography and fluid mobile checkout.",
    results: [
      "Custom WordPress & WooCommerce store",
      "Fluid mobile-first product & cart checkout",
      "High-converting seasonal catalog layout"
    ],
    imageName: "aunalux_mockup",
    imageUrl: "/images/aunalux-mockup.png",
    websiteUrl: "https://aunalux.com/",
    accentColor: "#C98A9B"
  },
  {
    id: "ran-art-design",
    client: "Ran Art Design",
    industry: "Fine Art Jewelry & E-Commerce",
    services: ["E-Commerce Store", "Trademark Approval", "Nationwide Shipping Integration"],
    title: "Trademark approval strategy and custom jewelry e-commerce platform that tripled online sales through automated nationwide shipping.",
    description: "Built the official brand and digital commerce hub for Ran Art Design (ranartdesign.com). Assisted the artist in successfully securing his trademark approval and deployed a high-converting e-commerce boutique for handcrafted jewelry, tripling sales volume with streamlined nationwide shipping.",
    results: [
      "Sales tripled with nationwide shipping",
      "Successful artist trademark approval",
      "Bespoke jewelry e-commerce showcase"
    ],
    imageName: "ranart_mockup",
    imageUrl: "/images/ranart-mockup.png",
    websiteUrl: "https://ranartdesign.com/",
    accentColor: "#E0218A"
  }
];

export const SYSTEM_STAGES: Stage[] = [
  {
    id: "found",
    number: "01",
    title: "Found",
    tagline: "Be discovered instantly",
    description: "People discover your business where they naturally search, ensuring you are visible before the competition.",
    items: [
      "Google Search & Map pack ranking",
      "Optimized Google Business Profile",
      "Social media touchpoints",
      "AI search engine answer presence"
    ]
  },
  {
    id: "build",
    number: "02",
    title: "Build",
    tagline: "Establish your digital center",
    description: "Your website becomes the high-performing hub. It is styled beautifully, loads instantly, and establishes immediate authority.",
    items: [
      "Responsive bespoke interface design",
      "Intuitive conversion-optimized journey",
      "Integrated booking & booking flows",
      "Bespoke typography and design assets"
    ]
  },
  {
    id: "optimize",
    number: "03",
    title: "Optimize",
    tagline: "Refine the conversion path",
    description: "Continually polish and improve the underlying technical structures to ensure maximum discoverability and zero friction.",
    items: [
      "Technical schema structures",
      "Metadata and fast indexing",
      "Internal linking architecture",
      "Friction-free call to action paths"
    ]
  },
  {
    id: "content",
    number: "04",
    title: "Content",
    tagline: "Syndicate your authority",
    description: "Multiply your efforts by repurposing one core strategic idea across all digital marketing channels seamlessly.",
    items: [
      "SEO-driven authoritative blogs",
      "Highly engaging social media assets",
      "Nurturing email marketing runs",
      "Weekly Google Business updates"
    ]
  },
  {
    id: "measure",
    number: "05",
    title: "Measure",
    tagline: "Track and scale impact",
    description: "Observe exactly what works. Replace guesswork with clear data points directly showing your return on investment.",
    items: [
      "Active traffic and source reports",
      "Search console performance clicks",
      "Call, form, and scheduling audits",
      "Direct digital revenue correlation"
    ]
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Deep research into competitor landscapes, organic search intent, and target audience needs.",
    details: "We start by uncovering the gaps your competitors are leaving. By analyzing search behaviors and regional intent, we define exactly what your digital system needs to say and target."
  },
  {
    number: "02",
    title: "Design",
    description: "Crafting a refined, high-end visual layout paired with an intuitive customer journey.",
    details: "We replace standard grids with luxurious editorial structures. Spatially balanced layouts, premium typography, and strategic visual hierarchy work together to make your business look like an elite industry authority."
  },
  {
    number: "03",
    title: "Build",
    description: "Developing a blisteringly fast, technically impeccable, and secure platform.",
    details: "Our code is modern, lightweight, and responsive. We set up comprehensive schemas, robust accessibility patterns, and fully custom interactive booking systems that operate on any device without friction."
  },
  {
    number: "04",
    title: "Grow",
    description: "Continuous optimization, authority syndication, and search visibility expansion.",
    details: "Launch is only day one. We build out your content pipeline, optimize your local maps presence, syndicate authoritative insights, and analyze actual data to systematically scale your organic client acquisition."
  }
];

export const RESULT_METRICS: ResultMetric[] = [
  {
    metric: "TOP 3",
    description: "Local Google placement without paid ads",
    label: "Search Dominance"
  },
  {
    metric: "98/100",
    description: "Mobile performance optimization and clean Core Web Vitals",
    label: "Unmatched Speed"
  },
  {
    metric: "+142%",
    description: "Increased appointments and service bookings within 90 days",
    label: "Growth Multiplier"
  },
  {
    metric: "2.4x",
    description: "Stronger customer journey conversion compared to previous site",
    label: "Conversion Yield"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    quote: "Our new digital platform streamlined how local micro-businesses in Western Massachusetts discover and apply for vital grant funding and educational programs. The clarity, speed, and community impact have been transformative.",
    author: "Program Director",
    business: "Legacy Economic Development",
    services: ["Web Design", "Grants & Programs Hub", "Community Portal"]
  },
  {
    id: "t2",
    quote: "The Ivana Collective crafted our digital presence on Hostinger with seamless e-commerce for our skincare line, instant booking for med spa treatments, and an organic SEO & social strategy that keeps our Orlando treatment rooms booked.",
    author: "Founding Nurse Injector & Owner",
    business: "Posh Body Wellness Spa",
    services: ["Hostinger Builder", "E-Commerce", "SEO & Socials"]
  },
  {
    id: "t3",
    quote: "The organic system they built connects everything: our blog, our local listing, our socials. We went from being invisible online to booking wedding events consistently through search engines.",
    author: "Elena Moss",
    business: "Mint & Moss Florals",
    services: ["E-Commerce Setup", "Content System", "Google Profile"]
  }
];

export const BOOKING_CALENDAR_URL = "https://calendar.app.google/KYrg1R1surXjfRbn7";

export const WORDPRESS_PRICING_PLANS = [
  {
    id: "wp-essentials",
    title: "WordPress Essentials",
    subtitle: "Keep Your Site Up to Date",
    price: "$299",
    period: "*/month",
    commitment: "6-month initial term · covers build + 6 mo care",
    isPopular: false,
    features: [
      "Mobile-responsive WordPress design",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics setup",
      "Hosting for one year",
      "Domain for one year",
      "SSL security",
      "Backups and security",
      "Six months of website care",
      "Up to two small edits per month"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "wp-growth",
    title: "WordPress Growth",
    subtitle: "Everything in WordPress Essentials plus:",
    price: "$416",
    period: "*/month",
    commitment: "6-month initial term · covers build + 6 mo care",
    isPopular: false,
    features: [
      "Includes everything in WordPress Essentials, plus:",
      "Up to 10–12 pages",
      "Blog, news, or announcements",
      "Newsletter integration",
      "Google Business Profile updates",
      "Enhanced on-page SEO",
      "Up to 5 small edits per month",
      "Website training session",
      "Internal linking"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "wp-authority",
    title: "WordPress Authority",
    subtitle: "Everything in WordPress Growth Plus:",
    price: "$549",
    period: "*/month",
    commitment: "6-month initial term · covers build + 6 mo care",
    isPopular: false,
    features: [
      "Up to 15–20 pages",
      "Multiple custom forms",
      "Events system",
      "Advanced SEO structure",
      "Schema markup",
      "Keyword monitoring",
      "Monthly performance report",
      "Link in Bio site",
      "Website layout changes",
      "Conversion improvements"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "wp-commerce",
    title: "WordPress Commerce",
    subtitle: "Everything in WordPress Authority Plus:",
    price: "$699",
    period: "*/month",
    commitment: "6-month initial term · covers build + 6 mo care",
    isPopular: true,
    features: [
      "WooCommerce setup",
      "Up to 25 products",
      "Payment gateway integration",
      "Shipping or pickup settings",
      "Tax configuration",
      "Customer account setup",
      "Transactional email configuration",
      "Product categories",
      "Basic checkout optimization",
      "E-commerce testing and training"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  }
];

export const ECOMMERCE_GROWTH_PLANS = [
  {
    id: "ecom-care",
    title: "Website Care",
    subtitle: "Keep Your Site Up to Date",
    price: "$330",
    period: "/month",
    isPopular: false,
    features: [
      "Broken Link Checks",
      "Up to 2 small website edits",
      "Google Business Profile Optimization",
      "One SEO health check",
      "IG Bio Optimization",
      "Up to 10 products added"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "ecom-care-seo",
    title: "Website Care + SEO",
    subtitle: "Everything in Website care plus:",
    price: "$366",
    period: "/month",
    isPopular: false,
    features: [
      "2 Instagram posts/week",
      "2 Facebook posts/week",
      "1 SEO blog/month",
      "Monthly SEO optimization",
      "Google Business Profile updates",
      "Keyword monitoring",
      "Monthly performance report"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "ecom-growth",
    title: "Growth Plan",
    subtitle: "Everything in website care plus:",
    price: "$416",
    period: "/month",
    isPopular: false,
    features: [
      "3 Instagram posts/week",
      "3 Facebook posts/week",
      "2 SEO blogs/month",
      "2 monthly SEO optimizations",
      "Google Business Profile updates",
      "Keyword monitoring",
      "Monthly performance report",
      "Link in Bio site",
      "Website layout changes",
      "Conversion improvements",
      "Up to 25 products"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "ecom-complete",
    title: "Complete Presence",
    subtitle: "Everything in website care plus:",
    price: "$473",
    period: "/month",
    isPopular: true,
    features: [
      "4 Instagram posts/week",
      "4 Facebook posts/week",
      "Price updates",
      "Product updates",
      "Security checks",
      "3 SEO blogs/month",
      "Keyword monitoring",
      "1 SEO blog post per month",
      "Google Business Profile management & updates",
      "Website layout changes",
      "Conversion improvements",
      "Instagram management",
      "Facebook page management",
      "3 TikTok posting & optimization",
      "Caption writing + hashtag optimization",
      "Unlimited Products"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  }
];

export const SERVICE_GROWTH_PLANS = [
  {
    id: "serv-care",
    title: "Website Care",
    subtitle: "Keep Your Site Up to Date",
    price: "$239",
    period: "/month",
    isPopular: false,
    features: [
      "Broken Link Checks",
      "Up to 2 small website edits",
      "Google Business Profile Optimization",
      "One SEO health check",
      "IG Bio Optimization"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "serv-care-seo",
    title: "Website Care + SEO",
    subtitle: "Everything in Website care plus:",
    price: "$332",
    period: "/month",
    isPopular: false,
    features: [
      "1 SEO blog/month",
      "Monthly SEO optimization",
      "Google Business Profile updates",
      "Keyword monitoring",
      "Monthly performance report",
      "Basic Appointment Scheduler"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "serv-growth",
    title: "Growth Plan",
    subtitle: "Everything in website care plus:",
    price: "$382",
    period: "/month",
    isPopular: false,
    features: [
      "2 SEO blogs/month",
      "2 monthly SEO optimizations",
      "Google Business Profile updates",
      "Keyword monitoring",
      "Monthly performance report",
      "Link in Bio site",
      "Advanced Appointment Scheduler",
      "Website layout changes",
      "Conversion improvements"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "serv-complete",
    title: "Complete Presence",
    subtitle: "Everything in website care plus:",
    price: "$439",
    period: "/month",
    isPopular: true,
    features: [
      "Price updates",
      "Product updates",
      "Security checks",
      "3 SEO blogs/month",
      "Keyword monitoring",
      "1 SEO blog post per month",
      "Google Business Profile management & updates",
      "Website layout changes",
      "Conversion improvements",
      "Instagram management",
      "Facebook page management",
      "3 TikTok posting & optimization",
      "Caption writing + hashtag optimization",
      "Content scheduling & engagement monitoring"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  }
];

export const WEBSITE_ONLY_PLANS = [
  {
    id: "web-service",
    title: "Service Based Website",
    subtitle: "Best for Service Businesses",
    price: "$800",
    period: "/starting",
    isPopular: false,
    features: [
      "Homepage",
      "Up to 4 additional pages",
      "Contact form",
      "Mobile Friendly Design",
      "Basic SEO setup",
      "Free hosting for 1 year",
      "Online Scheduler",
      "SSL security"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "web-shopify",
    title: "Shopify Website",
    subtitle: "Marketing Tools for Growth",
    price: "$1,200",
    period: "/starting",
    isPopular: true,
    features: [
      "Homepage",
      "Privacy and refund policy",
      "10 Products added",
      "Cart and checkout",
      "Payment gateway setup",
      "Shipping setup",
      "Edit Products & Prices Anytime",
      "Mobile Friendly Design",
      "FULL SEO setup",
      "SSL security"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "web-revamp",
    title: "Website Revamp",
    subtitle: "Have a website but needs improvements",
    price: "$500",
    period: "/starting",
    isPopular: false,
    features: [
      "Design improvements",
      "SEO Cleanup",
      "Mobile Optimization",
      "Mobile Friendly Design",
      "Speed Improvements",
      "Google Indexing Check"
    ],
    ctaText: "Get Started",
    ctaLink: BOOKING_CALENDAR_URL
  }
];

export const CUSTOM_CODED_PLAN = {
  title: "Custom Coded Websites",
  subtitle: "Fully custom websites coded in HTML/CSS/JS and React.",
  description: "Designed for businesses that need advanced functionality or a completely unique design.",
  price: "$250",
  period: "/PAGE",
  ctaText: "Request Custom Quote",
  ctaLink: BOOKING_CALENDAR_URL
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "wp-essentials",
    title: "WordPress Essentials",
    tagline: "Mobile-responsive custom site + 6 mo care",
    price: "$299*",
    period: "per month",
    commitment: "6-month initial commitment",
    bestFor: "Real Estate, Law firms, boutique services & local agencies.",
    deliverables: [
      "Mobile-responsive WordPress design",
      "Contact form & Google Analytics",
      "1-year free hosting & domain",
      "SSL security & automatic backups",
      "6 months of website care included"
    ],
    isPopular: false,
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "wp-growth",
    title: "WordPress Growth",
    tagline: "Full content, news, newsletter & on-page SEO",
    price: "$416*",
    period: "per month",
    commitment: "6-month initial commitment",
    bestFor: "Growing businesses seeking organic expansion & regular updates.",
    deliverables: [
      "Up to 10–12 pages + blog/news system",
      "Newsletter integration & Google Profile",
      "Enhanced on-page SEO & internal linking",
      "Up to 5 small edits per month",
      "Website training session included"
    ],
    isPopular: false,
    ctaLink: BOOKING_CALENDAR_URL
  },
  {
    id: "wp-commerce",
    title: "WordPress Commerce",
    tagline: "WooCommerce boutique with integrated shipping & payments",
    price: "$699*",
    period: "per month",
    commitment: "6-month initial commitment",
    bestFor: "Candle makers, bakeries, skincare & e-commerce brands.",
    deliverables: [
      "Full WooCommerce setup + up to 25 products",
      "Payment gateway & shipping/pickup setup",
      "Customer accounts & transactional emails",
      "Checkout optimization & tax rules",
      "E-commerce testing and live training"
    ],
    isPopular: true,
    ctaLink: BOOKING_CALENDAR_URL
  }
];

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: "service-pages-seo",
    category: "SEARCH STRATEGY",
    title: "Why service pages matter infinitely more than your home page for local SEO",
    summary: "Most businesses over-optimize their home page while neglecting their specific service pages. Here is why specific search queries are the secret key to hyper-targeted, ready-to-buy customer conversions.",
    readTime: "5 min read",
    date: "July 12, 2026",
    content: `
### The Myth of the Home Page

Many small businesses believe their home page is the most important page on their website. It is where you put your logo, your main values statement, and a gallery. However, from an organic search perspective, your home page is rarely where the highest-converting traffic enters.

When potential clients search for a solution, they don't search for generic business names. They search for highly specific services near them. For example:
- *"diaphragmatic breathing rehabilitation specialized studio near me"*
- *"estate tax wealth advisory for business owners in boston"*
- *"same-day subscription floral delivery"*

If you lump all these services onto a single generic home page, Google cannot establish high topical authority for any single one of them. 

### Enter: The Dedicated Service Page

A dedicated, comprehensive service page does three things:
1. **Establishes Clear Topical Authority**: It allows you to write 800-1200 words focusing purely on one specialized offer, using semantically relevant keywords that address actual user queries.
2. **Improves User Conversion Rates**: When a searcher lands directly on a page that matches their exact problem, they do not have to wander through your site. The friction to book is reduced to zero.
3. **Optimizes Local Schema Markup**: You can inject local service schema code directly into that specific page, telling search engines exactly which local neighborhoods you serve for that specific service.

### Action Plan for Your Business
- Create separate, dedicated pages for your top 3-5 high-margin services.
- Ensure each page contains at least 800 words of rich, original content.
- Include a specific, localized FAQ block at the bottom of each service page to capture natural conversational search queries (now critical for AI search engines like SearchGPT and Gemini).
    `
  },
  {
    id: "static-vs-growth",
    category: "WEB TECHNOLOGY",
    title: "Static websites versus organic digital growth systems: What is the true difference?",
    summary: "A website is not an online business card; it should be an active digital salesperson. Understand the architectural shift from a dormant brochure to a self-generating organic lead funnel.",
    readTime: "4 min read",
    date: "June 28, 2026",
    content: `
### The Brochure Trap

For decades, small businesses viewed a website as a digital checklist item: "We need a site so we have an address on our business card." These are **static websites**. They are built once, left untouched for years, and serve purely as passive brochures. 

If a potential customer already knows your name, they might look you up and verify you exist. But a static website will never introduce you to *new* customers who have never heard of you.

### What is an Organic Digital Growth System?

An **Organic Digital Growth System** treats your website as the active core of your entire business operations. It is designed to proactively find new audience members, build deep trust, and systematically convert them into long-term clients.

| Feature | Static Website | Organic Growth System |
| :--- | :--- | :--- |
| **Primary Goal** | Verification of existence | Consistent client acquisition |
| **Content Strategy** | "Set and forget" portfolio | Continuous authority syndication |
| **SEO Approach** | Basic metadata upon setup | Deep local queries & AI engine tracking |
| **Integration** | Standard contact form | Interactive schedulers & custom client audits |
| **Data Usage** | Unmonitored or basic hits | Click tracking, bookings, and active ROI attribution |

### The System in Action

An organic system leverages **authority loops**. One high-quality insight written on your website is automatically:
1. Indexed on Google for strategic long-tail search queries.
2. Repurposed into an email newsletter sent to your existing audience.
3. Structured as brief micro-posts on social media, driving traffic back to your site.
4. Posted on your Google Business Profile to boost your map pack visibility.

By turning one effort into multiple assets, your digital presence grows compoundingly.
    `
  },
  {
    id: "local-seo-secrets",
    category: "LOCAL VISIBILITY",
    title: "The local map pack formula: How to dominate search results without spending a dollar on ads",
    summary: "Learn the exact technical strategy to position your business in the coveted top three local Map Pack slots, driving massive direct phone calls, navigation searches, and bookings.",
    readTime: "6 min read",
    date: "May 18, 2026",
    content: `
### The Most Valuable Digital Real Estate

When a local customer searches for a service provider, Google displays the **Map Pack**—the three local business listings superimposed on a map—above the standard organic search results. 

Over **40% of all local search clicks** go directly to these three listings. If you are ranking in position 4 or below, you are practically invisible.

### The 3 Pillars of Local Map Pack SEO

Google’s local search algorithm relies heavily on three core factors:

#### 1. Relevance
How well does your business match the searcher's intent? You boost relevance by fully filling out your Google Business Profile (GBP), choosing the correct primary and secondary categories (e.g., *"Pilates Studio"* vs *"Fitness Center"*), and listing your exact services.

#### 2. Distance
How close is your physical or service area location to the searcher? While you cannot change your physical location, you can define clear, contiguous service areas within your GBP and list local landmark neighborhoods on your website's service pages to prove proximity.

#### 3. Prominence
How authoritative and trusted is your business? This is the only pillar you have absolute, active control over. Prominence is driven by:
- **Review Velocity**: The frequency, volume, and score of your client reviews. You must establish a continuous system for requesting reviews immediately after service delivery.
- **Review Content**: Reviews containing specific service keywords (e.g. *"best bespoke web design in Boston"*) carry significantly more rank weight.
- **Local Citations**: Mentions of your business name, address, and phone number (NAP) consistently across local directory platforms.
- **Website Authority**: Google analyzes your website's performance, speed, mobile compatibility, and core organic search ranking to determine if your map listing deserves to rise.
    `
  }
];

export const FAQS_DATA = [
  {
    question: "Do you only build new websites, or do you work with existing ones?",
    answer: "We prefer to build high-end systems from the ground up because it ensures absolute speed, accessibility, and clean schema architectures. However, for established brands on Shopify or WordPress with high existing organic value, we provide continuous SEO, speed optimization, and comprehensive content growth strategies to turn your existing asset into a high-performance salesperson."
  },
  {
    question: "How long does it take to see results from Local SEO and Google rankings?",
    answer: "While paid ads offer instant visibility (at a premium cost), organic growth is an asset that builds compounding value. Typically, technical optimizations and local map-pack improvements show visible momentum in search volume within 30 to 60 days. Major topical authority ranking for competitive search terms usually takes between 3 to 6 months of consistent content syndication."
  },
  {
    question: "Why should I choose The Ivana Collective over a large digital agency?",
    answer: "Large agencies often have high overhead costs, meaning you pay premium prices but get passed down to junior account managers. At The Ivana Collective, you collaborate directly with an experienced, boutique digital professional who understands brand strategy, visual editorial design, modern software development, and advanced SEO analysis. We cut out the layers to deliver cohesive, world-class systems with pristine personal attention."
  },
  {
    question: "What platforms do you build your websites on?",
    answer: "We build on lightweight, highly optimized frameworks like React/Vite for bespoke web applications, or structured WordPress setups and Shopify architectures for editorial e-commerce. We select the technology stack entirely based on your business operations, ensuring that whatever platform we choose, it achieves a near-perfect mobile speed score and is easily manageable by your team."
  }
];
