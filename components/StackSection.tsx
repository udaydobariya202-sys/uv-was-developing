"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stackGroups } from "@/lib/data";

export function StackSection() {
  return (
    <section id="stack" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="page-container">
        <SectionHeading
          label="04 / Stack"
          title="Tools I use to turn ideas into products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              className="p-6 rounded-xl border border-border bg-surface"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: groupIndex * 0.08,
              }}
            >
              <p className="text-xs font-mono tracking-[0.18em] uppercase text-accent-uv mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center text-sm px-3 py-1.5 rounded-lg border border-border text-primary bg-bg hover:border-accent-uv/40 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-sm text-secondary/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Comfortable across these. Continually learning.
        </motion.p>
      </div>
    </section>
  );
}
