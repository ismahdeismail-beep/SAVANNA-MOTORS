import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function kes(n: number | null | undefined) {
  if (n == null) return "Ask price";
  return "KSh " + n.toLocaleString("en-KE");
}

export function kesShort(n: number) {
  if (n >= 1_000_000) return `KSh ${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000) return `KSh ${Math.round(n / 1_000)}k`;
  return `KSh ${n}`;
}

/** Simple monthly repayment estimate (reducing balance). */
export function monthlyPayment(price: number, depositPct: number, months: number, annualRatePct: number) {
  const principal = price * (1 - depositPct / 100);
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}
