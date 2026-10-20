"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/container";
import { VehicleCard } from "@/components/vehicle-card";
import { getFavorites } from "@/lib/favorites";
import { getVehicle } from "@/lib/data";

export default function FavoritesPage() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    setIds(getFavorites());
    const onChange = () => setIds(getFavorites());
    window.addEventListener("savanna:favorites-changed", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("savanna:favorites-changed", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const vehicles = ids.map((id) => getVehicle(id)).filter(Boolean) as NonNullable<ReturnType<typeof getVehicle>>[];

  return (
    <main className="bg-sand-50 text-savanna-900">
      <Container className="py-10">
        <p className="eyebrow">Saved cars</p>
        <h1 className="section-title mt-2">Your favorites</h1>
        <p className="section-lead">
          Cars you have hearted. Stored on this device — no account needed.
        </p>
      </Container>
      <Container className="pb-16">
        {vehicles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-sand-300 bg-white p-12 text-center">
            <p className="text-muted">No favorites yet. Tap the heart on any car to save it here.</p>
            <Link href="/inventory" className="btn btn-gold mt-4">Browse inventory</Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <VehicleCard key={v.id} v={v} />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
