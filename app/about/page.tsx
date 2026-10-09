import { ShieldCheck, MapPin, Clock, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { branches, EMAIL, WHATSAPP } from "@/lib/data";

export const metadata = { title: "About — Savanna Motors" };

const why = [
  "Every car KEBS-inspected & roadworthiness verified",
  "Auction sheet + inspection report on every import",
  "Transparent landed cost — no hidden fees",
  "M-Pesa deposits & bank financing",
  "Aftersales, warranty & partner garages",
  "End-to-end clearing through Port of Mombasa",
];

const stats = [
  ["1,200+", "Cars delivered"],
  ["3", "Branches"],
  ["4", "Countries served"],
  ["4.8★", "Avg. rating"],
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-savanna-950 to-savanna-600 text-white">
        <Container className="py-14">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-400">About · Branches · Contact</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">We bring the world&apos;s best cars to East Africa.</h1>
          <p className="mt-3 max-w-[62ch] text-savanna-200">
            Savanna Motors is a licensed importer and dealer. From Japan, the UK and Dubai to your doorstep —
            sourced, inspected, cleared, financed and registered.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Why buy from us</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {why.map((w) => (
                <li key={w} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-savanna-700" />{w}
                </li>
              ))}
            </ul>
          </div>
          <div className="car-ph h-64 rounded-3xl" />
        </Container>
      </section>

      <section className="bg-sand-100 py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold">Our numbers</h2>
          <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l} className="card p-5 text-center">
                <div className="font-display text-2xl font-extrabold text-savanna-800">{n}</div>
                <div className="text-xs text-muted">{l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-2xl font-extrabold">Branches</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.name} className="card p-5">
                <b className="font-display text-lg">{b.name}</b>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted"><MapPin className="h-4 w-4" />{b.addr}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted"><Clock className="h-4 w-4" />{b.hours}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted"><Phone className="h-4 w-4" />{b.phone}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid h-56 place-items-center rounded-2xl border border-dashed border-sand-400 text-sm text-muted">
            Map · branch pins · get directions
          </div>
        </Container>
      </section>

      <section className="bg-sand-100 py-12">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Contact us</h2>
            <form className="mt-5 space-y-3">
              <input className="field" placeholder="Name" />
              <input className="field" placeholder="Phone / email" />
              <input className="field" placeholder="Subject — sales / import / service / finance" />
              <textarea className="field min-h-[90px]" placeholder="Message…" />
              <button type="button" className="btn btn-gold btn-lg">Send message</button>
            </form>
          </div>
          <div className="text-sm">
            <p className="text-muted">Contact channels: WhatsApp (primary), phone, email and branch visits.</p>
            <ul className="mt-4 space-y-3">
              <li>💬 <a href={WHATSAPP} className="link">WhatsApp</a></li>
              <li>✉️ <a href={`mailto:${EMAIL}`} className="link">{EMAIL}</a></li>
              <li>📞 <a href="tel:+254700000000" className="link">+254 700 000 000</a></li>
              <li>⏰ Mon–Sat 8am–6pm</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
