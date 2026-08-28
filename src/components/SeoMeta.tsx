import React, { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SeoMetaProps {
  title: string;
  description: string;
  canonicalPath: string;
  schema?: Record<string, any>;
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_URL = "https://theivanacollective.com";
const SOCIAL_IMAGE = `${SITE_URL}/images/ivana-collective-social-preview.jpg`;
const SOCIAL_IMAGE_ALT = "The Ivana Collective web design, SEO and social media management studio";

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

export default function SeoMeta({ title, description, canonicalPath, schema, breadcrumbs }: SeoMetaProps) {
  useEffect(() => {
    const fullTitle = title.includes("The Ivana Collective")
      ? title
      : `${title} | The Ivana Collective`;
    const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:site_name", "The Ivana Collective");
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", SOCIAL_IMAGE);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", SOCIAL_IMAGE_ALT);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", SOCIAL_IMAGE);
    upsertMeta("name", "twitter:image:alt", SOCIAL_IMAGE_ALT);

    const organizationSchema = {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "The Ivana Collective",
      alternateName: "Ivana Collective",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      image: SOCIAL_IMAGE,
      description: "Web design, search engine optimization, and social media management for small businesses.",
      founder: {
        "@type": "Person",
        name: "Ivana Carrillo",
        jobTitle: "Full-Stack Web Developer and Founder"
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Western Massachusetts" },
        { "@type": "State", name: "Massachusetts" },
        { "@type": "State", name: "Connecticut" },
        { "@type": "Country", name: "United States" }
      ],
      sameAs: [
        "https://www.instagram.com/theivanacollective/",
        "https://www.facebook.com/profile.php?id=61571300805986",
        "https://www.tiktok.com/@theivanacollective",
        "https://github.com/ivapbj"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Growth Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Small Business Web Design and Development",
              serviceType: "Web Design"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search Engine Optimization",
              serviceType: "SEO"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Management and Content Strategy",
              serviceType: "Social Media Management"
            }
          }
        ]
      }
    };

    const websiteSchema = {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "The Ivana Collective",
      alternateName: "Ivana Collective",
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` }
    };

    const graph: Record<string, any>[] = [organizationSchema, websiteSchema];

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `${SITE_URL}${crumb.item}`
        }))
      });
    }

    if (schema) {
      const { "@context": _context, ...pageSchema } = schema;
      graph.push(pageSchema);
    }

    document.getElementById("structured-data-schema")?.remove();

    const script = document.createElement("script");
    script.id = "structured-data-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(script);

    return () => {
      document.getElementById("structured-data-schema")?.remove();
    };
  }, [title, description, canonicalPath, schema, breadcrumbs]);

  return null;
}
