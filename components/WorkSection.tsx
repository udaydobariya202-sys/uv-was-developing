"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export function WorkSection() {
  return (
    <section id="work" className="relative py-20 sm:py-28 lg:py-36 bg-bg border-t border-border">
      <div className="page-container">
        <SectionHeading
          number="01"
          label="Selected Work"
          title="Featured systems & applications."
          subtitle="Production mobile applications, full-stack ecosystems, and focused technical platforms built for real users."
        />

        {/* Reusable Editorial Project Rows — no placeholders or status badges */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
