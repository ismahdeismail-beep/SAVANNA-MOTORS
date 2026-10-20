"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { isFavorite, toggleFavorite, onFavoritesChange } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export function FavoriteButton({ id, className }: { id: string; className?: string }) {
  const [fav, setFav] = useState(false);
  useEffect(() => {
    setFav(isFavorite(id));
    return onFavoritesChange((ids) => setFav(ids.includes(id)));
  }, [id]);
  return (
    <button
      type="button"
      aria-label={fav ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={fav}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setFav(toggleFavorite(id));
      }}
      className={cn(
        "grid h-9 w-9 place-items-center rounded-full bg-white/85 text-savanna-700 shadow-sm backdrop-blur transition-colors hover:text-gold-600",
        fav && "text-gold-600",
        className
      )}
    >
      <Heart className={cn("h-4 w-4", fav && "fill-gold-500 text-gold-500")} />
    </button>
  );
}
