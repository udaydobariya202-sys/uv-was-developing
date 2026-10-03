import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Layers, Zap, MapPin, CreditCard, Bell } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectMedia } from "@/components/ui/ProjectMedia";

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
  },
  twitter: {
    card: "summary",
    title: "MOVIQ Cabs — Cab Booking User App | Uday Dobariya",
    description:
      "Explore MOVIQ Cabs, a Flutter cab booking user app built with connected backend services, ride lifecycle flows, maps, payments, notifications, and structured product architecture.",
  },
};

export default function MoviqCaseStudyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen pt-28 pb-20 overflow-x-clip bg-bg">
        <div className="page-container">
          {/* Top Back Navigation */}
          <div className="mb-10">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-sans font-medium text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1 -ml-2"
            >
              <ArrowLeft size={14} />
              <span>Back to Portfolio</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="max-w-3xl mb-14">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-xs font-mono">
              <span className="font-semibold text-accent uppercase tracking-wider">
                Mobility / Ride-Hailing
              </span>
              <span className="text-secondary/40">•</span>
              <span className="px-2.5 py-0.5 rounded-md border border-border bg-surface text-primary font-medium">
                Independent product
              </span>
              <span className="text-secondary/40">•</span>
              <span className="px-2.5 py-0.5 rounded-md border border-border bg-surface text-accent font-medium">
                Android release in progress
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary tracking-tight mb-3 [text-wrap:balance]">
              MOVIQ Cabs
            </h1>
            <p className="text-lg sm:text-xl text-secondary font-sans tracking-normal mb-6">
              Cab Booking User App
            </p>

            <div className="p-3 rounded-lg border border-border bg-surface-card inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-sans text-secondary font-medium">Role:</span>
              <span className="text-xs font-sans text-primary font-semibold">
                Flutter Developer and Full-Stack Product Builder
              </span>
            </div>

            <p className="text-secondary leading-relaxed text-base sm:text-lg mb-8 font-sans">
              MOVIQ Cabs is a Flutter-based passenger cab booking application engineered for responsive
              booking flows, real-time map location tracking, flexible ride tiers, secure payment gateways,
              and live ride lifecycle states.
            </p>

            {/* Store status button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium border border-border text-muted bg-surface text-xs sm:text-sm px-5 py-2.5 cursor-not-allowed opacity-60 select-none"
              >
                Coming soon on Google Play
              </button>
            </div>
          </div>

          {/* Graphic Proof Panel */}
          <div className="my-12 max-w-3xl">
            <ProjectMedia title="MOVIQ Cabs" className="w-full" />
          </div>

          {/* Architecture & Feature Breakdown */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            <div className="p-6 rounded-xl border border-border bg-surface-card flex flex-col">
              <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-accent mb-4">
                <MapPin size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Live Map &amp; Geolocation</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                Precise pickup/drop location picking, real-time vehicle movement tracking, and dynamic polyline route calculation.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface-card flex flex-col">
              <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-accent mb-4">
                <Zap size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Ride Lifecycle Engine</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                Stateful booking management from driver dispatch and acceptance to arrival, OTP verification, and ride completion.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface-card flex flex-col">
              <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-accent mb-4">
                <CreditCard size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Secure Transactions</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                Integrated digital payment flows, estimated fare calculation with surge handling, and detailed invoice generation.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface-card flex flex-col">
              <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-accent mb-4">
                <Bell size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Push Alerts &amp; Signals</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                Instant WebSocket triggers and Firebase Cloud Messaging for instant driver updates, ride alerts, and trip receipts.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface-card flex flex-col">
              <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-accent mb-4">
                <Layers size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Flutter Architecture</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                Clean state separation, high-performance UI rendering at 60fps, responsive typography, and Android platform reliability.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-surface-card flex flex-col">
              <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-accent mb-4">
                <ShieldCheck size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">Production Quality</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                Built as a standalone production product with bulletproof error handling, offline reconnections, and secure data caching.
              </p>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="p-6 sm:p-8 rounded-xl border border-border bg-surface-card mb-16">
            <h2 className="font-display text-xl font-semibold text-primary mb-4">Tech Stack &amp; Infrastructure</h2>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "Node.js", "Google Maps API", "WebSockets", "Push Notifications", "Stripe API", "Supabase", "RESTful Architecture"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-md border border-border text-secondary bg-surface"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-strong bg-surface hover:bg-surface-card text-sm font-sans font-medium text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
