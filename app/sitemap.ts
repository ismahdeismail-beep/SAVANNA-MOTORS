import type { MetadataRoute } from "next";
import { vehicles } from "@/lib/data";

const BASE = "https://savannamotors.co.ke";

const pages = [
  "",
  "/inventory",
  "/import",
  "/financing",
  "/sell",
  "/guides",
  "/about",
  "/contact",
  "/track",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map((p) => ({ url: `${BASE}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 })),
    ...vehicles.map((v) => ({ url: `${BASE}/vehicle/${v.id}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.6 })),
  ];
}
