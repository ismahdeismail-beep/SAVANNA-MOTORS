"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type Status = "idle" | "sending" | "done" | "error";

/**
 * Shared lead-capture form: serialises every named input to JSON and posts it
 * to /api/lead. Keeps the "we never reply to a button that does nothing"
 * promise across import / sell / contact flows.
 */
export function LeadForm({
  submitLabel,
  className = "mt-5 space-y-3",
  children,
}: {
  submitLabel: string;
  className?: string;
  children: ReactNode;
}) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    // Every named input is captured; the API needs a message + a way to reply.
    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const details = Object.fromEntries(
      Object.entries(raw).filter(([k]) => k !== "message" && k !== "name")
    );
    const message =
      (raw.message || "").trim() ||
      [raw.make, raw.model, raw.year, raw.budget].filter(Boolean).join(" · ");
    const payload = {
      name: raw.name || raw.phone || raw.email || "Website lead",
      email: raw.email || undefined,
      phone: raw.phone || undefined,
      message: message || "New enquiry from the website",
      details,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        form.reset();
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
      <button type="submit" className="btn btn-green btn-lg w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : status === "done" ? "✓ Received" : submitLabel}
      </button>
      {status === "done" && (
        <p className="text-sm font-semibold text-savanna-700">Thank you — we&apos;ll get back to you the same day.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please WhatsApp us instead.</p>
      )}
    </form>
  );
}
