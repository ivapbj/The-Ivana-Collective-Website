import React from "react";
import SeoMeta from "../components/SeoMeta";
import StylePreviewSection from "../components/StylePreviewSection";

export default function WebsiteGeneratorPage({ onScheduleCall }: { onScheduleCall: () => void }) {
  return <><SeoMeta title="Live Website Generator" description="Create a personalized website direction and unlock your preview from The Ivana Collective." canonicalPath="/website-generator" />
    <section className="bg-[#061C1A] pt-32 px-5 pb-2 text-center"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">LIVE WEBSITE GENERATOR</p><h1 className="font-serif text-4xl sm:text-6xl mt-4">Start with a website you can see.</h1><p className="mx-auto mt-5 max-w-2xl text-[#B8C6C1]">Build your direction, submit your details, then unlock the full personalized preview in this browser.</p></section>
    <StylePreviewSection onScheduleCall={onScheduleCall} />
  </>;
}
