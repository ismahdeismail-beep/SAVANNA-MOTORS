"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VehicleGalleryProps {
  images: string[];
  alt: string;
}

export function VehicleGallery({ images, alt }: VehicleGalleryProps) {
  const [index, setIndex] = useState(0);
  const galleryViews = ["center", "left", "right", "front", "rear"];

  return (
    <div className="relative mb-4">
      <div className="h-80 w-full overflow-hidden rounded-2xl bg-sand-100 sm:h-96 md:h-[500px]">
        <img src={images[0]} alt={`${alt} ${galleryViews[0]}`} className="h-full w-full object-cover transition-opacity duration-300" />
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {galleryViews.map((pos, i) => (
          <button
            key={pos}
            onClick={() => setIndex(i)}
            className={`relative h-16 w-full rounded-xl border-2 border-sand-200 object-cover overflow-hidden transition-all duration-200 ${
              i === 0 ? "border-savanna-500 ring-2 ring-savanna-500" : "border-sand-200 hover:border-savanna-400"
            }`}
          >
            <img src={images[0]} alt={`${alt} ${galleryViews[i]}`} style={{ objectPosition: pos }} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}