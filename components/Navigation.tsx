"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

const navLinks = [
  { number: "01", label: "Work", href: "#work", id: "work" },
  { number: "02", label: "About", href: "#about", id: "about" },
  { number: "03", label: "Stack", href: "#stack", id: "stack" },
  { number: "04", label: "Contact", href: "#contact", id: "contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 160;
      let current = "";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) current = link.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="page-container">
          <div className="flex items-center justify-between h-16">
            {/* Left: Brand */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1 -ml-1"
              aria-label="UV WAS DEVELOPING by Uday Dobariya — home"
            >
              <span className="text-xs tracking-widest text-primary uppercase font-sans font-semibold leading-tight">
                UV WAS DEVELOPING
              </span>
              <span className="text-[10px] tracking-wide text-secondary leading-tight font-sans">
                by Uday Dobariya
              </span>
            </a>

            {/* Center: Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-1"
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
                    className={`px-4 py-2 text-sm font-sans transition-colors duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
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

              <button
                ref={menuToggleRef}
                className="md:hidden p-2 text-secondary hover:text-primary rounded-lg border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
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

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 z-50 md:hidden flex flex-col bg-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <span className="text-xs tracking-widest text-primary uppercase font-sans font-semibold">
                UV WAS DEVELOPING
              </span>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  menuToggleRef.current?.focus();
                }}
                className="p-2 rounded-lg border border-border text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between py-4 border-b border-border text-primary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.2 }}
                >
                  <span className="font-display text-2xl font-semibold">{link.label}</span>
                  <span className="font-mono text-xs text-muted">{link.number}</span>
                </motion.a>
              ))}
              <div className="pt-6">
                <LinkButton
                  href="#contact"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                >
                  Start a project
                </LinkButton>
              </div>
            </nav>

            {/* Footer */}
            <div className="px-6 pb-8 border-t border-border pt-4">
              <div className="flex items-center gap-2 text-xs font-sans text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                <span>Available for select work</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
