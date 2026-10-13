import { Banknote, Repeat, Tag, Plus } from "lucide-react";
import { Container } from "@/components/container";
import { Section, SectionHeader } from "@/components/section";
import { LeadForm } from "@/components/lead-form";

export const metadata = { title: "Sell / Trade-in — Savanna Motors" };

const options = [
  { icon: Banknote, t: "Sell outright", d: "We buy your car and pay you via M-Pesa or bank within 48h of inspection." },
  { icon: Repeat, t: "Trade-in", d: "Swap your car against stock or an import order; offset the price." },
  { icon: Tag, t: "Sell on consignment", d: "We list, show and sell it from our yard for a fee." },
];

const nextSteps = [
  "Submit details & photos",
  "We call to book inspection",
  "Free physical inspection (Nairobi / Mombasa)",
  "Firm offer within 24h",
  "Paid via M-Pesa or bank on acceptance",
];

export default function SellPage() {
  return (
    <>
      <section className="bg-savanna-950 text-white">
        <Container className="py-14 md:py-20">
          <p className="eyebrow">Sell / Trade-in</p>
          <h1 className="mt-3 max-w-[20ch] font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
            Sell or trade in your car.
          </h1>
          <p className="mt-4 max-w-[60ch] text-savanna-200/85">
            Get a free valuation in 24 hours. Sell outright for cash, or trade in against any car in our stock or a fresh import.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Three ways"
            title="How we buy your car"
            lead="Whichever route you take, valuation and inspection are free."
          />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {options.map((o) => (
              <div key={o.t} className="rounded-2xl border border-sand-200 bg-white p-5 transition-colors hover:border-sand-300">
                <div className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-savanna-100">
                  <o.icon className="h-6 w-6 text-savanna-700" />
                </div>
                <h3 className="font-display text-lg font-extrabold">{o.t}</h3>
                <p className="mt-1 text-sm text-muted">{o.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Valuation</p>
            <h2 className="section-title mt-2 text-[1.6rem] md:text-[2rem]">Request a valuation</h2>
            <LeadForm submitLabel="Get my free valuation">
              <div className="grid grid-cols-2 gap-3">
                <input className="field" name="make" placeholder="Make" />
                <input className="field" name="model" placeholder="Model" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input className="field" name="year" placeholder="Year" />
                <input className="field" name="mileage" placeholder="Mileage (km)" />
              </div>
              <input className="field" name="chassis" placeholder="Reg / chassis no." />
              <input className="field" name="phone" type="tel" required placeholder="Your phone number" />
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <label
                    key={i}
                    className="grid h-16 cursor-pointer place-items-center rounded-xl border border-dashed border-sand-300 text-muted transition-colors hover:border-savanna-400 hover:text-savanna-600"
                  >
                    <Plus className="h-5 w-5" />
                    <span className="sr-only">Add photo</span>
                  </label>
                ))}
              </div>
              <textarea className="field min-h-[80px]" name="message" placeholder="Condition notes, service history, accident disclosure…" />
            </LeadForm>
          </div>

          <div className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
            <p className="eyebrow">Next</p>
            <h3 className="section-title mt-2 text-[1.4rem] md:text-[1.7rem]">What happens next</h3>
            <ol className="mt-5 space-y-3 text-sm">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-3 border-t border-sand-200 pt-3 first:border-0 first:pt-0">
                  <span className="font-display text-sm font-extrabold text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="mt-5 rounded-2xl bg-sand-100 p-4">
              <div className="label">Indicative valuation (once submitted)</div>
              <div className="font-display text-2xl font-extrabold text-savanna-800">KSh 1,120,000</div>
              <p className="mt-1 text-[11px] text-muted">Based on make/model/year/mileage · firm after inspection.</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
