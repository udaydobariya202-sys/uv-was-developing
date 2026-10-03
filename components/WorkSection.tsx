"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export function WorkSection() {
  return (
    <section id="work" className="relative py-20 sm:py-28 lg:py-36 bg-bg">
      <div className="page-container">
        <SectionHeading
          label="02 / Selected Work"
          title="Featured systems & applications."
          subtitle="Production platforms, client applications, and focused technical prototypes built for real users."
        />

        {/* Full-Width Editorial Rows */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-12 text-xs font-mono text-secondary/60 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          More production client systems in progress.
        </motion.p>
      </div>
    </section>
  );
}
