"use client";

import { useState } from "react";
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
    <div className="w-full h-full flex flex-col items-center justify-between p-4">
      {/* Fake status bar */}
      <div className="w-full flex items-center justify-between mb-3">
        <div className="text-[8px] font-mono opacity-40">9:41</div>
        <div className="flex gap-1">
          <div className="w-3 h-1.5 rounded-sm bg-current opacity-30" />
          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-30" />
        </div>
      </div>

      {/* Fake app content */}
      <div className="flex-1 w-full flex flex-col gap-2 overflow-hidden">
        {/* Header bar */}
        <div
          className="w-full h-8 rounded-md opacity-20"
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

      {/* Label */}
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
}: {
  screenshot: AppScreenshot;
  isFeatured: boolean;
}) {
  const [imgError, setImgError] = useState(false);
  const showPlaceholder = imgError;

  const frameWidth = isFeatured
    ? "w-[200px] sm:w-[220px] lg:w-[240px] xl:w-[260px]"
    : "w-[160px] sm:w-[175px] lg:w-[185px] xl:w-[200px]";

  const frameHeight = isFeatured
    ? "h-[400px] sm:h-[440px] lg:h-[480px] xl:h-[520px]"
    : "h-[320px] sm:h-[350px] lg:h-[370px] xl:h-[400px]";

  return (
    <div
      className={`relative ${frameWidth} ${frameHeight} flex-shrink-0`}
      style={{
        filter: `drop-shadow(0 32px 64px hsl(${screenshot.accentHue} 60% 20% / 0.4))`,
      }}
    >
      {/* Outer phone frame */}
      <div
        className="absolute inset-0 rounded-[2.5rem] border-2 z-20 pointer-events-none"
        style={{ borderColor: `hsl(${screenshot.accentHue} 40% 30% / 0.7)` }}
      />
      {/* Side buttons */}
      <div
        className="absolute -left-[3px] top-[80px] w-[3px] h-7 rounded-l-sm"
        style={{ background: `hsl(${screenshot.accentHue} 30% 25%)` }}
      />
      <div
        className="absolute -left-[3px] top-[120px] w-[3px] h-7 rounded-l-sm"
        style={{ background: `hsl(${screenshot.accentHue} 30% 25%)` }}
      />
      <div
        className="absolute -right-[3px] top-[100px] w-[3px] h-12 rounded-r-sm"
        style={{ background: `hsl(${screenshot.accentHue} 30% 25%)` }}
      />

      {/* Screen area */}
      <div
        className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden"
        style={{
          background: `linear-gradient(160deg, hsl(${screenshot.accentHue} 25% 8%) 0%, hsl(${screenshot.accentHue} 15% 5%) 100%)`,
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/60 rounded-b-2xl z-10 flex items-center justify-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
          <div className="w-0.5 h-3 rounded-full bg-black/50 mx-0.5" />
        </div>

        {/* Ambient glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: `hsl(${screenshot.accentHue} 80% 60%)` }}
        />

        {/* Image or placeholder */}
        <div className="absolute inset-0 flex text-primary">
          {!showPlaceholder ? (
            <div className="relative w-full h-full">
              <Image
                src={screenshot.image}
                alt={screenshot.imageAlt}
                fill
                className="object-cover object-top"
                sizes={
                  isFeatured
                    ? "(max-width: 640px) 200px, (max-width: 1024px) 220px, 260px"
                    : "(max-width: 640px) 160px, (max-width: 1024px) 185px, 200px"
                }
                onError={() => setImgError(true)}
                priority={isFeatured}
              />
            </div>
          ) : (
            <PhonePlaceholder screenshot={screenshot} isFeatured={isFeatured} />
          )}
        </div>
      </div>

      {/* Screen glass sheen */}
      <div className="absolute inset-[3px] rounded-[2.3rem] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />

      {/* Brand glow ring */}
      <div
        className="absolute -inset-3 rounded-[3rem] opacity-10 blur-xl pointer-events-none"
        style={{ background: `hsl(${screenshot.accentHue} 70% 50%)` }}
      />
    </div>
  );
}

// ─── Individual device card ─────────────────────────────────────────────────────
function DeviceCard({
  screenshot,
  index,
  isFeatured,
}: {
  screenshot: AppScreenshot;
  index: number;
  isFeatured: boolean;
}) {
  const handleExplore = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className={`flex flex-col items-center gap-5 ${
        isFeatured ? "order-first sm:order-none" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.12 }}
    >
      {/* Device */}
      <motion.div
        whileHover={isFeatured ? { y: -6, scale: 1.01 } : { y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <PhoneFrame screenshot={screenshot} isFeatured={isFeatured} />
      </motion.div>

      {/* Metadata */}
      <div className="text-center">
        <p className="text-sm font-semibold text-primary">{screenshot.title}</p>
        <p className="text-xs text-secondary font-mono tracking-wider mt-0.5">
          {screenshot.subtitle}
        </p>
        <button
          onClick={handleExplore}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent-uv hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded"
        >
          Explore case study →
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main showcase section ──────────────────────────────────────────────────────
export function AppShowcaseSection() {
  const featured = appScreenshots.find((s) => s.featured)!;
  const supporting = appScreenshots.filter((s) => !s.featured);

  return (
    <section
      id="apps"
      aria-labelledby="apps-heading"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent-uv/3 blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="page-container relative z-10">
        <SectionHeading
          id="apps-heading"
          label="01 / Selected Apps"
          title="Selected apps, built for real use."
          subtitle="Mobile products I'm designing and developing with Flutter."
        />

        {/* Device composition */}
        <div className="flex flex-col sm:flex-row items-end justify-center gap-8 lg:gap-12 xl:gap-16 mt-4">
          {/* Supporting device 1 — slightly lower */}
          <motion.div
            className="hidden sm:flex flex-col items-center gap-5 sm:mb-0 pb-6 lg:pb-10"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <PhoneFrame screenshot={supporting[0]} isFeatured={false} />
            </motion.div>
            <div className="text-center">
              <p className="text-sm font-semibold text-primary">{supporting[0].title}</p>
              <p className="text-xs text-secondary font-mono tracking-wider mt-0.5">
                {supporting[0].subtitle}
              </p>
              <button
                onClick={() =>
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent-uv hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded"
              >
                Explore case study →
              </button>
            </div>
          </motion.div>

          {/* Featured device — center and tallest */}
          <motion.div
            className="flex flex-col items-center gap-5 z-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <PhoneFrame screenshot={featured} isFeatured={true} />
            </motion.div>
            <div className="text-center">
              <div
                className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full border mb-2"
                style={{
                  borderColor: `hsl(${featured.accentHue} 50% 40% / 0.4)`,
                  color: `hsl(${featured.accentHue} 70% 70%)`,
                  background: `hsl(${featured.accentHue} 50% 20% / 0.15)`,
                }}
              >
                Featured
              </div>
              <p className="text-base font-semibold text-primary">{featured.title}</p>
              <p className="text-xs text-secondary font-mono tracking-wider mt-0.5">
                {featured.subtitle}
              </p>
              <button
                onClick={() =>
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent-uv hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded"
              >
                Explore case study →
              </button>
            </div>
          </motion.div>

          {/* Supporting device 2 — slightly lower */}
          <motion.div
            className="hidden sm:flex flex-col items-center gap-5 pb-6 lg:pb-10"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.16 }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <PhoneFrame screenshot={supporting[1]} isFeatured={false} />
            </motion.div>
            <div className="text-center">
              <p className="text-sm font-semibold text-primary">{supporting[1].title}</p>
              <p className="text-xs text-secondary font-mono tracking-wider mt-0.5">
                {supporting[1].subtitle}
              </p>
              <button
                onClick={() =>
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent-uv hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded"
              >
                Explore case study →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile: show all three stacked */}
        <div className="sm:hidden flex flex-col items-center gap-10 mt-2">
          {appScreenshots.map((screenshot, i) => (
            <DeviceCard
              key={screenshot.id}
              screenshot={screenshot}
              index={i}
              isFeatured={screenshot.featured}
            />
          ))}
        </div>

        {/* Screenshot path hint */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-xs font-mono text-secondary/60">
            <span className="text-accent-uv/60">📁</span>
            Replace placeholders:{" "}
            <code className="text-accent-uv/80">public/images/apps/</code>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
