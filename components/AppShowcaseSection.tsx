"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Layers,
  MapPin,
  CreditCard,
  Zap,
  Smartphone,
} from "lucide-react";

interface ShowcaseScreenshot {
  id: string;
  src: string;
  alt: string;
  label: string;
}

const showcaseScreenshots: ShowcaseScreenshot[] = [
  {
    id: "moviq-home",
    src: "/images/apps/moviq/moviq-home.webp",
    alt: "MOVIQ Cabs cab booking user app home screen.",
    label: "Home Screen",
  },
];

const techStack = ["Flutter", "BLoC", "Supabase", "Stripe", "Firebase"];

const proofPoints = [
  {
    icon: Layers,
    title: "BLoC State Management",
    description:
      "Deterministic state transitions governing booking flows, driver dispatch, and ride lifecycle states without UI inconsistencies.",
  },
  {
    icon: MapPin,
    title: "Live Maps & Routing",
    description:
      "Google Maps integration delivering interactive pickup pins, turn-by-turn route polylines, and real-time transit telemetry.",
  },
  {
    icon: CreditCard,
    title: "Stripe Payment Gateway",
    description:
      "Production-grade payment processing with multi-tier fare computation, pre-authorization holds, and instant receipt generation.",
  },
  {
    icon: Zap,
    title: "Supabase & Firebase Sync",
    description:
      "Low-latency cloud synchronization for live vehicle status updates, push notification dispatch, and encrypted session data.",
  },
];

export function AppShowcaseSection() {
  const [imgError, setImgError] = useState(false);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const currentScreenshot = showcaseScreenshots[activeScreenshotIndex];

  // Mouse tilt values
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    { stiffness: 200, damping: 25 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    { stiffness: 200, damping: 25 }
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    },
    [shouldReduceMotion, mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="apps"
      aria-labelledby="apps-showcase-title"
      className="relative py-20 sm:py-24 lg:py-32 overflow-x-clip bg-bg"
    >
      <div className="page-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start"
        >
          {/* Editorial Details Column */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Kicker & Status Pill */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 mb-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-secondary">
                  01 / Featured Showcase
                </span>
              </div>
              <span className="text-secondary/30">{"\u2022"}</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border bg-surface text-[11px] font-mono tracking-wider text-accent-lime">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                <span>Production project / Client work</span>
              </div>
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div variants={itemVariants} className="mb-4">
              <h2
                id="apps-showcase-title"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight [text-wrap:balance]"
              >
                MOVIQ Cabs
              </h2>
              <p className="text-lg sm:text-xl font-mono text-secondary mt-1.5">
                Cab Booking User App
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mb-6"
            >
              A production-style cab booking platform built with Flutter and
              BLoC, connected to a backend with payments, notifications, and
              maps.
            </motion.p>

            {/* Role & Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-4 px-4 sm:px-5 rounded-xl border border-border bg-surface mb-8"
            >
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-secondary/60">Role:</span>
                <span className="text-primary font-medium">
                  Flutter Developer and Full-Stack Product Builder
                </span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-border" />
              <div className="flex flex-wrap items-center gap-1.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded border border-border bg-[#0B0A0C] text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Mobile Only Device Preview */}
            <motion.div
              variants={itemVariants}
              className="lg:hidden w-full flex justify-center mb-10"
            >
              <div className="w-full max-w-[340px] rounded-2xl border border-border bg-surface p-4 sm:p-6 flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-between text-[10px] font-mono text-secondary/60 mb-4 pb-2 border-b border-border">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                    Production Build
                  </span>
                  <span>iOS & Android</span>
                </div>

                <div className="relative w-[230px] min-[380px]:w-[250px] aspect-[1220/2712] rounded-[2.3rem] p-2 bg-[#0c0c11] border-2 border-white/[0.12] shadow-xl flex flex-col">
                  <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-1.5 shrink-0" />
                  <div className="relative w-full flex-1 rounded-[1.7rem] overflow-hidden bg-black">
                    {imgError ? (
                      <div className="w-full h-full bg-[#0d0d14] flex flex-col justify-between p-4 select-none">
                        <div className="w-full flex items-center justify-between text-[9px] font-mono text-secondary/40">
                          <span>9:41</span>
                          <span className="w-2 h-1 bg-secondary/40 rounded-xs" />
                        </div>
                        <div className="flex-1 w-full my-3 rounded-lg border border-border bg-white/[0.02] flex items-center justify-center">
                          <span className="text-[10px] font-mono text-secondary/50">
                            MOVIQ Map Interface
                          </span>
                        </div>
                        <div className="w-full h-12 rounded-lg bg-surface border border-border" />
                      </div>
                    ) : (
                      <Image
                        src={currentScreenshot.src}
                        alt={currentScreenshot.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 250px, 280px"
                        loading="lazy"
                        onError={() => setImgError(true)}
                      />
                    )}
                  </div>
                </div>

                <div className="w-full mt-4 pt-2 border-t border-border flex items-center justify-between text-[10px] font-mono text-secondary/50">
                  <span>Home Screen</span>
                  <span>1220 {"\u00D7"} 2712 true scale</span>
                </div>
              </div>
            </motion.div>

            {/* Proof Points */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-secondary/70 mb-4">
                Architecture & Product Proof Points
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {proofPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="p-4 rounded-xl border border-border bg-surface hover:border-border-strong transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="p-1.5 rounded-md bg-accent-uv/10 text-accent-uv">
                          <Icon size={15} />
                        </div>
                        <h4 className="text-sm font-semibold text-primary leading-tight font-display">
                          {point.title}
                        </h4>
                      </div>
                      <p className="text-xs text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Action Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="/projects/moviq"
                className="group inline-flex items-center justify-center gap-2 rounded-lg font-semibold bg-accent-lime text-[#0B0A0C] hover:bg-accent-lime-hover text-sm px-5 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime focus-visible:ring-offset-2 focus-visible:ring-offset-bg shadow-sm shadow-accent-lime/20 cursor-pointer"
              >
                <span>View case study</span>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-medium border border-border text-secondary/60 bg-surface text-sm px-5 py-2.5 cursor-not-allowed opacity-60 select-none"
              >
                <Smartphone size={14} className="text-secondary/40" />
                <span>Google Play, coming soon</span>
              </button>
            </motion.div>
          </div>

          {/* Desktop Showcase Stage (>= 1024px) */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex lg:col-span-5 justify-center sticky top-28"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full max-w-[380px] rounded-2xl border border-border bg-surface p-6 sm:p-7 flex flex-col items-center justify-center relative select-none"
            >
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-secondary mb-5 pb-3 border-b border-border">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                  Live Build
                </span>
                <span>iOS & Android</span>
              </div>

              {/* 3D Phone Frame */}
              <motion.div
                style={{
                  rotateX: shouldReduceMotion ? 0 : rotateX,
                  rotateY: shouldReduceMotion ? 0 : rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-[270px] xl:w-[285px] aspect-[1220/2712] rounded-[2.6rem] p-2.5 bg-[#0c0c11] border-2 border-white/[0.12] shadow-2xl flex flex-col will-change-transform"
              >
                <div className="w-11 h-1 bg-white/20 rounded-full mx-auto mb-2 shrink-0" />
                <div className="absolute -left-[3px] top-[74px] w-[3px] h-7 bg-white/25 rounded-l-sm" />
                <div className="absolute -left-[3px] top-[110px] w-[3px] h-7 bg-white/25 rounded-l-sm" />
                <div className="absolute -right-[3px] top-[92px] w-[3px] h-11 bg-white/25 rounded-r-sm" />

                <div className="relative w-full flex-1 rounded-[1.9rem] overflow-hidden bg-black">
                  {imgError ? (
                    <div className="w-full h-full bg-[#0d0d14] flex flex-col justify-between p-5 select-none">
                      <div className="w-full flex items-center justify-between text-[10px] font-mono text-secondary/40">
                        <span>9:41</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-1.5 rounded-xs bg-secondary/40" />
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
                        </div>
                      </div>
                      <div className="flex-1 w-full my-4 rounded-xl border border-border bg-white/[0.02] flex items-center justify-center">
                        <span className="text-xs font-mono text-secondary/50">
                          MOVIQ Map Interface
                        </span>
                      </div>
                      <div className="w-full h-14 rounded-xl bg-surface border border-border" />
                    </div>
                  ) : (
                    <Image
                      src={currentScreenshot.src}
                      alt={currentScreenshot.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 280px, 320px"
                      loading="lazy"
                      onError={() => setImgError(true)}
                    />
                  )}
                </div>
              </motion.div>

              <div className="w-full mt-5 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-secondary/60">
                <span>Screen 01 / 01</span>
                <span>True Aspect 1:2.22</span>
              </div>

              {showcaseScreenshots.length > 1 && (
                <div
                  className="flex items-center gap-2 mt-3"
                  role="tablist"
                  aria-label="Showcase screenshots"
                >
                  {showcaseScreenshots.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={index === activeScreenshotIndex}
                      aria-label={`Show ${item.label}`}
                      onClick={() => setActiveScreenshotIndex(index)}
                      className={`px-2.5 py-1 text-[10px] font-mono rounded-md border transition-all ${
                        index === activeScreenshotIndex
                          ? "border-accent-lime bg-accent-lime/10 text-primary"
                          : "border-border text-secondary/60 hover:text-primary hover:border-border-strong"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
