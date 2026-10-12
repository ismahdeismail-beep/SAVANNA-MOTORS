import Link from "next/link";
import { Container } from "@/components/container";
import { guides } from "@/lib/data";

export const metadata = { title: "Guides — Savanna Motors" };

const cats = ["All", "Importing", "KRA & duty", "Financing", "Buying guides", "Maintenance", "EV & hybrid"];
const tools = [
  { icon: "🧮", title: "Landed-cost calculator", desc: "Estimate duty + total by model/year.", href: "/import#calculator" },
  { icon: "💳", title: "Loan calculator", desc: "Monthly repayment by deposit & term.", href: "/financing" },
  { icon: "✅", title: "Import eligibility check", desc: "Is the year within the 8-yr rule?", href: "/import" },
];

export default function GuidesPage() {
  const featured = guides.find((g) => g.featured)!;
  const rest = guides.filter((g) => !g.featured);

  return (
    <>
      <section className="bg-savanna-900 py-12 text-white">
        <Container>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">Guides / Blog</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Guides & import intelligence</h1>
          <p className="mt-2 max-w-[60ch] text-savanna-200">
            Everything about importing, taxing, financing and owning a car in East Africa — written by people who do this daily.
          </p>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="flex flex-wrap gap-2 mb-6">
            {cats.map((c, i) => (
              <span key={c} className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${i === 0 ? "bg-savanna-800 text-white" : "bg-sand-200 text-savanna-900"}`}>
                {c}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <Link href={`/guides#${featured.slug}`} className="card-hover overflow-hidden group">
              <div className="car-ph h-56 w-full" />
              <div className="p-5">
                <span className="text-xs font-bold uppercase text-gold-600">{featured.category}</span>
                <h2 className="mt-1 font-display text-xl font-extrabold group-hover:text-gold-500 transition-colors">{featured.title}</h2>
                <p className="mt-1 text-sm text-muted">
                  Age rule, KEBS inspection, RoRo shipping, KRA duty and clearance — step by step with real cost examples.
                </p>
              </div>
            </Link>
            <div className="space-y-3">
              {rest.slice(0, 3).map((g) => (
                <Link key={g.slug} href={`/guides#${g.slug}`} className="card-hover block p-4 group">
                  <b className="text-sm">{g.title}</b>
                  <div className="text-xs text-muted">{g.category} · {g.read} min read</div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold mb-8">Latest articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.filter((g) => !g.featured).map((g) => (
              <Link key={g.slug} href={`/guides#${g.slug}`} className="card-hover overflow-hidden group">
                <div className="car-ph h-36 w-full" />
                <div className="p-4">
                  <span className="badge bg-savanna-100 text-savanna-800">{g.category}</span>
                  <h3 className="mt-2 font-display text-sm font-extrabold group-hover:text-gold-500 transition-colors">{g.title}</h3>
                  <p className="mt-1 text-xs text-muted">{g.read} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold mb-8 text-center">Free tools</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Link href="/import#calculator" className="card-hover p-6 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-savanna-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"><span className="text-3xl">🧮</span></div>
              <h3 className="font-display text-base font-extrabold">Landed-cost calculator</h3>
              <p className="mt-1 text-sm text-muted">Estimate duty + total by model/year</p>
            </Link>
            <Link href="/financing" className="card-hover p-6 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"><span className="text-3xl">💳</span></div>
              <h3 className="font-display text-base font-extrabold">Loan calculator</h3>
              <p className="mt-1 text-sm text-muted">Monthly repayment by deposit & term</p>
            </Link>
            <Link href="/import" className="card-hover p-6 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"><span className="text-3xl">✅</span></div>
              <h3 className="font-display text-base font-extrabold">Import eligibility check</h3>
              <p className="mt-1 text-sm text-muted">Is the year within the 8-yr rule?</p>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}