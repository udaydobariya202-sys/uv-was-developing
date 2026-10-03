"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { RegistrationMark, CropMarks } from "@/components/ui/PrintMarks";
import { ProjectMedia } from "@/components/ui/ProjectMedia";

const proofPoints = [
  {
    title: "Ride Lifecycle Engine",
    description: "Deterministic state machine handling pickup, dispatch, arrival, OTP verification, and trip completion.",
  },
  {
    title: "Real-Time Map & Routing",
    description: "Smooth vehicle coordinate streaming, dynamic polyline calculations, and precise geocoding.",
  },
  {
    title: "Secure Payment Flows",
    description: "Integrated digital payment gateways, surge fare algorithms, and automated receipt generation.",
  },
  {
    title: "Push Alerts & Signals",
    description: "Instant messaging channels and background notification handlers for real-time ride status updates.",
  },
];

const tags = ["Flutter", "BLoC", "Supabase", "Stripe", "Firebase", "Maps"];

export function AppShowcaseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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

  return (
    <section id="showcase" className="relative py-20 sm:py-28 lg:py-36 bg-bg overflow-hidden isolate">
      <div className="page-container">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-8">
          <RegistrationMark size={14} className="text-accent-uv" />
          <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-secondary">
            01 / Featured Proof Sheet
          </p>
        </div>

        {/* The MOVIQ Cabs Proof Sheet */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative rounded-lg border-2 border-border bg-surface-card p-6 sm:p-10 lg:p-12 shadow-ink"
        >
          <CropMarks />

          {/* Proof Sheet Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-border text-xs font-mono text-secondary">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-bold text-accent-uv uppercase tracking-wider">
                Mobility / Ride-Hailing
              </span>
              <span className="text-secondary/40">•</span>
              <span className="px-2.5 py-0.5 rounded border border-border bg-surface text-primary font-bold">
                Independent product
              </span>
              <span className="text-secondary/40">•</span>
              <span className="px-2.5 py-0.5 rounded border border-border bg-surface text-accent-lime font-bold">
                Android release in progress
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-primary">PROOF #01</span>
              <RegistrationMark size={16} className="text-accent-uv" />
            </div>
          </div>

          {/* Main 2-Column Proof Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Typography, Details, Actions */}
            <div className="lg:col-span-6 flex flex-col">
              <motion.div variants={itemVariants} className="mb-4">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight [text-wrap:balance]">
                  MOVIQ Cabs
                </h2>
                <p className="text-base sm:text-lg font-mono text-secondary font-medium tracking-wide mt-1">
                  Cab Booking User App
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-secondary text-sm sm:text-base leading-relaxed mb-6"
              >
                A production-style cab booking platform built with Flutter and BLoC, connected to a backend with payments, notifications, and maps.
              </motion.p>

              {/* Tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded border border-border bg-surface text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* 4 Proof Points Grid */}
              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 mb-8">
                {proofPoints.map((point) => (
                  <div
                    key={point.title}
                    className="p-3.5 rounded border border-border bg-surface/60 flex flex-col"
                  >
                    <h3 className="font-display text-sm font-bold text-primary mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
                <LinkButton href="/projects/moviq" variant="primary" size="md">
                  <span>View case study</span>
                  <ArrowUpRight size={14} />
                </LinkButton>

                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center justify-center gap-2 rounded-md font-mono font-bold border-2 border-border text-secondary bg-surface text-xs sm:text-sm px-5 py-2.5 cursor-not-allowed opacity-60 select-none shadow-ink-sm"
                >
                  Coming soon on Google Play
                </button>
              </motion.div>
            </div>

            {/* Right Column: Decorative Graphic Ink Panel */}
            <motion.div variants={itemVariants} className="lg:col-span-6 w-full">
              <ProjectMedia
                proofNumber="01"
                title="MOVIQ Cabs"
                className="w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
