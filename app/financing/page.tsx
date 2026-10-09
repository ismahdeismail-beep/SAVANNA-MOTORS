import { Container } from "@/components/container";
import { FinanceCalculator } from "@/components/finance-calculator";
import { banks } from "@/lib/data";

export const metadata = { title: "Financing — Savanna Motors" };

const steps = [
  { n: 1, t: "Your details", d: "Name, phone (SMS OTP), ID/PIN and income." },
  { n: 2, t: "Vehicle & amount", d: "Link the car or import order and your deposit." },
  { n: 3, t: "Bank decision", d: "We submit to a partner bank; you receive an offer." },
];

export default function FinancingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-savanna-950 to-savanna-600 text-white">
        <Container className="py-14">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">Financing</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Drive now, pay monthly.</h1>
          <p className="mt-3 max-w-[58ch] text-savanna-200">
            Finance your car or import through Kenya&apos;s leading banks. Pre-qualify online in minutes — no branch visit to start.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold">Payment calculator</h2>
          <div className="card mt-5 p-6">
            <FinanceCalculator price={3000000} />
          </div>
        </Container>
      </section>

      <section className="bg-sand-100 py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold">Our finance partners</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {banks.map((b) => (
              <div key={b.name} className="card flex items-center justify-between p-4">
                <span className="text-sm"><b>{b.name}</b> · {b.product}</span>
                <span className="font-bold text-savanna-700">{b.rate}% p.a.</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold">Pre-qualify in 3 steps</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="card p-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-savanna-800 text-sm font-bold text-white">{s.n}</span>
                <h3 className="mt-3 font-display text-base font-extrabold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted">{s.d}</p>
              </div>
            ))}
          </div>
          <button className="btn btn-gold btn-lg mt-6">Start pre-qualification</button>
          <p className="mt-2 text-[11px] text-muted">
            Phone verified via SMS OTP. Data handled under the Kenya Data Protection Act 2019.
          </p>
        </Container>
      </section>
    </>
  );
}
