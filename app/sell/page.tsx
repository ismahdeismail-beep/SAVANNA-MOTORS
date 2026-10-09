import { Container } from "@/components/container";

export const metadata = { title: "Sell / Trade-in — Savanna Motors" };

const options = [
  { icon: "💰", t: "Sell outright", d: "We buy your car and pay you via M-Pesa or bank within 48h of inspection." },
  { icon: "🔄", t: "Trade-in", d: "Swap your car against stock or an import order; offset the price." },
  { icon: "🏷️", t: "Sell on consignment", d: "We list, show and sell it from our yard for a fee." },
];

const next = [
  "Submit details & photos",
  "We call / WhatsApp to book inspection",
  "Free physical inspection (Nairobi / Mombasa)",
  "Firm offer within 24h",
  "Paid via M-Pesa or bank on acceptance",
];

export default function SellPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-savanna-950 to-savanna-600 text-white">
        <Container className="py-14">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">Sell / Trade-in</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Sell or trade in your car.</h1>
          <p className="mt-3 max-w-[60ch] text-savanna-200">
            Get a free valuation in 24 hours. Sell outright for cash, or trade in against any car in our stock or a fresh import.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-5 md:grid-cols-3">
          {options.map((o) => (
            <div key={o.t} className="card p-5">
              <div className="text-3xl">{o.icon}</div>
              <h3 className="mt-2 font-display text-lg font-extrabold">{o.t}</h3>
              <p className="mt-1 text-sm text-muted">{o.d}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-sand-100 py-12">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Request a valuation</h2>
            <form className="mt-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input className="field" placeholder="Make" />
                <input className="field" placeholder="Model" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input className="field" placeholder="Year" />
                <input className="field" placeholder="Mileage (km)" />
              </div>
              <input className="field" placeholder="Reg / chassis no." />
              <input className="field" placeholder="Your phone (WhatsApp)" />
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <label key={i} className="grid h-16 cursor-pointer place-items-center rounded-xl border border-dashed border-sand-400 text-muted">
                    {i === 0 ? "＋" : ""}
                  </label>
                ))}
              </div>
              <textarea className="field min-h-[80px]" placeholder="Condition notes, service history, accident disclosure…" />
              <button type="button" className="btn btn-green btn-lg w-full">Get my free valuation</button>
            </form>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-lg font-extrabold">What happens next</h3>
            <ol className="mt-4 space-y-2 text-sm">
              {next.map((s, i) => (
                <li key={s} className="flex gap-2"><span className="font-bold text-savanna-700">{i + 1}.</span>{s}</li>
              ))}
            </ol>
            <div className="mt-5 rounded-2xl bg-sand-100 p-4">
              <div className="label">Indicative valuation (once submitted)</div>
              <div className="font-display text-2xl font-extrabold text-savanna-800">KSh 1,120,000</div>
              <p className="text-[11px] text-muted">Based on make/model/year/mileage · firm after inspection.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
