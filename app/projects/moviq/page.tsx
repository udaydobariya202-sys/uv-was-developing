import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Smartphone, Zap, MapPin, CreditCard, Bell } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MOVIQ Cabs — Cab Booking User App | Uday Dobariya",
  description:
    "Case study of MOVIQ Cabs, a Flutter cab booking user app built with maps, ride lifecycle states, payments, notifications, and structured product architecture.",
  alternates: {
    canonical: "https://dcmlabs.online/projects/moviq",
  },
  openGraph: {
    title: "MOVIQ Cabs — Cab Booking User App | Uday Dobariya",
    description:
      "Case study of MOVIQ Cabs, a Flutter cab booking user app built with maps, ride lifecycle states, payments, notifications, and structured product architecture.",
    url: "https://dcmlabs.online/projects/moviq",
    type: "article",
    images: [
      {
        url: "/images/apps/moviq/moviq-home.webp",
        width: 1220,
        height: 2712,
        alt: "MOVIQ Cabs cab booking user app home screen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOVIQ Cabs — Cab Booking User App | Uday Dobariya",
    description:
      "Case study of MOVIQ Cabs, a Flutter cab booking user app built with maps, ride lifecycle states, payments, notifications, and structured product architecture.",
  },
};

export default function MoviqCaseStudyPage() {
  const accentHue = "270";

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen pt-24 pb-20 overflow-x-clip">
        {/* Ambient background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[320px] md:w-[680px] h-[360px] rounded-full bg-accent-uv/8 blur-[120px] pointer-events-none -z-10" />

        <div className="page-container">
          {/* Top back navigation */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv rounded px-2 py-1 -ml-2"
            >
              <ArrowLeft size={14} />
              <span>Back to Portfolio</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono tracking-widest text-accent-uv uppercase">
                Mobility / Ride-Hailing
              </span>
              <span className="text-secondary/40">•</span>
              <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-400/10 border-emerald-400/20">
                Production project / Client work
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-2">
              MOVIQ Cabs
            </h1>
            <p className="text-lg sm:text-xl text-secondary font-mono tracking-wide mb-4">
              Cab Booking User App
            </p>

            <div className="p-3 rounded-lg border border-border bg-surface/60 backdrop-blur-sm inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-mono text-secondary">Role:</span>
              <span className="text-xs font-mono text-primary font-semibold">
                Flutter Developer and Full-Stack Product Builder
              </span>
            </div>

            <p className="text-secondary leading-relaxed sm:text-lg">
              MOVIQ Cabs is a Flutter-based passenger cab booking application engineered for responsive
              booking flows, real-time map location tracking, flexible ride tiers, secure payment gateways,
              and live ride lifecycle states.
            </p>
          </div>

          {/* Centered Phone Frame Showcase */}
          <div className="my-14 flex flex-col items-center justify-center">
            <div className="relative w-full flex flex-col items-center justify-center py-6">
              {/* Outer Phone Wrapper */}
              <div className="relative w-[240px] sm:w-[270px] lg:w-[290px] h-[480px] sm:h-[540px] lg:h-[580px] flex-shrink-0 transition-shadow duration-500 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                {/* Outer Phone Bezel */}
                <div
                  className="absolute inset-0 rounded-[2.5rem] border-2 z-20 pointer-events-none"
                  style={{
                    borderColor: `hsl(${accentHue} 60% 48% / 0.9)`,
                  }}
                />

                {/* Hardware side buttons */}
                <div
                  className="absolute -left-[3px] top-[85px] w-[3px] h-8 rounded-l-sm pointer-events-none"
                  style={{ background: `hsl(${accentHue} 45% 35%)` }}
                />
                <div
                  className="absolute -left-[3px] top-[130px] w-[3px] h-8 rounded-l-sm pointer-events-none"
                  style={{ background: `hsl(${accentHue} 45% 35%)` }}
                />
                <div
                  className="absolute -right-[3px] top-[110px] w-[3px] h-14 rounded-r-sm pointer-events-none"
                  style={{ background: `hsl(${accentHue} 45% 35%)` }}
                />

                {/* Phone Screen Area */}
                <div
                  className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden"
                  style={{
                    background: `linear-gradient(160deg, hsl(${accentHue} 25% 8%) 0%, hsl(${accentHue} 15% 5%) 100%)`,
                  }}
                >
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/75 rounded-b-2xl z-20 flex items-center justify-center gap-1 pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/90" />
                    <div className="w-0.5 h-3 rounded-full bg-black/60 mx-0.5" />
                  </div>

                  {/* Screen ambient glow */}
                  <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30"
                    style={{ background: `hsl(${accentHue} 80% 60%)` }}
                  />

                  {/* Positioned Inner screen viewport */}
                  <div className="inner-screen-viewport absolute inset-0 overflow-hidden flex items-center justify-center">
                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                      <Image
                        src="/images/apps/moviq/moviq-home.webp"
                        alt="MOVIQ Cabs cab booking user app home screen."
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 640px) 240px, (max-width: 1024px) 270px, 290px"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Screen glass reflection sheen */}
                <div className="absolute inset-[3px] rounded-[2.3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />

                {/* Outer ambient blur glow */}
                <div
                  className="absolute -inset-4 rounded-[3.5rem] blur-2xl pointer-events-none opacity-20"
                  style={{ background: `hsl(${accentHue} 70% 50%)` }}
                />
              </div>

              {/* Caption */}
              <p className="mt-6 text-xs font-mono text-secondary tracking-wider text-center">
                MOVIQ Cabs — Live Flutter home screen interface
              </p>
            </div>
          </div>

          {/* Architecture & Feature Breakdown */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            <div className="p-6 rounded-xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-accent-uv mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Live Map & Geolocation</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Precise pickup/drop location picking, real-time vehicle movement tracking, and dynamic polyline route calculation.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Zap size={20} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Ride Lifecycle Engine</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Stateful booking management from driver dispatch and acceptance to arrival, OTP verification, and ride completion.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
                <CreditCard size={20} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Secure Transactions</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Integrated digital payment flows, estimated fare calculation with surge handling, and detailed invoice generation.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Bell size={20} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Push Alerts & Signals</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Instant WebSocket triggers and Firebase Cloud Messaging for instant driver updates, ride alerts, and trip receipts.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-4">
                <Smartphone size={20} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Flutter Architecture</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Clean state separation, high-performance UI rendering at 60fps, responsive typography, and cross-platform reliability.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Production Quality</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Built as a client production product with bulletproof error handling, offline reconnections, and secure data caching.
              </p>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="p-8 rounded-2xl border border-border bg-surface/50 mb-16">
            <h2 className="text-xl font-semibold text-primary mb-4">Tech Stack & Infrastructure</h2>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "Node.js", "Google Maps API", "WebSockets", "Push Notifications", "Razorpay / Stripe", "RESTful Architecture"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-md border border-border text-secondary bg-bg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="flex justify-center">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface hover:bg-surface-elevated hover:border-accent-uv text-sm font-mono text-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-uv"
            >
              <ArrowLeft size={16} />
              <span>Back to all projects</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
