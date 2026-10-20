"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "./container";
import { LogoMark } from "./logo";
import { PHONE } from "@/lib/data";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/inventory", label: "Inventory" },
  { href: "/import", label: "Import a Car" },
  { href: "/financing", label: "Financing" },
  { href: "/sell", label: "Sell / Trade-in" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string) {
  if (href === "/inventory") return pathname === href || pathname.startsWith("/vehicle/");
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile panel on navigation
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-200",
        scrolled
          ? "border-sand-200 bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(18,48,31,0.45)]"
          : "border-transparent bg-white/95 backdrop-blur"
      )}
    >
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="h-10 w-10" />
          <span className="leading-none">
            <span className="block font-display text-[17px] font-extrabold tracking-tight text-savanna-800">
              SAVANNA<span className="text-gold-400">MOTORS</span>
            </span>
            <span className="text-[9px] tracking-[0.18em] text-muted">IMPORT · FINANCE · DRIVE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "relative py-1.5 text-sm font-semibold transition-colors",
                  active ? "text-savanna-900" : "text-savanna-700/80 hover:text-savanna-900"
                )}
              >
                {n.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-gold-500 transition-transform duration-200",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 text-sm font-semibold text-savanna-700 hover:text-savanna-900">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <Link href="/account" className="btn btn-out btn-sm">Login</Link>
          <Link href="/inventory" className="btn btn-gold btn-sm">Book test drive</Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-sand-300 lg:hidden focus-visible-ring"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-sand-200 bg-white lg:hidden">
          <Container className="flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "border-b border-sand-100 py-3.5 text-sm font-semibold last:border-0",
                  isActive(pathname, n.href) ? "text-gold-700" : "text-savanna-900"
                )}
              >
                {n.label}
              </Link>
            ))}
            <div className="space-y-2 px-1 pt-3 pb-2">
              <a href={`tel:${PHONE}`} className="btn btn-out w-full">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
              <Link href="/account" className="btn btn-out w-full">Login</Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
