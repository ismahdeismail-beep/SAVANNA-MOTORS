"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { WHATSAPP } from "@/lib/data";

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
    <div className="py-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Get in Touch</h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">Have questions about importing, financing, or selling? Our team is ready to help.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-4">
            <div className="card-hover p-6 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-savanna-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Phone className="h-8 w-8 text-savanna-700" />
              </div>
              <h3 className="font-display text-xl font-extrabold mb-2">Call us</h3>
              <p className="text-muted mb-4">Mon–Sat 8am–6pm · Sun 10am–4pm</p>
              <a href="tel:+254700000000" className="btn btn-green w-full inline-flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> +254 700 000 000
              </a>
            </div>
            <div className="card-hover p-6 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-savanna-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Mail className="h-8 w-8 text-savanna-700" />
              </div>
              <h3 className="font-display text-xl font-extrabold mb-2">Email us</h3>
              <p className="text-muted mb-4">We&apos;ll respond within 24 hours.</p>
              <a href="mailto:sales@savannamotors.co.ke" className="btn btn-out w-full inline-flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" /> sales@savannamotors.co.ke
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-muted mb-12">
            Prefer chat?{" "}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="link">
              <MessageCircle className="h-4 w-4 inline -mt-0.5" /> Message us on WhatsApp
            </a>
          </p>

          <div className="card bg-sand-50 p-6">
            <h2 className="font-display text-2xl font-extrabold mb-6 text-center">Or send us a message</h2>
            {error && <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6"><p className="text-sm">{error}</p></div>}
            {success && <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-md mb-6"><p className="text-sm">{success}</p></div>}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div><label className="label">Name</label><input type="text" name="name" required className="field" placeholder="Your full name" /></div>
                <div><label className="label">Email</label><input type="email" name="email" required className="field" placeholder="your@email.com" /></div>
              </div>
              <div><label className="label">Message</label><textarea name="message" rows={5} required className="field min-h-[140px]" placeholder="How can we help you?" /></div>
              <button type="submit" className="btn btn-green w-full py-3" disabled={loading}>{loading ? "Sending…" : "Send Message"}</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}