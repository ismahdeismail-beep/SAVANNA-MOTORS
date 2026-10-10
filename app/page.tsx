import Link from "next/link";
import { BadgeCheck, Ship, CreditCard, Wrench, ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { SearchBar } from "@/components/search-bar";
import { VehicleCard } from "@/components/vehicle-card";
import { FinanceCalculator } from "@/components/finance-calculator";
import { vehicles, importSteps, guides, banks } from "@/lib/data";

const trust = [
  { icon: BadgeCheck, t: "KEBS-inspected", s: "Roadworthiness verified" },
  { icon: Ship, t: "Port of Mombasa", s: "End-to-end clearing" },
  { icon: CreditCard, t: "M-Pesa & bank finance", s: "from 13.5% p.a." },
  { icon: Wrench, t: "Aftersales & warranty", s: "Partner garages" },
];

const budgets = ["Under 1M", "1–2M", "2–5M", "5M+", "Salary-loan friendly"];
const bodyShortcuts = ["SUV", "Sedan", "Hatchback", "Pickup", "Van", "Hybrid / EV"];

export default function HomePage() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 3);

  return (
    <>
{/* HERO */}
      <section className="bg-gradient-to-br from-savanna-950 via-savanna-800 to-savanna-600 text-white">
        <Container className="grid gap-6 py-12 md:grid-cols-1 lg:grid-cols-2 gap-x-8 items-center">
          <div className="animate-fade-in-up">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">
              Fresh imports · Certified · Financed
            </span>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Your next car, straight from the source.
            </h1>
            <p className="mt-4 max-w-[52ch] text-savanna-200">
              We source, ship, clear and register quality vehicles from Japan, the UK and Dubai — delivered
              to your door across East Africa. Transparent landed cost, no surprises.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/inventory" className="btn btn-gold btn-lg">Browse inventory</Link>
              <Link href="/import" className="btn btn-lg border border-white/30 bg-white/10 text-white hover:bg-white/20">
                Import a specific car <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-savanna-200">
              <span>✅ 8-yr rule handled</span>
              <span>✅ KEBS inspection</span>
              <span>✅ M-Pesa deposit</span>
            </div>
          </div>

          <div className="car-ph w-full h-48 rounded-md bg-savanna-50 flex items-center justify-center mb-4">
            <span className="text-3xl text-savanna-300">🚗</span>
          </div>
        </Container>

        <Container className="pb-12">
          <SearchBar light />
        </Container>
      </section>

      {/* TRUST */}
      <section className="border-b border-sand-300 bg-white">
        <Container className="grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-savanna-50 text-savanna-700">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold">{t}</span>
                <span className="text-xs text-muted">{s}</span>
              </span>
            </div>
          ))}
        </Container>
      </section>

      {/* SHORTCUTS */}
      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold">Shop your way</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {budgets.map((b) => (
              <Link key={b} href="/inventory" className="rounded-full bg-sand-200 px-3.5 py-1.5 text-xs font-semibold text-savanna-900 hover:bg-sand-300">
                {b}
              </Link>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {bodyShortcuts.map((b) => (
              <Link key={b} href={`/inventory?body=${encodeURIComponent(b)}`} className="card grid h-20 place-items-center text-center text-xs font-bold text-savanna-800 hover:shadow-lift">
                {b}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED */}
      <section className="pb-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-extrabold">Fresh stock this week</h2>
              <p className="text-sm text-muted">Updated live from our yard and incoming shipments.</p>
            </div>
            <Link href="/inventory" className="btn btn-out btn-sm">View all {vehicles.length}+ vehicles</Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((v) => <VehicleCard key={v.id} v={v} />)}
          </div>
        </Container>
      </section>

      {/* IMPORT FUNNEL */}
      <section className="bg-sand-100 py-14">
        <Container>
          <h2 className="font-display text-2xl font-extrabold">Import a car in 6 steps — we handle everything</h2>
          <p className="mt-1 text-sm text-muted">From auction to your driveway, tracked live.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {importSteps.map((s) => (
              <div key={s.n} className="card p-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-savanna-800 text-sm font-bold text-white">{s.n}</span>
                <h3 className="mt-3 font-display text-base font-extrabold">{s.title}</h3>
                <p className="text-xs font-semibold text-gold-600">{s.sub}</p>
                <p className="mt-1.5 text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/import" className="btn btn-green btn-md">Start an import order</Link>
            <Link href="/import#calculator" className="btn btn-out btn-md">Estimate landed cost</Link>
          </div>
        </Container>
      </section>

      {/* FINANCING */}
      <section className="py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-extrabold">Drive now, pay monthly</h2>
              <p className="text-sm text-muted">Finance through Kenya&apos;s leading banks. Pre-qualify online in minutes.</p>
            </div>
            <Link href="/financing" className="btn btn-out btn-sm">All finance options</Link>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {banks.slice(0, 4).map((b) => (
              <span key={b.name} className="badge bg-savanna-100 text-savanna-800">{b.name} {b.rate}%</span>
            ))}
          </div>
          <div className="card mt-6 p-6">
            <FinanceCalculator price={3000000} />
          </div>
        </Container>
      </section>

      {/* TRACKER */}
      <section className="bg-savanna-900 py-14 text-white">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Already importing with us?</h2>
            <p className="mt-2 text-savanna-200">Enter your order number to see exactly where your car is.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <input className="field w-64 bg-white/10 text-white placeholder:text-savanna-300/70 border-white/20" placeholder="e.g. SM-2026-0142" />
              <Link href="/track" className="btn btn-gold btn-md">Track</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Car arrived exactly as quoted.", "Financing was painless."].map((q) => (
              <blockquote key={q} className="rounded-2xl bg-white/10 p-4 text-sm">
                <div className="text-gold-400">★★★★★</div>
                <p className="mt-1 text-savanna-100">“{q}”</p>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* GUIDES */}
      <section className="py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-extrabold">Guides &amp; import tips</h2>
            <Link href="/guides" className="btn btn-out btn-sm">All guides</Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.slice(0, 3).map((g) => (
              <Link key={g.slug} href={`/guides#${g.slug}`} className="card overflow-hidden hover:shadow-lift">
                <img src={g.image} alt={g.title} className="h-36 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <span className="badge bg-savanna-100 text-savanna-800">{g.category}</span>
                  <h3 className="mt-2 font-display text-sm font-extrabold">{g.title}</h3>
                  <p className="mt-1 text-xs text-muted">{g.read} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
