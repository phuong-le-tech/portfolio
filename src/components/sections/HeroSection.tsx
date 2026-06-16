"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import profilePhoto from "@/assets/profile.jpeg";
import { BackgroundCellCore } from "@/components/ui/background-ripple-effect";

function HeroSection() {
  const scrollToContact = (): void => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = (): void => {
    const section = document.getElementById("about");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ripple grid background */}
      <BackgroundCellCore />

      <div className="container-custom w-full relative z-50">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Typography */}
          <div>
            {/* Available badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-muted-foreground text-sm font-medium mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for new opportunities
            </motion.div>

            {/* Display name */}
            <motion.h1
              className="text-display text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              PHUONG
              <br />
              <span className="text-primary">LE</span>
            </motion.h1>

            {/* Static role subtitle */}
            <motion.p
              className="text-muted-foreground text-xl md:text-2xl mt-6 font-light tracking-wide font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Full-Stack Developer&nbsp;&nbsp;·&nbsp;&nbsp;Java / Spring Boot&nbsp;&nbsp;·&nbsp;&nbsp;React
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-body-lg text-muted-foreground mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Full-Stack Developer focused on clean architecture,
              high-performance APIs, and reliable cloud-ready applications.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 font-semibold px-10 py-6 rounded-sm transition-all duration-200 text-base cursor-pointer"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Let&apos;s talk
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary hover:-translate-y-0.5 font-medium px-8 py-6 rounded-sm transition-all duration-200 cursor-pointer"
                asChild
              >
                <a href="/CV_Phuong_LE.pdf" download="CV_Phuong_LE.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg border border-border/50 ring-1 ring-primary/20 shadow-xl">
              <Image
                src={profilePhoto}
                alt="Phuong LE - Full-Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium font-mono">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 animate-pulse-slow" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
