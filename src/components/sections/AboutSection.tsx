"use client";

import React, { useState } from "react";
import {
  MapPin,
  GraduationCap,
  ChevronDown,
  ExternalLink,
  Pause,
  Play,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { TimelineItem } from "@/types";
import { skills, expertiseAreas, timeline } from "@/data/about";
import { Marquee } from "@/components/ui/Marquee";

const TimelineCard = ({ item }: { item: TimelineItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <div
        className="border-t border-border py-8 cursor-pointer group"
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={`${item.title} at ${item.company}, ${item.year}. ${isExpanded ? "Collapse" : "Expand"} for details.`}
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <div className="grid md:grid-cols-4 gap-4 md:gap-8">
          {/* Year */}
          <div className="md:col-span-1">
            <span className="font-mono text-sm text-muted-foreground font-semibold tracking-tight">
              {item.year}
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                {item.companyLogo && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border border-border bg-card">
                    <Image
                      src={item.companyLogo}
                      alt={`${item.company} logo`}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-primary text-sm font-medium">
                      {item.company}
                    </p>
                    {item.companyWebsite && (
                      <a
                        href={item.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                <ChevronDown
                  className="h-5 w-5 text-muted-foreground/60"
                  aria-hidden="true"
                />
              </motion.div>
            </div>

            {/* Expandable Details */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const [marqueePaused, setMarqueePaused] = useState(false);

  return (
    <section id="about" className="section-editorial overflow-hidden">
      <div className="editorial-divider" />

      <div className="container-custom pt-16">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium font-mono">
            About
          </span>
          <h2 className="text-section-heading text-foreground mt-4">
            Building scalable and reliable software
          </h2>
        </motion.div>

        {/* Two-column: Story + Details */}
        <motion.div
          className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Story */}
          <div className="lg:col-span-7">
            <p className="text-body-lg text-muted-foreground">
              I&apos;m a Full-Stack Java Developer with a Master&apos;s degree
              in Software and Data Engineering, specializing in building
              scalable backend systems and modern web applications. My expertise
              lies in designing secure REST APIs with Spring Boot, implementing
              clean architectures, and delivering reliable cloud-ready
              applications. I focus on writing maintainable, well-tested code
              while following best practices such as SOLID principles and
              Test-Driven Development.
            </p>
            <p className="text-body-lg text-muted-foreground mt-6">
              I enjoy solving complex technical challenges and building systems
              that are both efficient for developers and intuitive for users.
            </p>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  Location
                </span>
              </div>
              <p className="font-heading font-semibold text-xl">
                Paris, France
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  Education
                </span>
              </div>
              <p className="font-heading font-semibold text-lg">
                Master&apos;s — Software & Data Engineering
              </p>
              <a
                href="https://formations.univ-gustave-eiffel.fr/master/detail/logiciel-et-ingenierie-des-donnees-273"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-primary transition-colors hover:underline mt-1 inline-block"
              >
                Universit&eacute; Gustave Eiffel
              </a>
            </div>
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-heading text-2xl font-bold mb-12">Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="p-6 lg:p-8 rounded-lg border border-border/50 bg-card/50 hover:border-border hover:bg-card transition-all duration-300 space-y-4"
              >
                <area.icon className="h-6 w-6 text-primary" />
                <h4 className="font-heading text-xl font-bold">{area.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {area.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Marquee */}
        <motion.div
          className="mb-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="border-y border-border py-6 relative">
            <div className={marqueePaused ? "marquee-paused" : ""}>
              <Marquee pauseOnHover className="[--duration:40s]">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="mx-3 flex items-center gap-2 px-4 py-2 rounded-full border border-border opacity-80 hover:opacity-100 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                  >
                    <div style={{ color: skill.color || "currentColor" }}>
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium whitespace-nowrap text-foreground/80 text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
            <button
              onClick={() => setMarqueePaused(!marqueePaused)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors cursor-pointer"
              aria-label={
                marqueePaused
                  ? "Play skills animation"
                  : "Pause skills animation"
              }
            >
              {marqueePaused ? (
                <Play className="h-3.5 w-3.5" />
              ) : (
                <Pause className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-2xl font-bold mb-12">Experience</h3>

          <div>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TimelineCard item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
