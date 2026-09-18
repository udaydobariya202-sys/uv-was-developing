"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

// Abstract ultraviolet ambient visual
function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[320px] lg:min-h-0 flex items-center justify-center">
      {/* Outer ambient ring */}
      <motion.div
        className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full border border-accent-uv/10"
        animate={{ scale: [1, 1.04, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mid ring */}
      <motion.div
        className="absolute w-52 h-52 lg:w-72 lg:h-72 rounded-full border border-accent-uv/20"
        animate={{ scale: [1, 1.08, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {/* Inner ring */}
      <motion.div
        className="absolute w-36 h-36 lg:w-48 lg:h-48 rounded-full border border-accent-uv/30"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Atmospheric glow */}
      <div className="absolute w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-accent-uv/5 blur-3xl" />
      <div className="absolute w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-accent-blue/5 blur-2xl translate-x-8 translate-y-4" />

      {/* UV mark at center */}
      <div className="relative z-10 text-center">
        <motion.div
          className="relative"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="text-6xl lg:text-8xl font-bold font-mono tracking-tighter select-none"
            style={{
              background:
                "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 40%, #38BDF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            UV
          </span>
          {/* Glow behind text */}
          <div className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-accent-uv to-accent-blue rounded-full scale-150" />
        </motion.div>
        <motion.p
          className="mt-1 text-[9px] font-mono tracking-[0.35em] text-accent-uv/60 uppercase"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          Was Developing
        </motion.p>
        <motion.p
          className="text-[8px] font-mono tracking-[0.25em] text-secondary/50 uppercase mt-0.5"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          by Uday Dobariya
        </motion.p>
      </div>

      {/* Orbiting dots */}
      {[
        { delay: 0, radius: "120px", size: "w-1.5 h-1.5", color: "bg-accent-uv/70" },
        { delay: 3, radius: "150px", size: "w-1 h-1", color: "bg-accent-blue/70" },
        { delay: 6, radius: "90px", size: "w-1 h-1", color: "bg-violet-300/50" },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute ${dot.size} rounded-full ${dot.color}`}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: dot.delay,
          }}
          style={{
            transformOrigin: `calc(50% + ${dot.radius}) 50%`,
            left: "50%",
            top: "50%",
            marginLeft: `-4px`,
            marginTop: `-4px`,
          }}
        />
      ))}

      {/* Code fragments */}
      <motion.div
        className="absolute top-8 right-4 lg:top-12 lg:right-8 text-[9px] font-mono text-secondary/40 text-right leading-relaxed"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <p>flutter build</p>
        <p className="text-accent-uv/40">--release</p>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-4 lg:bottom-12 lg:left-8 text-[9px] font-mono text-secondary/40 leading-relaxed"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      >
        <p className="text-accent-blue/40">npm run dev</p>
        <p>ready ✓</p>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="hero-section relative min-h-[auto] md:min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background glow (bounded and hidden on mobile to prevent overflow & content obstruction) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] max-w-[70vw] max-h-[70vw] md:w-[600px] md:h-[600px] rounded-full bg-accent-uv/4 md:bg-accent-uv/3 blur-[50px] md:blur-[120px] pointer-events-none z-0" />
      <div className="hidden md:block absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-accent-blue/3 blur-[100px] pointer-events-none z-0" />

      <div className="page-container relative z-10 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-full"
          >
            {/* Eyebrow / Brand Line */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent-uv/60 shrink-0" />
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-xs font-mono tracking-[0.2em] text-accent-uv font-semibold uppercase">
                  UV WAS DEVELOPING
                </span>
                <span className="text-secondary/40 text-xs font-mono">•</span>
                <span className="text-xs font-mono tracking-[0.14em] text-secondary">
                  by Uday Dobariya
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.25rem,8vw,3.75rem)] md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary leading-[1.08] md:leading-[1.1] mb-6"
            >
              I build{" "}
              <span
                className="font-semibold"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #A78BFA, #38BDF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                production-ready Flutter apps
              </span>{" "}
              and full-stack digital products.
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl mb-8"
            >
              I help startups and businesses turn complex ideas into reliable mobile apps, backend systems, and polished product experiences. Working as an independent freelancer under UV WAS DEVELOPING.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
              <LinkButton
                href="#work"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View my work
              </LinkButton>
              <LinkButton
                href="#contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start a project
              </LinkButton>
              <LinkButton
                href="#about"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-center justify-center text-secondary hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About me
              </LinkButton>
            </motion.div>

            {/* Status */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs text-secondary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance Flutter & full-stack development
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:block h-[480px]"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
