"use client";

import React, { useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2 } from "lucide-react";
import { FormData } from "@/types";
import { contactInfo, socialLinks } from "@/data/contact";
import { motion, AnimatePresence } from "motion/react";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<FormData> = async () => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      if (!formRef.current) {
        throw new Error("Form reference is not available");
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.status === 200) {
        setIsSuccess(true);
        toast({
          title: "Message sent successfully!",
          description:
            "Thank you for reaching out. I'll get back to you within 24 hours.",
          duration: 5000,
        });
        reset();
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error("Failed to send email:", error);

      toast({
        title: "Failed to send message",
        description:
          "Please try again later or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <section id="contact" className="section-editorial overflow-hidden">
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
            Contact
          </span>
          <h2 className="text-section-heading text-foreground mt-4">
            Get In Touch
          </h2>
          <p className="text-section-subtitle mt-4">
            Ready to bring your ideas to life? Let&apos;s discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-muted-foreground text-sm uppercase tracking-wider">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    aria-invalid={errors.name ? "true" : "false"}
                    className={cn(
                      "bg-transparent border-0 border-b border-border rounded-none px-0 h-12 transition-colors focus:border-primary focus-visible:ring-0 placeholder:text-muted-foreground/30",
                      errors.name && "border-destructive"
                    )}
                    {...register("name", {
                      required: "Full name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-muted-foreground text-sm uppercase tracking-wider">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={cn(
                      "bg-transparent border-0 border-b border-border rounded-none px-0 h-12 transition-colors focus:border-primary focus-visible:ring-0 placeholder:text-muted-foreground/30",
                      errors.email && "border-destructive"
                    )}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-muted-foreground text-sm uppercase tracking-wider">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  aria-invalid={errors.message ? "true" : "false"}
                  className={cn(
                    "bg-transparent border border-border rounded-sm resize-none p-4 transition-colors focus:border-primary focus-visible:ring-0 placeholder:text-muted-foreground/30",
                    errors.message && "border-destructive"
                  )}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className={cn(
                  "h-12 px-8 rounded-sm text-sm font-medium cursor-pointer transition-all duration-200 hover:-translate-y-0.5",
                  isSuccess
                    ? "bg-green-600 text-white hover:bg-green-600"
                    : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                )}
                disabled={isSubmitting}
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.span
                      key="success"
                      className="flex items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Sent!
                    </motion.span>
                  ) : isSubmitting ? (
                    <motion.span
                      key="submitting"
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      className="flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            {contactInfo.map((info) => (
              <div key={info.label}>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  {info.label}
                </span>
                {info.href ? (
                  <a
                    href={info.href}
                    target={
                      info.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block font-heading font-semibold text-lg mt-1 text-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-heading font-semibold text-lg mt-1 text-foreground">
                    {info.value}
                  </p>
                )}
              </div>
            ))}

            {/* Social Links */}
            <div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground">
                Social
              </span>
              <div className="flex gap-5 mt-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-foreground cursor-pointer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
