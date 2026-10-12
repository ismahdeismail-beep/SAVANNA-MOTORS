import Link from "next/link";
import { ShieldCheck, Shield, MapPin, Clock, Phone, Users, Trophy, Truck, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { branches, EMAIL, WHATSAPP, PHONE } from "@/lib/data";

export const metadata = { title: "About — Savanna Motors" };

const whyUs = [
  { icon: ShieldCheck, title: "KEBS-inspected & verified", desc: "Every vehicle passes Kenya Bureau of Standards roadworthiness inspection before delivery." },
  { icon: Shield, title: "Auction sheet & inspection report", desc: "Full transparency — you receive the auction grade sheet and KEBS CoC on every import." },
  { icon: Truck, title: "Transparent landed cost", desc: "Fixed all-in price — import duty, excise, VAT, IDF, RDL, clearing and inland transport included." },
  { icon: Sparkles, title: "M-Pesa deposits & bank finance", desc: "Reserve with KSh 50,000 via M-Pesa. Finance from 13.5% p.a. with top Kenyan banks." },
  { icon: Users, title: "Aftersales & warranty", desc: "Partner garages nationwide for service, warranty claims and genuine parts." },
  { icon: Sparkles, title: "End-to-end clearing", desc: "Licensed agents handle KRA iCMS, IDF, IDF, RDL and NTSA registration — you just drive." },
];

const stats = [
  ["1,200+", "Cars delivered"],
  ["3", "Branches nationwide"],
  ["4", "Countries served"],
  ["4.8★", "Avg. customer rating"],
  ["6", "Partner banks"],
  ["24h", "Valuation turnaround"],
];

const aboutValues = [
  { icon: Trophy, title: "Integrity", desc: "Honest pricing, no hidden fees, transparent process." },
  { icon: Users, title: "Customer first", desc: "Your needs drive every decision we make." },
  { icon: Shield, title: "Quality assured", desc: "Every car KEBS-certified, auction-verified, accident-free." },
  { icon: Sparkles, title: "Innovation", desc: "Digital-first experience from search to delivery." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-savanna-950 via-savanna-800 to-savanna-600 text-white">
        <Container className="py-14 md:py-20">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">About · Branches · Contact</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">We bring the world's best cars to East Africa.</h1>
          <p className="mt-3 max-w-[62ch] text-savanna-200">
            Savanna Motors is a licensed importer and dealer. From Japan, the UK and Dubai to your doorstep —
            sourced, inspected, cleared, financed and registered.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold mb-4">Why buy from us</h2>
            <ul className="space-y-4">
              {whyUs.map((w) => (
                <li key={w.title} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-savanna-100 flex items-center justify-center">
                    <w.icon className="h-6 w-6 text-savanna-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{w.title}</h4>
                    <p className="text-sm text-muted mt-1">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="car-ph h-64 md:h-80 rounded-3xl" />
        </Container>
      </section>

      <section className="bg-sand-50 py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold mb-8 text-center">Our numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map(([n, l]) => (
              <div key={l} className="card p-6 text-center">
                <div className="font-display text-3xl font-extrabold text-savanna-800">{n}</div>
                <div className="text-xs text-muted">{l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold mb-8 text-center">Our values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v) => (
              <div key={v.title} className="card-hover p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-savanna-100 flex items-center justify-center">
                  <v.icon className="h-8 w-8 text-savanna-700" />
                </div>
                <h3 className="font-display text-lg font-extrabold mb-2">{v.title}</h3>
                <p className="text-sm text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold mb-8">Branches</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.name} className="card p-5">
                <b className="font-display text-lg">{b.name}</b>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted"><MapPin className="h-4 w-4" />{b.addr}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted"><Clock className="h-4 w-4" />{b.hours}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted"><Phone className="h-4 w-4" />{b.phone}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-12">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold mb-3">Contact us</h2>
            <p className="text-sm text-muted max-w-md">
              WhatsApp is fastest, or reach us by phone, email or at any branch. We reply within 24 hours.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={WHATSAPP} className="btn btn-green btn-lg">Chat on WhatsApp</a>
              <Link href="/contact" className="btn btn-out btn-lg">Send a message</Link>
            </div>
          </div>
          <ul className="space-y-3 text-sm">
            <li>💬 <a href={WHATSAPP} className="link">WhatsApp</a></li>
            <li>✉️ <a href={`mailto:${EMAIL}`} className="link">{EMAIL}</a></li>
            <li>📞 <a href={`tel:${PHONE}`} className="link">{PHONE}</a></li>
            <li>⏰ Mon–Sat 8am–6pm</li>
          </ul>
        </Container>
      </section>
    </>
  );
}