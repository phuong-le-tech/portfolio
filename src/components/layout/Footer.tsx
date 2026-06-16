"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { socialLinks } from "@/data/hero";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden py-12">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group w-11 h-11 flex items-center justify-center rounded-full bg-card border border-border hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-5 w-5 text-foreground/80 group-hover:text-primary transition-colors" />
          </motion.button>

          {/* Brand */}
          <div className="text-center">
            <h3 className="font-heading font-bold text-xl mb-1 tracking-tight">
              Phuong <span className="text-primary">LE</span>
            </h3>
            <p className="text-muted-foreground/60 text-sm">
              Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-foreground/60 cursor-pointer"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:phuong.le77100@gmail.com"
            className="text-sm text-muted-foreground/50 hover:text-primary transition-colors"
          >
            phuong.le77100@gmail.com
          </a>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground/40">
            <span>
              &copy; {currentYear} Phuong LE &middot; All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
