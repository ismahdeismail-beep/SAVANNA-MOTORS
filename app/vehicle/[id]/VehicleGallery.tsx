"use client";

import { useState } from "react";

interface VehicleGalleryProps {
  images: string[];
  alt: string;
}

export function VehicleGallery({ images, alt }: VehicleGalleryProps) {
  const [index, setIndex] = useState(0);
  const list = images.length ? images : ["/cars/hero.jpg"];
  const multiple = list.length > 1;

  return (
    <div className="mb-4">
      <div className="h-80 w-full overflow-hidden rounded-2xl bg-sand-100 sm:h-96 md:h-[500px]">
        <img
          src={list[index]}
          alt={`${alt} — photo ${index + 1} of ${list.length}`}
          className="h-full w-full object-cover"
        />
      </div>
      {multiple && (
        <div className="mt-3 grid grid-cols-5 gap-2">
          {list.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`h-16 w-full overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                i === index ? "border-savanna-500 ring-2 ring-savanna-500/40" : "border-sand-200 hover:border-savanna-400"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
