"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { number: "01", label: "Work", href: "#work", id: "work" },
  { number: "02", label: "About", href: "#about", id: "about" },
  { number: "03", label: "Stack", href: "#stack", id: "stack" },
  { number: "04", label: "Contact", href: "#contact", id: "contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { theme, toggleTheme } = useTheme();

  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Active section tracking via scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
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
      <header className="fixed top-0 left-0 right-0 z-40 bg-bg/95 backdrop-blur-md border-b-2 border-border transition-colors duration-200">
        <div className="page-container">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Left: UV Mark & Brand */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime rounded p-1 -ml-1 select-none"
              aria-label="UV WAS DEVELOPING by Uday Dobariya — home"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded border-2 border-border bg-surface shadow-ink-sm group-hover:bg-accent-lime group-hover:text-[#121014] transition-colors">
                <span className="font-mono text-xs font-bold text-primary group-hover:text-[#121014]">
                  UV
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-mono tracking-[0.16em] text-primary uppercase font-bold leading-tight">
                  UV WAS DEVELOPING
                </span>
                <span className="text-[10px] font-mono tracking-[0.08em] text-secondary leading-tight">
                  by Uday Dobariya
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation with Section-Number Markers */}
            <nav
              className="hidden md:flex items-center gap-1 px-3 py-1 rounded-md border-2 border-border bg-surface/80 shadow-ink-sm"
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
                    className={`relative px-3 py-1 text-xs font-mono font-medium transition-colors duration-150 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime ${
                      isActive
                        ? "text-primary font-bold bg-bg border border-border"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    <span className="text-[10px] text-accent-uv font-bold mr-1.5">
                      {link.number}
                    </span>
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: UV Lamp Switch & Action Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Lamp Switch Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "paper" ? "UV Lamp" : "Paper"} mode`}
                title={`Switch to ${theme === "paper" ? "UV Lamp" : "Paper"} mode`}
                className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border-2 border-border bg-surface text-xs font-mono font-bold text-primary shadow-ink-sm hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all cursor-pointer select-none"
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full border border-border transition-colors ${
                    theme === "uv"
                      ? "bg-accent-lime shadow-[0_0_8px_#C6FF3D]"
                      : "bg-[#121014]/25"
                  }`}
                />
                <span className="hidden sm:inline tracking-wider">
                  {theme === "uv" ? "UV LAMP: ON" : "UV LAMP: OFF"}
                </span>
                <span className="sm:hidden text-[10px]">
                  {theme === "uv" ? "UV" : "PAPER"}
                </span>
              </button>

              {/* Start a project CTA */}
              <div className="hidden lg:block">
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

              {/* Mobile menu toggle */}
              <button
                ref={menuToggleRef}
                className="md:hidden p-2 text-primary rounded-md border-2 border-border bg-surface shadow-ink-sm transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime cursor-pointer"
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
            className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-bg p-6 pt-20 border-b-2 border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Top Close Button & Lamp Mode */}
            <div className="absolute top-4 left-6 right-6 flex items-center justify-between pb-3 border-b-2 border-border">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-secondary">
                NAVIGATION
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded border-2 border-border bg-surface text-xs font-mono font-bold text-primary shadow-ink-sm"
                >
                  <span
                    className={`w-2 h-2 rounded-full border border-border ${
                      theme === "uv" ? "bg-accent-lime" : "bg-[#121014]/25"
                    }`}
                  />
                  <span>{theme === "uv" ? "UV ON" : "PAPER"}</span>
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    menuToggleRef.current?.focus();
                  }}
                  className="p-1.5 rounded border-2 border-border bg-surface text-primary shadow-ink-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Nav Links with Section-Number Markers */}
            <nav className="flex flex-col gap-2 my-auto pt-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-3 px-3 text-xl sm:text-2xl font-display font-bold text-primary hover:bg-surface border-2 border-border shadow-ink-sm rounded mb-2 transition-colors flex items-center justify-between"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.2 }}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-accent-uv px-2 py-0.5 rounded border border-border bg-bg">
                    {link.number}
                  </span>
                </motion.a>
              ))}

              <div className="pt-4">
                <LinkButton
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="w-full text-center justify-center py-3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                >
                  Start a project
                </LinkButton>
              </div>
            </nav>

            {/* Mobile Footer Colophon */}
            <div className="pt-4 border-t-2 border-border flex flex-col gap-2 text-xs font-mono text-secondary">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-lime border border-border" />
                <span>Available for select work</span>
              </div>
              <p className="text-[11px] text-muted font-mono">
                UV WAS DEVELOPING · Uday Dobariya
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
