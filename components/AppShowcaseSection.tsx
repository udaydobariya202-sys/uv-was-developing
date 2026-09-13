"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appScreenshots, type AppScreenshot } from "@/lib/data";

// ─── CSS-only phone placeholder (shown when image file doesn't exist) ──────────
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
          style={{
            background: `hsl(${screenshot.accentHue} 70% 50%)`,
          }}
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

      {/* Internal placeholder label (part of device visual style) */}
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

// ─── Phone frame wrapper ────────────────────────────────────────────────────────
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
  const showPlaceholder = imgError;

  return (
    <div
      className="relative w-[220px] sm:w-[240px] lg:w-[255px] h-[450px] sm:h-[490px] lg:h-[520px] flex-shrink-0 transition-all duration-300"
      style={{
        filter: isSelected
          ? `drop-shadow(0 28px 56px hsl(${screenshot.accentHue} 70% 30% / 0.45))`
          : `drop-shadow(0 14px 28px hsl(${screenshot.accentHue} 40% 15% / 0.2))`,
      }}
    >
      {/* Outer phone frame border */}
      <div
        className="absolute inset-0 rounded-[2.5rem] border-2 z-20 pointer-events-none transition-colors duration-300"
        style={{
          borderColor: isSelected
            ? `hsl(${screenshot.accentHue} 60% 48% / 0.85)`
            : `hsl(${screenshot.accentHue} 35% 25% / 0.5)`,
        }}
      />

      {/* Physical side buttons */}
      <div
        className="absolute -left-[3px] top-[80px] w-[3px] h-7 rounded-l-sm transition-colors duration-300"
        style={{
          background: isSelected
            ? `hsl(${screenshot.accentHue} 45% 35%)`
            : `hsl(${screenshot.accentHue} 30% 25%)`,
        }}
      />
      <div
        className="absolute -left-[3px] top-[120px] w-[3px] h-7 rounded-l-sm transition-colors duration-300"
        style={{
          background: isSelected
            ? `hsl(${screenshot.accentHue} 45% 35%)`
            : `hsl(${screenshot.accentHue} 30% 25%)`,
        }}
      />
      <div
        className="absolute -right-[3px] top-[100px] w-[3px] h-12 rounded-r-sm transition-colors duration-300"
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

        {/* Ambient glow behind screenshot */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full blur-3xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `hsl(${screenshot.accentHue} 80% 60%)`,
            opacity: isSelected ? 0.3 : 0.15,
          }}
        />

        {/* Image or fallback placeholder */}
        <div className="absolute inset-0 flex text-primary">
          {!showPlaceholder ? (
            <div className="relative w-full h-full">
              <Image
                src={screenshot.image}
                alt={screenshot.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 240px, 255px"
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
        className="absolute -inset-3 rounded-[3rem] blur-xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `hsl(${screenshot.accentHue} 70% 50%)`,
          opacity: isSelected ? 0.22 : 0.08,
        }}
      />
    </div>
  );
}

// ─── Main showcase section with horizontal scrollable track ─────────────────────
export function AppShowcaseSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Helper to determine scroll behavior respecting prefers-reduced-motion
  const getScrollBehavior = useCallback((): ScrollBehavior => {
    if (typeof window === "undefined") return "smooth";
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number;
    const updateState = () => {
      const scrollLeft = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;

      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < maxScroll - 15);

      const cards = track.querySelectorAll<HTMLElement>("[data-card-index]");
      if (!cards.length) return;

      const trackRect = track.getBoundingClientRect();
      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        const distance = Math.abs(cardRect.left - trackRect.left);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateState);
    };

    // Defer initial measurement to next frame
    rafId = requestAnimationFrame(updateState);

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Scroll previous card using ref and scrollBy
  const scrollPrev = () => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>("[data-card-index]");
    const cardWidth = firstCard ? firstCard.offsetWidth : 370;
    const scrollDelta = cardWidth + 32;

    track.scrollBy({
      left: -scrollDelta,
      behavior: getScrollBehavior(),
    });
  };

  // Scroll next card using ref and scrollBy
  const scrollNext = () => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>("[data-card-index]");
    const cardWidth = firstCard ? firstCard.offsetWidth : 370;
    const scrollDelta = cardWidth + 32;

    track.scrollBy({
      left: scrollDelta,
      behavior: getScrollBehavior(),
    });
  };

  // Direct scroll to specific card
  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll<HTMLElement>("[data-card-index]");
    const targetCard = cards[index];
    if (!targetCard) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = targetCard.getBoundingClientRect();
    const delta = cardRect.left - trackRect.left - 24;

    track.scrollBy({
      left: delta,
      behavior: getScrollBehavior(),
    });
  };

  // Keyboard navigation on track focus
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    }
  };

  const formattedCurrent = String(activeIndex + 1).padStart(2, "0");
  const formattedTotal = String(appScreenshots.length).padStart(2, "0");

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

      <div className="relative z-10 w-full">
        {/* Header container with section title and carousel controls */}
        <div className="page-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-12">
            <SectionHeading
              id="apps-heading"
              label="01 / Selected Apps"
              title="Selected apps, built for real use."
              subtitle="Mobile products I'm designing and developing with Flutter."
            />

            {/* Carousel navigation toolbar */}
            <div className="flex items-center gap-3 self-start md:self-end pb-2">
              {/* Progress indicator badge: 01 / 03 */}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-secondary"
                aria-live="polite"
                aria-atomic="true"
              >
                <span className="text-primary font-semibold">{formattedCurrent}</span>
                <span className="opacity-40">/</span>
                <span>{formattedTotal}</span>
              </div>

              {/* Progress pagination dots */}
              <div
                className="flex items-center gap-1.5 px-2 py-1.5"
                role="tablist"
                aria-label="App preview slides"
              >
                {appScreenshots.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeIndex}
                    aria-label={`Jump to app ${idx + 1}: ${item.title}`}
                    onClick={() => scrollToCard(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv ${
                      idx === activeIndex
                        ? "w-6 bg-accent-uv shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Left / Right Arrow buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canScrollLeft}
                  aria-label="Previous app preview"
                  className="w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center text-primary hover:border-accent-uv hover:bg-surface-elevated transition-all disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv"
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
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollRight}
                  aria-label="Next app preview"
                  className="w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center text-primary hover:border-accent-uv hover:bg-surface-elevated transition-all disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv"
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
        </div>

        {/* Carousel viewport wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle edge fade masks — hidden when at edges to avoid obscuring card content */}
          <div
            className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-bg to-transparent z-20 transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-bg to-transparent z-20 transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          {/* Horizontally scrollable CSS track with snap points */}
          <div
            ref={trackRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="region"
            aria-roledescription="carousel"
            aria-label="Mobile app showcase track. Use arrow keys or swipe to scroll."
            className="showcase-track flex items-start gap-6 sm:gap-8 lg:gap-10 overflow-x-auto overflow-y-hidden py-6 sm:py-8 pl-6 pr-14 sm:pl-8 sm:pr-24 lg:pl-16 lg:pr-32 xl:pl-24 xl:pr-40 select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-uv/30"
          >
            {appScreenshots.map((screenshot, index) => {
              const isSelected = index === activeIndex;

              return (
                <div
                  key={screenshot.id}
                  data-card-index={index}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${screenshot.title} preview (${index + 1} of ${appScreenshots.length})`}
                  onClick={() => {
                    if (!isSelected) scrollToCard(index);
                  }}
                  className={`showcase-slide flex flex-col items-center gap-5 shrink-0 transition-all duration-300 ease-out cursor-pointer ${
                    isSelected
                      ? "opacity-100 scale-100"
                      : "opacity-60 hover:opacity-85 scale-[0.98]"
                  } w-[82vw] max-w-[340px] sm:w-[370px] lg:w-[410px]`}
                >
                  {/* Phone frame mockup */}
                  <motion.div
                    whileHover={isSelected ? { y: -6, scale: 1.01 } : { y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <PhoneFrame
                      screenshot={screenshot}
                      isFeatured={screenshot.featured}
                      isSelected={isSelected}
                    />
                  </motion.div>

                  {/* Device Metadata */}
                  <div className="text-center flex flex-col items-center max-w-[280px]">
                    {screenshot.featured && (
                      <div
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border mb-2 tracking-wider uppercase"
                        style={{
                          borderColor: `hsl(${screenshot.accentHue} 60% 45% / 0.5)`,
                          color: `hsl(${screenshot.accentHue} 85% 75%)`,
                          background: `hsl(${screenshot.accentHue} 60% 18% / 0.35)`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Featured App
                      </div>
                    )}
                    <h3 className="text-base sm:text-lg font-semibold text-primary">
                      {screenshot.title}
                    </h3>
                    <p className="text-xs text-secondary font-mono tracking-wider mt-0.5">
                      {screenshot.subtitle}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent-uv hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded px-2 py-1"
                    >
                      Explore case study →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
