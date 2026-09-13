"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="page-container">
        <SectionHeading
          label="05 / How I Work"
          title="From rough idea to usable product."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: i * 0.1,
              }}
            >
              {/* Connector line (desktop) */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0 -translate-y-0.5 ml-4 mr-4" style={{ width: "calc(100% - 2rem)" }} />
              )}

              <div className="relative z-10 p-6 rounded-xl border border-border bg-surface hover:border-accent-uv/30 transition-colors duration-300">
                {/* Number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full border border-accent-uv/30 bg-accent-uv/5 flex items-center justify-center text-xs font-mono text-accent-uv">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
