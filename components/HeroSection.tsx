"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Syne } from "next/font/google";
import { useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const rafId = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [developed, setDeveloped] = useState(false);

  // Pointer & beam physics state
  const stateRef = useRef({
    mouseX: 0,
    mouseY: 0,
    currentX: 0,
    currentY: 0,
    isHovering: false,
    isPinned: false,
    isVisible: true,
  });

  // Photo-developing intro: opacity & blur-to-sharp within 800ms (runs once on mount)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDeveloped(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Set initial position and torch radius
  const initPositions = useCallback(() => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const initX = rect.width * 0.5;
    const initY = Math.min(rect.height * 0.42, 360);

    stateRef.current.currentX = initX;
    stateRef.current.currentY = initY;
    stateRef.current.mouseX = initX;
    stateRef.current.mouseY = initY;

    const isSmall = rect.width < 640;
    const torchRadius = isSmall ? "190px" : "270px";

    heroRef.current.style.setProperty("--x", `${Math.round(initX)}px`);
    heroRef.current.style.setProperty("--y", `${Math.round(initY)}px`);
    heroRef.current.style.setProperty("--torch-radius", torchRadius);
  }, []);

  // Animation loop: pointer tracking, auto beam sweep on touch/idle, pause when off-screen
  useEffect(() => {
    initPositions();

    const updateBeam = (time: number) => {
      if (!stateRef.current.isVisible || shouldReduceMotion) return;

      const hero = heroRef.current;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        let targetX = stateRef.current.mouseX;
        let targetY = stateRef.current.mouseY;

        // When not hovering and not touch-pinned, run a slow rhythmic beam sweep
        if (!stateRef.current.isHovering && !stateRef.current.isPinned) {
          const t = time * 0.0009;
          targetX = (Math.sin(t) * 0.36 + 0.5) * width;
          targetY = (Math.cos(t * 0.65) * 0.2 + 0.42) * Math.min(height, 650);
        }

        // Smooth spring-like lerp to target
        const lerpFactor = stateRef.current.isHovering ? 0.14 : 0.06;
        stateRef.current.currentX += (targetX - stateRef.current.currentX) * lerpFactor;
        stateRef.current.currentY += (targetY - stateRef.current.currentY) * lerpFactor;

        hero.style.setProperty(
          "--x",
          `${Math.round(stateRef.current.currentX)}px`
        );
        hero.style.setProperty(
          "--y",
          `${Math.round(stateRef.current.currentY)}px`
        );
      }

      rafId.current = requestAnimationFrame(updateBeam);
    };

    // Pause animation when hero is off-screen using IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        stateRef.current.isVisible = entry.isIntersecting;
        if (entry.isIntersecting && !shouldReduceMotion) {
          if (!rafId.current) {
            rafId.current = requestAnimationFrame(updateBeam);
          }
        } else {
          if (rafId.current) {
            cancelAnimationFrame(rafId.current);
            rafId.current = null;
          }
        }
      },
      { threshold: 0.05 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    if (!shouldReduceMotion) {
      rafId.current = requestAnimationFrame(updateBeam);
    }

    const handleResize = () => {
      initPositions();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [initPositions, shouldReduceMotion]);

  // Pointer movement handlers
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || !heroRef.current) return;
    if (e.pointerType === "touch") return; // Touch is handled by touch handlers

    const rect = heroRef.current.getBoundingClientRect();
    stateRef.current.mouseX = e.clientX - rect.left;
    stateRef.current.mouseY = e.clientY - rect.top;
    stateRef.current.isHovering = true;
    stateRef.current.isPinned = false;
  };

  const handlePointerLeave = () => {
    stateRef.current.isHovering = false;
  };

  // Touch handlers: tap pins the beam where the visitor touched
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    if (shouldReduceMotion || !heroRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = heroRef.current.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;

    stateRef.current.mouseX = touchX;
    stateRef.current.mouseY = touchY;
    stateRef.current.currentX = touchX;
    stateRef.current.currentY = touchY;
    stateRef.current.isPinned = true;
    stateRef.current.isHovering = false;

    heroRef.current.style.setProperty("--x", `${Math.round(touchX)}px`);
    heroRef.current.style.setProperty("--y", `${Math.round(touchY)}px`);
  };

  // Smooth scroll helper
  const handleScroll = (selector: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onTouchStart={handleTouchStart}
      className="hero-section relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-[#07060B] overflow-x-clip text-primary select-none sm:select-auto"
      style={
        {
          "--x": "50%",
          "--y": "42%",
          "--torch-radius": "260px",
        } as React.CSSProperties
      }
      aria-label="Hero Introduction"
    >
      {/* -----------------------------------------------------------------
          FILM-GRAIN OVERLAY (static, tiny, low opacity)
          ----------------------------------------------------------------- */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* -----------------------------------------------------------------
          UV BLACKLIGHT TORCH BEAM (radial gradient following pointer)
          ----------------------------------------------------------------- */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: shouldReduceMotion
            ? "radial-gradient(circle 380px at 50% 40%, rgba(139, 92, 246, 0.16) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 75%)"
            : "radial-gradient(circle var(--torch-radius, 260px) at var(--x, 50%) var(--y, 42%), rgba(139, 92, 246, 0.22) 0%, rgba(139, 92, 246, 0.06) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="page-container relative z-10 w-full pt-20 sm:pt-24 lg:pt-32 pb-12 flex-1 flex flex-col justify-between">
        {/* Top Eyebrow Bar: Brand & Availability Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
          {/* Brand Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-xs bg-accent-uv shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="tracking-[0.22em] text-accent-uv font-semibold uppercase">
                UV WAS DEVELOPING
              </span>
              <span className="text-secondary/40">/</span>
              <span className="tracking-[0.14em] text-secondary/80">
                Uday Dobariya
              </span>
            </div>
          </div>

          {/* Available for select work pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-secondary backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Available for select work</span>
          </div>
        </div>

        {/* Main Hero Editorial Stage */}
        <div className="max-w-5xl my-auto">
          {/* Status Strip with pulsing acid-lime dot */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-secondary mb-6 backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF3D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6FF3D]" />
            </span>
            <span>
              Currently developing:{" "}
              <strong className="text-primary font-semibold">
                MOVIQ Cabs
              </strong>
            </span>
          </div>

          {/* ---------------------------------------------------------------
              HEADLINE STAGE (Base layer + Hidden UV blacklight layer)
              --------------------------------------------------------------- */}
          <div className="relative my-4 select-text">
            {/* 1. HIDDEN UV BLACKLIGHT LAYER (Revealed exclusively inside the beam) */}
            <div
              className={`absolute inset-0 pointer-events-none select-none z-10 transition-opacity duration-300 ${
                shouldReduceMotion ? "opacity-90" : "opacity-100"
              }`}
              style={{
                maskImage: shouldReduceMotion
                  ? "none"
                  : "radial-gradient(circle var(--torch-radius, 260px) at var(--x, 50%) var(--y, 42%), black 0%, rgba(0,0,0,0.85) 45%, transparent 75%)",
                WebkitMaskImage: shouldReduceMotion
                  ? "none"
                  : "radial-gradient(circle var(--torch-radius, 260px) at var(--x, 50%) var(--y, 42%), black 0%, rgba(0,0,0,0.85) 45%, transparent 75%)",
              }}
              aria-hidden="true"
            >
              <div className="w-full h-full flex flex-col justify-between py-1 text-violet-300 font-mono">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.2em] text-violet-400/80 border-b border-violet-500/25 pb-1.5">
                  <span>[ UV_BLACKLIGHT // 365nm ]</span>
                  <span>PROVEN CODE ENGINE</span>
                  <span>[ VERIFIED STACK ]</span>
                </div>

                <div className="my-auto py-3 space-y-2">
                  <div className="text-[clamp(1.15rem,3.2vw,2.75rem)] font-extrabold tracking-tight text-violet-200 [text-shadow:0_0_24px_rgba(167,139,250,0.9)] leading-tight">
                    MOVIQ: RIDER / DRIVER / ADMIN / BACKEND
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-semibold tracking-wider text-violet-300">
                    <span className="text-white bg-violet-600/40 px-1.5 py-0.5 rounded">
                      FLUTTER
                    </span>
                    <span>{"\u2022"}</span>
                    <span>BLoC</span>
                    <span>{"\u2022"}</span>
                    <span>SUPABASE</span>
                    <span>{"\u2022"}</span>
                    <span>STRIPE</span>
                    <span>{"\u2022"}</span>
                    <span>FIREBASE</span>
                    <span>{"\u2022"}</span>
                    <span>MAPS</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-wider text-violet-400/80 border-t border-violet-500/25 pt-1.5">
                  <span>DETERMINISTIC STATE</span>
                  <span>LOW-LATENCY TRANSIT</span>
                  <span>REAL-TIME DISPATCH</span>
                </div>
              </div>
            </div>

            {/* 2. BASE HEADLINE LAYER (High contrast, tight tracking, NO gradient text) */}
            <h1
              className="relative z-20 flex flex-col"
              style={{
                transition: shouldReduceMotion
                  ? "none"
                  : "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), filter 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
                opacity: developed || shouldReduceMotion ? 1 : 0,
                filter:
                  developed || shouldReduceMotion
                    ? "blur(0px)"
                    : "blur(12px)",
                transform:
                  developed || shouldReduceMotion
                    ? "translateY(0)"
                    : "translateY(12px)",
              }}
            >
              <span
                className={`${syne.className} text-[clamp(2.5rem,7.5vw,7.5rem)] font-extrabold tracking-[-0.035em] text-[#F5F5F7] leading-[0.96] [text-wrap:balance]`}
              >
                <span className="block">I build Flutter apps</span>
                <span className="block mt-1 sm:mt-2.5">
                  <span className="relative inline-block underline decoration-[#C6FF3D] decoration-2 sm:decoration-[3px] underline-offset-8 md:underline-offset-[14px]">
                    that ship.
                  </span>
                </span>
              </span>

              {/* SEO-accurate secondary line */}
              <span className="mt-7 text-lg sm:text-xl md:text-2xl font-mono text-secondary font-normal tracking-tight block">
                Flutter developer and full-stack product builder.
              </span>
            </h1>
          </div>

          {/* Supporting copy */}
          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mt-5 mb-6">
            Engineering production-grade mobile platforms connected to scalable
            backends, live maps, secure payments, and deterministic state
            management.
          </p>

          {/* Accessible Static Core Stack Specs Strip */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary mb-8 py-2">
            <span className="text-accent-uv font-semibold uppercase tracking-wider">
              Core Tech:
            </span>
            <span className="text-primary font-medium">Flutter</span>
            <span className="text-secondary/40">{"\u00B7"}</span>
            <span>BLoC</span>
            <span className="text-secondary/40">{"\u00B7"}</span>
            <span>Supabase</span>
            <span className="text-secondary/40">{"\u00B7"}</span>
            <span>Stripe</span>
            <span className="text-secondary/40">{"\u00B7"}</span>
            <span>Firebase</span>
            <span className="text-secondary/40">{"\u00B7"}</span>
            <span>Google Maps</span>
            <span className="text-secondary/30 hidden sm:inline">|</span>
            <span className="text-violet-300 hidden sm:inline">
              MOVIQ rider / driver / admin / backend
            </span>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            {/* Solid button: "View my work" */}
            <a
              href="#work"
              onClick={handleScroll("#work")}
              className="inline-flex items-center justify-center gap-2 rounded-lg font-medium bg-accent-uv text-white hover:bg-accent-uv-hover text-sm px-6 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B] shadow-sm shadow-accent-uv/25 cursor-pointer"
            >
              <span>View my work</span>
            </a>

            {/* Outlined button: "Start a project" */}
            <a
              href="#contact"
              onClick={handleScroll("#contact")}
              className="inline-flex items-center justify-center gap-2 rounded-lg font-medium border border-border text-primary hover:border-accent-uv hover:text-accent-uv bg-transparent text-sm px-6 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B] cursor-pointer"
            >
              <span>Start a project</span>
            </a>

            {/* Text link: "About me" */}
            <a
              href="#about"
              onClick={handleScroll("#about")}
              className="inline-flex items-center gap-1.5 text-sm font-mono text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B] rounded px-3 py-2 cursor-pointer ml-1"
            >
              <span>About me</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator at bottom */}
        <div className="mt-8 pt-4 flex justify-center">
          <a
            href="#apps"
            onClick={handleScroll("#apps")}
            className="inline-flex flex-col items-center gap-1.5 text-xs font-mono text-secondary/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF3D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B] rounded-md px-2 py-1 cursor-pointer"
            aria-label="Scroll to featured showcase"
          >
            <span className="tracking-[0.2em] uppercase text-[10px]">
              Explore
            </span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
