import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  Car,
  CreditCard,
  Landmark,
  MessageCircle,
  Ship,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/container";
import { SearchBar } from "@/components/search-bar";
import { Section, SectionHeader } from "@/components/section";
import { VehicleCard } from "@/components/vehicle-card";
import { FinanceCalculator } from "@/components/finance-calculator";
import { vehicles, importSteps, guides, banks } from "@/lib/data";

const trust = [
  { icon: BadgeCheck, label: "KEBS inspected" },
  { icon: Ship, label: "Cleared at Mombasa" },
  { icon: CreditCard, label: "M-Pesa & bank finance" },
  { icon: Wrench, label: "Warranty & aftersales" },
];

const bodyTypes = ["SUV", "Sedan", "Hatchback", "Pickup", "Van", "Hybrid / EV"];

const tools = [
  { icon: Calculator, href: "/import#calculator", title: "Landed-cost calculator", desc: "Duty, VAT and total by model & year" },
  { icon: Landmark, href: "/financing", title: "Loan calculator", desc: "Monthly repayment by deposit & term" },
  { icon: Car, href: "/import", title: "Import eligibility", desc: "Check the 8-year age rule" },
];

export default function HomePage() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 3);
  const hero = featured[0];

  return (
    <>
      {/* HERO — split, type-led, real photography */}
      <section className="bg-savanna-950 text-white">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.05fr_1fr]">
          <div className="px-5 py-14 md:px-8 md:py-20 lg:py-28 xl:pl-16">
            <p className="eyebrow text-gold-400">Import · Finance · Drive</p>
            <h1 className="mt-5 max-w-[16ch] font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Your next car, straight from the source.
            </h1>
            <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-savanna-200/85 md:text-lg">
              We source, ship, clear and register quality vehicles from Japan, the UK and Dubai —
              with a fixed landed cost before you pay a shilling.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/inventory" className="btn btn-gold btn-lg px-8">Browse inventory</Link>
              <Link href="/import" className="btn btn-lg border border-white/25 bg-white/5 px-8 text-white hover:bg-white/10">
                Import a specific car
              </Link>
            </div>

            <ul className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold text-savanna-200/85 sm:text-[13px]">
              {trust.map((t) => (
                <li key={t.label} className="flex items-center gap-2">
                  <t.icon className="h-4 w-4 shrink-0 text-gold-400" />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[260px] md:min-h-[340px] lg:min-h-[620px]">
            {hero && (
              <>
                <img
                  src={hero.image}
                  alt={`${hero.year} ${hero.make} ${hero.model}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-savanna-950 via-savanna-950/25 to-transparent lg:bg-gradient-to-r lg:from-savanna-950 lg:via-savanna-950/30 lg:to-transparent" />
              </>
            )}
          </div>
        </div>
      </section>

      {/* SEARCH — floats over the hero edge */}
      <div className="relative z-20 -mt-8 px-5 md:-mt-10 md:px-8">
        <Container>
          <div className="mx-auto max-w-[1100px] shadow-[0_30px_60px_-40px_rgba(18,48,31,0.6)]">
            <SearchBar light />
          </div>
        </Container>
      </div>

      {/* FRESH STOCK */}
      <Section className="pt-14 md:pt-20">
        <Container>
          <SectionHeader
            eyebrow="Fresh stock"
            title="New arrivals this week"
            lead="Straight from the yard and incoming shipments."
            action={{ href: "/inventory", label: `View all ${vehicles.length}+` }}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((v) => (
              <VehicleCard key={v.id} v={v} />
            ))}
          </div>
        </Container>
      </Section>

      {/* BODY TYPES — hairline strip, no card grid */}
      <div className="border-y border-sand-200 bg-white">
        <Container className="flex flex-wrap items-center gap-x-7 gap-y-3 py-5">
          <span className="eyebrow">Shop by body</span>
          {bodyTypes.map((b) => (
            <Link
              key={b}
              href={`/inventory?body=${encodeURIComponent(b)}`}
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-savanna-800 transition-colors hover:text-gold-600"
            >
              {b}
              <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          ))}
        </Container>
      </div>

      {/* IMPORT JOURNEY — numbered editorial list */}
      <Section tone="tint">
        <Container>
          <SectionHeader
            eyebrow="Importing"
            title="Six steps, one fixed price"
            lead="Auction to driveway in 6–10 weeks, tracked live in your account."
            action={{ href: "/import", label: "Start my import" }}
          />
          <ol className="mt-10 grid gap-x-14 md:grid-cols-2">
            {importSteps.map((s) => (
              <li key={s.n} className="flex gap-5 border-t border-sand-200 py-6">
                <span className="pt-1 font-display text-sm font-extrabold text-gold-600">
                  {String(s.n).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display text-lg font-extrabold">{s.title}</h3>
                    <span className="text-xs font-bold text-gold-700">{s.sub}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* FINANCING — dark band */}
      <Section tone="dark">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Financing</p>
            <h2 className="section-title mt-2 text-white">Drive now, pay monthly</h2>
            <p className="section-lead text-savanna-200/80">
              Pre-qualify online in minutes through Kenya&apos;s leading banks — no branch visit to start.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {banks.slice(0, 4).map((b) => (
                <span key={b.name} className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-savanna-100">
                  {b.name} {b.rate}%
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/financing" className="btn btn-gold btn-lg px-8">Calculate my payments</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink md:p-8">
            <FinanceCalculator price={3000000} compact />
          </div>
        </Container>
      </Section>

      {/* TRACKING + PROOF */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">Live tracking</p>
            <h2 className="section-title mt-2">Already importing with us?</h2>
            <p className="section-lead">Enter your order number to see exactly where your car is.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <input
                className="field w-full sm:w-72"
                placeholder="e.g. SM-2026-0142"
                aria-label="Order number"
              />
              <Link href="/track" className="btn btn-green btn-md">Track my order</Link>
            </div>
          </div>
          <div>
            {[
              "Car arrived exactly as quoted. The tracking was accurate and delivery was on time.",
              "Financing was painless. Got approved in 2 days and drove off the lot.",
            ].map((quote) => (
              <figure key={quote} className="border-t border-sand-200 py-6 first:border-t-0 first:pt-0">
                <div className="text-sm tracking-[0.3em] text-gold-500">★★★★★</div>
                <blockquote className="mt-3 font-display text-lg font-extrabold leading-snug tracking-tight md:text-xl">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* GUIDES */}
      <Section tone="tint">
        <Container>
          <SectionHeader
            eyebrow="Guides"
            title="Know before you buy"
            action={{ href: "/guides", label: "All guides" }}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr]">
            <Link href={`/guides#${guides[0].slug}`} className="group block">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={guides[0].image}
                  alt=""
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <span className="eyebrow mt-5 block">{guides[0].category}</span>
              <h3 className="mt-2 max-w-[30ch] font-display text-2xl font-extrabold leading-tight tracking-tight transition-colors group-hover:text-gold-600">
                {guides[0].title}
              </h3>
            </Link>
            <div>
              {guides.slice(1, 4).map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides#${g.slug}`}
                  className="group flex items-center gap-4 border-t border-sand-200 py-5 first:border-t-0 first:pt-0"
                >
                  <img src={g.image} alt="" className="h-16 w-20 shrink-0 rounded-lg object-cover" loading="lazy" />
                  <div className="min-w-0">
                    <span className="eyebrow block">{g.category}</span>
                    <h4 className="mt-1 font-display text-[15px] font-extrabold leading-snug transition-colors group-hover:text-gold-600">
                      {g.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-muted">{g.read} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* TOOLS — quiet strip, no card grid */}
      <div className="border-t border-sand-200 bg-white">
        <Container className="grid gap-8 py-12 sm:grid-cols-3">
          {tools.map((t) => (
            <Link key={t.title} href={t.href} className="group flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-sand-200 bg-sand-50 text-savanna-700 transition-colors group-hover:border-gold-300 group-hover:bg-gold-50">
                <t.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-[15px] font-extrabold">{t.title}</span>
                <span className="mt-0.5 block text-sm text-muted">{t.desc}</span>
              </span>
              <ArrowRight className="ml-auto h-4 w-4 self-center text-sand-400 transition-all group-hover:translate-x-1 group-hover:text-gold-600" />
            </Link>
          ))}
        </Container>
      </div>
    </>
  );
}
