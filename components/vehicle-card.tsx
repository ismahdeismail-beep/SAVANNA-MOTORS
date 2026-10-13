import Link from "next/link";
import { Fuel, Gauge, MessageCircle, Settings2, MapPin } from "lucide-react";
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
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-sand-200 bg-white transition-colors duration-200 hover:border-sand-300",
        className
      )}
    >
      <Link href={`/vehicle/${v.id}`} className="block">
        <div className="relative h-48 w-full overflow-hidden bg-sand-100">
          <img
            src={v.image}
            alt={`${v.year} ${v.make} ${v.model}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <span className={cn("badge absolute left-3 top-3", conditionStyle[v.condition])}>
            {v.condition}
          </span>
          {v.hot && (
            <span className="badge absolute right-3 top-3 bg-savanna-900 text-white">Hot</span>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/vehicle/${v.id}`} className="block">
          <h3 className="font-display text-base font-extrabold leading-tight tracking-tight transition-colors group-hover:text-gold-700">
            {v.year} {v.make} {v.model}
          </h3>
          {v.trim && <p className="mt-0.5 text-xs text-muted">{v.trim}</p>}

          <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted">
            <span className="flex items-center gap-1"><Gauge className="h-3.5 w-3.5" />{v.mileage.toLocaleString()} km</span>
            <span className="flex items-center gap-1"><Fuel className="h-3.5 w-3.5" />{v.fuel}</span>
            <span className="flex items-center gap-1"><Settings2 className="h-3.5 w-3.5" />{v.transmission}</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{v.city}</span>
          </p>

          <div className="mt-4 border-t border-sand-200 pt-3">
            <div className="font-display text-xl font-extrabold tracking-tight text-savanna-800">
              {kes(v.price)}
            </div>
            {monthly && (
              <div className="mt-0.5 text-[11px] text-muted">
                or {kes(Math.round(monthly))}/mo · 20% down
              </div>
            )}
          </div>
        </Link>

        <div className="mt-4 flex gap-2">
          <a href={WHATSAPP} className="btn btn-green btn-sm flex-1">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
          <Link href={`/vehicle/${v.id}`} className="btn btn-out btn-sm flex-1">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
