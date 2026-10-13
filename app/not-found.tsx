import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="bg-savanna-950 text-white">
      <Container className="py-20 md:py-28">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 max-w-[18ch] font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] md:text-6xl">
          This page has left the yard.
        </h1>
        <p className="mt-4 max-w-[52ch] text-savanna-200/85">
          The link may be old, or the car you were looking at has been sold. Browse current stock or search for it by name.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/inventory" className="btn btn-gold btn-lg px-8">Browse inventory</Link>
          <Link href="/contact" className="btn btn-lg border border-white/25 bg-white/5 px-8 text-white hover:bg-white/10">
            Ask us about it
          </Link>
        </div>
      </Container>
    </section>
  );
}
