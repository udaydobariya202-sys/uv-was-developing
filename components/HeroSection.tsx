"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Clock, Code2, CheckCircle2 } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { RegistrationMark, CropMarks, ColorSwatches } from "@/components/ui/PrintMarks";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const handleScroll = (selector: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-36 pb-12 overflow-x-clip bg-bg"
    >
      <div className="page-container flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center my-auto"
        >
          {/* Left Column: Headline, SEO subline, CTAs */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col relative isolate">
            {/* Overprinted decorative spot ink registration shapes behind content */}
            <div
              className="absolute -top-6 -left-6 w-32 h-10 bg-accent-lime/25 rounded -rotate-2 pointer-events-none ink-overprint -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/3 -right-4 w-24 h-24 bg-accent-uv/15 rounded-full pointer-events-none ink-overprint -z-10"
              aria-hidden="true"
            />

            {/* Status Tag */}
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md border-2 border-border bg-surface text-xs font-mono text-secondary shadow-ink-sm select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime" />
                </span>
                <span>
                  Currently developing:{" "}
                  <strong className="text-primary font-bold">MOVIQ Cabs</strong>
                </span>
              </div>
              <RegistrationMark size={18} className="text-accent-uv hidden sm:block" />
            </motion.div>

            {/* Main Headline with subtle print registration drift */}
            <motion.div variants={itemVariants} className="relative mb-6">
              {/* Drift layer */}
              <span
                className="absolute top-0.5 left-0.5 font-display text-[clamp(2.5rem,6.8vw,5.5rem)] font-bold tracking-tight text-accent-uv/30 leading-[1.04] [text-wrap:balance] select-none pointer-events-none -z-10 ink-overprint"
                aria-hidden="true"
              >
                I build Flutter apps that ship.
              </span>
              <h1 className="font-display text-[clamp(2.5rem,6.8vw,5.5rem)] font-bold tracking-tight text-primary leading-[1.04] [text-wrap:balance]">
                I build Flutter apps that ship.
              </h1>
            </motion.div>

            {/* SEO-Accurate Line & Description */}
            <motion.div variants={itemVariants} className="space-y-3 mb-8 max-w-xl">
              <p className="text-lg sm:text-xl font-mono text-secondary font-medium tracking-tight">
                Flutter developer and full-stack product builder.
              </p>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                Turning complex product requirements into deterministic mobile apps,
                scalable cloud backends, and reliable production experiences.
              </p>
            </motion.div>

            {/* Primary & Secondary Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <LinkButton
                href="#work"
                variant="primary"
                size="lg"
                onClick={handleScroll("#work")}
              >
                View my work
              </LinkButton>
              <LinkButton
                href="#contact"
                variant="outline"
                size="lg"
                onClick={handleScroll("#contact")}
              >
                Start a project
              </LinkButton>
            </motion.div>
          </div>

          {/* Right Column: Printed Colophon Card of True Facts */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 xl:col-span-4 w-full"
          >
            <div className="relative rounded-lg border-2 border-border bg-surface-card p-6 sm:p-7 shadow-ink select-none">
              <CropMarks />

              {/* Colophon Header */}
              <div className="flex items-center justify-between pb-3.5 border-b-2 border-border text-xs font-mono text-secondary">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-uv border border-border inline-block" />
                  <span className="uppercase tracking-[0.16em] text-primary font-bold">
                    Colophon / Spec
                  </span>
                </div>
                <RegistrationMark size={16} className="text-accent-uv" />
              </div>

              {/* True Facts List */}
              <div className="divide-y border-b-2 border-border divide-border text-xs font-mono">
                {/* Location */}
                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-secondary flex items-center gap-1.5 shrink-0">
                    <MapPin size={13} className="text-accent-uv" />
                    Location
                  </span>
                  <span className="text-primary text-right font-bold">
                    Gujarat, India
                  </span>
                </div>

                {/* Timezone */}
                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-secondary flex items-center gap-1.5 shrink-0">
                    <Clock size={13} className="text-accent-uv" />
                    Timezone
                  </span>
                  <span className="text-primary text-right font-bold">
                    IST (UTC+5:30)
                  </span>
                </div>

                {/* Core Stack */}
                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-secondary flex items-center gap-1.5 shrink-0">
                    <Code2 size={13} className="text-accent-uv" />
                    Core Stack
                  </span>
                  <span className="text-primary text-right font-bold leading-relaxed">
                    Flutter · BLoC · Supabase
                  </span>
                </div>

                {/* Availability */}
                <div className="py-3 flex items-start justify-between gap-4">
                  <span className="text-secondary flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 size={13} className="text-accent-lime" />
                    Status
                  </span>
                  <span className="text-accent-uv font-bold text-right">
                    Available for select work
                  </span>
                </div>
              </div>

              {/* Colophon Calibration Swatches */}
              <div className="mt-4 pt-2 flex items-center justify-between">
                <ColorSwatches />
                <span className="text-[10px] font-mono text-secondary">
                  ED. 2026 / 01
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <div className="page-container mt-6 flex justify-center">
        <a
          href="#work"
          onClick={handleScroll("#work")}
          className="inline-flex flex-col items-center gap-1.5 text-xs font-mono text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime rounded px-2 py-1 select-none"
          aria-label="Scroll to featured work"
        >
          <span className="tracking-[0.16em] uppercase text-[10px] font-bold">
            Scroll
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
