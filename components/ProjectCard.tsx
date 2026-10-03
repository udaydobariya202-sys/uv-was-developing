"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, X, MapPin, Sparkles } from "lucide-react";
import { Project } from "@/lib/data";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { Reveal } from "@/components/ui/Reveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const isLead = project.id === "moviq";

  return (
    <>
      <Reveal delay={index * 0.08} duration={0.4} y={16}>
        <article className="rounded-xl border border-border bg-surface-card p-6 sm:p-8 lg:p-10 transition-colors duration-150 hover:border-border-strong">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Metadata & Editorial Info */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Category & Number (No status badges) */}
              <div className="flex items-center gap-2 mb-3 text-xs font-mono">
                <span className="font-semibold text-accent tracking-wider uppercase">
                  {`${project.number} // ${project.category}`}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary tracking-tight [text-wrap:balance] mb-3">
                {project.title}
              </h3>

              {/* One-Line Description */}
              <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {project.description}
              </p>

              {/* Meta Row: Role & Platform */}
              {(project.role || project.platform) && (
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-border mb-6">
                  {project.role && (
                    <div>
                      <span className="block text-[10px] font-mono text-muted uppercase tracking-wider mb-0.5">
                        Role
                      </span>
                      <span className="text-xs sm:text-sm font-sans font-medium text-primary">
                        {project.role}
                      </span>
                    </div>
                  )}
                  {project.platform && (
                    <div>
                      <span className="block text-[10px] font-mono text-muted uppercase tracking-wider mb-0.5">
                        Platform
                      </span>
                      <span className="text-xs sm:text-sm font-sans font-medium text-primary">
                        {project.platform}
                      </span>
                    </div>
                  )}
                </div>
              )}

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

              {/* Actions: One link, no Google Play button */}
              <div>
                {project.caseStudyUrl ? (
                  <Link
                    href={project.caseStudyUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-medium text-sm bg-primary text-bg hover:bg-[#2c2a32] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-150 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span>View case study</span>
                    <ArrowUpRight size={15} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-medium text-sm border border-border-strong text-primary bg-transparent hover:bg-surface hover:border-primary hover:-translate-y-[1px] active:translate-y-0 transition-all duration-150 ease-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span>Project details</span>
                    <ExternalLink size={14} className="text-secondary" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Architectural Blueprint / Abstract Panel */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              {isLead ? (
                <ProjectMedia title={project.title} className="w-full" />
              ) : project.id === "terracast" ? (
                /* TerraCast: Clean Geospatial Blueprint Panel */
                <div className="w-full rounded-xl border border-border bg-surface p-6 font-mono text-xs text-secondary flex flex-col justify-between min-h-[240px]">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-primary font-medium flex items-center gap-1.5 font-sans">
                      <MapPin size={14} className="text-accent" /> TerraCast Geospatial
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded border border-border bg-bg text-secondary">
                      Specification
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
                      <span className="text-muted">GRAPHICS ENGINE:</span>
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
                      Specification
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
                    <span className="font-mono text-accent">Real-Time</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </Reveal>

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

              <h4 className="font-display text-2xl font-semibold text-primary mb-3">
                {project.title}
              </h4>

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
