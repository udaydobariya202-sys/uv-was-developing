import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ShieldCheck,
  Store,
  UtensilsCrossed,
  Lock,
  Layers,
  Sparkles,
  Check,
  Flame,
  Bell,
  Smartphone,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BigNight — On-Demand Food Delivery Mobile App (iOS & Android) | Uday Dobariya",
  description:
    "A cross-platform food delivery mobile app built with Flutter and BLoC for iOS and Android, featuring real-time kitchen tracking, dynamic dish customization, push notifications, and a connected database.",
  alternates: {
    canonical: "https://dcmlabs.online/projects/bignight",
  },
  openGraph: {
    title: "BigNight — On-Demand Food Delivery Mobile App (iOS & Android) | Uday Dobariya",
    description:
      "A cross-platform food delivery mobile app built with Flutter and BLoC for iOS and Android, featuring real-time kitchen tracking, dynamic dish customization, push notifications, and a connected database.",
    url: "https://dcmlabs.online/projects/bignight",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "BigNight — On-Demand Food Delivery Mobile App (iOS & Android) | Uday Dobariya",
    description:
      "A cross-platform food delivery mobile app built with Flutter and BLoC for iOS and Android, featuring real-time kitchen tracking, dynamic dish customization, push notifications, and a connected database.",
  },
};

const standoutFeatures = [
  {
    icon: Store,
    title: "Intelligent Multi-Restaurant Management",
    points: [
      {
        heading: "Smart Store Profiles",
        text: "Complete digital presence for every partner restaurant with high-resolution imagery, location tagging, and operating hours.",
      },
      {
        heading: "Live Kitchen Availability Controls",
        text: "Restaurant operators can toggle store statuses in real time (Open, Busy, Paused) to prevent kitchen overwhelm during peak dinner rushes.",
      },
      {
        heading: "Geo-Radius & Delivery Thresholds",
        text: "Dynamic calculations for minimum order requirements and kitchen preparation times to ensure realistic delivery estimates for customers.",
      },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Deep Menu Customization & Dish Builder",
    points: [
      {
        heading: "Multi-Tiered Choices",
        text: "Customers can personalize meals just like at a counter — selecting sizes, crust types, and spice levels.",
      },
      {
        heading: "Custom Add-Ons & Extras",
        text: "Dynamic topping selections, sauces, and combo upgrades with real-time price recalculation.",
      },
      {
        heading: "Live Inventory & Item Status",
        text: "Mark specific dishes or ingredients as sold out instantly, keeping menus 100% accurate.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Centralized Admin Command Center",
    points: [
      {
        heading: "Role-Based Operational Access",
        text: "Clear administrative separation between Superadmins, Store Managers, Delivery Partners, and Customers.",
      },
      {
        heading: "Zero-Trust Administrative Protection",
        text: "Fortified with database-level security protocols that prevent unauthorized role changes or privilege escalations.",
      },
      {
        heading: "Multi-Store Oversight",
        text: "A unified administrative view to monitor store onboarding, menus, active orders, and customer activity.",
      },
    ],
  },
  {
    icon: Lock,
    title: "Bank-Grade Checkout & Order Protection",
    points: [
      {
        heading: "Duplicate-Charge Prevention",
        text: "Advanced transaction locking ensures customers are never accidentally billed twice, even if their mobile connection flickers or they tap the order button multiple times.",
      },
      {
        heading: "Permanent Order Snapshotting",
        text: "Delivery addresses, landmark instructions, and chosen item modifiers are permanently frozen into the order history at the moment of checkout, ensuring complete delivery accuracy.",
      },
      {
        heading: "Instant Cart Synchronization",
        text: "Multi-item carts that seamlessly persist across sessions and handle complex custom orders effortlessly.",
      },
    ],
  },
  {
    icon: Sparkles,
    title: "Dynamic Merchandising & Curated Feeds",
    points: [
      {
        heading: "Engaging Promotional Banners",
        text: "Visually rich promotional carousels designed to showcase seasonal offers, happy hours, and new restaurant launches smoothly on mobile.",
      },
      {
        heading: "Curated Food Collections",
        text: "Administrative ability to curate spotlight sections (e.g., 'Chef's Specials', 'Trending Near You', 'Late Night Cravings').",
      },
    ],
  },
];

const technicalHighlights = [
  {
    icon: Smartphone,
    title: "Flutter Cross-Platform Architecture",
    detail:
      "Built with a single Flutter & Dart codebase delivering native 60fps performance, responsive mobile interfaces, and complete feature parity across iOS and Android.",
  },
  {
    icon: Layers,
    title: "Powerful BLoC State Management",
    detail:
      "Structured reactive event-driven architecture with BLoC to cleanly decouple UI from business logic, ensuring predictable state transitions, instant cart updates, and robust error recovery.",
  },
  {
    icon: Bell,
    title: "Real-Time Push Notifications",
    detail:
      "Integrated push notification pipeline delivering real-time order status milestones, kitchen preparation alerts, and delivery updates directly to users' devices.",
  },
  {
    icon: ShieldCheck,
    title: "Resilient Database & Caching",
    detail:
      "Reliable database integration with local persistence and transaction-level idempotency locks to ensure carts and order histories survive fluctuating mobile connectivity.",
  },
];

const problemsSolved = [
  {
    challenge: "Cross-Platform Consistency",
    solution:
      "Single codebase built in Flutter delivers identical visual fidelity, pixel-perfect layouts, and smooth 60fps animations on both iOS and Android.",
  },
  {
    challenge: "Complex Menu Variations & Cart State",
    solution:
      "A flexible BLoC state tree handles nested meal choices, extra toppings, and instant price recalculations with zero UI lag.",
  },
  {
    challenge: "Order Updates & Real-Time Awareness",
    solution:
      "Integrated push notification services deliver instant status alerts when orders are accepted, being prepared in the kitchen, or out for delivery.",
  },
  {
    challenge: "Network Dropouts & Duplicate Submissions",
    solution:
      "Local database caching with idempotent transaction tokens ensures customer carts persist and duplicate charges are prevented during connection flickers.",
  },
];

const techStack = [
  "Flutter",
  "Dart",
  "BLoC Pattern",
  "iOS",
  "Android",
  "REST APIs",
  "Database",
  "Push Notifications",
  "State Management",
  "Cart Persistence",
  "Idempotency Protection",
];

export default function BigNightCaseStudyPage() {
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
          <div className="max-w-3xl mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono">
              <span className="font-semibold text-[#D97706] uppercase tracking-wider flex items-center gap-1.5">
                <Flame size={13} className="text-[#D97706]" />
                01 // Mobile app, food delivery
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary tracking-tight mb-3 [text-wrap:balance]">
              BigNight
            </h1>
            <p className="text-lg sm:text-xl text-secondary font-sans tracking-normal mb-6">
              On-Demand Multi-Restaurant Food Delivery App
            </p>

            {/* Meta Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 border-y border-border mb-6 max-w-xl">
              <div>
                <span className="block text-[10px] font-mono text-muted uppercase tracking-wider mb-0.5">
                  Role
                </span>
                <span className="text-sm font-sans font-medium text-primary">
                  Design and development
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-muted uppercase tracking-wider mb-0.5">
                  Platform
                </span>
                <span className="text-sm font-sans font-medium text-primary">
                  iOS &amp; Android
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-muted uppercase tracking-wider mb-0.5">
                  Stack Core
                </span>
                <span className="text-sm font-sans font-medium text-primary">
                  Flutter · BLoC · Database
                </span>
              </div>
            </div>

            <p className="text-secondary leading-relaxed text-base sm:text-lg mb-8 font-sans">
              An enterprise-grade, high-performance food delivery mobile application built with Flutter
              and BLoC for iOS and Android, engineered to power seamless customer ordering, multi-vendor
              restaurant operations, push notification alerts, and reliable database persistence.
            </p>
          </div>

          {/* Showcase Panel: Warm Theme, Logo & Single Mobile Screenshot */}
          <div className="my-12 max-w-4xl">
            <div className="w-full rounded-2xl border border-[#E58B24]/30 bg-gradient-to-b from-[#1C1612] via-[#16120E] to-[#100D0B] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
              {/* Warm amber backdrop ambient glow */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E58B24]/10 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
                <div className="relative h-12 w-40 sm:w-48">
                  <Image
                    src="/images/apps/bignight/bignight_logo.png"
                    alt="BigNight Official Logo"
                    fill
                    className="object-contain object-left"
                    priority
                    sizes="(max-width: 640px) 160px, 192px"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-[#E58B24]/40 bg-[#E58B24]/10 text-[#F3B063] font-medium">
                    iOS &amp; Android App
                  </span>
                </div>
              </div>

              {/* The Single Real Screenshot Showcase */}
              <div className="py-10 flex flex-col items-center justify-center relative z-10">
                <div className="relative w-64 sm:w-72 md:w-80 aspect-[841/1870] rounded-2xl overflow-hidden border border-[#E58B24]/40 shadow-2xl bg-black">
                  <Image
                    src="/images/apps/bignight/image.png"
                    alt="BigNight customer ordering interface showcase screenshot"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 256px, 320px"
                  />
                </div>
                <p className="mt-4 text-xs font-mono text-[#D4CDC7]/70 text-center tracking-wide">
                  Live Customer Ordering Interface &amp; Dish Customization Engine
                </p>
              </div>

              {/* Showcase Footer Specs */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs relative z-10">
                <div>
                  <span className="block text-muted text-[10px] uppercase">Framework</span>
                  <span className="text-[#F3B063] font-medium">Flutter · Dart</span>
                </div>
                <div>
                  <span className="block text-muted text-[10px] uppercase">State Engine</span>
                  <span className="text-[#F3B063] font-medium">BLoC Pattern</span>
                </div>
                <div>
                  <span className="block text-muted text-[10px] uppercase">Platforms</span>
                  <span className="text-[#F3B063] font-medium">iOS &amp; Android</span>
                </div>
                <div>
                  <span className="block text-muted text-[10px] uppercase">Connected Services</span>
                  <span className="text-[#F3B063] font-medium">DB &amp; Push Alerts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Standout Features & Business Capabilities */}
          <div className="my-16 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#D97706] font-semibold">01</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs font-sans tracking-widest uppercase text-secondary font-medium">
                Scope &amp; App Capabilities
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-3">
              Standout Features &amp; Mobile Capabilities
            </h2>
            <p className="text-sm sm:text-base text-secondary font-sans leading-relaxed mb-8">
              BigNight delivers a frictionless food ordering experience across iOS and Android:
            </p>

            <div className="space-y-6">
              {standoutFeatures.map((feature, i) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="p-6 sm:p-7 rounded-xl border border-border bg-surface-card"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-surface border border-border text-[#D97706]">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-primary">
                        {`${i + 1}. ${feature.title}`}
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 pt-2">
                      {feature.points.map((pt) => (
                        <div
                          key={pt.heading}
                          className="p-4 rounded-lg bg-surface border border-border/80 flex flex-col justify-start"
                        >
                          <div className="flex items-center gap-1.5 text-xs font-sans font-semibold text-primary mb-1.5">
                            <Check size={13} className="text-[#D97706] shrink-0" />
                            <span>{pt.heading}</span>
                          </div>
                          <p className="text-xs text-secondary font-sans leading-relaxed">
                            {pt.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Highlights & Architecture */}
          <div className="my-16 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#D97706] font-semibold">02</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs font-sans tracking-widest uppercase text-secondary font-medium">
                Engineering Integrity
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-8">
              Technical Highlights &amp; Mobile Architecture
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {technicalHighlights.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={tech.title}
                    className="p-6 rounded-xl border border-border bg-surface-card flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-[#D97706] mb-4">
                      <IconComponent size={18} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-primary mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed font-sans">
                      {tech.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Problems Solved Table */}
          <div className="my-16 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#D97706] font-semibold">03</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs font-sans tracking-widest uppercase text-secondary font-medium">
                Business &amp; Mobile Engineering Solutions
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
              Key Problems Solved
            </h2>
            <p className="text-sm sm:text-base text-secondary font-sans leading-relaxed mb-6">
              How BigNight addresses critical mobile performance, state consistency, and UX challenges:
            </p>

            <div className="rounded-xl border border-border bg-surface-card overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 bg-surface border-b border-border text-xs font-mono uppercase text-muted tracking-wider p-4">
                <div className="md:col-span-4 font-semibold text-primary">The Challenge</div>
                <div className="md:col-span-8 font-semibold text-primary mt-2 md:mt-0">
                  How BigNight Solves It
                </div>
              </div>
              <div className="divide-y divide-border">
                {problemsSolved.map((row) => (
                  <div
                    key={row.challenge}
                    className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 items-start hover:bg-surface/50 transition-colors"
                  >
                    <div className="md:col-span-4 font-sans font-semibold text-sm text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                      {row.challenge}
                    </div>
                    <div className="md:col-span-8 font-sans text-xs sm:text-sm text-secondary leading-relaxed">
                      {row.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="p-6 sm:p-8 rounded-xl border border-border bg-surface-card mb-16 max-w-4xl">
            <h2 className="font-display text-xl font-semibold text-primary mb-4">
              Technologies &amp; Core Competencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tag) => (
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
          <div className="flex justify-center max-w-4xl">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-strong bg-surface hover:bg-surface-card text-sm font-sans font-medium text-primary hover:-translate-y-[1px] active:translate-y-0 transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
