import Link from "next/link";
import { notFound } from "next/navigation";
import { Gauge, Fuel, Settings2, Car, Palette, Users, ShieldCheck, MapPin, Phone, FileText, Download } from "lucide-react";
import { Container } from "@/components/container";
import { VehicleCard } from "@/components/vehicle-card";
import { getVehicle, vehicles } from "@/lib/data";
import { kes, monthlyPayment } from "@/lib/utils";
import { VehicleGallery } from "./VehicleGallery";

type P = Promise<{ id: string }>;

export function generateStaticParams() { return vehicles.map((v) => ({ id: v.id })); }
export async function generateMetadata({ params }: { params: P }) { const { id } = await params; const v = getVehicle(id); return { title: v ? `${v.year} ${v.make} ${v.model} — Savanna Motors` : "Vehicle — Savanna Motors" }; }

export default async function VehiclePage({ params }: { params: P }) {
  const { id } = await params;
  const v = getVehicle(id);
  if (!v) notFound();

  const monthly = v.price ? monthlyPayment(v.price, 20, 48, 13.5) : null;
  const similar = vehicles.filter((x) => x.id !== v.id && x.body === v.body).slice(0, 4);
  const fallback = vehicles.filter((x) => x.id !== v.id).slice(0, 4);

  return (
    <div className="py-8">
      <Container>
        <nav className="text-xs text-muted mb-6">
          <Link href="/" className="hover:text-savanna-700">Home</Link> ›{" "}
          <Link href="/inventory" className="hover:text-savanna-700">Inventory</Link> ›{" "}
          <Link href={`/inventory?make=${v.make}`} className="hover:text-savanna-700">{v.make}</Link> ›{" "}
          <span className="font-semibold text-savanna-800">{v.model}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div>
            <VehicleGallery images={[v.image]} alt={`${v.year} ${v.make} ${v.model}`} />

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge bg-gold-400 text-gold-900">{v.condition}</span>
              <span className="badge bg-savanna-100 text-savanna-800">KEBS inspected</span>
              {v.grade && <span className="badge bg-orange-700 text-white">Auction grade {v.grade}</span>}
              <span className="badge bg-gray-200 text-gray-700">Duty paid</span>
            </div>

            <h1 className="mt-4 font-display text-2xl md:text-3xl font-extrabold">
              {v.year} {v.make} {v.model} {v.trim && <span className="text-savanna-600">· {v.trim}</span>}
            </h1>
            <p className="mt-1 text-sm text-muted">Chassis {v.chassis} · {v.city}</p>

            <div className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-base font-extrabold mb-3">Key specification</h2>
                <Spec icon={Gauge} k="Mileage" val={`${v.mileage.toLocaleString()} km`} />
                <Spec icon={Fuel} k="Fuel" val={v.fuel} />
                <Spec icon={Settings2} k="Transmission" val={v.transmission} />
                <Spec icon={Car} k="Body" val={v.body} />
                <Spec icon={Settings2} k="Drive" val={v.drive} />
                <Spec icon={Users} k="Seats" val={String(v.seats)} />
                <Spec icon={Palette} k="Colour" val={v.colour} />
              </div>
              <div>
                <h2 className="font-display text-base font-extrabold mb-3">Features</h2>
                {(v.features ?? []).map((f) => (
                  <div key={f} className="flex items-center justify-between border-b border-dashed border-sand-200 py-2 text-sm">
                    <span className="text-muted">{f}</span><span className="font-bold text-savanna-700">✓</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card mt-8 p-6">
              <div className="flex items-center gap-2 font-bold mb-2">
                <ShieldCheck className="h-5 w-5 text-savanna-700" /> Pre-shipment inspection & auction sheet
              </div>
              <p className="mt-2 text-sm text-muted">KEBS roadworthiness (QISJ) confirmed{v.grade ? ` · auction grade ${v.grade}` : ""} · no accident history.</p>
              <div className="mt-4">
                {["Auction sheet", "Inspection certificate (CoC)", "Chassis & odometer photos"].map((d) => (
                  <div key={d} className="flex items-center justify-between border-b border-dashed border-sand-200 py-2.5 text-sm last:border-0">
                    <span className="flex items-center gap-2 text-muted"><FileText className="h-4 w-4 shrink-0" />{d}</span>
                    <a href="#" className="link inline-flex items-center gap-1"><Download className="h-3.5 w-3.5" /> PDF</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="card p-6 shadow-lg">
              <div className="label">Asking price</div>
              <div className="font-display text-3xl md:text-4xl font-extrabold text-savanna-800">{kes(v.price)}</div>
              <p className="text-xs text-muted mt-1">Fixed · duty paid · excludes insurance</p>

              {v.landed && (
                <div className="mt-6 rounded-2xl bg-sand-50 p-4">
                  <b className="text-xs">Landed cost breakdown</b>
                  {v.landed.map((l) => (
                    <div key={l.label} className="flex justify-between border-b border-dashed border-sand-200 py-2 text-sm last:border-0">
                      <span className="text-muted">{l.label}</span><span className="font-semibold">{kes(l.value)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-3 text-sm font-bold">
                    <span>Total</span><span className="text-savanna-800">{kes(v.price)}</span>
                  </div>
                </div>
              )}

              {monthly && (
                <div className="mt-6 rounded-2xl border border-sand-200 p-4">
                  <span className="text-xs font-semibold text-muted">Finance from</span>
                  <div className="font-display text-2xl md:text-3xl font-extrabold text-savanna-800 mt-1">
                    {kes(Math.round(monthly))}<span className="text-sm font-normal">/mo</span>
                  </div>
                  <span className="text-[11px] text-muted">20% down · 48 months · 13.5% p.a.</span>
                </div>
              )}

              <div className="mt-6 space-y-3">
                <button className="btn btn-gold btn-lg w-full">Reserve with M-Pesa deposit</button>
                <Link href="/financing" className="btn btn-out btn-lg w-full">Apply for financing</Link>
                <div className="flex gap-2">
                  <a href="tel:+254700000000" className="btn btn-out flex-1 flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <button className="btn btn-out flex-1 flex items-center justify-center gap-2">
                    <Car className="h-4 w-4" /> Test drive
                  </button>
                </div>
              </div>
              <p className="mt-4 flex items-center gap-1 text-[11px] text-muted">
                <MapPin className="h-3 w-3" /> Deposit KSh 50,000 (refundable) · balance on delivery
              </p>
            </div>
          </aside>
        </div>

        {(similar.length ? similar : fallback).length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-xl font-extrabold mb-6">Similar vehicles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {(similar.length ? similar : fallback).map((s) => <VehicleCard key={s.id} v={s} />)}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}

function Spec({ icon: Icon, k, val }: { icon: React.ComponentType<{ className?: string }>; k: string; val: string }) {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-sand-200 py-2 text-sm last:border-0">
      <span className="flex items-center gap-2 text-muted"><Icon className="h-4 w-4" />{k}</span>
      <span className="font-semibold">{val}</span>
    </div>
  );
}