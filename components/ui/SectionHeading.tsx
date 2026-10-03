"use client";

import { motion } from "framer-motion";

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
    <motion.div
      className={`mb-12 sm:mb-16 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
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
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.12] [text-wrap:balance]"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
