import Link from "next/link";
import { ShieldCheck, Shield, MapPin, Clock, Phone, Mail, Users, Trophy, Truck, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { Section, SectionHeader } from "@/components/section";
import { branches, EMAIL, PHONE } from "@/lib/data";

export const metadata = { title: "About — Savanna Motors" };

const whyUs = [
  { icon: ShieldCheck, title: "KEBS-inspected & verified", desc: "Every vehicle passes Kenya Bureau of Standards roadworthiness inspection before delivery." },
  { icon: Shield, title: "Auction sheet & inspection report", desc: "Full transparency — you receive the auction grade sheet and KEBS CoC on every import." },
  { icon: Truck, title: "Transparent landed cost", desc: "Fixed all-in price — import duty, excise, VAT, IDF, RDL, clearing and inland transport included." },
  { icon: Sparkles, title: "M-Pesa deposits & bank finance", desc: "Reserve with KSh 50,000 via M-Pesa. Finance from 13.5% p.a. with top Kenyan banks." },
  { icon: Users, title: "Aftersales & warranty", desc: "Partner garages nationwide for service, warranty claims and genuine parts." },
  { icon: Sparkles, title: "End-to-end clearing", desc: "Licensed agents handle KRA iCMS, IDF, RDL and NTSA registration — you just drive." },
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
      <section className="bg-savanna-950 text-white">
        <Container className="py-14 md:py-20">
          <p className="eyebrow">About · Branches · Contact</p>
          <h1 className="mt-3 max-w-[20ch] font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
            We bring the world&apos;s best cars to East Africa.
          </h1>
          <p className="mt-4 max-w-[62ch] text-savanna-200/85">
            Savanna Motors is a licensed importer and dealer. From Japan, the UK and Dubai to your doorstep —
            sourced, inspected, cleared, financed and registered.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Why us</p>
            <h2 className="section-title mt-2">Why buy from us</h2>
            <ul className="mt-7 space-y-4">
              {whyUs.map((w) => (
                <li key={w.title} className="flex items-start gap-4 border-t border-sand-200 pt-4 first:border-0 first:pt-0">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-savanna-100 flex items-center justify-center">
                    <w.icon className="h-5 w-5 text-savanna-700" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold">{w.title}</h4>
                    <p className="text-sm text-muted mt-1">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/cars/hero.jpg"
            alt="Land Cruiser at the Savanna Motors yard"
            className="h-64 w-full rounded-3xl object-cover md:h-96"
            loading="lazy"
          />
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <SectionHeader
            eyebrow="Track record"
            title="Our numbers"
            lead="What we have delivered so far, and how fast we turn things around."
          />
          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {stats.map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-sand-200 bg-white p-5 text-center">
                <div className="font-display text-2xl font-extrabold text-savanna-800 md:text-3xl">{n}</div>
                <div className="mt-1 text-xs text-muted">{l}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Values" title="What we stand for" />
          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v) => (
              <div key={v.title} className="rounded-2xl border border-sand-200 bg-white p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-savanna-100 flex items-center justify-center">
                  <v.icon className="h-7 w-7 text-savanna-700" />
                </div>
                <h3 className="font-display text-lg font-extrabold mb-2">{v.title}</h3>
                <p className="text-sm text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <SectionHeader
            eyebrow="Visit us"
            title="Branches"
            lead="Three yards across Kenya — walk in for a viewing or book an appointment."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.name} className="rounded-2xl border border-sand-200 bg-white p-5">
                <b className="font-display text-lg">{b.name}</b>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted"><MapPin className="h-4 w-4 shrink-0" />{b.addr}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted"><Clock className="h-4 w-4 shrink-0" />{b.hours}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted"><Phone className="h-4 w-4 shrink-0" />{b.phone}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-2">Talk to us</h2>
            <p className="section-lead">
              Call or email us directly, or send a message — we reply within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-green btn-lg">Send a message</Link>
              <a href={`tel:${PHONE}`} className="btn btn-out btn-lg">Call us</a>
            </div>
          </div>
          <ul className="space-y-3 text-sm lg:justify-self-end">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-savanna-600" /><a href={`tel:${PHONE}`} className="link">{PHONE}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-savanna-600" /><a href={`mailto:${EMAIL}`} className="link">{EMAIL}</a></li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-savanna-600" />Mon–Sat 8am–6pm</li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
