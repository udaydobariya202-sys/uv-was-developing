"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cpu, Server, Layers, Wrench } from "lucide-react";

const stackCategories = [
  {
    icon: Cpu,
    category: "Mobile",
    description: "Architecting cross-platform applications with native-grade performance.",
    items: [
      "Flutter & Dart",
      "BLoC State Architecture",
      "Deterministic State Machines",
      "Platform Channels",
      "Custom 2D Canvas & Animations",
      "Android Toolchains & Gradle",
    ],
  },
  {
    icon: Server,
    category: "Backend & Data",
    description: "Constructing reliable persistence, authentication, and API endpoints.",
    items: [
      "Supabase (PostgreSQL & Auth)",
      "Node.js & Express",
      "Relational Database Design",
      "RESTful API Architecture",
      "Firebase Cloud Functions",
      "Real-time Subscriptions",
    ],
  },
  {
    icon: Layers,
    category: "Integrations & APIs",
    description: "Connecting mission-critical third-party services with high reliability.",
    items: [
      "Stripe Payments & Webhooks",
      "Google Maps SDK & Routes",
      "Firebase Cloud Messaging (Push)",
      "Geospatial Coordinates & Geocoding",
      "Idempotent Transaction Handling",
      "Secure Token Workflows",
    ],
  },
  {
    icon: Wrench,
    category: "Tools & Deployment",
    description: "Disciplined engineering pipelines, testing, and continuous delivery.",
    items: [
      "Git & GitHub Workflows",
      "Postman API Validation",
      "Figma UI System Translation",
      "Render Cloud Hosting",
      "Xcode & Android Studio",
      "Store Release Pipeline",
    ],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="relative py-20 sm:py-28 lg:py-36 bg-bg">
      <div className="page-container">
        <SectionHeading
          label="04 / Stack"
          title="Technical competencies & tools."
          subtitle="A focused, production-proven stack chosen for speed, reliability, and long-term maintainability."
        />

        {/* 4 Grouped Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {stackCategories.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl border border-border bg-surface hover:border-border-strong transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border/70 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg border border-border bg-[#0B0A0C] text-accent-lime">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-display text-lg font-bold text-primary">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-secondary/60">
                      0{i + 1}
                    </span>
                  </div>

                  <p className="text-xs text-secondary mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Clean Text List */}
                  <ul className="space-y-2 text-xs font-mono">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-primary"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-uv/60 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 text-[11px] font-mono text-secondary/60">
                  Production Tested &amp; Maintained
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
