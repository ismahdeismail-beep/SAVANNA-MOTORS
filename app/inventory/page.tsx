import Link from "next/link";
import { Container } from "@/components/container";
import { VehicleCard } from "@/components/vehicle-card";
import { vehicles, makes, bodies, cities, type Vehicle } from "@/lib/data";

type SP = Promise<Record<string, string | string[] | undefined>>;

function one(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

export const metadata = { title: "Inventory — Savanna Motors" };

export default async function InventoryPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const make = one(sp.make) ?? "";
  const body = one(sp.body) ?? "";
  const city = one(sp.city) ?? "";
  const condition = one(sp.condition) ?? "";

  const filtered = vehicles.filter(
    (v) =>
      (!make || v.make === make) &&
      (!body || v.body === body) &&
      (!city || v.city === city) &&
      (!condition || v.condition === condition)
  );

  return (
    <div className="py-8">
      <Container>
        <nav className="text-xs text-muted">
          <Link href="/" className="hover:text-savanna-700">Home</Link> › Inventory
          {make && <> › <span className="font-semibold text-savanna-800">{make}</span></>}
        </nav>

        <h1 className="mt-3 font-display text-3xl font-extrabold">Cars for sale in Kenya</h1>
        <p className="text-sm text-muted">{filtered.length} vehicles · fresh imports, locally used &amp; in transit</p>

        {/* Re-apply filter bar */}
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
          <select name="condition" defaultValue={condition} className="field">
            <option value="">Any condition</option>
            {["Fresh import", "Locally used", "Brand new", "In transit"].map((c) => <option key={c}>{c}</option>)}
          </select>
          <button className="btn btn-green btn-md">Apply filters</button>
        </form>

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
          {/* Sidebar */}
          <aside className="card hidden p-4 lg:block">
            <b className="text-sm">Filters</b>
            <div className="mt-4 space-y-5 text-sm">
              <FilterGroup title="Condition" field="condition" current={condition} options={["Fresh import", "Locally used", "Brand new", "In transit"]} />
              <FilterGroup title="Make" field="make" current={make} options={makes} />
              <FilterGroup title="Body" field="body" current={body} options={bodies} />
              <FilterGroup title="City" field="city" current={city} options={cities} />
            </div>
          </aside>

          {/* Results */}
          <div>
            {filtered.length === 0 ? (
              <div className="card grid place-items-center p-16 text-center text-muted">
                No vehicles match your filters.
                <Link href="/inventory" className="link mt-2">Clear all</Link>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((v: Vehicle) => <VehicleCard key={v.id} v={v} />)}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

function FilterGroup({
  title, field, current, options,
}: { title: string; field: string; current: string; options: string[] }) {
  return (
    <div>
      <div className="label">{title}</div>
      <div className="mt-2 space-y-1.5">
        {options.map((o) => {
          const active = current === o;
          const href = active ? "/inventory" : `/inventory?${field}=${encodeURIComponent(o)}`;
          return (
            <Link key={o} href={href} className={active ? "block font-bold text-savanna-700" : "block text-muted hover:text-savanna-700"}>
              {active ? "● " : "○ "}{o}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
