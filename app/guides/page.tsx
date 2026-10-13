import Link from "next/link";
import { Calculator, CreditCard, BadgeCheck } from "lucide-react";
import { Container } from "@/components/container";
import { Section, SectionHeader } from "@/components/section";
import { guides } from "@/lib/data";

export const metadata = { title: "Guides — Savanna Motors" };

const cats = ["All", "Importing", "KRA & duty", "Financing", "Buying guides", "Maintenance", "EV & hybrid"];

export default function GuidesPage() {
  const featured = guides.find((g) => g.featured)!;
  const rest = guides.filter((g) => !g.featured);

  return (
    <>
      <section className="bg-savanna-950 text-white">
        <Container className="py-14 md:py-20">
          <p className="eyebrow">Guides / Blog</p>
          <h1 className="mt-3 max-w-[22ch] font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
            Guides & import intelligence
          </h1>
          <p className="mt-4 max-w-[62ch] text-savanna-200/85">
            Everything about importing, taxing, financing and owning a car in East Africa — written by people who do this daily.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="flex flex-wrap gap-2">
            {cats.map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  i === 0 ? "bg-savanna-800 text-white" : "border border-sand-200 bg-white text-savanna-900"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <Link href={`/guides#${featured.slug}`} className="group overflow-hidden rounded-2xl border border-sand-200 bg-white transition-colors hover:border-sand-300">
              <div className="h-56 w-full overflow-hidden bg-sand-100">
                <img src={featured.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="eyebrow">{featured.category}</span>
                <h2 className="mt-2 font-display text-xl font-extrabold leading-tight transition-colors group-hover:text-gold-600">{featured.title}</h2>
                <p className="mt-2 text-sm text-muted">
                  Age rule, KEBS inspection, RoRo shipping, KRA duty and clearance — step by step with real cost examples.
                </p>
              </div>
            </Link>
            <div className="space-y-3">
              {rest.slice(0, 3).map((g) => (
                <Link key={g.slug} href={`/guides#${g.slug}`} className="group block rounded-2xl border border-sand-200 bg-white p-4 transition-colors hover:border-sand-300">
                  <b className="block text-sm leading-snug transition-colors group-hover:text-gold-600">{g.title}</b>
                  <div className="mt-1 text-xs text-muted">{g.category} · {g.read} min read</div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <SectionHeader
            eyebrow="Library"
            title="Latest articles"
            action={{ href: "/guides", label: "All guides" }}
          />
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((g) => (
              <Link key={g.slug} href={`/guides#${g.slug}`} className="group overflow-hidden rounded-2xl border border-sand-200 bg-white transition-colors hover:border-sand-300">
                <div className="h-36 w-full overflow-hidden bg-sand-100">
                  <img src={g.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="eyebrow">{g.category}</span>
                  <h3 className="mt-2 font-display text-sm font-extrabold leading-snug transition-colors group-hover:text-gold-600">{g.title}</h3>
                  <p className="mt-1 text-xs text-muted">{g.read} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Free tools"
            title="Calculate before you commit"
            lead="Duty, monthly repayments and import eligibility — no signup required."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            <Link href="/import#calculator" className="group rounded-2xl border border-sand-200 bg-white p-6 text-center transition-colors hover:border-sand-300">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-savanna-100 transition-transform duration-300 group-hover:scale-105"><Calculator className="h-6 w-6 text-savanna-700" /></div>
              <h3 className="font-display text-base font-extrabold">Landed-cost calculator</h3>
              <p className="mt-1 text-sm text-muted">Estimate duty + total by model/year</p>
            </Link>
            <Link href="/financing" className="group rounded-2xl border border-sand-200 bg-white p-6 text-center transition-colors hover:border-sand-300">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gold-100 transition-transform duration-300 group-hover:scale-105"><CreditCard className="h-6 w-6 text-gold-700" /></div>
              <h3 className="font-display text-base font-extrabold">Loan calculator</h3>
              <p className="mt-1 text-sm text-muted">Monthly repayment by deposit & term</p>
            </Link>
            <Link href="/import" className="group rounded-2xl border border-sand-200 bg-white p-6 text-center transition-colors hover:border-sand-300">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-blue-100 transition-transform duration-300 group-hover:scale-105"><BadgeCheck className="h-6 w-6 text-blue-700" /></div>
              <h3 className="font-display text-base font-extrabold">Import eligibility check</h3>
              <p className="mt-1 text-sm text-muted">Is the year within the 8-yr rule?</p>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
