import Link from "next/link";
import { Container } from "@/components/container";
import { VehicleCard } from "@/components/vehicle-card";
import { SearchBar } from "@/components/search-bar";
import { vehicles, bodies } from "@/lib/data";

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
    <>
      <section className="bg-savanna-950 text-white">
        <div className="relative">
          <img src="/cars/toyota-rav4-hybrid-2021.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-savanna-950 via-savanna-950/85 to-savanna-950/50" />
          <Container className="relative py-10 md:py-14">
            <nav className="text-xs text-savanna-300/80">
              <Link href="/" className="hover:text-white">Home</Link> › Inventory
              {make && <span className="mx-1">›</span>}
              {make && <span className="font-semibold text-white">{make}</span>}
            </nav>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl">Cars for sale in Kenya</h1>
            <p className="mt-2 text-sm text-savanna-200/85">{filtered.length} vehicles · fresh imports, locally used & in transit</p>
          </Container>
        </div>
      </section>

      <Container className="py-8">
        <SearchBar />

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start">
          <aside className="card hidden p-5 lg:block animate-fade-in-up">
            <h3 className="font-semibold mb-4">Filters</h3>
            <form className="space-y-5 text-sm">
              <FilterGroup title="Condition" field="condition" current={condition} options={["Fresh import", "Locally used", "Brand new", "In transit"]} />
              <FilterGroup title="Make" field="make" current={make} options={makes} />
              <FilterGroup title="Body" field="body" current={body} options={bodyTypes} />
              <FilterGroup title="City" field="city" current={city} options={cities} />
            </form>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="card py-16 px-8 text-center text-muted">
                No vehicles match your filters.
                <Link href="/inventory" className="link ml-2">Clear all</Link>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4">
                {filtered.map((v) => <VehicleCard key={v.id} v={v} />)}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

function FilterGroup({ title, field, current, options }: { title: string; field: string; current: string; options: string[] }) {
  return (
    <div>
      <h4 className="label">{title}</h4>
      <div className="mt-2 space-y-1.5">
        {options.map((o) => {
          const active = current === o;
          const href = active ? "/inventory" : `/inventory?${field}=${encodeURIComponent(o)}`;
          return (
            <Link key={o} href={href} className={active ? "block font-semibold text-savanna-700" : "block text-muted hover:text-savanna-700"}>
              {active ? "● " : "○ "}{o}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const bodyTypes = ["SUV", "Sedan", "Hatchback", "Pickup", "Van", "Hybrid / EV"];

const makes = ["Isuzu", "Mazda", "Nissan", "Subaru", "Toyota"];
const cities = ["Eldoret", "Kiambu", "Mombasa", "Nairobi", "Nakuru"];