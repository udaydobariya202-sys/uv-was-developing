"use client";

import Image from "next/image";
import { RegistrationMark, CropMarks, ColorSwatches } from "@/components/ui/PrintMarks";

export interface ProjectMediaProps {
  media?: {
    src?: string;
    alt?: string;
  };
  className?: string;
  proofNumber?: string;
  title?: string;
}

export function ProjectMedia({
  media,
  className = "",
  proofNumber = "01",
  title = "MOVIQ Cabs",
}: ProjectMediaProps) {
  // If media is provided in the future, render image container cleanly
  if (media?.src) {
    return (
      <div
        className={`relative rounded-md border-2 border-border bg-surface-card overflow-hidden shadow-ink-sm ${className}`}
      >
        <CropMarks />
        <Image
          src={media.src}
          alt={media.alt || title}
          fill
          className="object-contain"
        />
      </div>
    );
  }

  // Purely typographic and graphic decorative ink panel with halftone and overprinted spot inks
  return (
    <div
      className={`relative w-full rounded-md border-2 border-border bg-surface-card bg-halftone p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-ink-sm isolate select-none min-h-[260px] sm:min-h-[300px] ${className}`}
      aria-hidden="true"
    >
      <CropMarks />

      {/* Overprinted graphic spot ink shapes */}
      <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-accent-uv/20 pointer-events-none ink-overprint -z-10" />
      <div className="absolute -bottom-8 -left-8 w-44 h-16 bg-accent-lime/25 rounded pointer-events-none ink-overprint -rotate-3 -z-10" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-border text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-accent-uv border border-border inline-block" />
          <span className="font-bold tracking-widest text-primary uppercase">
            PROOF SHEET // {proofNumber}
          </span>
        </div>
        <div className="flex items-center gap-2 text-secondary">
          <span className="text-[10px] tracking-wider uppercase">REG: CALIBRATED</span>
          <RegistrationMark size={16} className="text-accent-uv" />
        </div>
      </div>

      {/* Center Graphic Composition */}
      <div className="my-6 sm:my-8 flex flex-col items-start gap-3">
        <div className="inline-flex items-center gap-2 px-2 py-0.5 border border-border bg-surface text-[10px] font-mono text-accent-uv font-bold tracking-wider">
          <span>SPOT INK SYSTEM</span>
          <span>•</span>
          <span>UV-01 / UV-02</span>
        </div>

        <div className="relative">
          {/* Registration drift layer */}
          <span className="absolute top-0.5 left-0.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-accent-uv/30 leading-none ink-overprint -z-10">
            {title}
          </span>
          <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-primary leading-none block">
            {title}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-secondary pt-1">
          <span className="px-2 py-0.5 rounded border border-border bg-bg">Architecture: BLoC</span>
          <span className="px-2 py-0.5 rounded border border-border bg-bg">Engine: Flutter</span>
          <span className="px-2 py-0.5 rounded border border-border bg-bg">Backend: Supabase</span>
        </div>
      </div>

      {/* Bottom Process & Swatches Bar */}
      <div className="pt-3 border-t-2 border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] font-mono text-secondary">
        <div className="flex items-center gap-2">
          <ColorSwatches />
          <span className="hidden sm:inline text-secondary">100% INK DENSITY</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
          <span className="font-bold text-primary">EDITION 2026</span>
        </div>
      </div>
    </div>
  );
}
