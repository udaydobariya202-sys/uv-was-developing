"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "udaydobariya202@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "Mobile App (Flutter)",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — from ${formData.name || "Product Lead"}`);
    const body = encodeURIComponent(
      `Hi Uday,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Overview:\n${formData.message}\n`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36 bg-bg border-t border-border">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-6 flex flex-col">
            <SectionHeading
              number="05"
              label="Contact"
              title="Tell me about your project."
              subtitle="Have a mobile product, focused mobile application, or scalable backend to build? Reach out directly — I typically respond within 24 hours."
            />

            {/* Email Direct Action Card */}
            <div className="p-6 rounded-xl border border-border bg-surface-card mb-6">
              <span className="text-xs font-sans uppercase tracking-widest text-secondary font-medium mb-2 block">
                Direct Email
              </span>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-sm sm:text-base text-primary hover:text-accent transition-colors font-medium"
                >
                  {email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-strong bg-surface text-xs font-sans text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-accent" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="grid grid-cols-2 gap-3.5 mb-6">
              <a
                href="https://linkedin.com/in/udaydobariya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-border bg-surface-card hover:border-border-strong transition-colors flex items-center justify-between text-xs font-sans text-secondary hover:text-primary group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedInIcon size={16} />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight size={13} className="text-muted group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://github.com/udaydobariya202-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-border bg-surface-card hover:border-border-strong transition-colors flex items-center justify-between text-xs font-sans text-secondary hover:text-primary group"
              >
                <div className="flex items-center gap-2.5">
                  <GitHubIcon size={16} />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight size={13} className="text-muted group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Availability note */}
            <div className="flex items-center gap-2 text-xs font-sans text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              <span>Available for select engineering sprints &amp; dedicated product contracts</span>
            </div>
          </div>

          {/* Right Column: Effortless Message Composer Card */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-border bg-surface-card p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold text-primary mb-1">
                Start an inquiry
              </h3>
              <p className="text-xs text-secondary mb-6 font-sans">
                Fill this brief outline to start a conversation directly via email.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4 font-sans">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-sans text-secondary mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-sm text-primary placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-sans text-secondary mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-sm text-primary placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="project-type" className="block text-xs font-sans text-secondary mb-1.5 font-medium">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-sm text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors cursor-pointer"
                  >
                    <option value="Mobile App (Flutter)">Mobile App (Flutter &amp; BLoC)</option>
                    <option value="Full-Stack System">Full-Stack Application (Flutter + Backend APIs)</option>
                    <option value="Contract Sprint">Dedicated Sprint Contract</option>
                    <option value="Architecture Review">Codebase &amp; Architecture Audit</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="project-details" className="block text-xs font-sans text-secondary mb-1.5 font-medium">
                    Project Brief
                  </label>
                  <textarea
                    id="project-details"
                    required
                    rows={4}
                    placeholder="Briefly describe what you are looking to build, timeline, and core requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-sm text-primary placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-lg font-sans font-medium bg-primary text-bg hover:bg-[#2c2a32] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg text-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
