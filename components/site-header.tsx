"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Container } from "./container";
import { PHONE, WHATSAPP } from "@/lib/data";

const nav = [
  { href: "/inventory", label: "Inventory" },
  { href: "/import", label: "Import a Car" },
  { href: "/financing", label: "Financing" },
  { href: "/sell", label: "Sell / Trade-in" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-savanna-900 text-savanna-200 text-xs">
        <Container className="flex flex-wrap items-center justify-between gap-2 py-2">
          <span className="flex items-center gap-3">
            <a href={`tel:${PHONE}`} className="flex items-center gap-1 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {PHONE}
            </a>
            <a href={WHATSAPP} className="flex items-center gap-1 hover:text-white">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </span>
          <span>🇯🇵 Japan · 🇬🇧 UK · 🇦🇪 Dubai · 📍 Nairobi · Mombasa · Eldoret</span>
        </Container>
      </div>
      <div className="border-b border-sand-300 bg-white/95 backdrop-blur">
        <Container className="flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-savanna-800 text-lg">🦒</span>
            <span className="leading-none">
              <span className="block font-display text-[17px] font-extrabold tracking-tight text-savanna-800">
                SAVANNA<span className="text-gold-400">MOTORS</span>
              </span>
              <span className="text-[9px] tracking-[0.18em] text-muted">IMPORT · FINANCE · DRIVE</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-savanna-900 lg:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-savanna-600">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link href="/account" className="btn btn-out btn-sm">Login</Link>
            <Link href="/inventory" className="btn btn-gold btn-sm">Book test drive</Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-12 w-12 place-items-center rounded-lg border border-sand-300 lg:hidden focus-inset-focus focus-ring-2 focus-ring-savanna-200"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>

        {open && (
          <div className="border-t border-sand-300 bg-white lg:hidden">
            <Container className="flex flex-col py-2">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-sand-200 py-3 text-sm font-semibold last:border-0"
                >
                  {n.label}
                </Link>
              ))}
              <div className="space-y-2 px-2">
                <Link href="/account" className="btn btn-out w-full sm:btn-sm">Login</Link>
                <Link href="/inventory" className="btn btn-gold w-full sm:btn-sm">Test drive</Link>
              </div>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
