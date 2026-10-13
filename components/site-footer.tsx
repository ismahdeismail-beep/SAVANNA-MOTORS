import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { Container } from "./container";
import { EMAIL, PHONE } from "@/lib/data";

const cols = [
  { title: "Buy", links: [["Inventory", "/inventory"], ["Fresh imports", "/inventory?condition=Fresh+import"], ["Financing", "/financing"], ["Sell / Trade-in", "/sell"]] },
  { title: "Import", links: [["Import a Car", "/import"], ["Track my order", "/track"], ["Guides", "/guides"], ["Branches", "/about"]] },
  { title: "Company", links: [["About us", "/about"], ["Contact", "/about"], ["Admin", "/admin"], ["My account", "/account"]] },
];

export function SiteFooter() {
  return (
    <footer className="bg-savanna-950 text-savanna-200">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-extrabold text-white">SAVANNA<span className="text-gold-400">MOTORS</span></div>
          <p className="mt-2 max-w-[32ch] text-sm text-savanna-300/80">Import · Finance · Drive. Sourcing quality vehicles from Japan, the UK and Dubai for East Africa.</p>
          <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-bold">
            <span className="rounded-full bg-savanna-800 px-2.5 py-1">eCitizen</span>
            <span className="rounded-full bg-savanna-800 px-2.5 py-1">NTSA dealer</span>
            <span className="rounded-full bg-savanna-800 px-2.5 py-1">KEBS</span>
          </div>
        </div>
        <div>
          <div className="font-semibold text-white">Buy</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-savanna-300/80 hover:text-white" href="/inventory">Inventory</a></li>
            <li><a className="text-savanna-300/80 hover:text-white" href="/inventory?condition=Fresh+import">Fresh imports</a></li>
            <li><a className="text-savanna-300/80 hover:text-white" href="/financing">Financing</a></li>
            <li><a className="text-savanna-300/80 hover:text-white" href="/sell">Sell / Trade-in</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Import</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-savanna-300/80 hover:text-white" href="/import">Import a Car</a></li>
            <li><a className="text-savanna-300/80 hover:text-white" href="/track">Track my order</a></li>
            <li><a className="text-savanna-300/80 hover:text-white" href="/guides">Guides</a></li>
            <li><a className="text-savanna-300/80 hover:text-white" href="/about">Branches</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-savanna-300/80 hover:text-white" href="/about">About us</a></li>
            <li><a className="text-savanna-300/80 hover:text-white" href="/about">Contact</a></li>
            <li><a className="text-savanna-300/80 hover:text-white" href="/admin">Admin</a></li>
            <li><a className="text-savanna-300/80 hover:text-white" href="/account">My account</a></li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-wrap items-center justify-between gap-3 border-t border-savanna-900 py-5 text-xs text-savanna-400/70">
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 hover:text-white"><Phone className="h-3.5 w-3.5" /> {PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-white"><Mail className="h-3.5 w-3.5" /> {EMAIL}</a>
        </span>
        <span>© 2026 Savanna Motors EA Ltd · Privacy · Terms · Deposit & refund policy</span>
      </Container>
    </footer>
  );
}