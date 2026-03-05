"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { motion } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const PLACEHOLDER_IMAGE = "/projects/available_soon.jpg";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isPlaceholder = project.image === PLACEHOLDER_IMAGE;
  const isEven = index % 2 === 0;
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className="border-t border-border py-12 lg:py-16 group/card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={cn(
          "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        )}
      >
        {/* Image */}
        <div className={cn("order-1", !isEven && "lg:order-2")}>
          <div className="relative aspect-[16/10] rounded-lg p-[2px]">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
          <div className="relative h-full overflow-hidden bg-card rounded-lg border border-border/50 shadow-sm group-hover/card:shadow-xl group-hover/card:border-border transition-all duration-500">
            {isPlaceholder ? (
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-primary/5 flex flex-col items-center justify-center gap-5">
                <span className="font-mono text-xs text-muted-foreground/40 uppercase tracking-[0.3em]">
                  Coming Soon
                </span>
                <div className="flex gap-2 flex-wrap justify-center px-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="font-heading font-bold text-3xl text-foreground/10 tracking-tight">
                  {project.title}
                </span>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title} — ${project.description.slice(0, 60)}`}
                fill
                className="w-full h-full object-cover group-hover/card:scale-[1.03] transition-transform duration-700 ease-out"
              />
            )}
          </div>
          </div>
        </div>

        {/* Content */}
        <div className={cn("order-2", !isEven && "lg:order-1")}>
          {/* Project number */}
          <span className="font-mono text-xs text-muted-foreground/40 tracking-wider mb-4 block">
            {projectNumber}
          </span>

          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="outline"
              className="text-xs text-muted-foreground border-border font-mono"
            >
              {project.category}
            </Badge>
            {project.featured && (
              <Badge className="bg-primary/10 text-primary border-none text-xs">
                Featured
              </Badge>
            )}
          </div>

          <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-4 text-foreground group-hover/card:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-body-lg text-muted-foreground mb-8">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary inline-flex items-center gap-2 font-medium cursor-pointer group/link"
              >
                <span className="link-underline">View Live</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary inline-flex items-center gap-2 font-medium transition-colors cursor-pointer group/link"
            >
              <span className="link-underline">Source Code</span>
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="section-editorial overflow-hidden"
    >
      <div className="editorial-divider" />

      <div className="container-custom pt-16">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium font-mono">
            Work
          </span>
          <h2 className="text-section-heading text-foreground mt-4">
            Selected Projects
          </h2>
          <p className="text-section-subtitle mt-4">
            A showcase of my recent engineering projects.
          </p>
        </motion.div>

        {/* Projects List */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
