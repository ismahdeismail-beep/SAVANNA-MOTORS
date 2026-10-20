import { Phone, Mail } from "lucide-react";
import { Container } from "./container";
import { LogoMark } from "./logo";
import { EMAIL, PHONE } from "@/lib/data";

const cols: { title: string; links: [string, string][] }[] = [
  { title: "Buy", links: [["Inventory", "/inventory"], ["Fresh imports", "/inventory?condition=Fresh+import"], ["Financing", "/financing"], ["Sell / Trade-in", "/sell"]] },
  { title: "Import", links: [["Import a Car", "/import"], ["Track my order", "/track"], ["Guides", "/guides"], ["Branches", "/about"]] },
  { title: "Company", links: [["About us", "/about"], ["Contact", "/contact"], ["My account", "/account"]] },
];

export function SiteFooter() {
  return (
    <footer className="bg-savanna-950 text-savanna-200">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9" />
            <div className="font-display text-lg font-extrabold text-white">SAVANNA<span className="text-gold-400">MOTORS</span></div>
          </div>
          <p className="mt-2 max-w-[32ch] text-sm text-savanna-300/80">Import · Finance · Drive. Sourcing quality vehicles from Japan, the UK and Dubai for East Africa.</p>
          <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-bold">
            <span className="rounded-full bg-savanna-800 px-2.5 py-1">eCitizen</span>
            <span className="rounded-full bg-savanna-800 px-2.5 py-1">NTSA dealer</span>
            <span className="rounded-full bg-savanna-800 px-2.5 py-1">KEBS</span>
          </div>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <div className="font-semibold text-white">{col.title}</div>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a className="text-savanna-300/80 hover:text-white" href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
