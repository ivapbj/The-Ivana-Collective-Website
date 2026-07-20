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
    id: "elite-pilates",
    client: "Elite Pilates Collective",
    industry: "Wellness & Boutique Studio",
    services: ["Web Design", "Local SEO", "Booking Integration"],
    title: "A calm digital sanctuary designed to turn search intent into premium membership bookings.",
    description: "Replaced a slow, fragmented template with a high-end, responsive system. Integrated mindbody scheduling and targeted local map queries to attract high-intent local clients.",
    results: [
      "Top 3 local Google placement",
      "Improved booking experience",
      "+112% organic signups in 60 days"
    ],
    imageName: "elite_pilates_mockup",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
    accentColor: "#123B35"
  },
  {
    id: "sage-wealth",
    client: "Sage Wealth Advisors",
    industry: "Financial & Advisory Services",
    services: ["Brand Strategy", "Website Development", "Authority SEO"],
    title: "Positioning institutional financial expertise behind a trustworthy, high-contrast digital presence.",
    description: "Built an authoritative editorial experience tailored to high-net-worth individuals. Crafted custom interactive planning tools and secure lead-capture flows aligned with search behaviors.",
    results: [
      "Page 1 authority rankings",
      "Interactive lead qualifier",
      "2.4x stronger customer journey"
    ],
    imageName: "sage_wealth_mockup",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    accentColor: "#0A2C28"
  },
  {
    id: "mint-moss",
    client: "Mint & Moss Florals",
    industry: "Boutique Retail & Events",
    services: ["E-Commerce", "Content Pipeline", "Google Profile"],
    title: "An immersive sensory e-commerce experience celebrating premium botanical artistry.",
    description: "Structured a seamless Shopify-to-WordPress checkout journey optimized for subscription floral orders. Unified social aesthetic campaigns directly with immediate booking funnels.",
    results: [
      "Complete social campaign integration",
      "Smooth mobile subscription checkout",
      "40% increase in local event bookings"
    ],
    imageName: "mint_moss_mockup",
    imageUrl: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=1200",
    accentColor: "#0D2623"
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
    quote: "Our website wasn't just a redesign; it was a complete rewiring of how clients find and book us. Our local search volume doubled in two months, and the quality of leads is night and day.",
    author: "Dr. Laura Vance",
    business: "Elite Pilates Collective",
    services: ["Web Design", "Local SEO", "Booking Sync"]
  },
  {
    id: "t2",
    quote: "Ivana has a rare gift of understanding both beautiful, luxury editorial aesthetics and the highly technical, analytical side of Google algorithms. She created an experience our clients constantly praise.",
    author: "Arthur Pendleton",
    business: "Sage Wealth Advisors",
    services: ["Brand Strategy", "Website Dev", "Authority SEO"]
  },
  {
    id: "t3",
    quote: "The organic system they built connects everything: our blog, our local listing, our socials. We went from being invisible online to booking wedding events consistently through search engines.",
    author: "Elena Moss",
    business: "Mint & Moss Florals",
    services: ["E-Commerce Setup", "Content System", "Google Profile"]
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "foundation",
    title: "Website Foundation",
    tagline: "Bespoke digital home built for clean customer conversion",
    price: "$2,800",
    period: "one-time setup",
    commitment: "Or starting at $450/mo",
    bestFor: "Service businesses, boutique firms, and local brands ready to establish a pristine digital presence.",
    deliverables: [
      "Bespoke responsive design (up to 5 key pages)",
      "Essential booking or schedule integration",
      "Core SEO and search index registration",
      "Technical schema & local location markup",
      "Speed optimization (A-grade performance guaranteed)"
    ],
    isPopular: false
  },
  {
    id: "growth",
    title: "Full Digital Growth",
    tagline: "The organic marketing system continuously scaling your leads",
    price: "$1,800",
    period: "per month",
    commitment: "6-month minimum commitment",
    bestFor: "Companies ready to aggressively dominate local search, syndicate content, and scale organic bookings.",
    deliverables: [
      "Bespoke website design + continuous expansion",
      "Ongoing advanced hyper-local SEO optimization",
      "2 authoritative, optimized blogs/insights monthly",
      "Weekly Google Business Profile optimization updates",
      "Social media micro-content templates & distribution",
      "Weekly progress reporting & detailed keyword monitoring"
    ],
    isPopular: true
  },
  {
    id: "visibility",
    title: "Visibility & Content",
    tagline: "Consistent authority syndication across primary channels",
    price: "$1,200",
    period: "per month",
    commitment: "6-month minimum commitment",
    bestFor: "Established brands with an existing site who need consistent SEO maintenance and content output.",
    deliverables: [
      "Continuous on-page SEO audits & updates",
      "1 comprehensive, optimized insights article monthly",
      "Bi-weekly Google Business Profile postings",
      "Custom analytics & organic search console reporting",
      "Email newsletter campaign drafts & setup",
      "Ongoing Technical SEO error monitoring"
    ],
    isPopular: false
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
