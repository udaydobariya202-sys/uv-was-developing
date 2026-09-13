"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appScreenshots, type AppScreenshot } from "@/lib/data";

// ─── Phone placeholder wireframe (used when image file doesn't exist) ─────────
function PhonePlaceholder({
  screenshot,
  isFeatured,
}: {
  screenshot: AppScreenshot;
  isFeatured: boolean;
}) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-4 select-none">
      {/* Fake status bar */}
      <div className="w-full flex items-center justify-between mb-3">
        <div className="text-[8px] font-mono opacity-40">9:41</div>
        <div className="flex gap-1">
          <div className="w-3 h-1.5 rounded-sm bg-current opacity-30" />
          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-30" />
        </div>
      </div>

      {/* Fake app content wireframe */}
      <div className="flex-1 w-full flex flex-col gap-2 overflow-hidden">
        {/* Header bar */}
        <div
          className="w-full h-8 rounded-md opacity-25"
          style={{ background: `hsl(${screenshot.accentHue} 70% 50%)` }}
        />
        {/* Content blocks */}
        <div className="flex gap-2">
          <div className="w-1/2 h-16 rounded-md bg-white/5" />
          <div className="w-1/2 h-16 rounded-md bg-white/5" />
        </div>
        <div className="w-full h-4 rounded bg-white/5" />
        <div className="w-3/4 h-4 rounded bg-white/5" />
        <div className="w-full h-20 rounded-md bg-white/5 mt-1" />
        {isFeatured && (
          <>
            <div className="w-full h-4 rounded bg-white/5" />
            <div className="w-2/3 h-4 rounded bg-white/5" />
            <div className="flex gap-2 mt-1">
              <div className="flex-1 h-10 rounded-md bg-white/5" />
              <div className="flex-1 h-10 rounded-md bg-white/5" />
            </div>
          </>
        )}
      </div>

      {/* Internal visual placeholder label */}
      <div className="mt-3 flex flex-col items-center gap-1">
        <div
          className="w-6 h-0.5 rounded-full opacity-30"
          style={{ background: `hsl(${screenshot.accentHue} 70% 70%)` }}
        />
        <p className="text-[9px] font-mono opacity-30 tracking-widest uppercase">
          Add screenshot
        </p>
      </div>
    </div>
  );
}

// ─── Phone frame mockups ────────────────────────────────────────────────────────
function PhoneFrame({
  screenshot,
  isFeatured,
  isSelected,
}: {
  screenshot: AppScreenshot;
  isFeatured: boolean;
  isSelected: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="relative w-[230px] sm:w-[250px] lg:w-[265px] h-[460px] sm:h-[500px] lg:h-[530px] flex-shrink-0 transition-all duration-500"
      style={{
        filter: isSelected
          ? `drop-shadow(0 28px 60px hsl(${screenshot.accentHue} 75% 30% / 0.5))`
          : `drop-shadow(0 14px 28px hsl(${screenshot.accentHue} 40% 15% / 0.2))`,
      }}
    >
      {/* Outer phone frame border */}
      <div
        className="absolute inset-0 rounded-[2.5rem] border-2 z-20 pointer-events-none transition-colors duration-500"
        style={{
          borderColor: isSelected
            ? `hsl(${screenshot.accentHue} 60% 48% / 0.9)`
            : `hsl(${screenshot.accentHue} 35% 25% / 0.45)`,
        }}
      />

      {/* Side buttons */}
      <div
        className="absolute -left-[3px] top-[80px] w-[3px] h-7 rounded-l-sm transition-colors duration-500"
        style={{
          background: isSelected
            ? `hsl(${screenshot.accentHue} 45% 35%)`
            : `hsl(${screenshot.accentHue} 30% 25%)`,
        }}
      />
      <div
        className="absolute -left-[3px] top-[120px] w-[3px] h-7 rounded-l-sm transition-colors duration-500"
        style={{
          background: isSelected
            ? `hsl(${screenshot.accentHue} 45% 35%)`
            : `hsl(${screenshot.accentHue} 30% 25%)`,
        }}
      />
      <div
        className="absolute -right-[3px] top-[100px] w-[3px] h-12 rounded-r-sm transition-colors duration-500"
        style={{
          background: isSelected
            ? `hsl(${screenshot.accentHue} 45% 35%)`
            : `hsl(${screenshot.accentHue} 30% 25%)`,
        }}
      />

      {/* Screen area */}
      <div
        className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden"
        style={{
          background: `linear-gradient(160deg, hsl(${screenshot.accentHue} 25% 8%) 0%, hsl(${screenshot.accentHue} 15% 5%) 100%)`,
        }}
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/70 rounded-b-2xl z-10 flex items-center justify-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-black/90" />
          <div className="w-0.5 h-3 rounded-full bg-black/60 mx-0.5" />
        </div>

        {/* Ambient glow behind screen */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
          style={{
            background: `hsl(${screenshot.accentHue} 80% 60%)`,
            opacity: isSelected ? 0.35 : 0.12,
          }}
        />

        {/* Image or fallback placeholder */}
        <div className="absolute inset-0 flex text-primary">
          {!imgError ? (
            <div className="relative w-full h-full">
              <Image
                src={screenshot.image}
                alt={screenshot.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 230px, (max-width: 1024px) 250px, 265px"
                onError={() => setImgError(true)}
                priority={isFeatured}
              />
            </div>
          ) : (
            <PhonePlaceholder screenshot={screenshot} isFeatured={isFeatured} />
          )}
        </div>
      </div>

      {/* Screen glass reflection sheen */}
      <div className="absolute inset-[3px] rounded-[2.3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />

      {/* Outer ambient blur glow */}
      <div
        className="absolute -inset-3 rounded-[3rem] blur-xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `hsl(${screenshot.accentHue} 70% 50%)`,
          opacity: isSelected ? 0.25 : 0.06,
        }}
      />
    </div>
  );
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

// ─── Main Showcase Section with Smooth Autoplay Carousel ────────────────────────
export function AppShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const nextAppIndex = (activeIndex + 1) % appScreenshots.length;
  const prevAppIndex = (activeIndex - 1 + appScreenshots.length) % appScreenshots.length;

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex((current) => {
      setDirection(index > current ? 1 : -1);
      return index;
    });
  }, []);

  // Autoplay management: 3000ms delay, pauses on hover/focus, resets on manual navigation
  const resetAutoplayTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (!isPaused && !prefersReducedMotion) {
      timerRef.current = setInterval(() => {
        next();
      }, 3000);
    }
  }, [isPaused, prefersReducedMotion, next]);

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [resetAutoplayTimer]);

  const handleNext = () => {
    next();
    resetAutoplayTimer();
  };

  const handlePrev = () => {
    prev();
    resetAutoplayTimer();
  };

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    goTo(index);
    resetAutoplayTimer();
  };

  // Keyboard navigation on carousel container
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  const activeApp = appScreenshots[activeIndex];
  const prevApp = appScreenshots[prevAppIndex];
  const nextApp = appScreenshots[nextAppIndex];

  // Smooth slide transition variants (approx 800ms)
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 20,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.94,
      zIndex: 10,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.7,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    }),
  };

  return (
    <section
      id="apps"
      aria-labelledby="apps-heading"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background atmosphere lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] rounded-full bg-accent-uv/4 blur-[130px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="page-container relative z-10">
        {/* Section Heading & Counter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 lg:mb-12">
          <SectionHeading
            id="apps-heading"
            label="01 / Selected Apps"
            title="Selected apps, built for real use."
            subtitle="Mobile products I'm designing and developing with Flutter."
          />

          {/* Slide counter & status */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-secondary self-start sm:self-end">
            <span className="text-primary font-semibold">0{activeIndex + 1}</span>
            <span className="opacity-40">/</span>
            <span>0{appScreenshots.length}</span>
            {isPaused && (
              <span className="ml-1 text-[10px] text-accent-uv/70 font-sans tracking-wide">
                (Paused)
              </span>
            )}
          </div>
        </div>

        {/* Carousel Container */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Mobile app showcase autoplay carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[700px] flex flex-col items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-uv/40 rounded-3xl"
        >
          {/* Accessible live region for screen readers */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Active app: {activeApp.title} — {activeApp.subtitle} ({activeIndex + 1} of {appScreenshots.length})
          </div>

          {/* Stage Area: Centered active phone with subtle adjacent previews */}
          <div className="relative w-full flex items-center justify-center py-4">
            {/* Desktop Previous Preview (subtle hint on left) */}
            <div className="hidden md:flex absolute left-2 lg:left-8 xl:left-16 top-1/2 -translate-y-1/2 flex-col items-center opacity-30 hover:opacity-60 transition-all duration-500 scale-[0.84] blur-[0.5px] z-10">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={`Show ${prevApp.title}`}
                className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded-3xl"
              >
                <PhoneFrame screenshot={prevApp} isFeatured={false} isSelected={false} />
              </button>
              <p className="mt-3 text-xs font-mono text-secondary/70 tracking-wider">
                {prevApp.title}
              </p>
            </div>

            {/* Centered Active Phone with AnimatePresence */}
            <div className="relative z-20 flex flex-col items-center">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={activeApp.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, { offset, velocity }) => {
                    if (offset.x < -50 || velocity.x < -300) {
                      handleNext();
                    } else if (offset.x > 50 || velocity.x > 300) {
                      handlePrev();
                    }
                  }}
                  className="flex flex-col items-center cursor-grab active:cursor-grabbing"
                >
                  {/* Phone frame */}
                  <PhoneFrame
                    screenshot={activeApp}
                    isFeatured={activeApp.featured}
                    isSelected={true}
                  />

                  {/* Metadata */}
                  <div className="mt-6 text-center flex flex-col items-center max-w-[320px]">
                    {activeApp.featured && (
                      <div
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border mb-2 tracking-wider uppercase"
                        style={{
                          borderColor: `hsl(${activeApp.accentHue} 60% 45% / 0.5)`,
                          color: `hsl(${activeApp.accentHue} 85% 75%)`,
                          background: `hsl(${activeApp.accentHue} 60% 18% / 0.35)`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Featured App
                      </div>
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold text-primary">
                      {activeApp.title}
                    </h3>
                    <p className="text-xs text-secondary font-mono tracking-wider mt-0.5">
                      {activeApp.subtitle}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent-uv hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded px-2 py-1"
                    >
                      Explore case study →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop Next Preview (subtle hint on right) */}
            <div className="hidden md:flex absolute right-2 lg:right-8 xl:right-16 top-1/2 -translate-y-1/2 flex-col items-center opacity-30 hover:opacity-60 transition-all duration-500 scale-[0.84] blur-[0.5px] z-10">
              <button
                type="button"
                onClick={handleNext}
                aria-label={`Show ${nextApp.title}`}
                className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded-3xl"
              >
                <PhoneFrame screenshot={nextApp} isFeatured={false} isSelected={false} />
              </button>
              <p className="mt-3 text-xs font-mono text-secondary/70 tracking-wider">
                {nextApp.title}
              </p>
            </div>
          </div>

          {/* Carousel Navigation Controls: Previous, Pagination Dots, Next */}
          <div className="mt-8 flex items-center justify-center gap-4 z-30">
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Show previous app"
              className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-primary hover:border-accent-uv hover:bg-surface-elevated transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* 3 Pagination Buttons */}
            <div className="flex items-center gap-2 px-2" role="tablist" aria-label="App slides">
              {appScreenshots.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show ${item.title}`}
                    onClick={() => handleSelect(idx)}
                    className={`h-2 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv cursor-pointer ${
                      isActive
                        ? "w-8 bg-accent-uv shadow-[0_0_12px_rgba(139,92,246,0.7)]"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                );
              })}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Show next app"
              className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-primary hover:border-accent-uv hover:bg-surface-elevated transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
