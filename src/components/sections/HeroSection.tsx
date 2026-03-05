"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import profilePhoto from "@/assets/profile.jpeg";

const roles = ["Full-Stack Developer", "Backend Engineer", "Software Engineer"];

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToContact = useCallback((): void => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToAbout = useCallback((): void => {
    const section = document.getElementById("about");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Hero gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom w-full relative">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left: Typography */}
          <div className="lg:col-span-2">
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

            {/* Role — typed effect */}
            <motion.p
              className="text-muted-foreground text-xl md:text-2xl mt-6 font-light tracking-wide font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {displayText}
              <span className="animate-cursor-blink text-primary">|</span>
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

            {/* CTAs — primary is larger and more prominent */}
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

          {/* Right: Profile image with framing */}
          <motion.div
            className="lg:col-span-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-lg border border-border/50">
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

        {/* Scroll indicator — subtle pulse instead of bounce */}
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
};

export default HeroSection;
