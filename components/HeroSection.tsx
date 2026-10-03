"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56 0-.28-.01-1.01-.01-1.97-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17A10.9 10.9 0 0 1 12 6.84c.97.004 1.94.13 2.85.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.68 5.38-5.24 5.66.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.16 0 .31.21.67.8.56A11.504 11.504 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const facts = [
  { label: "Specialty", value: "Flutter · Dart" },
  { label: "Backend", value: "REST APIs · Firebase" },
  { label: "Full-stack", value: "Next.js · TypeScript" },
  { label: "Based in", value: "Rajkot, India" },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      className="relative flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 min-h-[88vh]"
      aria-label="Introduction"
    >
      <div className="page-container w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Main Top Row: Content on Left, Quiet Work Index on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              {/* Availability Tag */}
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 sm:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-xs font-sans font-medium text-secondary tracking-wide uppercase">
                  Available for select work
                </span>
              </motion.div>

              {/* Headline with natural letter/word spacing */}
              <motion.div variants={itemVariants} className="mb-6">
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-primary leading-[1.12] tracking-[-0.015em] mb-1">
                  I build Flutter apps
                </h1>
                <div className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-accent leading-[1.12] tracking-[-0.015em] relative inline-block">
                  <span>that ship.</span>
                  {/* Subtle underline drawing once */}
                  <motion.span
                    initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.45,
                      duration: shouldReduceMotion ? 0 : 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-[2px] bg-accent origin-left"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

              {/* Supporting Line */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed font-sans mb-8 sm:mb-10"
              >
                Flutter developer and full-stack product builder — from architecture to
                production, independently.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4">
                <LinkButton
                  href="#work"
                  variant="primary"
                  size="md"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View my work
                </LinkButton>
                <LinkButton
                  href="https://github.com/udaydobariya202-sys"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  <GitHubIcon size={15} />
                  <span>GitHub</span>
                </LinkButton>
                <LinkButton
                  href="https://linkedin.com/in/uday-dobariya"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  <LinkedInIcon size={15} />
                  <span>LinkedIn</span>
                </LinkButton>
              </motion.div>
            </div>

            {/* Right Column: Quiet Selected Work Index on Wide Screens */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex lg:col-span-4 flex-col justify-end items-end pb-2"
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group w-full max-w-xs p-5 rounded-xl border border-border bg-surface-card hover:border-border-strong transition-colors duration-150"
              >
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-muted mb-3">
                  <span>Selected work</span>
                  <ArrowUpRight size={13} className="text-muted group-hover:text-primary transition-colors" />
                </div>
                <div className="flex items-baseline justify-between gap-3 text-sm font-sans">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs text-muted">01</span>
                    <span className="font-medium text-primary group-hover:text-accent transition-colors">
                      MOVIQ Cabs
                    </span>
                  </div>
                  <span className="text-xs text-secondary font-sans">
                    Mobile app
                  </span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Facts Row spanning full container width to match Nav */}
          <motion.div
            variants={itemVariants}
            className="w-full pt-10 sm:pt-12 mt-12 sm:mt-16 border-t border-border"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {facts.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                    {label}
                  </span>
                  <span className="text-sm font-sans font-medium text-primary">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden sm:inline-flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1 select-none"
        aria-label="Scroll to work section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <ArrowDown size={15} />
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.a>
    </section>
  );
}
