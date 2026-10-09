import Link from "next/link";
import { Container } from "@/components/container";
import { VehicleCard } from "@/components/vehicle-card";
import { vehicles, makes, bodies, cities } from "@/lib/data";

type SP = Promise<Record<string, string | string[] | undefined>>;

function one(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

export const metadata = { title: "Buy Cars — Savanna Motors" };

export default async function BuyPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const make = one(sp.make) ?? "";
  const body = one(sp.body) ?? "";
  const city = one(sp.city) ?? "";

  const filtered = vehicles.filter(
    (v) =>
      (!make || v.make === make) &&
      (!body || v.body === body) &&
      (!city || v.city === city)
  );

  return (
    <div className="py-8">
      <Container>
        <nav className="text-xs text-muted">
          <Link href="/" className="hover:text-savanna-700">Home</Link> › Inventory
          {make && <> › <span className="font-semibold text-savanna-800">{make}</span></>}
        </nav>

        <h1 className="mt-3 font-display text-3xl font-extrabold">Cars for sale in Kenya</h1>
        <p className="text-sm text-muted">
          {filtered.length} vehicles · fresh imports, locally used & in transit
        </p>

        <form className="card mt-5 grid gap-3 p-4 md:grid-cols-5">
          <select name="make" defaultValue={make} className="field">
            <option value="">Any make</option>
            {makes.map((m) => <option key={m}>{m}</option>)}
          </select>
          <select name="body" defaultValue={body} className="field">
            <option value="">Any body</option>
            {bodies.map((b) => <option key={b}>{b}</option>)}
          </select>
          <select name="city" defaultValue={city} className="field">
            <option value="">Any city</option>
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
          <button className="btn btn-green btn-md">Apply filters</button>
        </form>

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
          {/* filters sidebar intentionally minimal for launch */}

          <div>
            {filtered.length === 0 ? (
              <div className="card grid place-items-center p-16 text-center text-muted">
                No vehicles match your filters.
                <Link href="/buy" className="link mt-2">Clear all</Link>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((v: any) => <VehicleCard key={v.id} v={v} />)}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}