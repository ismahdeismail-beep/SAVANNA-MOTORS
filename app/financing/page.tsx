import { Container } from "@/components/container";
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
    <div className="py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Drive now, pay monthly.</h1>
          <p className="text-muted max-w-2xl mx-auto text-lg">Finance your car or import through Kenya's leading banks. Pre-qualify online in minutes — no branch visit to start.</p>
        </div>

        <section className="mb-16">
          <div className="card-hover p-8 max-w-2xl mx-auto">
            <FinanceCalculator price={3000000} compact={false} />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-extrabold mb-8 text-center">Our finance partners</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {banks.map((b) => (
              <div key={b.name} className="card-hover p-6 text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-savanna-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold text-savanna-700">{b.name.charAt(0)}</span>
                </div>
                <h3 className="font-display text-lg font-extrabold mb-1">{b.name}</h3>
                <p className="text-sm text-muted mb-4">{b.product}</p>
                <div className="text-2xl font-extrabold text-savanna-700">{b.rate}% p.a.</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-display text-2xl font-extrabold mb-8 text-center">Pre-qualify in 3 steps</h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div key={s.n} className="card-hover p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl font-extrabold text-savanna-200/10 font-display">{s.n}</div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-savanna-800 text-white flex items-center justify-center text-xl font-bold">{s.n}</div>
                <h3 className="font-display text-lg font-extrabold text-center mb-2">{s.title}</h3>
                <p className="text-sm text-muted text-center">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="btn btn-gold btn-lg px-8">Start pre-qualification</button>
          </div>
        </section>
      </Container>
    </div>
  );
}