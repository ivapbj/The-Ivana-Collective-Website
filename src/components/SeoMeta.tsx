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

export default function SeoMeta({ title, description, canonicalPath, schema, breadcrumbs }: SeoMetaProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = `${title} | The Ivana Collective`;

    // 2. Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", description);

    // 3. Update Canonical Link
    const siteUrl = "https://theivanacollective.com";
    const canonicalUrl = `${siteUrl}${canonicalPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 4. Inject Schema.org Structured Data
    const oldSchemaScript = document.getElementById("structured-data-schema");
    if (oldSchemaScript) {
      oldSchemaScript.remove();
    }

    const schemasToInject: any[] = [];

    // LocalBusiness Schema by default on all pages or customized
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "The Ivana Collective",
      "image": "https://theivanacollective.com/images/premium-keyboard-hero.jpg",
      "@id": "https://theivanacollective.com/#organization",
      "url": "https://theivanacollective.com",
      "telephone": "+1-555-0199",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Luxury Design Row, 100",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90015",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0407,
        "longitude": -118.2468
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://linkedin.com/company/theivanacollective"
      ]
    };
    schemasToInject.push(localBusinessSchema);

    // Dynamic breadcrumb schema if specified
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": `${siteUrl}${crumb.item}`
        }))
      };
      schemasToInject.push(breadcrumbSchema);
    }

    if (schema) {
      schemasToInject.push(schema);
    }

    const script = document.createElement("script");
    script.id = "structured-data-schema";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schemasToInject);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const schemaScript = document.getElementById("structured-data-schema");
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, canonicalPath, schema, breadcrumbs]);

  return null; // Side-effect only component
}
