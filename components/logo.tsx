import { cn } from "@/lib/utils";

/**
 * The Savanna Motors mark: a flat-topped umbrella acacia in Acacia gold on a
 * Savanna-green badge, with a hairline of road under the trunk. No initials,
 * no car silhouette — the tree is the one symbol that says "savanna" on its
 * own, and it belongs to no other brand.
 *
 * Deliberately flat, two-colour and inline so it costs no network request and
 * stays crisp at 16 px (favicon) through to a signboard.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-10 w-10 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="20" cy="20" r="19.5" fill="#1b4332" />
      <path
        d="M8.6 19.2C10.2 14.4 12.8 11.4 16.4 11.2L23.6 11.2C27.2 11.4 29.8 14.4 31.4 19.2C28.4 18 24.4 17.6 20 17.6C15.6 17.6 11.6 18 8.6 19.2Z"
        fill="#e9a23b"
      />
      <path d="M20 16.6V30" stroke="#e9a23b" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M20 25L14.8 18.7M20 25L25.2 18.7"
        fill="none"
        stroke="#e9a23b"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9.4 30C14 29.3 26 29.3 30.6 30"
        fill="none"
        stroke="#e9a23b"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

type Tone = "light" | "dark";

/**
 * Full lockup: mark + wordmark + tagline. `tone` only restyles the wordmark —
 * the mark stays Savanna green / Acacia gold everywhere, so it is never
 * re-coloured to fit a background.
 */
export function Logo({ tone = "light", className }: { tone?: Tone; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-[17px] font-extrabold tracking-tight",
            tone === "dark" ? "text-white" : "text-savanna-800"
          )}
        >
          SAVANNA<span className={tone === "dark" ? "text-gold-400" : "text-gold-500"}>MOTORS</span>
        </span>
        <span
          className={cn(
            "block text-[9px] tracking-[0.18em]",
            tone === "dark" ? "text-savanna-300/70" : "text-muted"
          )}
        >
          IMPORT · FINANCE · DRIVE
        </span>
      </span>
    </span>
  );
}
