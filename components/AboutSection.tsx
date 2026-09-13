"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  "Useful product flows",
  "Clean interfaces",
  "Reliable backend systems",
  "Real-time experiences",
  "Learning by building",
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-x-clip">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              label="03 / About"
              title={"Built with curiosity.\nShipped with intent."}
            />

            <motion.div
              className="space-y-5 text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I&apos;m Uday, an independent developer from Rajkot, India. I design and
                build mobile, web, and desktop products with Flutter, while using Node.js,
                Python, Supabase, Firebase, maps, payments, notifications, and AI services
                to turn ideas into working experiences.
              </p>
              <p>
                I care about products that actually work — not just ones that look good in a
                mockup. Every project I take on gets a genuine effort to ship something real,
                usable, and well-considered.
              </p>
            </motion.div>
          </div>

          {/* Right: values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 lg:pt-20"
          >
            <p className="text-xs font-mono tracking-[0.2em] text-secondary uppercase mb-6">
              Things I care about
            </p>
            <ul className="space-y-3">
              {values.map((value, i) => (
                <motion.li
                  key={value}
                  className="flex items-center gap-3 text-primary"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-uv flex-shrink-0" />
                  <span className="text-base">{value}</span>
                </motion.li>
              ))}
            </ul>

            {/* Location tag */}
            <motion.div
              className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-accent-uv">◎</span>
              Rajkot, Gujarat, India
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
