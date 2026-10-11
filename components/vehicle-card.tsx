import Link from "next/link";
import { Fuel, Gauge, Settings2, MapPin } from "lucide-react";
import { type Vehicle, WHATSAPP } from "@/lib/data";
import { cn, kes, monthlyPayment } from "@/lib/utils";

const conditionStyle: Record<Vehicle["condition"], string> = {
  "Fresh import": "bg-gold-400 text-gold-900",
  "Locally used": "bg-savanna-100 text-savanna-800",
  "Brand new": "bg-savanna-800 text-white",
  "In transit": "bg-blue-100 text-blue-800",
};

export function VehicleCard({ v, className }: { v: Vehicle; className?: string }) {
  const monthly = v.price ? monthlyPayment(v.price, 20, 48, 13.5) : null;
  return (
    <div className={cn("card group overflow-hidden group-hover:shadow-lift", className)}>
      <Link href={`/vehicle/${v.id}`} className="block">
        <div className="relative h-40 w-full overflow-hidden bg-sand-200">
          <img src={v.image} alt={`${v.year} ${v.make} ${v.model}`} className="h-full w-full object-cover transition group-hover:scale-[1.03]" loading="lazy" />
          <span className={cn("badge absolute left-3 top-3", conditionStyle[v.condition])}>{v.condition}</span>
          {v.hot && <span className="badge absolute right-3 top-3 bg-orange-700 text-white">Hot</span>}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/vehicle/${v.id}`} className="block">
          <h3 className="font-display text-[15px] font-extrabold leading-tight">{v.year} {v.make} {v.model}</h3>
          {v.trim && <p className="text-xs text-muted mt-1">{v.trim}</p>}
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted">
            <span className="flex items-center gap-1"><Gauge className="h-3.5 w-3.5" />{v.mileage.toLocaleString()} km</span>
            <span className="flex items-center gap-1"><Fuel className="h-3.5 w-3.5" />{v.fuel}</span>
            <span className="flex items-center gap-1"><Settings2 className="h-3.5 w-3.5" />{v.transmission}</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{v.city}</span>
          </div>
          <div className="mt-3">
            <div className="font-display text-lg font-extrabold text-savanna-800">{kes(v.price)}</div>
            {monthly && <div className="text-[11px] text-muted mt-1">or {kes(Math.round(monthly))}/mo · 20% down</div>}
          </div>
        </Link>
        <div className="mt-3 flex gap-2">
          <a href={WHATSAPP} className="btn btn-green btn-sm flex-1"><span className="text-xs">💬</span> WhatsApp</a>
          <Link href={`/vehicle/${v.id}`} className="btn btn-out btn-sm flex-1">Details</Link>
        </div>
      </div>
    </div>
  );
}

function Whatsapp() {
  return <span className="text-xs">💬</span>;
}