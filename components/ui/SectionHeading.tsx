"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string; // for aria-labelledby on the section
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className = "",
  id,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent-uv mb-4">
        {label}
      </p>
      <h2
        id={id}
        className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
