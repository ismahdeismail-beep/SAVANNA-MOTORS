import { Container } from "@/components/container";
import { Section, SectionHeader } from "@/components/section";
import { FinanceCalculator } from "@/components/finance-calculator";
import { banks } from "@/lib/data";

export const metadata = { title: "Financing — Savanna Motors" };

const steps = [
  { n: 1, title: "Your details", desc: "Name, phone (SMS OTP), ID/PIN and income." },
  { n: 2, title: "Vehicle & amount", desc: "Link the car or import order and your deposit." },
  { n: 3, title: "Bank decision", desc: "We submit to a partner bank; you receive an offer." },
];

export default function FinancingPage() {
  return (
    <>
      <section className="bg-savanna-950 text-white">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.05fr_1fr]">
          <div className="px-5 py-14 md:px-8 md:py-20">
            <p className="eyebrow">Financing</p>
            <h1 className="mt-3 max-w-[16ch] font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
              Drive now, pay monthly.
            </h1>
            <p className="mt-4 max-w-[58ch] text-savanna-200/85">
              Finance your car or import through Kenya&apos;s leading banks. Pre-qualify online in minutes — no branch visit to start.
            </p>
          </div>
          <div className="relative min-h-[220px] md:min-h-[300px] lg:min-h-[420px]">
            <img src="/cars/guide-finance.jpg" alt="Car keys ready for handover" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-savanna-950 via-savanna-950/20 to-transparent lg:bg-gradient-to-r lg:from-savanna-950 lg:via-savanna-950/30 lg:to-transparent" />
          </div>
        </div>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl border border-sand-200 bg-white p-6 shadow-sm md:p-8">
            <FinanceCalculator price={3000000} compact={false} />
          </div>
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <SectionHeader
            eyebrow="Partners"
            title="Our finance partners"
            lead="Pre-qualify with any of them through a single application with us."
          />
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {banks.map((b) => (
              <div key={b.name} className="rounded-2xl border border-sand-200 bg-white p-6 text-center transition-colors hover:border-sand-300">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-savanna-100 font-display text-xl font-extrabold text-savanna-700">
                  {b.name.charAt(0)}
                </div>
                <h3 className="font-display text-lg font-extrabold mb-1">{b.name}</h3>
                <p className="text-sm text-muted mb-4">{b.product}</p>
                <div className="text-2xl font-extrabold text-savanna-700">{b.rate}% p.a.</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="How it works"
            title="Pre-qualify in 3 steps"
            lead="No branch visit to start — decisions typically within 48 hours."
          />
          <ol className="mt-9 grid gap-x-10 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 border-t border-sand-200 py-5">
                <span className="pt-0.5 font-display text-sm font-extrabold text-gold-600">{String(s.n).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-base font-extrabold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <button className="btn btn-gold btn-lg px-8">Start pre-qualification</button>
          </div>
        </Container>
      </Section>
    </>
  );
}
