"use client";

import Image from "next/image";

export interface ProjectMediaProps {
  media?: {
    src?: string;
    alt?: string;
  };
  className?: string;
  title?: string;
}

export function ProjectMedia({
  media,
  className = "",
  title = "MOVIQ Cabs",
}: ProjectMediaProps) {
  // If real media is passed in the future, display it
  if (media?.src) {
    return (
      <div
        className={`relative rounded-xl border border-border bg-surface overflow-hidden aspect-[4/3] ${className}`}
      >
        <Image
          src={media.src}
          alt={media.alt || title}
          fill
          className="object-contain"
        />
      </div>
    );
  }

  // Calm abstract panel — geometric, accent-colored, no device or phone shape
  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden bg-accent aspect-square sm:aspect-[4/3] ${className}`}
      aria-hidden="true"
    >
      {/* Soft geometric SVG pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Faint large circle */}
        <circle cx="320" cy="40" r="180" fill="white" fillOpacity="0.05" />
        {/* Medium ring */}
        <circle cx="80" cy="280" r="120" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        {/* Small solid circle accent */}
        <circle cx="320" cy="280" r="40" fill="white" fillOpacity="0.07" />
        {/* Thin horizontal rule */}
        <line x1="0" y1="160" x2="400" y2="160" stroke="white" strokeOpacity="0.10" strokeWidth="1" />
        {/* Vertical rule */}
        <line x1="200" y1="0" x2="200" y2="320" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        {/* Top-left small dot grid (3x3) */}
        {[40, 70, 100].map((x) =>
          [40, 70, 100].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="white" fillOpacity="0.18" />
          ))
        )}
      </svg>

      {/* Centred label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
        <span className="text-white/40 font-mono text-xs tracking-widest uppercase mb-2">
          {title}
        </span>
        <span className="text-white font-display text-xl sm:text-2xl font-semibold leading-snug [text-wrap:balance]">
          Cab Booking Platform
        </span>
      </div>
    </div>
  );
}
