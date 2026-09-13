"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Abstract CSS visual for each project
function ProjectVisual({ project }: { project: Project }) {
  const visuals: Record<string, React.ReactNode> = {
    rideflow: (
      <div className="relative w-full h-full overflow-hidden">
        {/* City grid lines */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full border-t border-violet-400/40"
              style={{ top: `${(i / 7) * 100}%` }}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full border-l border-violet-400/40"
              style={{ left: `${(i / 7) * 100}%` }}
            />
          ))}
        </div>
        {/* Moving dot */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.9)]"
          animate={{ x: [20, 120, 80, 180, 140], y: [20, 40, 80, 60, 120] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
          animate={{ x: [160, 80, 120, 40, 60], y: [40, 100, 60, 140, 80] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        {/* Route line */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 220 160">
          <path d="M20,20 L120,40 L80,80 L180,60 L140,120" stroke="rgb(139,92,246)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
        </svg>
        {/* Label */}
        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-violet-300/70 tracking-wider">
          MOBILITY PLATFORM
        </div>
      </div>
    ),
    terracast: (
      <div className="relative w-full h-full overflow-hidden">
        {/* Globe-like arc lines */}
        <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 220 160">
          <ellipse cx="110" cy="80" rx="80" ry="65" stroke="rgb(56,189,248)" strokeWidth="1" fill="none" />
          <ellipse cx="110" cy="80" rx="50" ry="65" stroke="rgb(56,189,248)" strokeWidth="0.75" fill="none" />
          <ellipse cx="110" cy="80" rx="20" ry="65" stroke="rgb(56,189,248)" strokeWidth="0.5" fill="none" />
          <line x1="30" y1="80" x2="190" y2="80" stroke="rgb(56,189,248)" strokeWidth="0.75" />
          <line x1="110" y1="15" x2="110" y2="145" stroke="rgb(56,189,248)" strokeWidth="0.5" />
        </svg>
        {/* Atmospheric pulse */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-sky-400/30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-400/80 shadow-[0_0_16px_rgba(56,189,248,0.8)]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-sky-300/70 tracking-wider">
          EARTH VISUALIZATION
        </div>
      </div>
    ),
    "udaya-ai": (
      <div className="relative w-full h-full overflow-hidden">
        {/* Sound wave bars */}
        <div className="absolute inset-0 flex items-center justify-center gap-0.5 px-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-full bg-violet-400/50"
              animate={{
                height: [`${20 + Math.sin(i * 0.8) * 15}%`, `${40 + Math.sin(i * 0.8 + 2) * 30}%`, `${20 + Math.sin(i * 0.8) * 15}%`],
              }}
              transition={{
                duration: 1.5 + (i % 4) * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.06,
              }}
            />
          ))}
        </div>
        {/* AI orb */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/60 to-fuchsia-600/40 border border-violet-400/30 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-violet-300/70 tracking-wider">
          AI ASSISTANT
        </div>
      </div>
    ),
  };

  return (
    <div
      className="relative w-full h-40 rounded-lg overflow-hidden bg-surface border border-border"
      style={{
        background: `radial-gradient(ellipse at 70% 30%, hsl(${project.accentHue} 70% 20% / 0.15), transparent 70%), var(--color-surface)`,
      }}
    >
      {visuals[project.id]}
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const statusColor: Record<string, string> = {
    "Concept / In development": "text-amber-400 bg-amber-400/10 border-amber-400/20",
    Prototype: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    Exploration: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        className="group relative flex flex-col bg-surface border border-border rounded-xl p-6 hover:border-accent-uv/40 transition-colors duration-300"
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-secondary tracking-widest">
            {project.number}
          </span>
          <span
            className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full border ${statusColor[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Visual preview */}
        <ProjectVisual project={project} />

        {/* Content */}
        <div className="mt-5 flex-1 flex flex-col">
          <p className="text-xs text-secondary tracking-wider uppercase font-mono mb-1.5">
            {project.category}
          </p>
          <h3 className="text-xl font-semibold text-primary mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-secondary leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded border border-border text-secondary bg-bg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-auto self-start inline-flex items-center gap-1.5 text-sm text-accent-uv font-medium group/btn hover:gap-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded"
          >
            View case study
            <ExternalLink
              size={13}
              className="opacity-60 group-hover/btn:opacity-100 transition-opacity"
            />
          </button>
        </div>
      </motion.article>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="relative z-10 w-full max-w-lg bg-surface border border-border rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 text-secondary hover:text-primary rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <p className="text-xs font-mono text-secondary tracking-widest mb-1">
                {project.number} / {project.category}
              </p>
              <h2 className="text-2xl font-semibold text-primary mb-1">{project.title}</h2>
              <span
                className={`inline-block text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full border mb-4 ${statusColor[project.status]}`}
              >
                {project.status}
              </span>
              <p className="text-secondary leading-relaxed mb-5">{project.description}</p>

              <div className="mb-6">
                <p className="text-xs text-secondary font-mono tracking-wider mb-2 uppercase">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded border border-border text-secondary bg-bg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-secondary/60 italic">
                Full case study coming soon. This project is currently{" "}
                {project.status.toLowerCase()}.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
