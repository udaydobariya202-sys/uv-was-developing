"use client";

import React from "react";

interface RegistrationMarkProps {
  size?: number;
  className?: string;
  color?: string;
}

export function RegistrationMark({
  size = 20,
  className = "",
}: RegistrationMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`shrink-0 select-none pointer-events-none opacity-60 ${className}`}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="1" x2="12" y2="23" />
      <line x1="1" y1="12" x2="23" y2="12" />
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function CropMarks({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Top Left */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-border opacity-70" />
      {/* Top Right */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-border opacity-70" />
      {/* Bottom Left */}
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-border opacity-70" />
      {/* Bottom Right */}
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-border opacity-70" />
    </div>
  );
}

export function ColorSwatches({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 p-1 border border-border bg-surface text-[10px] font-mono select-none ${className}`}
      aria-hidden="true"
    >
      <span className="w-2.5 h-2.5 bg-accent-uv border border-border inline-block" title="UV Violet Spot Ink" />
      <span className="w-2.5 h-2.5 bg-accent-lime border border-border inline-block" title="Signal Lime Spot Ink" />
      <span className="w-2.5 h-2.5 bg-accent-pink border border-border inline-block" title="Hot Pink Spot Ink" />
      <span className="w-2.5 h-2.5 bg-[#121014] border border-border inline-block" title="Carbon Ink K100" />
      <span className="text-[9px] font-mono text-secondary ml-1 tracking-wider">PROOF 4/4</span>
    </div>
  );
}
