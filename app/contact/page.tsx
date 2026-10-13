"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Section, SectionHeader } from "@/components/section";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { WHATSAPP, PHONE, EMAIL } from "@/lib/data";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, message }) });
      const data = await res.json();
      if (res.ok && data.success) { setSuccess("Thank you! Your message has been received. We'll get back to you soon."); (e.target as HTMLFormElement).reset(); }
      else { setError(data.error || "Submission failed. Please try again."); }
    } catch { setError("Network error. Please check your connection and try again."); }
    finally { setLoading(false); }
  };

  return (
    <>
      <section className="bg-savanna-950 text-white">
        <Container className="py-14 md:py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-[58ch] text-savanna-200/85">
            Have questions about importing, financing or selling? Our team is ready to help.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="mx-auto max-w-3xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-sand-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-savanna-100">
                <Phone className="h-7 w-7 text-savanna-700" />
              </div>
              <h3 className="font-display text-lg font-extrabold">Call us</h3>
              <p className="mt-1 text-sm text-muted">Mon–Sat 8am–6pm · Sun 10am–4pm</p>
              <a href={`tel:${PHONE}`} className="btn btn-green mt-4 w-full">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
            <div className="rounded-2xl border border-sand-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-savanna-100">
                <Mail className="h-7 w-7 text-savanna-700" />
              </div>
              <h3 className="font-display text-lg font-extrabold">Email us</h3>
              <p className="mt-1 text-sm text-muted">We&apos;ll respond within 24 hours.</p>
              <a href={`mailto:${EMAIL}`} className="btn btn-out mt-4 w-full break-all">
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-muted">
            Prefer chat?{" "}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
              <MessageCircle className="h-4 w-4" /> Message us on WhatsApp
            </a>
          </p>
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Write to us"
            title="Send a message"
            lead="Fill this in and we reply within 24 hours — usually much sooner."
          />
          <div className="mt-8 rounded-2xl border border-sand-200 bg-white p-6 shadow-sm md:p-8">
            {error && <div className="mb-6 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-700">{error}</div>}
            {success && <div className="mb-6 rounded-lg border-l-4 border-green-500 bg-green-50 p-4 text-sm text-green-700">{success}</div>}
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="label" htmlFor="c-name">Name</label><input id="c-name" type="text" name="name" required className="field" placeholder="Your full name" /></div>
                <div><label className="label" htmlFor="c-email">Email</label><input id="c-email" type="email" name="email" required className="field" placeholder="your@email.com" /></div>
              </div>
              <div><label className="label" htmlFor="c-msg">Message</label><textarea id="c-msg" name="message" rows={5} required className="field min-h-[140px]" placeholder="How can we help you?" /></div>
              <button type="submit" className="btn btn-green w-full py-3" disabled={loading}>
                {loading ? "Sending…" : <><Send className="h-4 w-4" /> Send message</>}
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
