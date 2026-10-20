"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Container } from "@/components/container";

/**
 * The import route, driven by scroll.
 *
 * A real car photograph (not a drawing) pans right-to-left across a dark band
 * while the section moves through the viewport, so the scene reads as a car
 * driving past. The odometer, the covered-distance line and the waypoint
 * markers are all scrubbed off one ScrollTrigger timeline.
 *
 * GSAP is imported inside the effect (never on the server), and the whole
 * timeline is built inside `gsap.matchMedia()` so `prefers-reduced-motion`
 * users get a parked, static scene instead of a scrubbed one.
 */

type Leg = {
  at: number;
  from: number;
  label: string;
  note: string;
};

const legs: Leg[] = [
  { at: 0.13, from: 0, label: "Auction floor", note: "Japan · UK · Dubai" },
  { at: 0.5, from: 0.48, label: "Port of Mombasa", note: "RoRo cleared" },
  { at: 0.87, from: 0.82, label: "Your driveway", note: "NTSA registered" },
];

const TOTAL_KM = 11485;

export function ScrollDrive() {
  const root = useRef<HTMLElement | null>(null);
  const stage = useRef<HTMLDivElement | null>(null);
  const photo = useRef<HTMLImageElement | null>(null);
  const odometer = useRef<HTMLSpanElement | null>(null);
  const legLabel = useRef<HTMLSpanElement | null>(null);
  const legNote = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let dispose: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const stageWidth = () => stage.current?.offsetWidth ?? 1200;
      const km = (p: number) => Math.round(p * TOTAL_KM).toLocaleString("en-KE");

      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: reduce)", () => {
          gsap.set(photo.current, { x: "-12%" });
          gsap.set(".sd-progress", { scaleX: 0.5 });
          if (odometer.current) odometer.current.textContent = km(0.5);
          if (legLabel.current) legLabel.current.textContent = legs[1].label;
          if (legNote.current) legNote.current.textContent = legs[1].note;
        });

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          const sync = (progress: number) => {
            if (odometer.current) odometer.current.textContent = km(progress);
            const active = [...legs].reverse().find((l) => progress >= l.from) ?? legs[0];
            if (legLabel.current && legLabel.current.textContent !== active.label) {
              legLabel.current.textContent = active.label;
              if (legNote.current) legNote.current.textContent = active.note;
            }
          };

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root.current,
              start: "top 80%",
              end: "bottom 55%",
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => sync(self.progress),
              onRefresh: (self) => sync(self.progress),
            },
          });

          // The photo pans right-to-left, so the car appears to drive past.
          tl.fromTo(photo.current, { x: "5%" }, { x: "-22%" }, 0);
          tl.fromTo(".sd-progress", { scaleX: 0 }, { scaleX: 1 }, 0);
          tl.fromTo(
            ".sd-lane",
            { backgroundPositionX: "0px" },
            { backgroundPositionX: "-960px" },
            0
          );
        });

        return () => mm.revert();
      }, root);

      dispose = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return (
    <section ref={root} id="route" className="relative isolate overflow-hidden bg-savanna-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-30%,rgba(233,162,59,0.18),transparent_62%)]"
      />

      <Container className="relative pt-14 md:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <p className="eyebrow text-gold-400">Importing · the route</p>
            <h2 className="section-title mt-2 text-white">
              11,485 km, tracked the whole way
            </h2>
            <p className="section-lead text-savanna-200/80">
              An auction floor in Japan, a RoRo deck to Mombasa, then the road home. You watch
              every leg from your account — no phone calls, no guesswork.
            </p>
          </div>

          <div className="shrink-0" aria-hidden="true">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-savanna-300/70">
              Odometer
            </div>
            <div className="mt-1 font-display text-2xl font-extrabold tabular-nums text-gold-400 md:text-3xl">
              <span ref={odometer}>0</span>
              <span className="ml-1 text-base text-savanna-300/80">km</span>
            </div>
            <div className="mt-1 text-xs">
              <span ref={legLabel} className="font-bold text-white/90">
                {legs[0].label}
              </span>
              <span ref={legNote} className="ml-1.5 text-savanna-300/70">
                {legs[0].note}
              </span>
            </div>
          </div>
        </div>
      </Container>

      <div ref={stage} className="relative mt-12 h-[170px] sm:h-[190px] md:mt-16 md:h-[214px]">
        {/* Real car photograph, panning right-to-left on scroll. */}
        <img
          ref={photo}
          src="/car.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 left-0 h-full w-[135%] object-cover object-center will-change-transform"
        />
        {/* Legibility veil + road surface. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-savanna-950/75 via-savanna-950/35 to-savanna-950/55"
        />
        <div className="sd-progress absolute inset-x-0 bottom-[58px] h-px origin-left scale-x-0 bg-gold-400" />
        <div className="absolute inset-x-0 bottom-[58px] h-px bg-white/20" />
        <div
          className="sd-lane absolute inset-x-0 bottom-[40px] h-[3px] opacity-70"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, #e9a23b 0 26px, transparent 26px 48px)" }}
        />

        {legs.map((leg) => (
          <div key={leg.label} className="absolute bottom-[6px] w-40 -translate-x-1/2 text-center" style={{ left: `${leg.at * 100}%` }}>
            <div className="mx-auto mb-1.5 h-[7px] w-[7px] rounded-full bg-gold-400 ring-4 ring-gold-400/10" />
            <div className="font-display text-[11px] font-extrabold leading-tight text-white/90 sm:text-xs">
              {leg.label}
            </div>
            <div className="text-[10px] leading-tight text-savanna-300/60">{leg.note}</div>
          </div>
        ))}
      </div>

      <Container className="relative flex flex-wrap items-center gap-x-6 gap-y-2 pb-14 pt-6 md:pb-20">
        <Link
          href="/track"
          className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition-colors hover:text-gold-300"
        >
          Track a live order
          <ArrowRight className="h-4 w-4" />
        </Link>
        <span className="text-xs text-savanna-300/60">Order numbers look like SM-2026-0142</span>
      </Container>

      <p className="sr-only">
        Vehicles travel roughly 11,485 kilometres from auction to delivery — about 11,000 km by sea
        to the Port of Mombasa and 485 km by road to Nairobi — and you can track each leg.
      </p>
    </section>
  );
}
