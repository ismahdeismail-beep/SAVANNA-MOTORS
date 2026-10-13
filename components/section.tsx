import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "light" | "tint" | "dark";

const tones: Record<Tone, string> = {
  light: "",
  tint: "bg-sand-50",
  dark: "bg-savanna-950 text-white",
};

/**
 * The site's only section wrapper: one vertical rhythm, three surface tones.
 * Keeps every page on the same 16/24 padding scale instead of py-10/12/16.
 */
export function Section({
  tone = "light",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cn("section", tones[tone], className)}>{children}</section>;
}

/**
 * Eyebrow + display title + optional lead, with an optional right-aligned
 * action. One heading treatment for the whole site.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  action?: { href: string; label: string };
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-4", className)}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title mt-2">{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {action && (
        <Link href={action.href} className="link-arrow group">
          {action.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
