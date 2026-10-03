"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

const navLinks = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll detection for blurred background & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 140;
      let current = "";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = link.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle Escape & Tab key trapping when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
          menuToggleRef.current?.focus();
        } else if (e.key === "Tab" && mobileMenuRef.current) {
          const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-lime focus:text-[#0B0A0C] focus:font-mono focus:text-xs focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          scrolled
            ? "bg-[#0B0A0C]/85 backdrop-blur-md border-b border-border shadow-xs shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="page-container">
          <div className="flex items-center justify-between h-16">
            {/* Left: Brand & UV mark */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime rounded p-1 -ml-1"
              aria-label="UV WAS DEVELOPING by Uday Dobariya — home"
            >
              {/* Clean UV Mark */}
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-surface border border-border group-hover:border-accent-lime/40 transition-colors">
                <span className="font-mono text-xs font-bold text-primary group-hover:text-accent-lime transition-colors">
                  UV
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono tracking-[0.16em] text-primary uppercase font-semibold leading-tight">
                  UV WAS DEVELOPING
                </span>
                <span className="text-[10px] font-mono tracking-[0.08em] text-secondary leading-tight">
                  by Uday Dobariya
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation with Active Indicator */}
            <nav
              className="hidden md:flex items-center gap-1 p-1 rounded-lg border border-border/60 bg-surface/50 backdrop-blur-xs"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-3.5 py-1 text-xs font-mono transition-colors duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-3 right-3 h-0.5 bg-accent-lime rounded-full"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Availability Pill & Action Button */}
            <div className="flex items-center gap-3">
              {/* Availability pill */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-mono text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                <span>Available for select work</span>
              </div>

              {/* Start a project CTA button */}
              <div className="hidden sm:block">
                <LinkButton
                  href="#contact"
                  variant="primary"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                >
                  Start a project
                </LinkButton>
              </div>

              {/* Mobile menu hamburger toggle */}
              <button
                ref={menuToggleRef}
                className="md:hidden p-2 text-secondary hover:text-primary rounded-lg border border-border hover:border-accent-lime/40 bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime cursor-pointer"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu with focus trap and Esc handling */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-[#0B0A0C]/98 backdrop-blur-xl p-6 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Top Close Button */}
            <button
              onClick={() => {
                setMenuOpen(false);
                menuToggleRef.current?.focus();
              }}
              className="absolute top-5 right-5 p-2 rounded-lg border border-border text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

            {/* Nav Links */}
            <nav className="flex flex-col gap-2 my-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-3 text-2xl font-display font-bold text-primary hover:text-accent-lime transition-colors border-b border-border/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime rounded"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="pt-6">
                <LinkButton
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="w-full text-center justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                >
                  Start a project
                </LinkButton>
              </div>
            </nav>

            {/* Mobile Footer Status */}
            <div className="pt-6 border-t border-border flex flex-col gap-3 text-xs font-mono text-secondary">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                <span>Available for select work</span>
              </div>
              <p className="text-[11px] text-muted">
                UV WAS DEVELOPING · Uday Dobariya
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
