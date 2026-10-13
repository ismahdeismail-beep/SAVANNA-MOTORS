import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE } from "@/lib/data";

/**
 * Mobile-only sticky action bar: the two things people actually do on a
 * phone — browse stock, or call. Sits above the safe area; the layout
 * reserves matching padding so it never covers the footer.
 */
export function BottomCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-white/90 backdrop-blur-xl px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 md:hidden">
      <div className="flex gap-3">
        <Link href="/inventory" className="btn btn-gold flex-1">
          Browse inventory
        </Link>
        <a href={`tel:${PHONE}`} className="btn btn-out px-5" aria-label="Call us">
          <Phone className="h-4 w-4" /> Call
        </a>
      </div>
    </div>
  );
}
