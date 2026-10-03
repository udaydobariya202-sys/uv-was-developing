"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Compass } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { LinkButton } from "@/components/ui/Button";
import { projects } from "@/lib/data";

const moviqTags = ["Flutter", "BLoC", "Stripe", "Firebase", "Maps"];

const moviqBuiltItems = [
  "Rider app",
  "Driver app",
  "Admin dashboard",
  "Backend APIs",
  "Payments",
  "Maps",
  "Notifications",
];

const secondaryProjects = projects.filter((p) => p.id !== "moviq");

export function WorkSection() {
  return (
    <section id="work" className="relative py-20 sm:py-28 lg:py-36 bg-bg border-t border-border">
      <div className="page-container">
        <SectionHeading
          number="01"
          label="Selected Work"
          title="Featured systems & applications."
          subtitle="Production mobile applications, full-stack ecosystems, and focused technical platforms built for real users."
        />

        <div className="flex flex-col gap-10">
          {/* ============================================================
              LEAD PROJECT: MOVIQ Cabs Clean Editorial Row
              ============================================================ */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-border bg-surface-card p-6 sm:p-8 lg:p-10 transition-colors hover:border-border-strong"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                {/* Meta Row: Status & Label */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-xs font-mono">
                  <span className="font-semibold text-accent tracking-wider uppercase">
                    01 // Mobility & Ride-Hailing
                  </span>
                  <span className="text-secondary/40">•</span>
                  <span className="px-2.5 py-0.5 rounded-md border border-border bg-surface text-primary font-medium">
                    Independent product
                  </span>
                  <span className="text-secondary/40">•</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-border bg-surface text-accent font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                    Android release in progress
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight [text-wrap:balance] mb-2">
                  MOVIQ Cabs
                </h3>
                <p className="text-base sm:text-lg font-sans text-secondary mb-4">
                  Cab Booking User App
                </p>

                {/* Two-Line Client-Friendly Description */}
                <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  A complete ride-hailing platform engineered from scratch for high-demand operations.
                  Delivered with smooth real-time driver tracking, secure card checkouts, and reliable passenger flows.
                </p>

                {/* "What I Built" List */}
                <div className="mb-6 pt-4 border-t border-border">
                  <span className="block text-xs font-sans text-secondary font-medium uppercase tracking-wider mb-3">
                    What I built:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
                    {moviqBuiltItems.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-sans text-primary">
                        <Check size={14} className="text-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {moviqTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md border border-border bg-surface text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <LinkButton
                    href="/projects/moviq"
                    variant="primary"
                    size="md"
                  >
                    <span>View case study</span>
                    <ArrowUpRight size={15} />
                  </LinkButton>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium text-xs sm:text-sm px-5 py-2.5 border border-border text-muted bg-surface cursor-not-allowed opacity-60 select-none"
                    title="Not yet available"
                  >
                    Coming soon on Google Play
                  </button>
                </div>
              </div>

              {/* Right Column: Abstract Accent Panel */}
              <div className="lg:col-span-5 flex justify-center items-center w-full">
                <ProjectMedia title="MOVIQ Cabs" className="w-full" />
              </div>
            </div>
          </motion.article>

          {/* ============================================================
              SECONDARY PROJECTS: Clean Architectural Rows
              ============================================================ */}
          {secondaryProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}

          {/* ============================================================
              HONEST EMPTY ROW: Next Project in Development
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-dashed border-border-strong bg-surface/50 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 rounded-lg border border-border bg-surface text-accent shrink-0">
                <Compass size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider mb-1">
                  <span>04 // In Development</span>
                  <span>•</span>
                  <span>Upcoming Project</span>
                </div>
                <h4 className="font-display text-xl sm:text-2xl font-semibold text-primary mb-1">
                  Next project in development
                </h4>
                <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed max-w-xl">
                  Currently architecting an upcoming mobile product with real-time synchronization and offline-first capabilities. Case study will be published upon release.
                </p>
              </div>
            </div>

            <div className="sm:self-center shrink-0">
              <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg border border-border bg-surface text-secondary">
                <span className="w-2 h-2 rounded-full bg-accent/70 animate-pulse" />
                Active Sprint
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-14 text-xs font-mono text-muted text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Independent production systems engineered for international client standards.
        </motion.p>
      </div>
    </section>
  );
}
