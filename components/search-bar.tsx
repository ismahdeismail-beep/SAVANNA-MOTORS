import { Search } from "lucide-react";
import { makes, cities, bodies } from "@/lib/data";

export function SearchBar({ light = false }: { light?: boolean }) {
  return (
    <form action="/inventory" className={light ? "rounded-2xl bg-white p-3 shadow-lift" : "card p-3"}>
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
        <label className="block">
          <span className="label">Make</span>
          <select name="make" className="field mt-1">
            <option value="">Any make</option>
            {makes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="label">Body type</span>
          <select name="body" className="field mt-1">
            <option value="">Any body</option>
            {bodies.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="label">City</span>
          <select name="city" className="field mt-1">
            <option value="">Any city</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <div className="flex items-end">
          <button className="btn btn-green btn-md w-full md:w-auto"><Search className="h-4 w-4" /> Search</button>
        </div>
      </div>
    </form>
  );
}