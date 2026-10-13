import Link from "next/link";
import { Container } from "@/components/container";
import { Section, SectionHeader } from "@/components/section";
import { LeadForm } from "@/components/lead-form";
import { importSteps } from "@/lib/data";
import { kes } from "@/lib/utils";

export const metadata = { title: "Import a Car — Savanna Motors" };

const sources = [
  { code: "JP", name: "Japan", note: "~94% of Kenya's used imports. RHD, auction grades, low mileage. Best value.", meta: "Auction: USS, TAA, JU" },
  { code: "UK", name: "United Kingdom", note: "Luxury & premium: Range Rover, BMW, Mercedes. Euro spec.", meta: "~3% of imports" },
  { code: "AE", name: "Dubai / Singapore", note: "Fresh, high-spec units and fast turnaround.", meta: "RHD markets" },
];

const landedItems = [
  ["Vehicle price (CIF Mombasa)", 2480000],
  ["Import duty (25%)", 620000],
  ["Excise duty (20–35%)", 350000],
  ["VAT (16%)", 552000],
  ["IDF (3.5%)", 87000],
  ["RDL (2%)", 50000],
  ["Shipping (RoRo)", 130000],
  ["KEBS inspection (JEVIC/QISJ)", 33000],
  ["Clearing + agent", 80000],
  ["Inland transport", 50000],
] as const;

export default function ImportPage() {
  const total = landedItems.reduce((sum, [, value]) => sum + value, 0);
  return (
    <>
      <section className="bg-savanna-950 text-white">
        <Container className="py-14 md:py-20">
          <p className="eyebrow">Import a Car</p>
          <h1 className="mt-3 max-w-[22ch] font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
            Can&apos;t find it? We&apos;ll import it for you.
          </h1>
          <p className="mt-4 max-w-[64ch] text-savanna-200/85">
            Tell us the exact make, model, year and budget. We source from Japanese, UK and Dubai auctions, handle KEBS inspection, freight, KRA duty, clearing and NTSA registration — then deliver to your door. You get a fixed all-in landed price before you pay.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Sourcing"
            title="Where we source from"
            lead="Three RHD markets, one vetted pipeline."
          />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {sources.map((s) => (
              <div key={s.name} className="rounded-2xl border border-sand-200 bg-white p-5 transition-colors hover:border-sand-300">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-savanna-800 font-display text-sm font-extrabold text-gold-400">{s.code}</span>
                <h3 className="mt-4 font-display text-lg font-extrabold">{s.name}</h3>
                <p className="mt-1 text-sm text-muted">{s.note}</p>
                <p className="mt-3 text-xs font-semibold text-gold-600">{s.meta}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Start here</p>
            <h2 className="section-title mt-2 text-[1.6rem] md:text-[2rem]">Request an import</h2>
            <p className="mt-2 text-sm text-muted">We reply with a landed-cost quote and options — usually same day.</p>
            <LeadForm submitLabel="Get my landed-cost quote">
              <div className="grid grid-cols-2 gap-3">
                <input className="field" name="make" placeholder="Make (e.g. Toyota)" />
                <input className="field" name="model" placeholder="Model (e.g. Harrier Z)" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input className="field" name="year" placeholder="Year (2019+)" />
                <input className="field" name="budget" placeholder="Budget KSh" />
              </div>
              <input className="field" name="body" placeholder="Body / fuel preference" />
              <input className="field" name="phone" type="tel" required placeholder="Your phone number" />
              <textarea className="field min-h-[90px]" name="message" placeholder="Notes — trim, colour, mileage, negotiation cap…" />
              <p className="text-[11px] text-muted">Age rule enforced: models 2019 or newer for 2026 import.</p>
            </LeadForm>
          </div>
          <div id="calculator" className="rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
            <h2 className="font-display text-lg font-extrabold">Landed-cost calculator (live estimate)</h2>
            <p className="text-xs text-muted">Transparent before you commit — our #1 differentiator.</p>
            <div className="mt-4">
              {landedItems.map(([l, v]) => (
                <div key={l} className="flex justify-between border-b border-dashed border-sand-200 py-2 text-sm">
                  <span className="text-muted">{l}</span>
                  <span className="font-semibold">KSh {v.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 font-display text-lg font-bold">
                <span>Estimated total landed</span>
                <span className="text-savanna-800">{kes(total)}</span>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-muted">
              Indicative only — based on KRA CRSP valuation. Final confirmed after inspection.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="The import journey"
            lead="Total ≈ 6–10 weeks · tracked live in your account."
            action={{ href: "/track", label: "Track an order" }}
          />
          <ol className="mt-9 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {importSteps.map((s) => (
              <li key={s.n} className="flex gap-4 border-t border-sand-200 py-5">
                <span className="pt-0.5 font-display text-sm font-extrabold text-gold-600">{String(s.n).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-base font-extrabold">{s.title}</h3>
                  <p className="text-xs font-semibold text-gold-600">{s.sub}</p>
                  <p className="mt-1.5 text-sm text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  );
}
