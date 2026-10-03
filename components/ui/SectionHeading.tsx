"use client";

import { motion } from "framer-motion";
import { RegistrationMark } from "./PrintMarks";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
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
      className={`mb-12 sm:mb-16 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-2 mb-3">
        <RegistrationMark size={14} className="text-accent-uv" />
        <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-secondary">
          {label}
        </p>
      </div>
      <h2
        id={id}
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-[1.08] [text-wrap:balance]"
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
