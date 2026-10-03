import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Layers, Zap, MapPin, CreditCard, Bell } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RegistrationMark, CropMarks } from "@/components/ui/PrintMarks";
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
      <main id="main-content" className="min-h-screen pt-24 pb-20 overflow-x-clip bg-bg">
        <div className="page-container">
          {/* Top Back Navigation */}
          <div className="mb-8 pt-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime rounded px-2 py-1 -ml-2"
            >
              <ArrowLeft size={14} />
              <span>Back to Portfolio</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-xs font-mono">
              <span className="font-bold text-accent-uv uppercase tracking-wider">
                Mobility / Ride-Hailing
              </span>
              <span className="text-secondary/40">•</span>
              <span className="px-2.5 py-0.5 rounded border border-border bg-surface text-primary font-bold">
                Independent product
              </span>
              <span className="text-secondary/40">•</span>
              <span className="px-2.5 py-0.5 rounded border border-border bg-surface text-accent-lime font-bold">
                Android release in progress
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-2 [text-wrap:balance]">
              MOVIQ Cabs
            </h1>
            <p className="text-lg sm:text-xl text-secondary font-mono tracking-wide mb-4">
              Cab Booking User App
            </p>

            <div className="p-3 rounded-md border-2 border-border bg-surface inline-flex items-center gap-2 mb-6 shadow-ink-sm">
              <span className="text-xs font-mono text-secondary">Role:</span>
              <span className="text-xs font-mono text-primary font-bold">
                Flutter Developer and Full-Stack Product Builder
              </span>
            </div>

            <p className="text-secondary leading-relaxed text-base sm:text-lg mb-6">
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
                className="inline-flex items-center justify-center gap-2 rounded-md font-mono font-bold border-2 border-border text-secondary bg-surface text-xs sm:text-sm px-5 py-2.5 cursor-not-allowed opacity-60 select-none shadow-ink-sm"
              >
                Coming soon on Google Play
              </button>
            </div>
          </div>

          {/* Graphic Proof Panel */}
          <div className="my-12 max-w-3xl">
            <ProjectMedia proofNumber="01" title="MOVIQ Cabs" className="w-full" />
          </div>

          {/* Architecture & Feature Breakdown */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            <div className="p-6 rounded-lg border-2 border-border bg-surface-card shadow-ink-sm flex flex-col relative">
              <CropMarks />
              <div className="w-10 h-10 rounded border-2 border-border bg-surface flex items-center justify-center text-accent-uv mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Live Map &amp; Geolocation</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Precise pickup/drop location picking, real-time vehicle movement tracking, and dynamic polyline route calculation.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-border bg-surface-card shadow-ink-sm flex flex-col relative">
              <CropMarks />
              <div className="w-10 h-10 rounded border-2 border-border bg-surface flex items-center justify-center text-accent-lime mb-4">
                <Zap size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Ride Lifecycle Engine</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Stateful booking management from driver dispatch and acceptance to arrival, OTP verification, and ride completion.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-border bg-surface-card shadow-ink-sm flex flex-col relative">
              <CropMarks />
              <div className="w-10 h-10 rounded border-2 border-border bg-surface flex items-center justify-center text-accent-uv mb-4">
                <CreditCard size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Secure Transactions</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Integrated digital payment flows, estimated fare calculation with surge handling, and detailed invoice generation.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-border bg-surface-card shadow-ink-sm flex flex-col relative">
              <CropMarks />
              <div className="w-10 h-10 rounded border-2 border-border bg-surface flex items-center justify-center text-accent-lime mb-4">
                <Bell size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Push Alerts &amp; Signals</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Instant WebSocket triggers and Firebase Cloud Messaging for instant driver updates, ride alerts, and trip receipts.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-border bg-surface-card shadow-ink-sm flex flex-col relative">
              <CropMarks />
              <div className="w-10 h-10 rounded border-2 border-border bg-surface flex items-center justify-center text-accent-uv mb-4">
                <Layers size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Flutter Architecture</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Clean state separation, high-performance UI rendering at 60fps, responsive typography, and Android platform reliability.
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-border bg-surface-card shadow-ink-sm flex flex-col relative">
              <CropMarks />
              <div className="w-10 h-10 rounded border-2 border-border bg-surface flex items-center justify-center text-accent-lime mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">Production Quality</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Built as a standalone production product with bulletproof error handling, offline reconnections, and secure data caching.
              </p>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="p-6 sm:p-8 rounded-lg border-2 border-border bg-surface-card shadow-ink mb-16 relative">
            <CropMarks />
            <div className="flex items-center justify-between pb-3 border-b-2 border-border mb-4">
              <h2 className="font-display text-xl font-bold text-primary">Tech Stack &amp; Infrastructure</h2>
              <RegistrationMark size={16} className="text-accent-uv" />
            </div>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "Node.js", "Google Maps API", "WebSockets", "Push Notifications", "Stripe API", "Supabase", "RESTful Architecture"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono font-medium px-3 py-1 rounded border border-border text-primary bg-surface"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border-2 border-border bg-surface hover:bg-surface-card text-sm font-mono font-bold text-primary shadow-ink-sm hover:-translate-y-0.5 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime"
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
