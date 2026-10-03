import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Smartphone, Zap, MapPin, CreditCard, Bell } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MOVIQ Cabs — Cab Booking User App | Uday Dobariya",
  description:
    "Explore MOVIQ Cabs, a Flutter cab booking user app built with connected backend services, ride lifecycle flows, maps, payments, notifications, and structured product architecture.",
  alternates: {
    canonical: "https://dcmlabs.online/projects/moviq",
  },
  openGraph: {
    title: "MOVIQ Cabs — Cab Booking User App | Uday Dobariya",
    description:
      "Explore MOVIQ Cabs, a Flutter cab booking user app built with connected backend services, ride lifecycle flows, maps, payments, notifications, and structured product architecture.",
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
      "Explore MOVIQ Cabs, a Flutter cab booking user app built with connected backend services, ride lifecycle flows, maps, payments, notifications, and structured product architecture.",
  },
};

export default function MoviqCaseStudyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen pt-24 pb-20 overflow-x-clip bg-bg">
        <div className="page-container">
          {/* Top Back Navigation */}
          <div className="mb-8 pt-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime rounded px-2 py-1 -ml-2"
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
              <span className="text-secondary/40">{"\u2022"}</span>
              <span className="text-[11px] font-mono tracking-wider px-2.5 py-0.5 rounded-full border border-border bg-surface text-accent-lime">
                Production project / Client work
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-2 [text-wrap:balance]">
              MOVIQ Cabs
            </h1>
            <p className="text-lg sm:text-xl text-secondary font-mono tracking-wide mb-4">
              Cab Booking User App
            </p>

            <div className="p-3 rounded-lg border border-border bg-surface inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-mono text-secondary/60">Role:</span>
              <span className="text-xs font-mono text-primary font-medium">
                Flutter Developer and Full-Stack Product Builder
              </span>
            </div>

            <p className="text-secondary leading-relaxed text-base sm:text-lg">
              MOVIQ Cabs is a Flutter-based passenger cab booking application engineered for responsive
              booking flows, real-time map location tracking, flexible ride tiers, secure payment gateways,
              and live ride lifecycle states.
            </p>
          </div>

          {/* Centered Phone Frame Showcase */}
          <div className="my-14 flex flex-col items-center justify-center">
            <div className="relative w-full flex flex-col items-center justify-center py-6">
              {/* Clean Hardware Phone Frame */}
              <div className="relative w-[240px] sm:w-[270px] lg:w-[285px] aspect-[1220/2712] flex-shrink-0 rounded-[2.5rem] p-2 sm:p-2.5 bg-[#0c0c11] border-2 border-white/[0.12] shadow-2xl flex flex-col">
                {/* Speaker slit */}
                <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-1.5 shrink-0" />

                {/* Inner Viewport */}
                <div className="relative w-full flex-1 rounded-[1.8rem] overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    src="/images/apps/moviq/moviq-home.webp"
                    alt="MOVIQ Cabs cab booking user app home screen."
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 270px, 285px"
                    priority
                  />
                </div>
              </div>

              {/* Caption */}
              <p className="mt-6 text-xs font-mono text-secondary tracking-wider text-center">
                MOVIQ Cabs — Live Flutter home screen interface (1220 {"\u00D7"} 2712)
              </p>
            </div>
          </div>

          {/* Architecture & Feature Breakdown */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            <div className="p-6 rounded-2xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-accent-uv/10 border border-accent-uv/20 flex items-center justify-center text-accent-uv mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Live Map &amp; Geolocation</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Precise pickup/drop location picking, real-time vehicle movement tracking, and dynamic polyline route calculation.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center text-accent-lime mb-4">
                <Zap size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Ride Lifecycle Engine</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Stateful booking management from driver dispatch and acceptance to arrival, OTP verification, and ride completion.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-accent-uv/10 border border-accent-uv/20 flex items-center justify-center text-accent-uv mb-4">
                <CreditCard size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Secure Transactions</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Integrated digital payment flows, estimated fare calculation with surge handling, and detailed invoice generation.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center text-accent-lime mb-4">
                <Bell size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Push Alerts &amp; Signals</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Instant WebSocket triggers and Firebase Cloud Messaging for instant driver updates, ride alerts, and trip receipts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-accent-uv/10 border border-accent-uv/20 flex items-center justify-center text-accent-uv mb-4">
                <Smartphone size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Flutter Architecture</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Clean state separation, high-performance UI rendering at 60fps, responsive typography, and cross-platform reliability.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-surface flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-accent-lime/10 border border-accent-lime/20 flex items-center justify-center text-accent-lime mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Production Quality</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Built as a client production product with bulletproof error handling, offline reconnections, and secure data caching.
              </p>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="p-7 sm:p-8 rounded-2xl border border-border bg-surface mb-16">
            <h2 className="font-display text-xl font-bold text-primary mb-4">Tech Stack &amp; Infrastructure</h2>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "Node.js", "Google Maps API", "WebSockets", "Push Notifications", "Stripe API", "Supabase", "RESTful Architecture"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-md border border-border text-secondary bg-[#0B0A0C]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Back Link */}
          <div className="flex justify-center">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface hover:border-accent-lime hover:text-accent-lime text-sm font-mono text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime"
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
