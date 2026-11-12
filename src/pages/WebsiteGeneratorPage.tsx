import React from "react";
import SeoMeta from "../components/SeoMeta";
import StylePreviewSection from "../components/StylePreviewSection";

export default function WebsiteGeneratorPage({ onScheduleCall }: { onScheduleCall: () => void }) {
  return <><SeoMeta title="Try Your Website Idea" description="Choose a website style and see a personalized idea for your business." canonicalPath="/website-generator" />
    <section className="bg-[#061C1A] pt-32 px-5 pb-2 text-center"><p className="font-mono text-xs tracking-widest text-[#7CA99B]">TRY A WEBSITE IDEA</p><h1 className="font-serif text-4xl sm:text-6xl mt-4">See your business on a website.</h1><p className="mx-auto mt-5 max-w-2xl text-[#B8C6C1]">Choose a template and explore your website idea here. No sign-up is needed to build and preview it.</p></section>
    <StylePreviewSection onScheduleCall={onScheduleCall} />
  </>;
}
