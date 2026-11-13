import React, { useEffect } from "react";
import { Link } from "../context/NavigationContext";

/**
 * Client-side fallback for navigation to an unknown route.
 * Direct requests must also return HTTP 404 via Vercel routing.
 */
export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found | The Ivana Collective";
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex, follow";
    document.querySelector('link[rel="canonical"]')?.remove();
  }, []);

  return (
    <section className="relative z-10 mx-auto flex min-h-[65vh] max-w-3xl flex-col items-start justify-center px-5 py-28">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B9D8CE]">404 · Page not found</p>
      <h1 className="mt-5 font-serif text-5xl leading-tight text-[#F4F5F1] sm:text-6xl">
        This page isn't here.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-[#E0EBE5]">
        The link may have changed. You can return to the homepage or explore our services.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#B9D8CE] px-6 font-semibold text-[#061C1A]">
          Return Home
        </Link>
        <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#B9D8CE] px-6 font-semibold text-[#F4F5F1]">
          Explore Services
        </Link>
      </div>
    </section>
  );
}
