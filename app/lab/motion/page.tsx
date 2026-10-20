"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/container";
import Link from "next/link";

/**
 * Motion lab — a scratchpad of motion effects for the Savanna Motors site.
 * Each section is labelled with its option number so you can say "keep 2, 4, 6"
 * and I will port those onto the real pages.
 *
 * Nothing here ships to production; it exists so the effects can be felt.
 */

export default function MotionLab() {
  return (
    <main className="bg-sand-50 text-savanna-900">
      <Container className="py-10">
        <p className="eyebrow">Lab · motion options</p>
        <h1 className="section-title mt-2">Motion effects, live</h1>
        <p className="section-lead">
          Scroll through. Each block is one option from the menu. Tell me which
          numbers to keep and I will wire them into the real pages.
        </p>
      </Container>

      <Effect01 />
      <Effect02 />
      <Effect03 />
      <Effect04 />
      <Effect05 />
      <Effect06 />

      <Container className="py-16 text-center">
        <Link href="/" className="btn btn-gold">Back to the site</Link>
      </Container>
    </main>
  );
}

/* ─────────────────────────── 01 · Scroll-scrub car (R→L) ─────────────────────────── */
function Effect01() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let dispose: (() => void) | undefined;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"), import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 40%", scrub: 1 },
        });
        tl.fromTo(".lab-car", { x: "8%" }, { x: "-28%" }, 0);
        tl.fromTo(".lab-progress", { scaleX: 0 }, { scaleX: 1 }, 0);
      }, ref);
      dispose = () => ctx.revert();
    })();
    return () => dispose?.();
  }, []);
  return (
    <section ref={ref} className="relative overflow-hidden bg-savanna-950 text-white">
      <Container className="relative z-10 py-10">
        <Tag n="01" name="Scroll-scrub car (right → left)" />
        <h2 className="mt-2 font-display text-2xl font-extrabold">A real car drives past as you scroll</h2>
        <p className="mt-2 max-w-[60ch] text-sm text-savanna-200/80">
          Replaces the cartoon SVG. The photograph pans right-to-left; the odometer and
          covered-distance line scrub in lockstep.
        </p>
      </Container>
      <div className="relative h-[180px] overflow-hidden">
        <img src="/car.jpg" alt="" aria-hidden className="lab-car absolute inset-y-0 left-0 h-full w-[135%] object-cover object-center will-change-transform" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-savanna-950/70 via-savanna-950/30 to-savanna-950/50" />
        <div className="lab-progress absolute inset-x-0 bottom-[40px] h-px origin-left scale-x-0 bg-gold-400" />
        <div className="absolute inset-x-0 bottom-[40px] h-px bg-white/20" />
      </div>
    </section>
  );
}

/* ─────────────────────────── 02 · Parallax hero ─────────────────────────── */
function Effect02() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let dispose: (() => void) | undefined;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"), import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.to(".lab-parallax-bg", {
          yPercent: 25,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        });
        gsap.to(".lab-parallax-fg", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      }, ref);
      dispose = () => ctx.revert();
    })();
    return () => dispose?.();
  }, []);
  return (
    <section ref={ref} className="relative overflow-hidden bg-savanna-900 text-white">
      <div className="lab-parallax-bg absolute inset-0 scale-110 bg-[url('/car.jpg')] bg-cover bg-center opacity-40" />
      <div className="lab-parallax-fg relative z-10 py-24">
        <Container>
          <Tag n="02" name="Parallax hero" />
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight">
            Depth without the gimmick
          </h2>
          <p className="mt-3 max-w-[52ch] text-savanna-200/80">
            The background drifts slower than the headline as you scroll. Subtle, elegant,
            and it survives a long scroll.
          </p>
        </Container>
      </div>
    </section>
  );
}

/* ─────────────────────────── 03 · Reveal on scroll ─────────────────────────── */
function Effect03() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let dispose: (() => void) | undefined;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"), import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".lab-reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
            }
          );
        });
      }, ref);
      dispose = () => ctx.revert();
    })();
    return () => dispose?.();
  }, []);
  return (
    <section ref={ref} className="bg-sand-100">
      <Container className="py-16">
        <Tag n="03" name="Reveal on scroll" />
        <h2 className="mt-2 font-display text-3xl font-extrabold">Sections fade and slide in</h2>
        <p className="mt-2 text-muted">Site-wide, low-amplitude. The safest way to make the page feel alive.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Sourced from Japan", "Inspected on arrival", "Registered in 7 days"].map((t) => (
            <div key={t} className="lab-reveal rounded-2xl border border-sand-200 bg-white p-6 shadow-lift">
              <div className="font-display text-lg font-extrabold">{t}</div>
              <p className="mt-2 text-sm text-muted">A card that slides up and fades in as it enters view.</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────── 04 · Horizontal scroll showcase ─────────────────────────── */
function Effect04() {
  const ref = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let dispose: (() => void) | undefined;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"), import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const panels = track.current!;
        const total = panels.scrollWidth - window.innerWidth;
        gsap.to(panels, {
          x: () => -total,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: () => "+=" + total,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }, ref);
      dispose = () => ctx.revert();
    })();
    return () => dispose?.();
  }, []);
  const items = ["Toyota Aqua", "Mazda Demio", "Nissan Note", "Subaru Forester", "Honda Fit", "Toyota Harrier"];
  return (
    <section ref={ref} className="overflow-hidden bg-savanna-950 text-white">
      <div className="py-10">
        <Container>
          <Tag n="04" name="Horizontal scroll showcase" />
          <h2 className="mt-2 font-display text-3xl font-extrabold">Inventory that scrolls sideways</h2>
          <p className="mt-2 text-savanna-200/80">Vertical scroll drives a horizontal track. Great for a vehicle showcase.</p>
        </Container>
      </div>
      <div ref={track} className="flex gap-6 px-6 pb-16">
        {items.map((name, i) => (
          <div key={name} className="w-[320px] shrink-0 rounded-2xl bg-savanna-800 p-6">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gold-400/30 to-savanna-700" />
            <div className="mt-4 font-display text-lg font-extrabold">{name}</div>
            <div className="text-sm text-savanna-300/70">KES {(1.2 + i * 0.3).toFixed(1)}M · Fresh import</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── 05 · Infinite marquee ─────────────────────────── */
function Effect05() {
  const items = ["eCitizen verified", "NTSA dealer", "KEBS compliant", "Warranty included", "M-Pesa accepted", "Trade-ins welcome", "Japan · UK · Dubai"];
  return (
    <section className="overflow-hidden bg-sand-100 py-12">
      <Container>
        <Tag n="05" name="Infinite marquee" />
        <h2 className="mt-2 font-display text-3xl font-extrabold">A seamless trust ticker</h2>
        <p className="mt-2 text-muted">Pure CSS, no JS, GPU-friendly. Great for badges, partners, branches.</p>
      </Container>
      <div className="relative mt-6 overflow-hidden">
        <div className="flex w-max gap-10 animate-[marquee_28s_linear_infinite]">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="whitespace-nowrap rounded-full bg-savanna-800 px-5 py-2 text-sm font-bold text-white">
              {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

/* ─────────────────────────── 06 · Magnetic CTAs ─────────────────────────── */
function Effect06() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const btns = root.querySelectorAll<HTMLElement>(".lab-mag");
    const handlers: Array<() => void> = [];
    btns.forEach((btn) => {
      const onMove = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      };
      const onLeave = () => { btn.style.transform = "translate(0,0)"; };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      handlers.push(() => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      });
    });
    return () => handlers.forEach((h) => h());
  }, []);
  return (
    <section ref={ref} className="bg-sand-50 py-16">
      <Container>
        <Tag n="06" name="Magnetic CTAs" />
        <h2 className="mt-2 font-display text-3xl font-extrabold">Buttons that pull toward the cursor</h2>
        <p className="mt-2 text-muted">Hover near a button and it leans toward you. Subtle, premium, zero scroll cost.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="lab-mag btn btn-gold transition-transform duration-200 ease-out">Book test drive</button>
          <button className="lab-mag btn btn-out transition-transform duration-200 ease-out">Talk to sales</button>
          <button className="lab-mag btn btn-out transition-transform duration-200 ease-out">Get financing</button>
        </div>
      </Container>
    </section>
  );
}

function Tag({ n, name }: { n: string; name: string }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-600">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-400 text-[10px] text-savanna-900">{n}</span>
      {name}
    </div>
  );
}
