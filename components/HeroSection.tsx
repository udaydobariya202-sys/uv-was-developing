"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-center pt-32 pb-20 sm:pt-40 sm:pb-28 min-h-[90vh]"
      aria-label="Introduction"
    >
      <div className="page-container">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-sans font-medium text-secondary tracking-wide uppercase">
              Available for select work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="font-display text-[clamp(2.8rem,8vw,7rem)] font-semibold tracking-tight text-primary leading-[1.05] [text-wrap:balance] mb-2">
              I build Flutter apps
            </h1>
            <h2 className="font-display text-[clamp(2.8rem,8vw,7rem)] font-semibold tracking-tight text-accent leading-[1.05] [text-wrap:balance] mb-6">
              that ship.
            </h2>
          </motion.div>

          {/* SEO / Supporting line */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-secondary max-w-xl leading-relaxed font-sans mb-10"
          >
            Flutter developer and full-stack product builder — from architecture to
            production, independently.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-16">
            <LinkButton
              href="#work"
              variant="primary"
              size="lg"
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
              size="lg"
            >
              <GitHubIcon size={16} />
              GitHub
            </LinkButton>
            <LinkButton
              href="https://linkedin.com/in/uday-dobariya"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </LinkButton>
          </motion.div>

          {/* Colophon */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 pt-8 border-t border-border"
          >
            {[
              { label: "Specialty", value: "Flutter · Dart" },
              { label: "Backend", value: "Supabase · Firebase" },
              { label: "Full-stack", value: "Next.js · TypeScript" },
              { label: "Based in", value: "Rajkot, India" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                  {label}
                </span>
                <span className="text-sm font-sans font-medium text-primary">{value}</span>
              </div>
            ))}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1 select-none"
        aria-label="Scroll to work section"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <ArrowDown size={16} className="animate-bounce" />
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.a>
    </section>
  );
}
