"use client";

import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  number?: string;
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export function SectionHeading({
  number,
  label,
  title,
  subtitle,
  className = "",
  id,
}: SectionHeadingProps) {
  return (
    <Reveal y={16} duration={0.4} className={`mb-12 sm:mb-16 ${className}`}>
      <div>
        <div className="flex items-center gap-3 mb-4">
          {number && (
            <span className="font-mono text-xs text-muted tabular-nums">{number}</span>
          )}
          <div className="flex-1 h-px bg-border" />
          <p className="text-xs font-sans tracking-widest uppercase text-secondary font-medium">
            {label}
          </p>
        </div>
        <h2
          id={id}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-[1.15] tracking-[-0.015em] [text-wrap:balance]"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
