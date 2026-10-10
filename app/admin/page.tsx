import Link from "next/link"
import { Container } from "@/components/container"
import { createServerClient } from "@/lib/supabase"
import { vehicles, getVehicle } from "@/lib/data"

export const metadata = { title: "Admin — Savanna Motors" }

const nav = ["Overview", "Inventory", "Import Orders", "Finance Apps", "Leads / CRM", "Blog", "Settings"]

async function getKpis() {
  const supa = createServerClient()
  const { data, error } = await supa.from("kpis").select("*").limit(4).order("created_at", { ascending: false })
  if (error) return [
    ["Vehicles live", "128", "+6 this week"],
    ["Import orders", "42", "9 in transit"],
    ["Finance apps", "17", "5 pending decision"],
    ["Leads (30 days)", "214", "38% conversion"],
  ]
  return data || [
    ["Vehicles live", "128", "+6 this week"],
    ["Import orders", "42", "9 in transit"],
    ["Finance apps", "17", "5 pending decision"],
    ["Leads (30 days)", "214", "38% conversion"],
  ]
}

async function getRecentOrders() {
  const supa = createServerClient()
  const { data, error } = await supa.from("import_orders").select("*").order("created_at", { ascending: false }).limit(4)
  if (error) return [
    ["SM-2026-0142", "2019 Toyota Harrier Z", "Peter Mwangi", "In transit"],
    ["SM-2026-0139", "2021 Mazda CX-5", "Grace Otieno", "Clearing"],
    ["SM-2026-0131", "2020 Subaru Forester", "Ali Hassan", "Delivered"],
    ["SM-2026-0128", "2020 Nissan X-Trail", "Diana K.", "Inspection"],
  ]
  return data || [
    ["SM-2026-0142", "2019 Toyota Harrier Z", "Peter Mwangi", "In transit"],
    ["SM-2026-0139", "2021 Mazda CX-5", "Grace Otieno", "Clearing"],
    ["SM-2026-0131", "2020 Subaru Forester", "Ali Hassan", "Delivered"],
    ["SM-2026-0128", "2020 Nissan X-Trail", "Diana K.", "Inspection"],
  ]
}

export default function AdminPage() {
  return (
    <div className="py-8">
      <Container className="grid gap-8 lg:grid-cols-[220px_1fr] lg:items-start">
        <aside className="card p-4">
          <b className="text-sm">Savanna Admin</b>
          <nav className="mt-4 space-y-1 text-sm">
            {nav.map((n, i) => (
              <span key={n} className={i === 0 ? "block rounded-lg bg-savanna-800 px-3 py-2 font-bold text-white" : "block rounded-lg px-3 py-2 text-muted hover:bg-sand-100"}>
                {n}
              </span>
            ))}
          </nav>
        </aside>

        <div>
          <h1 className="font-display text-3xl font-extrabold">Overview</h1>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {await getKpis().then(kpis => kpis.map(([k, v, s]) => (
              <div key={k} className="card p-5">
                <div className="label">{k}</div>
                <div className="font-display text-2xl font-extrabold text-savanna-800">{v}</div>
                <div className="text-xs text-muted">{s}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 card p-5">
            <b>Recent import orders</b>
            <table className="mt-3 w-full text-left text-sm">
              <thead className="text-xs text-muted">
                <tr>
                  <th className="py-2">Order</th>
                  <th>Vehicle</th>
                  <th>Customer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {await getRecentOrders().then(orders => orders.map(([o, v, c, s]) => (
                  <tr key={o} className="border-t border-sand-200">
                    <td className="py-2 font-semibold">{o}</td>
                    <td>{v}</td>
                    <td>{c}</td>
                    <td>
                      <span className="badge bg-sand-200 text-savanna-800">{s}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="card mt-5 p-5">
              <b className="text-sm">Add vehicle</b>
              <input className="field mt-3" placeholder="Make / model" />
              <input className="field mt-2" placeholder="Year / price" />
              <button className="btn btn-green btn-md mt-2 w-full">Save vehicle</button>
            </div>
            <div className="card mt-5 p-5">
              <b className="text-sm">Update order status</b>
              <select className="field mt-3">
                <option>Inspection</option>
                <option>In transit</option>
                <option>Clearing</option>
                <option>Delivered</option>
              </select>
              <button className="btn btn-gold btn-md mt-2 w-full">Update & notify customer</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}