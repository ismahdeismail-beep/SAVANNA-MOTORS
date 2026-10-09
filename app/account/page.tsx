import Link from "next/link";
import { Container } from "@/components/container";
import { vehicles } from "@/lib/data";
import { kes } from "@/lib/utils";

export const metadata = { title: "My Account — Savanna Motors" };

const nav = ["Dashboard", "My imports", "Saved cars", "Finance applications", "Documents", "Profile"];

export default function AccountPage() {
  const saved = vehicles.slice(0, 2);

  return (
    <div className="py-8">
      <Container className="grid gap-8 lg:grid-cols-[240px_1fr] lg:items-start">
        <aside className="card p-4">
          <b className="text-sm">Peter Mwangi</b>
          <p className="text-xs text-muted">+254 712 345 678</p>
          <nav className="mt-4 space-y-1 text-sm">
            {nav.map((n, i) => (
              <span key={n} className={i === 0 ? "block rounded-lg bg-sand-200 px-3 py-2 font-bold text-savanna-800" : "block rounded-lg px-3 py-2 text-muted hover:bg-sand-100"}>
                {n}
              </span>
            ))}
          </nav>
        </aside>

        <div>
          <h1 className="font-display text-3xl font-extrabold">Dashboard</h1>
          <p className="text-sm text-muted">Welcome back, Peter.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[["Active imports", "1"], ["Finance applications", "1"], ["Saved cars", String(saved.length)]].map(([k, v]) => (
              <div key={k} className="card p-5">
                <div className="label">{k}</div>
                <div className="font-display text-2xl font-extrabold text-savanna-800">{v}</div>
              </div>
            ))}
          </div>

          <div className="card mt-6 p-5">
            <div className="flex items-center justify-between">
              <b>Import SM-2026-0142</b>
              <span className="badge bg-gold-400 text-gold-900">In transit · 60%</span>
            </div>
            <p className="mt-1 text-sm text-muted">2019 Toyota Harrier Z · arriving 12 Dec 2026</p>
            <div className="mt-3 h-2 w-full rounded-full bg-sand-200">
              <div className="h-2 w-3/5 rounded-full bg-savanna-700" />
            </div>
            <Link href="/track" className="btn btn-out btn-sm mt-4">Open tracker</Link>
          </div>

          <div className="card mt-6 p-5">
            <b>Finance application</b>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
              <span>KSh 2,400,000 · 48 months</span>
              <span className="badge bg-savanna-100 text-savanna-800">Pre-qualified · 13.5% p.a.</span>
            </div>
          </div>

          <h2 className="mt-8 font-display text-xl font-extrabold">Saved cars</h2>
          <div className="mt-4 space-y-3">
            {saved.map((v) => (
              <div key={v.id} className="card flex items-center gap-4 p-3">
                <img src={v.image} alt={`${v.make} ${v.model}`} className="h-14 w-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <b className="text-sm">{v.year} {v.make} {v.model}</b>
                  <div className="text-xs text-muted">{v.mileage.toLocaleString()} km · {v.city}</div>
                </div>
                <b className="text-sm text-savanna-800">{kes(v.price)}</b>
                <Link href={`/vehicle/${v.id}`} className="btn btn-out btn-sm">View</Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
