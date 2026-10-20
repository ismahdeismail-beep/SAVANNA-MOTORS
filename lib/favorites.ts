"use client";

const KEY = "savanna:favorites";

export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function isFavorite(id: string): boolean {
  return getFavorites().includes(id);
}

export function toggleFavorite(id: string): boolean {
  const current = getFavorites();
  const next = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent("savanna:favorites-changed", { detail: next }));
  return next.includes(id);
}

export function onFavoritesChange(cb: (ids: string[]) => void): () => void {
  const handler = (e: Event) => cb((e as CustomEvent<string[]>).detail ?? getFavorites());
  window.addEventListener("savanna:favorites-changed", handler);
  window.addEventListener("storage", () => cb(getFavorites()));
  return () => {
    window.removeEventListener("savanna:favorites-changed", handler);
    window.removeEventListener("storage", () => cb(getFavorites()));
  };
}
