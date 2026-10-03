"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, MapPin, Calendar, Terminal } from "lucide-react";

const principles = [
  {
    title: "Architecture over shortcuts",
    detail:
      "BLoC pattern decoupling business logic from UI to enforce deterministic state transitions across complex workflows.",
  },
  {
    title: "Reliable data contracts",
    detail:
      "Strict schema validation, resilient backend synchronization, and idempotent transactional flows for payments.",
  },
  {
    title: "Native-grade ergonomics",
    detail:
      "Fluid 60fps interaction models, instant visual feedback, and thoughtful offline graceful degradation.",
  },
  {
    title: "Direct accountability",
    detail:
      "Direct engineering communication with disciplined milestone delivery and transparent source code.",
  },
];

const timelineFacts = [
  {
    icon: Calendar,
    label: "Current Focus",
    value: "Founder & Lead Developer at UV WAS DEVELOPING",
  },
  {
    icon: Terminal,
    label: "Lead Work",
    value: "MOVIQ Cabs ride-hailing independent platform",
  },
  {
    icon: MapPin,
    label: "Base",
    value: "Rajkot, Gujarat, India (IST / UTC+5:30)",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36 bg-bg">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Introduction & Principles */}
          <div className="lg:col-span-7 flex flex-col">
            <SectionHeading
              label="03 / About"
              title="Engineering systems that withstand reality."
              subtitle="Practical software that balances high-performance mobile interfaces with resilient backend infrastructure."
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-secondary leading-relaxed mb-10 text-sm sm:text-base"
            >
              <p>
                I&apos;m Uday Dobariya, an independent Flutter developer and full-stack product
                builder operating under the brand <strong className="text-primary font-medium">UV WAS DEVELOPING</strong>.
                I specialize in taking early-stage and production ideas from architectural blueprints to shipped, store-ready applications.
              </p>
              <p>
                My focus centers on high-utility mobile products with real-time requirements: live
                geospatial mapping, complex state transitions, end-to-end payment gateways, and scalable cloud databases.
              </p>
            </motion.div>

            {/* Principles */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                Operating Principles
              </h3>
              <div className="space-y-4">
                {principles.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="p-4 sm:p-5 rounded-xl border border-border bg-surface hover:border-border-strong transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-accent-lime shrink-0 mt-0.5"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-secondary leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline / Facts Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-6 pb-3 border-b border-border">
                Timeline &amp; Facts
              </h3>

              <div className="space-y-6">
                {timelineFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex items-start gap-3.5">
                      <div className="p-2 rounded-lg border border-border bg-[#0B0A0C] text-accent-uv shrink-0">
                        <Icon size={15} />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono text-secondary/70 uppercase tracking-wider">
                          {fact.label}
                        </span>
                        <span className="block text-sm font-medium text-primary mt-0.5">
                          {fact.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-3 text-xs font-mono text-secondary">
                <div className="flex justify-between items-center">
                  <span>Working Model:</span>
                  <span className="text-primary font-medium">Fixed-scope &amp; Sprints</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Languages:</span>
                  <span className="text-primary font-medium">Dart, TypeScript, SQL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Availability:</span>
                  <span className="text-accent-lime font-medium">Immediate for select work</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
