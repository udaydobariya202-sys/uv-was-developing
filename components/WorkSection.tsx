"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function WorkSection() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="page-container">
        <SectionHeading
          label="02 / Selected Work"
          title="Things I've been building."
          subtitle="A selection of products, prototypes, and experiments I've been working on — each shaped around a real problem or a genuine curiosity."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-10 text-sm text-secondary/60 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          More work in progress — check back soon.
        </motion.p>
      </div>
    </section>
  );
}
