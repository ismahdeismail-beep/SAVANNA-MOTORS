import Link from "next/link";
import { BadgeCheck, Ship, CreditCard, Wrench, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { SearchBar } from "@/components/search-bar";
import { VehicleCard } from "@/components/vehicle-card";
import { FinanceCalculator } from "@/components/finance-calculator";
import { vehicles, importSteps, guides, banks } from "@/lib/data";

const trustItems = [
  { icon: BadgeCheck, title: "KEBS Inspected", desc: "Roadworthiness verified" },
  { icon: Ship, title: "Port of Mombasa", desc: "End-to-end clearing" },
  { icon: CreditCard, title: "M-Pesa & Bank Finance", desc: "From 13.5% p.a." },
  { icon: Wrench, title: "Aftersales & Warranty", desc: "Partner garages nationwide" },
];

const bodyTypes = ["SUV", "Sedan", "Hatchback", "Pickup", "Van", "Hybrid / EV"];

export default function HomePage() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-savanna-900 via-savanna-800 to-savanna-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%220.5%22 stroke-opacity=%220.1%22%3E%3Cpath d=%22M30 0L0 30M60 30L30 60M0 30L30 60M60 0L30 30%22/%3E%3C/g%3E%3C/svg%22']" />
        </div>

        <Container className="relative grid gap-10 py-16 md:py-20 lg:py-24 lg:grid-cols-2 lg:items-center gap-x-12">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-[0.14em]">
              <Sparkles className="h-3.5 w-3.5" />
              Fresh imports · Certified · Financed
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Your next car, straight from the source.
            </h1>
            <p className="mt-6 max-w-[58ch] text-savanna-100/90 text-lg leading-relaxed">
              We source, ship, clear and register quality vehicles from Japan, the UK and Dubai — delivered to your door across East Africa. Transparent landed cost, no surprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/inventory" className="btn btn-gold btn-lg px-8">Browse inventory</Link>
              <Link href="/import" className="btn btn-lg border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 flex items-center gap-2">
                Import a specific car
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="car-ph w-full aspect-square max-w-[500px] mx-auto rounded-3xl shadow-2xl border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-10">
                  <div className="text-8xl md:text-9xl lg:text-[10rem] opacity-30">🚗</div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent rounded-full blur-md" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SEARCH BAR */}
      <section className="-mt-10 mb-8 relative z-20">
        <Container>
          <SearchBar light />
        </Container>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white border-y border-sand-200 py-10">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl hover:bg-sand-50 transition-colors duration-200">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-savanna-50 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-savanna-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-savanna-900">{item.title}</h4>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* QUICK FILTERS */}
      <section className="py-10">
        <Container>
          <h2 className="font-display text-2xl font-extrabold mb-6">Shop your way</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {bodyTypes.map((b) => (
              <Link key={b} href={`/inventory?body=${encodeURIComponent(b)}`} className="card-hover grid h-20 place-items-center text-center text-xs font-bold text-savanna-800">
                {b}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED VEHICLES */}
      <section className="pb-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold">Fresh stock this week</h2>
              <p className="text-sm text-muted mt-1">Updated live from our yard and incoming shipments.</p>
            </div>
            <Link href="/inventory" className="btn btn-out btn-sm">View all {vehicles.length}+ vehicles</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featured.map((v) => <VehicleCard key={v.id} v={v} />)}
          </div>
        </Container>
      </section>

      {/* IMPORT FUNNEL */}
      <section className="bg-sand-50 py-16">
        <Container>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-2">Import a car in 6 steps — we handle everything</h2>
          <p className="text-sm text-muted mb-8">From auction to your driveway, tracked live.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {importSteps.map((s) => (
              <div key={s.n} className="card-hover p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl font-extrabold text-savanna-200/10 font-display">{s.n}</div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-savanna-800 text-white text-sm font-bold mb-4">{s.n}</span>
                <h3 className="font-display text-base font-extrabold mt-4">{s.title}</h3>
                <p className="text-xs font-semibold text-gold-600 mb-2">{s.sub}</p>
                <p className="text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/import" className="btn btn-green btn-lg px-8">Start my import</Link>
            <Link href="/track" className="btn btn-out btn-lg px-8 ml-4">Track an order</Link>
          </div>
        </Container>
      </section>

      {/* FINANCING TEASER */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold">Drive now, pay monthly</h2>
              <p className="mt-3 text-sm text-muted max-w-md">Finance through Kenya's leading banks. Pre-qualify online in minutes — no branch visit to start.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {banks.slice(0, 4).map((b) => (
                  <span key={b.name} className="badge bg-savanna-100 text-savanna-800">{b.name} {b.rate}%</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/financing" className="btn btn-green btn-lg">Calculate my payments</Link>
              </div>
            </div>
            <div className="card-hover p-8">
              <FinanceCalculator price={3000000} compact />
            </div>
          </div>
        </Container>
      </section>

      {/* TRACKER CTA */}
      <section className="bg-savanna-900 text-white py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold">Already importing with us?</h2>
            <p className="mt-3 text-savanna-200">Enter your order number to see exactly where your car is.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <input className="field w-full sm:w-64 bg-white/10 border-white/20 text-white placeholder:text-savanna-300/70" placeholder="e.g. SM-2026-0142" />
              <Link href="/track" className="btn btn-gold btn-md">Track my order</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <blockquote className="rounded-2xl bg-white/10 p-6">
              <div className="text-gold-400 mb-2">★★★★★</div>
              <p className="text-savanna-100">"Car arrived exactly as quoted. The tracking was accurate and delivery was on time."</p>
            </blockquote>
            <blockquote className="rounded-2xl bg-white/10 p-6">
              <div className="text-gold-400 mb-2">★★★★★</div>
              <p className="text-savanna-100">"Financing was painless. Got approved in 2 days and drove off the lot."</p>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* GUIDES */}
      <section className="py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold">Guides & import tips</h2>
            <Link href="/guides" className="btn btn-out btn-sm">All guides</Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Link href={`/guides#${guides[0].slug}`} className="card-hover overflow-hidden group">
              <div className="car-ph h-56 md:h-64 w-full" />
              <div className="p-6">
                <span className="text-xs font-bold uppercase text-gold-600">{guides[0].category}</span>
                <h3 className="mt-2 font-display text-xl font-extrabold group-hover:text-gold-500 transition-colors">{guides[0].title}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">
                  Age rule, KEBS inspection, RoRo shipping, KRA duty and clearance — step by step with real cost examples.
                </p>
              </div>
            </Link>
            <div className="space-y-4">
              {guides.slice(1, 4).map((g) => (
                <Link key={g.slug} href={`/guides#${g.slug}`} className="card-hover flex items-center gap-4 p-4 group">
                  <div className="car-ph w-24 h-24 flex-shrink-0 rounded-xl group-hover:scale-105 transition-transform duration-300" />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold uppercase text-gold-600">{g.category}</span>
                    <h4 className="mt-1 font-display text-sm font-extrabold group-hover:text-gold-500 transition-colors">{g.title}</h4>
                    <p className="text-xs text-muted mt-1">{g.read} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* TOOLS */}
      <section className="bg-sand-50 py-16">
        <Container>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-10 text-center">Free tools</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Link href="/import#calculator" className="card-hover p-6 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-savanna-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl">🧮</span>
              </div>
              <h3 className="font-display text-base font-extrabold">Landed-cost calculator</h3>
              <p className="mt-1 text-sm text-muted">Estimate duty + total by model/year</p>
            </Link>
            <Link href="/financing" className="card-hover p-6 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="font-display text-base font-extrabold">Loan calculator</h3>
              <p className="mt-1 text-sm text-muted">Monthly repayment by deposit & term</p>
            </Link>
            <Link href="/import" className="card-hover p-6 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="font-display text-base font-extrabold">Import eligibility check</h3>
              <p className="mt-1 text-sm text-muted">Is the year within the 8-yr rule?</p>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}