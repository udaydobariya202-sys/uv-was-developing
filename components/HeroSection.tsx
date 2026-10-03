"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Clock, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

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
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            {/* Status Line */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-secondary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime" />
                </span>
                <span>
                  Currently developing:{" "}
                  <strong className="text-primary font-medium">MOVIQ Cabs</strong>
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-[clamp(2.5rem,6.8vw,5.5rem)] font-bold tracking-tight text-primary leading-[1.04] [text-wrap:balance] mb-6"
            >
              I build Flutter apps that ship.
            </motion.h1>

            {/* SEO-Accurate Line & Description */}
            <motion.div variants={itemVariants} className="space-y-3 mb-8 max-w-xl">
              <p className="text-lg sm:text-xl font-mono text-secondary font-normal tracking-tight">
                Flutter developer and full-stack product builder.
              </p>
              <p className="text-sm sm:text-base text-secondary/90 leading-relaxed">
                Turning complex client requirements into deterministic mobile apps,
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

          {/* Right Column: Compact "At a Glance" True Facts Panel */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 xl:col-span-4 w-full"
          >
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/80 text-xs font-mono text-secondary">
                <span className="uppercase tracking-[0.16em] text-accent-lime font-semibold">
                  At a Glance
                </span>
                <span className="flex items-center gap-1.5 text-secondary/70">
                  <Sparkles size={12} className="text-accent-uv" />
                  Verified Facts
                </span>
              </div>

              {/* Facts List */}
              <div className="divide-y divide-border/60 text-xs font-mono">
                {/* Location */}
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="text-secondary/70 flex items-center gap-1.5 shrink-0">
                    <MapPin size={13} className="text-accent-uv" />
                    Location
                  </span>
                  <span className="text-primary text-right font-medium">
                    Gujarat, India
                  </span>
                </div>

                {/* Timezone */}
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="text-secondary/70 flex items-center gap-1.5 shrink-0">
                    <Clock size={13} className="text-accent-uv" />
                    Timezone
                  </span>
                  <span className="text-primary text-right font-medium">
                    IST (UTC+5:30)
                  </span>
                </div>

                {/* Core Stack */}
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="text-secondary/70 flex items-center gap-1.5 shrink-0">
                    <Code2 size={13} className="text-accent-uv" />
                    Core Stack
                  </span>
                  <span className="text-primary text-right font-medium leading-relaxed">
                    Flutter · BLoC · Supabase · Stripe · Firebase
                  </span>
                </div>

                {/* Availability */}
                <div className="py-3.5 flex items-start justify-between gap-4">
                  <span className="text-secondary/70 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 size={13} className="text-accent-lime" />
                    Availability
                  </span>
                  <span className="text-accent-lime text-right font-medium">
                    Available for select work
                  </span>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-mono text-secondary/60 text-center">
                UV WAS DEVELOPING · Independent Product Builder
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <div className="page-container mt-6 flex justify-center">
        <a
          href="#apps"
          onClick={handleScroll("#apps")}
          className="inline-flex flex-col items-center gap-1.5 text-xs font-mono text-secondary/50 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime rounded-md px-2 py-1"
          aria-label="Scroll to featured work"
        >
          <span className="tracking-[0.16em] uppercase text-[10px]">
            Scroll
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
