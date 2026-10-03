"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, X, MapPin, Sparkles } from "lucide-react";
import { Project } from "@/lib/data";
import { ProjectMedia } from "@/components/ui/ProjectMedia";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const isLead = project.id === "moviq";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-xl border border-border bg-surface-card p-6 sm:p-8 lg:p-10 transition-colors hover:border-border-strong"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Metadata & Editorial Info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Category, Status, Number */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-xs font-mono">
              <span className="font-semibold text-accent tracking-wider uppercase">
                {`${project.number} // ${project.category}`}
              </span>
              <span className="text-secondary/40">•</span>
              <span className="px-2.5 py-0.5 rounded-md border border-border bg-surface text-primary font-medium">
                {project.status}
              </span>
            </div>

            {/* Title + Subtitle */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary tracking-tight [text-wrap:balance] mb-2">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="text-sm font-sans text-secondary mb-3">
                {project.subtitle}
              </p>
            )}

            {/* Description */}
            <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-md border border-border bg-surface text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            {project.caseStudyUrl ? (
              <Link
                href={project.caseStudyUrl}
                className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-medium text-sm bg-primary text-bg hover:bg-[#2c2a32] transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>View case study</span>
                <ArrowUpRight size={15} />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-medium text-sm border border-border-strong text-primary bg-transparent hover:bg-surface transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Project details</span>
                <ExternalLink size={14} className="text-secondary" />
              </button>
            )}
          </div>

          {/* Right Column: Graphic Spec / Architecture Panel */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            {isLead ? (
              <ProjectMedia
                title={project.title}
                className="w-full"
              />
            ) : project.id === "terracast" ? (
              /* TerraCast: Clean Geospatial / Weather Blueprint Panel */
              <div className="w-full rounded-xl border border-border bg-surface p-6 font-mono text-xs text-secondary flex flex-col justify-between min-h-[240px]">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-primary font-medium flex items-center gap-1.5 font-sans">
                    <MapPin size={14} className="text-accent" /> TerraCast Geospatial
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded border border-border bg-bg text-secondary">
                    v0.4 Prototype
                  </span>
                </div>
                <div className="py-4 space-y-2.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted">COORDINATES:</span>
                    <span className="text-primary font-medium">22.3039° N, 70.8022° E</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted">PROJECTION:</span>
                    <span className="text-primary font-medium">Spherical Web Mercator</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted">RENDER ENGINE:</span>
                    <span className="text-primary font-medium">Flutter CustomPainter 60fps</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted">
                  <span>Atmospheric Vectors</span>
                  <span className="font-mono text-accent">60 FPS</span>
                </div>
              </div>
            ) : (
              /* Udaya AI: Clean Conversational Architecture Panel */
              <div className="w-full rounded-xl border border-border bg-surface p-6 font-mono text-xs text-secondary flex flex-col justify-between min-h-[240px]">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-primary font-medium flex items-center gap-1.5 font-sans">
                    <Sparkles size={14} className="text-accent" /> Udaya AI System
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded border border-border bg-bg text-secondary">
                    Exploration
                  </span>
                </div>
                <div className="py-4 space-y-2.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted">INTERFACE:</span>
                    <span className="text-primary font-medium">Voice &amp; Dynamic Prompts</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted">LATENCY GOAL:</span>
                    <span className="text-primary font-medium">&lt; 350ms streaming response</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted">ARCHITECTURE:</span>
                    <span className="text-primary font-medium">State Machine &amp; Local Cache</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted">
                  <span>Conversational UX</span>
                  <span className="font-mono text-accent">Active State</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.article>

      {/* Details Modal for Non-Lead Projects */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-xl border border-border bg-surface-card p-6 sm:p-8 text-left shadow-lg"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-lg border border-border bg-surface text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold mb-2">
                <span>{project.number}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>

              <h4 className="font-display text-2xl font-semibold text-primary mb-1">
                {project.title}
              </h4>
              <p className="text-xs font-mono text-secondary mb-4">
                Status: {project.status}
              </p>

              <p className="text-secondary text-sm leading-relaxed mb-6 font-sans">
                {project.description}
              </p>

              <div className="mb-6">
                <span className="block text-xs font-sans text-secondary mb-2 font-medium">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md border border-border bg-surface text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border flex justify-end">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-border-strong bg-transparent text-xs font-sans font-medium text-primary hover:bg-surface transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
