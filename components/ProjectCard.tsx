"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink, MapPin, Sparkles } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isLead = project.id === "moviq";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
        className="group relative rounded-2xl border border-border bg-surface hover:border-border-strong transition-colors p-6 sm:p-8 lg:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Meta: Number + Category + Status */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono text-secondary tracking-widest">
                {project.number}
              </span>
              <span className="text-secondary/30">{"\u2022"}</span>
              <span className="text-xs font-mono uppercase tracking-[0.16em] text-secondary">
                {project.category}
              </span>
              <span className="text-secondary/30">{"\u2022"}</span>
              <span
                className={`text-[11px] font-mono tracking-wider px-2.5 py-0.5 rounded-full border ${
                  project.status === "Independent product"
                    ? "text-accent-lime bg-accent-lime/10 border-accent-lime/20"
                    : "text-secondary bg-surface-elevated border-border"
                }`}
              >
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
            <p className="text-sm sm:text-base text-secondary leading-relaxed mb-5 max-w-xl">
              {project.description}
            </p>

            {/* Role if present */}
            {project.role && (
              <div className="flex items-center gap-2 text-xs font-mono mb-5 py-2 px-3 rounded-lg border border-border bg-[#0B0A0C] self-start">
                <span className="text-secondary/60">Role:</span>
                <span className="text-primary font-medium">{project.role}</span>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2.5 py-1 rounded border border-border text-secondary bg-[#0B0A0C]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Link / Button */}
            {project.caseStudyUrl ? (
              <Link
                href={project.caseStudyUrl}
                className="self-start inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-lime transition-colors group/cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime rounded px-1 -ml-1"
              >
                <span>View case study</span>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover/cta:translate-x-1"
                />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="self-start inline-flex items-center gap-2 text-sm font-mono text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime rounded px-1 -ml-1 cursor-pointer"
              >
                <span>Project details</span>
                <ExternalLink size={13} className="text-secondary/60" />
              </button>
            )}
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            {isLead ? (
              /* Lead Project (MOVIQ Cabs): Large Screenshot in Clean Frame */
              <div className="w-full max-w-[270px] sm:max-w-[290px] aspect-[1220/2712] rounded-[2.4rem] p-2 sm:p-2.5 bg-[#0c0c11] border-2 border-white/[0.12] shadow-xl flex flex-col justify-between">
                <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-1.5 shrink-0" />
                <div className="relative w-full flex-1 rounded-[1.8rem] overflow-hidden bg-black flex items-center justify-center">
                  {imgError ? (
                    <div className="w-full h-full bg-[#0d0d14] flex flex-col justify-between p-4 select-none">
                      <div className="w-full flex items-center justify-between text-[9px] font-mono text-secondary/40">
                        <span>9:41</span>
                        <span className="w-2 h-1 bg-secondary/40 rounded-xs" />
                      </div>
                      <div className="flex-1 w-full my-3 rounded-lg border border-border bg-white/[0.02] flex items-center justify-center">
                        <span className="text-[10px] font-mono text-secondary/50">
                          MOVIQ Cabs Home
                        </span>
                      </div>
                      <div className="w-full h-10 rounded-lg bg-surface border border-border" />
                    </div>
                  ) : (
                    <Image
                      src="/images/apps/moviq/moviq-home.webp"
                      alt="MOVIQ Cabs cab booking user app home screen."
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 240px, 280px"
                      loading="lazy"
                      onError={() => setImgError(true)}
                    />
                  )}
                </div>
                <div className="text-center pt-2 text-[10px] font-mono text-secondary/50">
                  True Aspect 1:2.22
                </div>
              </div>
            ) : project.id === "terracast" ? (
              /* TerraCast: Clean Geospatial / Weather Blueprint Frame */
              <div className="w-full max-w-sm rounded-xl border border-border bg-[#0B0A0C] p-5 font-mono text-xs text-secondary flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <span className="text-accent-lime flex items-center gap-1.5">
                    <MapPin size={13} /> TerraCast Geospatial
                  </span>
                  <span>v0.4 Prototype</span>
                </div>
                <div className="py-4 space-y-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary/60">LAYER:</span>
                    <span className="text-primary font-medium">Atmospheric Isobars</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary/60">ENGINE:</span>
                    <span className="text-primary font-medium">Flutter + Canvas 2D</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary/60">TELEMETRY:</span>
                    <span className="text-primary font-medium">Real-Time OpenWeather API</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[10px] text-secondary/60">
                  <span>Geospatial UI Visualization</span>
                  <span>Cross-Platform</span>
                </div>
              </div>
            ) : (
              /* Udaya AI: Clean Conversational Architecture Frame */
              <div className="w-full max-w-sm rounded-xl border border-border bg-[#0B0A0C] p-5 font-mono text-xs text-secondary flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <span className="text-accent-uv flex items-center gap-1.5">
                    <Sparkles size={13} /> Udaya AI Assistant
                  </span>
                  <span>Exploration</span>
                </div>
                <div className="py-4 space-y-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary/60">INTERFACE:</span>
                    <span className="text-primary font-medium">Voice UI + Dynamic Cards</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary/60">PIPELINE:</span>
                    <span className="text-primary font-medium">Streaming LLM + TTS Engine</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary/60">ARCHITECTURE:</span>
                    <span className="text-primary font-medium">State Machine &amp; Local Cache</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[10px] text-secondary/60">
                  <span>Conversational UX</span>
                  <span>Flutter App</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
              onClick={() => setModalOpen(false)}
            />

            <motion.div
              className="relative z-10 w-full max-w-lg bg-surface border border-border rounded-2xl p-7 sm:p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 text-secondary hover:text-primary rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-secondary">
                <span>{project.number}</span>
                <span>/</span>
                <span>{project.category}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-primary mb-1">
                {project.title}
              </h3>

              <div className="inline-block text-[11px] font-mono tracking-wider px-2.5 py-0.5 rounded-full border border-border bg-surface-elevated text-secondary my-3">
                {project.status}
              </div>

              <p className="text-secondary leading-relaxed text-sm mb-5">
                {project.description}
              </p>

              <div className="mb-6">
                <p className="text-xs text-secondary font-mono tracking-wider mb-2 uppercase">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded border border-border text-secondary bg-[#0B0A0C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-secondary/70 italic border-t border-border pt-4">
                Full case study coming soon as this project progresses through active development.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
