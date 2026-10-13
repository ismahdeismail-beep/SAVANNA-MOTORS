import { Check, Download } from "lucide-react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export const metadata = { title: "Track your import — Savanna Motors" };

const milestones = [
  { t: "Quote approved & deposit received", d: "KSh 50,000 via M-Pesa · 02 Oct 2026", state: "done" },
  { t: "Won at USS auction (grade 4.5)", d: "Auction sheet uploaded · 09 Oct 2026", state: "done" },
  { t: "KEBS pre-shipment inspection passed", d: "CoC issued (QISJ) · 15 Oct 2026", state: "done" },
  { t: "In transit — Yokohama → Mombasa", d: "Vessel MV Horizon · ETA 29 Nov 2026", state: "active" },
  { t: "Mombasa customs clearance", d: "IDF filed · duty payable on arrival", state: "todo" },
  { t: "NTSA registration & roadworthiness", d: "—", state: "todo" },
  { t: "Delivery to you", d: "Nairobi · doorstep", state: "todo" },
] as const;

const docs = ["Pro-forma invoice", "Auction sheet", "CoC (KEBS)", "Bill of lading"];

export default function TrackPage() {
  return (
    <>
      <section className="bg-savanna-900 py-12 text-white">
        <Container>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">Import tracker</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold">Track your import</h1>
          <p className="mt-2 text-savanna-200">Enter your order number, or log in to see live shipment progress.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <input className="field w-64 md:w-80 bg-white/10 border-white/20 text-white placeholder:text-savanna-300/70" placeholder="Order no. e.g. SM-2026-0142" defaultValue="SM-2026-0142" />
            <button className="btn btn-gold btn-md">Track</button>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="card grid gap-4 p-5 sm:grid-cols-3 lg:grid-cols-5 mb-6">
            <div><div className="label">Order</div><b className="text-sm">SM-2026-0142</b></div>
            <div><div className="label">Vehicle</div><b className="text-sm">2019 Toyota Harrier Z</b></div>
            <div><div className="label">Chassis</div><b className="text-sm">ZSU60-xxxxxxx</b></div>
            <div><div className="label">Est. arrival</div><b className="text-sm">12 Dec 2026</b></div>
            <div><div className="label">Status</div><span className="badge bg-gold-400 text-gold-900">In transit</span></div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div className="card p-6">
              <h2 className="font-display text-lg font-extrabold mb-6">Progress</h2>
              <ol className="space-y-1">
                {milestones.map((m, i) => (
                  <li key={m.t} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold",
                        m.state === "done" && "bg-savanna-800 text-white",
                        m.state === "active" && "bg-gold-400 text-gold-900 shadow-[0_0_0_4px_rgba(233,162,59,0.3)]",
                        m.state === "todo" && "border border-dashed border-sand-300 text-muted"
                      )}>
                        {m.state === "done" ? <Check className="h-4 w-4" /> : i + 1}
                      </span>
                      {i < milestones.length - 1 && <span className="my-1 h-8 w-px bg-sand-300" />}
                    </div>
                    <div className="pb-2">
                      <div className={cn("text-sm font-bold", m.state === "todo" && "text-muted")}>{m.t}</div>
                      <div className="text-xs text-muted">{m.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="space-y-4">
              <div className="card p-4">
                <b className="text-sm">Live location</b>
                <div className="mt-2 grid h-40 place-items-center rounded-xl border border-dashed border-sand-300 text-xs text-muted">
                  Map · vessel position on route
                </div>
              </div>
              <div className="card p-4">
                <b className="text-sm">Documents</b>
                {docs.map((d) => (
                  <div key={d} className="flex justify-between border-b border-dashed border-sand-200 py-2 text-sm last:border-0">
                    <span>{d}</span>
                    <a href="#" className="link inline-flex items-center gap-1"><Download className="h-3.5 w-3.5" /> PDF</a>
                  </div>
                ))}
              </div>
              <div className="card p-4">
                <b className="text-sm">Payments</b>
                <div className="flex justify-between py-1 text-sm"><span>Deposit</span><b className="text-savanna-700">Paid</b></div>
                <div className="flex justify-between py-1 text-sm"><span>Duty balance</span><b>Due on arrival</b></div>
                <button className="btn btn-green btn-md mt-2 w-full">Pay balance via M-Pesa</button>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}