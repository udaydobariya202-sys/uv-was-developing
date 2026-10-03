"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    detail: "Clarify user flows, technical constraints, data schemas, and edge cases before writing a line of code.",
  },
  {
    number: "02",
    title: "Shape",
    detail: "Architect the BLoC state machines, database models, and API contracts into a cohesive specification.",
  },
  {
    number: "03",
    title: "Build",
    detail: "Iteratively implement features in shippable test builds, keeping business logic clean and decoupled.",
  },
  {
    number: "04",
    title: "Refine",
    detail: "Verify under poor network conditions, eliminate micro-stutter, and finalize for store compliance.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-20 sm:py-28 lg:py-36 bg-bg border-t border-border">
      <div className="page-container">
        <SectionHeading
          number="04"
          label="Process"
          title="From initial scope to verified store release."
          subtitle="A disciplined development workflow structured around predictability and rapid feedback."
        />

        {/* 4 Steps in Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-xl border border-border bg-surface-card hover:border-border-strong transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
                  <span className="font-mono text-sm font-semibold text-accent">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
                    Phase {step.number}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-border text-[10px] font-mono text-muted">
                Milestone Deliverable
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
