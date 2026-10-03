"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, X, MapPin, Sparkles } from "lucide-react";
import { Project } from "@/lib/data";
import { RegistrationMark, CropMarks } from "@/components/ui/PrintMarks";
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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="relative rounded-lg border-2 border-border bg-surface-card p-6 sm:p-8 lg:p-10 shadow-ink"
      >
        <CropMarks />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Metadata & Editorial Info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Category, Status, Number */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-xs font-mono">
              <span className="font-bold text-accent-uv tracking-wider uppercase">
                {`${project.number} // ${project.category}`}
              </span>
              <span className="text-secondary/40">•</span>
              <span className="px-2.5 py-0.5 rounded border border-border bg-surface text-primary font-bold">
                {project.status}
              </span>
            </div>

            {/* Title + Subtitle */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight [text-wrap:balance] mb-2">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="text-sm font-mono text-secondary mb-3">
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
                  className="text-xs font-mono font-medium px-2.5 py-1 rounded border border-border bg-surface text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            {project.caseStudyUrl ? (
              <Link
                href={project.caseStudyUrl}
                className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono font-bold text-xs sm:text-sm border-2 border-border bg-accent-lime text-[#121014] shadow-ink-sm hover:-translate-x-[1px] hover:-translate-y-[1px] transition-transform select-none"
              >
                <span>View case study</span>
                <ArrowUpRight size={14} />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono font-bold text-xs sm:text-sm border-2 border-border bg-surface text-primary shadow-ink-sm hover:-translate-x-[1px] hover:-translate-y-[1px] transition-transform cursor-pointer select-none"
              >
                <span>Project details</span>
                <ExternalLink size={13} className="text-secondary" />
              </button>
            )}
          </div>

          {/* Right Column: Graphic Spec / Architecture Panel */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            {isLead ? (
              <ProjectMedia
                proofNumber={project.number}
                title={project.title}
                className="w-full"
              />
            ) : project.id === "terracast" ? (
              /* TerraCast: Clean Geospatial / Weather Blueprint Panel */
              <div className="w-full rounded-md border-2 border-border bg-surface p-5 font-mono text-xs text-secondary flex flex-col justify-between min-h-[240px] shadow-ink-sm relative">
                <CropMarks />
                <div className="flex items-center justify-between pb-3 border-b-2 border-border">
                  <span className="text-primary font-bold flex items-center gap-1.5">
                    <MapPin size={13} className="text-accent-uv" /> TerraCast Geospatial
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded border border-border bg-bg">
                    v0.4 Prototype
                  </span>
                </div>
                <div className="py-4 space-y-2.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary">COORDINATES:</span>
                    <span className="text-primary font-bold">22.3039° N, 70.8022° E</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary">PROJECTION:</span>
                    <span className="text-primary font-bold">Spherical Web Mercator</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary">RENDER ENGINE:</span>
                    <span className="text-primary font-bold">Flutter CustomPainter 60fps</span>
                  </div>
                </div>
                <div className="pt-3 border-t-2 border-border flex items-center justify-between text-[10px] text-secondary">
                  <span>Atmospheric Vectors</span>
                  <RegistrationMark size={14} className="text-accent-uv" />
                </div>
              </div>
            ) : (
              /* Udaya AI: Clean Conversational Architecture Panel */
              <div className="w-full rounded-md border-2 border-border bg-surface p-5 font-mono text-xs text-secondary flex flex-col justify-between min-h-[240px] shadow-ink-sm relative">
                <CropMarks />
                <div className="flex items-center justify-between pb-3 border-b-2 border-border">
                  <span className="text-primary font-bold flex items-center gap-1.5">
                    <Sparkles size={13} className="text-accent-lime" /> Udaya AI System
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded border border-border bg-bg">
                    Exploration
                  </span>
                </div>
                <div className="py-4 space-y-2.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary">INTERFACE:</span>
                    <span className="text-primary font-bold">Voice &amp; Dynamic Prompts</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary">LATENCY GOAL:</span>
                    <span className="text-primary font-bold">&lt; 350ms streaming response</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary">ARCHITECTURE:</span>
                    <span className="text-primary font-bold">State Machine &amp; Local Cache</span>
                  </div>
                </div>
                <div className="pt-3 border-t-2 border-border flex items-center justify-between text-[10px] text-secondary">
                  <span>Conversational UX</span>
                  <RegistrationMark size={14} className="text-accent-lime" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-lg border-2 border-border bg-surface p-6 sm:p-8 shadow-ink text-left"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CropMarks />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded border-2 border-border bg-bg text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-accent-uv font-bold mb-2">
                <span>{project.number}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>

              <h4 className="font-display text-2xl font-bold text-primary mb-1">
                {project.title}
              </h4>
              <p className="text-xs font-mono text-secondary mb-4">
                Status: {project.status}
              </p>

              <p className="text-secondary text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <span className="block text-xs font-mono text-secondary mb-2 font-bold">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded border border-border bg-bg text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t-2 border-border flex justify-end">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded border-2 border-border bg-surface text-xs font-mono font-bold text-primary shadow-ink-sm hover:-translate-y-0.5 transition-transform"
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
