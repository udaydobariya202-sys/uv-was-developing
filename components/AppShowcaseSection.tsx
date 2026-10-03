"use client";

import { motion } from "framer-motion";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { LinkButton } from "@/components/ui/Button";

const tags = ["Flutter", "BLoC", "Stripe", "Firebase", "Maps"];

export function AppShowcaseSection() {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="py-20 sm:py-28 border-t border-border"
    >
      <div className="page-container">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-muted tabular-nums">01.5</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-sans tracking-widest uppercase text-secondary font-medium">
            Featured work
          </span>
        </div>

        <motion.div
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left — Case study text */}
          <div className="flex flex-col gap-6">
            {/* Category + status labels */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-md border border-border text-secondary bg-surface">
                Independent product
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-md border border-border text-secondary bg-surface">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                Android release in progress
              </span>
            </div>

            {/* Main title */}
            <div>
              <h2
                id="showcase-heading"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary leading-[1.05] mb-2"
              >
                MOVIQ Cabs
              </h2>
              <p className="text-base sm:text-lg font-sans text-secondary">
                Cab Booking User App
              </p>
            </div>

            {/* Thin divider */}
            <div className="h-px bg-border w-full" />

            {/* Description */}
            <p className="text-base font-sans text-secondary leading-relaxed max-w-lg">
              A full-stack cab booking platform built from the ground up — Flutter
              user app, driver app, and admin panel. Real-time tracking, Stripe
              payments, and a connected backend, all architected and shipped
              independently.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface border border-border text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 py-4 border-t border-border">
              {[
                { label: "Role", value: "Sole developer" },
                { label: "Stack", value: "Flutter / BLoC" },
                { label: "Platform", value: "Android" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-0.5">
                    {label}
                  </span>
                  <span className="text-sm font-sans font-medium text-primary">{value}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <LinkButton
                href="/projects/moviq"
                variant="primary"
                size="md"
              >
                View case study
              </LinkButton>
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium text-sm px-5 py-2.5 border border-border text-muted cursor-not-allowed opacity-60 select-none"
                title="Not yet available"
                aria-disabled="true"
              >
                Coming soon on Google Play
              </button>
            </div>
          </div>

          {/* Right — Abstract accent panel */}
          <div className="lg:sticky lg:top-28">
            <ProjectMedia title="MOVIQ Cabs" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
