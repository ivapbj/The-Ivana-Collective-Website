import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./PageBackground.css";

type PageBackgroundConfig = {
  src: string;
  srcSet?: string;
  position: string;
  mobilePosition: string;
  overlay: string;
  title: string;
};

const backgrounds: Record<string, PageBackgroundConfig> = {
  home: {
    src: "/images/about-founder-orchard.webp",
    srcSet: "/images/about-founder-orchard.webp 864w, /images/about-founder-orchard-2x.webp 1728w",
    position: "50% 34%",
    mobilePosition: "52% 42%",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .76) 0%, rgba(4, 22, 18, .54) 48%, rgba(4, 22, 18, .30) 100%)",
    title: "Ivana in an orchard beneath the apple trees",
  },
  services: {
    src: "/images/services-cinematic.webp",
    position: "center",
    mobilePosition: "58% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .72), rgba(4, 22, 18, .4) 64%, rgba(4, 22, 18, .25))",
    title: "A contemporary digital design studio",
  },
  webDesign: {
    src: "/images/web-design-cinematic.webp",
    position: "center",
    mobilePosition: "58% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .72), rgba(4, 22, 18, .4) 64%, rgba(4, 22, 18, .25))",
    title: "A contemporary website design studio",
  },
  seo: {
    src: "/images/seo-cinematic.webp",
    position: "center",
    mobilePosition: "60% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .74), rgba(4, 22, 18, .45) 64%, rgba(4, 22, 18, .28))",
    title: "A workspace for local search strategy",
  },
  growth: {
    src: "/images/growth-cinematic.webp",
    position: "center",
    mobilePosition: "60% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .74), rgba(4, 22, 18, .45) 64%, rgba(4, 22, 18, .28))",
    title: "A content creation workspace",
  },
  pricing: {
    src: "/images/pricing-cinematic.webp",
    position: "center",
    mobilePosition: "58% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .7), rgba(4, 22, 18, .42) 62%, rgba(4, 22, 18, .28))",
    title: "An organized, warmly lit business workspace",
  },
  work: {
    src: "/images/portfolio-cinematic.webp",
    position: "center",
    mobilePosition: "62% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .68), rgba(4, 22, 18, .42) 62%, rgba(4, 22, 18, .25))",
    title: "A dark creative gallery with desktop displays",
  },
  preview: {
    src: "/images/preview-cinematic.webp",
    position: "center",
    mobilePosition: "58% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .78), rgba(4, 22, 18, .55) 64%, rgba(4, 22, 18, .42))",
    title: "A website idea taking shape on screens",
  },
  about: {
    src: "/images/about-founder-orchard.webp",
    srcSet: "/images/about-founder-orchard.webp 864w, /images/about-founder-orchard-2x.webp 1728w",
    position: "50% 34%",
    mobilePosition: "52% 42%",
    overlay: "linear-gradient(180deg, rgba(4, 22, 18, .66), rgba(4, 22, 18, .72)), linear-gradient(90deg, rgba(4, 22, 18, .34), rgba(4, 22, 18, .16) 58%, rgba(4, 22, 18, .08))",
    title: "Ivana sitting in an orchard with a Jane Austen book",
  },
  contact: {
    src: "/images/contact-cinematic.webp",
    position: "center",
    mobilePosition: "60% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .76), rgba(4, 22, 18, .48) 64%, rgba(4, 22, 18, .3))",
    title: "A welcoming workspace ready for collaboration",
  },
  caseRebarRose: {
    src: "/images/work-forest-reference.jpeg", position: "center", mobilePosition: "55% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .88), rgba(4, 22, 18, .68) 60%, rgba(4, 22, 18, .5))", title: "Forest background for the Rebar and Rose case study",
  },
  caseLaboy: {
    src: "/images/work-forest-reference.jpeg", position: "center", mobilePosition: "55% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .88), rgba(4, 22, 18, .68) 60%, rgba(4, 22, 18, .5))", title: "Forest background for the LaBoy Properties case study",
  },
  caseLlanos: {
    src: "/images/work-forest-reference.jpeg", position: "center", mobilePosition: "55% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .88), rgba(4, 22, 18, .68) 60%, rgba(4, 22, 18, .5))", title: "Forest background for the Llanos Electrolysis case study",
  },
  caseForeclosure: {
    src: "/images/work-forest-reference.jpeg", position: "center", mobilePosition: "55% center",
    overlay: "linear-gradient(90deg, rgba(4, 22, 18, .88), rgba(4, 22, 18, .68) 60%, rgba(4, 22, 18, .5))", title: "Forest background for the ForeclosureBuyHomes case study",
  },
};

function getPageKey(path: string) {
  if (path === "/website-generator") return "preview";
  if (path === "/services/web-design") return "webDesign";
  if (path === "/services/seo") return "seo";
  if (path === "/services/content-growth" || path === "/services/social-media") return "growth";
  if (path === "/pricing" || path === "/method" || path === "/insights") return "pricing";
  if (path === "/work" || path === "/portfolio") return "work";
  if (path === "/about") return "about";
  if (path === "/contact") return "contact";
  // Town-specific SEO pages use the same real orchard photo and fixed treatment as About.
  if (["/locations/wilbraham-ma-web-design", "/locations/east-longmeadow-ma-web-design", "/locations/longmeadow-ma-web-design", "/locations/enfield-ct-web-design"].includes(path)) return "about";
  // These three SEO pages reuse the actual About-page orchard photograph and fixed treatment.
  if (path === "/locations/springfield-ma-web-design" || path === "/locations/western-ma-wordpress-developer" || path === "/guides/wordpress-vs-custom-website") return "about";
  if (path === "/case-studies/rebar-and-rose") return "caseRebarRose";
  if (path === "/case-studies/laboy-properties") return "caseLaboy";
  if (path === "/case-studies/llanos-electrolysis") return "caseLlanos";
  if (path === "/case-studies/foreclosurebuyhomes") return "caseForeclosure";
  if (path.startsWith("/services") || path.startsWith("/industries/") || path.startsWith("/locations/") || path.startsWith("/guides/")) return "services";
  return "home";
}

export default function PageBackground({ path }: { path: string }) {
  // Match the server's empty portal during hydration; mount fixed imagery afterward.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const pageKey = getPageKey(path);
  const background = backgrounds[pageKey];

  // Portals are client-only. During server rendering, the fixed background
  // mounts into document.body after hydration without changing page markup.
  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div className="page-background" aria-hidden="true" data-page-background={pageKey}>
      <img
        key={pageKey}
        className="page-background__image"
        src={background.src}
        srcSet={background.srcSet}
        alt=""
        loading="eager"
        decoding="async"
        fetchPriority={pageKey === "home" ? "high" : "auto"}
        style={{
          objectPosition: background.position,
          "--mobile-position": background.mobilePosition,
        } as React.CSSProperties}
      />
      <div className="page-background__shade" style={{ background: background.overlay }} />
    </div>,
    document.body,
  );
}

