"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appScreenshots, type AppScreenshot } from "@/lib/data";

const AUTOPLAY_DELAY = 3000;

// ─── Consistent Phone Placeholder Wireframe ─────────────────────────────────────
function PhonePlaceholder({
  screenshot,
}: {
  screenshot: AppScreenshot;
}) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-4 select-none overflow-hidden pointer-events-none">
      {/* Fake status bar */}
      <div className="w-full flex items-center justify-between mb-3 shrink-0">
        <div className="text-[8px] font-mono opacity-40">9:41</div>
        <div className="flex gap-1">
          <div className="w-3 h-1.5 rounded-sm bg-current opacity-30" />
          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-30" />
        </div>
      </div>

      {/* Normalized wireframe blocks */}
      <div className="flex-1 w-full flex flex-col gap-2 overflow-hidden">
        <div
          className="w-full h-8 rounded-md opacity-25 shrink-0"
          style={{ background: `hsl(${screenshot.accentHue} 70% 50%)` }}
        />
        <div className="flex gap-2 shrink-0">
          <div className="w-1/2 h-16 rounded-md bg-white/5" />
          <div className="w-1/2 h-16 rounded-md bg-white/5" />
        </div>
        <div className="w-full h-4 rounded bg-white/5 shrink-0" />
        <div className="w-3/4 h-4 rounded bg-white/5 shrink-0" />
        <div className="w-full h-16 rounded-md bg-white/5 shrink-0 mt-1" />
        <div className="flex gap-2 shrink-0 mt-1">
          <div className="flex-1 h-9 rounded-md bg-white/5" />
          <div className="flex-1 h-9 rounded-md bg-white/5" />
        </div>
      </div>

      {/* Internal visual placeholder label */}
      <div className="mt-3 flex flex-col items-center gap-1 shrink-0">
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

// ─── GPU-Optimized Phone Frame Component ────────────────────────────────────────
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
      className={`relative w-[230px] sm:w-[255px] lg:w-[270px] h-[460px] sm:h-[500px] lg:h-[530px] flex-shrink-0 transition-shadow duration-500 rounded-[2.5rem] ${
        isSelected
          ? "shadow-[0_16px_36px_rgba(0,0,0,0.6)] md:shadow-none"
          : "shadow-none"
      }`}
    >
      {/* Outer Phone Bezel */}
      <div
        className="absolute inset-0 rounded-[2.5rem] border-2 z-20 pointer-events-none transition-colors duration-500"
        style={{
          borderColor: isSelected
            ? `hsl(${screenshot.accentHue} 60% 48% / 0.9)`
            : `hsl(${screenshot.accentHue} 35% 25% / 0.45)`,
        }}
      />

      {/* Hardware side buttons */}
      <div
        className="absolute -left-[3px] top-[80px] w-[3px] h-7 rounded-l-sm pointer-events-none transition-colors duration-500"
        style={{
          background: isSelected
            ? `hsl(${screenshot.accentHue} 45% 35%)`
            : `hsl(${screenshot.accentHue} 30% 25%)`,
        }}
      />
      <div
        className="absolute -left-[3px] top-[120px] w-[3px] h-7 rounded-l-sm pointer-events-none transition-colors duration-500"
        style={{
          background: isSelected
            ? `hsl(${screenshot.accentHue} 45% 35%)`
            : `hsl(${screenshot.accentHue} 30% 25%)`,
        }}
      />
      <div
        className="absolute -right-[3px] top-[100px] w-[3px] h-12 rounded-r-sm pointer-events-none transition-colors duration-500"
        style={{
          background: isSelected
            ? `hsl(${screenshot.accentHue} 45% 35%)`
            : `hsl(${screenshot.accentHue} 30% 25%)`,
        }}
      />

      {/* Phone Screen Area */}
      <div
        className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden"
        style={{
          background: `linear-gradient(160deg, hsl(${screenshot.accentHue} 25% 8%) 0%, hsl(${screenshot.accentHue} 15% 5%) 100%)`,
        }}
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/70 rounded-b-2xl z-10 flex items-center justify-center gap-1 pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-black/90" />
          <div className="w-0.5 h-3 rounded-full bg-black/60 mx-0.5" />
        </div>

        {/* Screen ambient glow (lightweight on mobile, rich on desktop) */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-md md:blur-3xl pointer-events-none transition-opacity duration-500"
          style={{
            background: `hsl(${screenshot.accentHue} 80% 60%)`,
            opacity: isSelected ? 0.3 : 0.1,
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
                sizes="(max-width: 640px) 230px, (max-width: 1024px) 255px, 270px"
                onError={() => setImgError(true)}
                priority={isFeatured}
              />
            </div>
          ) : (
            <PhonePlaceholder screenshot={screenshot} />
          )}
        </div>
      </div>

      {/* Screen glass reflection sheen */}
      <div className="absolute inset-[3px] rounded-[2.3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />

      {/* Outer ambient blur glow (lightweight blur on mobile, rich on desktop) */}
      <div
        className="absolute -inset-2 md:-inset-4 rounded-[2.8rem] md:rounded-[3.5rem] blur-md md:blur-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `hsl(${screenshot.accentHue} 70% 50%)`,
          opacity: isSelected ? 0.22 : 0.05,
        }}
      />
    </div>
  );
}

// ─── Main Showcase Section ──────────────────────────────────────────────────────
export function AppShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Swipe gesture tracking via refs — zero state updates during movement, zero scroll interference
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Single reliable interval autoplay effect — 3000ms delay, continuous
  useEffect(() => {
    const timerId = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % appScreenshots.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timerId);
  }, []);

  // Navigation handlers
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % appScreenshots.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
  };

  const handleSelect = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Touch & Pointer swipe handlers with touch-action: pan-y (preserves butter-smooth vertical scroll)
  const onPointerDown = (e: React.PointerEvent) => {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.clientX - touchStartX.current;
    const deltaY = e.clientY - touchStartY.current;

    // Trigger swipe only when horizontal gesture exceeds 40px and is predominantly horizontal
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const onPointerCancel = () => {
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  const total = appScreenshots.length;
  const previousIndex = (activeIndex + total - 1) % total;
  const nextIndex = (activeIndex + 1) % total;
  const activeApp = appScreenshots[activeIndex];

  // GPU-friendly desktop slot variants: only transform (x, scale) and opacity
  const slotVariants = {
    active: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 30,
    },
    prev: {
      x: "-120%",
      scale: 0.86,
      opacity: 0.22,
      zIndex: 10,
    },
    next: {
      x: "120%",
      scale: 0.86,
      opacity: 0.22,
      zIndex: 10,
    },
  };

  const slotTransition = {
    type: "tween" as const,
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="apps"
      aria-labelledby="apps-heading"
      className="relative py-16 sm:py-20 lg:py-28 overflow-x-clip overflow-y-visible"
    >
      {/* Ambient background lighting (bounded to prevent mobile horizontal overflow) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[200px] max-w-[80vw] md:w-[720px] md:h-[420px] rounded-full bg-accent-uv/4 blur-[60px] md:blur-[130px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="page-container relative z-10">
        {/* Section Heading & Slide Counter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6 sm:mb-8">
          <SectionHeading
            id="apps-heading"
            label="01 / Selected Apps"
            title="Selected apps, built for real use."
            subtitle="Mobile products I'm designing and developing with Flutter."
          />

          {/* Clean status counter: 01 / 03 */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-secondary self-start sm:self-end">
            <span className="text-primary font-semibold">0{activeIndex + 1}</span>
            <span className="opacity-40">/</span>
            <span>0{appScreenshots.length}</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Mobile app showcase autoplay carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="relative w-full flex flex-col items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-uv/40 rounded-3xl"
        >
          {/* Screen reader live region */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Active app: {activeApp.title} — {activeApp.subtitle} ({activeIndex + 1} of {appScreenshots.length})
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              MOBILE STAGE (< 768px): Single active phone with AnimatePresence
              ═══════════════════════════════════════════════════════════════════ */}
          <div
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            className="md:hidden carousel-stage-container relative w-full max-w-[390px] mx-auto h-[620px] sm:h-[660px] overflow-hidden flex items-start justify-center pt-4 sm:pt-8 select-none cursor-grab active:cursor-grabbing"
            style={{ touchAction: "pan-y" }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeApp.id}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? "100%" : "-100%",
                    opacity: 0,
                  }),
                  center: {
                    x: "0%",
                    opacity: 1,
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? "-100%" : "100%",
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "tween",
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="carousel-slide-item absolute inset-x-0 mx-auto flex flex-col items-center justify-center w-[min(78vw,260px)]"
              >
                {/* Phone frame with bounded glow */}
                <PhoneFrame
                  screenshot={activeApp}
                  isFeatured={activeApp.featured}
                  isSelected={true}
                />

                {/* Reserved metadata area (stable pixel heights) */}
                <div className="mt-4 w-full flex flex-col items-center text-center">
                  {/* Badge row: fixed height 24px */}
                  <div className="h-6 flex items-center justify-center mb-1">
                    {activeApp.featured ? (
                      <div
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border tracking-wider uppercase"
                        style={{
                          borderColor: `hsl(${activeApp.accentHue} 60% 45% / 0.5)`,
                          color: `hsl(${activeApp.accentHue} 85% 75%)`,
                          background: `hsl(${activeApp.accentHue} 60% 18% / 0.35)`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Featured App
                      </div>
                    ) : (
                      <div className="h-6 invisible select-none" aria-hidden="true" />
                    )}
                  </div>

                  {/* Title row */}
                  <h3 className="h-7 flex items-center justify-center text-lg font-semibold text-primary truncate leading-tight">
                    {activeApp.title}
                  </h3>

                  {/* Subtitle row */}
                  <p className="h-5 flex items-center justify-center text-xs text-secondary font-mono tracking-wider truncate leading-tight mt-0.5">
                    {activeApp.subtitle}
                  </p>

                  {/* Button row */}
                  <div className="h-9 flex items-center justify-center mt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-uv hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded px-2 py-1"
                    >
                      Explore case study →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              DESKTOP STAGE (>= 768px): 3-Slot Stage with Side Previews
              ═══════════════════════════════════════════════════════════════════ */}
          <div
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            className="hidden md:flex carousel-stage-container relative w-full h-[700px] lg:h-[740px] overflow-x-clip overflow-y-visible items-start justify-center pt-14 lg:pt-18 select-none cursor-grab active:cursor-grabbing"
            style={{ touchAction: "pan-y" }}
          >
            {appScreenshots.map((item, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === previousIndex;
              const isNext = index === nextIndex;

              let slot: "active" | "prev" | "next" = "active";
              if (isPrev) slot = "prev";
              else if (isNext) slot = "next";

              return (
                <motion.div
                  key={item.id}
                  layout={false}
                  variants={slotVariants}
                  animate={slot}
                  transition={slotTransition}
                  onClick={() => {
                    if (isPrev) handlePrev();
                    else if (isNext) handleNext();
                  }}
                  className={`carousel-slide-item absolute inset-x-0 mx-auto flex flex-col items-center justify-center w-[310px] lg:w-[325px] ${
                    isActive
                      ? "z-30 opacity-100 pointer-events-auto"
                      : "z-10 opacity-25 pointer-events-auto cursor-pointer"
                  }`}
                  aria-hidden={!isActive}
                >
                  {/* Phone frame with unclipped glow */}
                  <PhoneFrame
                    screenshot={item}
                    isFeatured={item.featured}
                    isSelected={isActive}
                  />

                  {/* Reserved metadata area (stable pixel heights) */}
                  <div className="mt-5 w-full flex flex-col items-center text-center">
                    {/* Badge row: fixed height 24px */}
                    <div className="h-6 flex items-center justify-center mb-1">
                      {item.featured ? (
                        <div
                          className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border tracking-wider uppercase"
                          style={{
                            borderColor: `hsl(${item.accentHue} 60% 45% / 0.5)`,
                            color: `hsl(${item.accentHue} 85% 75%)`,
                            background: `hsl(${item.accentHue} 60% 18% / 0.35)`,
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          Featured App
                        </div>
                      ) : (
                        <div className="h-6 invisible select-none" aria-hidden="true" />
                      )}
                    </div>

                    {/* Title row */}
                    <h3 className="h-7 flex items-center justify-center text-lg sm:text-xl font-semibold text-primary truncate leading-tight">
                      {item.title}
                    </h3>

                    {/* Subtitle row */}
                    <p className="h-5 flex items-center justify-center text-xs text-secondary font-mono tracking-wider truncate leading-tight mt-0.5">
                      {item.subtitle}
                    </p>

                    {/* Button row */}
                    <div className="h-9 flex items-center justify-center mt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        tabIndex={isActive ? 0 : -1}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-uv hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded px-2 py-1"
                      >
                        Explore case study →
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Carousel Navigation Controls ── */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4 z-30">
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
