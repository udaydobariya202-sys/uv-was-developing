"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";

// Inline brand icons (lucide-react doesn't include Github/LinkedIn in this version)
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

const contactLinks = [
  {
    label: "Email me",
    href: "mailto:your-email@example.com",
    Icon: Mail,
    variant: "primary" as const,
  },
  {
    label: "GitHub",
    href: "https://github.com/udaydobariya",
    Icon: GitHubIcon,
    variant: "secondary" as const,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/udaydobariya",
    Icon: LinkedInIcon,
    variant: "secondary" as const,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />

      {/* Ambient glow (bounded to prevent mobile horizontal scrollbar) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[180px] max-w-[80vw] md:w-[500px] md:h-[300px] rounded-full bg-accent-uv/4 blur-[60px] md:blur-[100px] pointer-events-none" />

      <div className="page-container text-center">
        <SectionHeading
          label="06 / Contact"
          title={"Have a product\nworth building?"}
          className="text-center items-center"
        />

        <motion.p
          className="text-base lg:text-lg text-secondary leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tell me what you&apos;re thinking. I&apos;m interested in thoughtful products,
          ambitious experiments, and practical software that solves a real problem.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {contactLinks.map((link) => (
            <LinkButton
              key={link.label}
              href={link.href}
              variant={link.variant}
              size="lg"
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            >
              <link.Icon size={16} />
              {link.label}
            </LinkButton>
          ))}
        </motion.div>

        <motion.p
          className="text-sm text-secondary/50 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Currently open to selected freelance and product opportunities.
        </motion.p>
      </div>
    </section>
  );
}
