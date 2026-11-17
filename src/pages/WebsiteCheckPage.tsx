import React, { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import SeoMeta from "../components/SeoMeta";

type FormState = {
  fullName: string;
  email: string;
  businessName: string;
  websiteUrl: string;
  notes: string;
  contactConsent: boolean;
  marketingConsent: boolean;
  botField: string;
};

const initialForm: FormState = {
  fullName: "", email: "", businessName: "", websiteUrl: "", notes: "",
  contactConsent: false, marketingConsent: false, botField: ""
};

export default function WebsiteCheckPage() {
  const [form, setForm] = useState(initialForm);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);
  const key = useRef(crypto.randomUUID());

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm(current => ({ ...current, [field]: value }));
    setError("");
    key.current = crypto.randomUUID();
  };

  const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const canSubmit = form.contactConsent && hasValidEmail && form.websiteUrl.trim().length > 0 && !busy;

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;
    setBusy(true);
    setError("");

    try {
      const response = await fetch("/api/preview-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": key.current },
        body: JSON.stringify({
          requestType: "website-check",
          fullName: form.fullName,
          email: form.email,
          businessName: form.businessName,
          websiteUrl: form.websiteUrl,
          industry: "Website check request",
          description: `Website to review: ${form.websiteUrl.trim()}${form.notes.trim() ? `\n\nWhat they would like help with: ${form.notes.trim()}` : ""}`,
          services: "Website review",
          phone: "",
          tagline: "",
          theme: "Website Check",
          template: "Business / Services",
          colors: ["#163c36", "#f4efe5", "#17231f"],
          contactConsent: form.contactConsent,
          marketingConsent: form.marketingConsent,
          botField: form.botField
        })
      });
      const data = response.headers.get("content-type")?.includes("application/json")
        ? await response.json()
        : { error: "The website check is temporarily unavailable. Please try again." };
      if (!response.ok) throw new Error(data.error || "Unable to send your website check request.");
      setComplete(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your website check request.");
    } finally {
      setBusy(false);
    }
  };

  const input = "mt-2 min-h-12 w-full rounded-lg border border-[#B9D8CE]/30 bg-[#041211]/70 px-4 py-3 text-[#F4F5F1] placeholder:text-[#B8C6C1]/60 focus:border-[#B9D8CE] focus:outline-none focus:ring-2 focus:ring-[#B9D8CE]/20";

  return <main className="relative overflow-hidden px-5 pb-24 pt-32 sm:pt-40">
    <SeoMeta
      title="Free Website Check"
      description="Request a complimentary website check for practical feedback on clarity, mobile experience, search visibility and customer next steps."
      canonicalPath="/website-check"
      breadcrumbs={[{ name: "Home", item: "/" }, { name: "Free Website Check", item: "/website-check" }]}
    />
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_16%,rgba(57,112,91,.24),transparent_30%),linear-gradient(180deg,rgba(6,28,26,.12),rgba(4,18,17,.72))]" />
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
      <section className="max-w-xl pt-2">
        <p className="font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#B9D8CE]">Free Website Check</p>
        <h1 className="mt-5 font-serif text-5xl leading-[.96] text-[#F4F5F1] sm:text-6xl">Get a fresh set of eyes on your website.</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#D7E1DB]">Already have a site? Share the link and I’ll take a practical look at what a visitor sees first, where the experience can be clearer, and what could help it work harder for your business.</p>
        <ul className="mt-9 space-y-4 text-sm leading-relaxed text-[#D7E1DB]">
          {["Clarity and trust in the first few seconds", "Mobile experience and customer next steps", "Quick opportunities for local search visibility"].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#B9D8CE]" aria-hidden="true" />{item}</li>)}
        </ul>
      </section>

      <section className="rounded-2xl border border-white/15 bg-[#071d1a]/90 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
        {complete ? <div className="py-8 text-center"><CheckCircle2 className="mx-auto size-12 text-[#B9D8CE]" aria-hidden="true" /><h2 className="mt-5 font-serif text-3xl text-[#F4F5F1]">Your request is in.</h2><p className="mx-auto mt-3 max-w-md leading-relaxed text-[#D7E1DB]">Thank you. I’ll review the details you shared and follow up with practical next steps.</p></div> : <>
          <h2 className="font-serif text-3xl text-[#F4F5F1]">Tell me about your website.</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#B8C6C1]">A few details are all I need to get started.</p>
          <form className="mt-7 space-y-5" onSubmit={submit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-[#E5EEE9]">Your name *<input className={input} required maxLength={200} value={form.fullName} onChange={event => update("fullName", event.target.value)} autoComplete="name" /></label>
              <label className="block text-sm font-semibold text-[#E5EEE9]">Email address *<input className={input} required type="email" maxLength={200} value={form.email} onChange={event => update("email", event.target.value)} autoComplete="email" /></label>
            </div>
            <label className="block text-sm font-semibold text-[#E5EEE9]">Business name *<input className={input} required maxLength={200} value={form.businessName} onChange={event => update("businessName", event.target.value)} autoComplete="organization" /></label>
            <label className="block text-sm font-semibold text-[#E5EEE9]">Website address *<input className={input} required type="url" maxLength={200} placeholder="https://yourbusiness.com" value={form.websiteUrl} onChange={event => update("websiteUrl", event.target.value)} inputMode="url" /></label>
            <label className="block text-sm font-semibold text-[#E5EEE9]">Anything you want me to pay attention to? <span className="font-normal text-[#B8C6C1]">(optional)</span><textarea className={`${input} min-h-28 resize-y`} maxLength={3000} value={form.notes} onChange={event => update("notes", event.target.value)} /></label>
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#D7E1DB]"><input className="mt-1 size-4 accent-[#B9D8CE]" required type="checkbox" checked={form.contactConsent} onChange={event => update("contactConsent", event.target.checked)} /><span>I agree that The Ivana Collective may contact me about this website check.</span></label>
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#B8C6C1]"><input className="mt-1 size-4 accent-[#B9D8CE]" type="checkbox" checked={form.marketingConsent} onChange={event => update("marketingConsent", event.target.checked)} /><span>Optional: send me occasional website and marketing tips. I can unsubscribe any time.</span></label>
            <label className="hidden" aria-hidden="true">Leave this blank<input tabIndex={-1} autoComplete="off" value={form.botField} onChange={event => update("botField", event.target.value)} /></label>
            {error && <p role="alert" className="rounded-lg border border-[#D69292]/50 bg-[#601e24]/30 p-3 text-sm text-[#FFD9D9]">{error}</p>}
            <button disabled={!canSubmit} aria-disabled={!canSubmit} title={!canSubmit ? "Enter a valid email and website address, then agree to be contacted to continue." : undefined} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#B9D8CE] px-5 py-3 font-semibold text-[#061C1A] transition-colors hover:bg-[#F4F5F1] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">{busy ? <><Loader2 className="size-4 animate-spin" aria-hidden="true" />Sending your request…</> : <>Get My Free Website Check <ArrowRight className="size-4" aria-hidden="true" /></>}</button>
          </form>
        </>}
      </section>
    </div>
  </main>;
}
