"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  headline: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "brand" | "dark" | "light";
}

const variants = {
  brand: "bg-brand-blue text-white",
  dark: "bg-gray-850 text-white",
  light: "bg-muted text-foreground",
};

export function CTASection({
  headline,
  body,
  primaryCta,
  secondaryCta,
  variant = "brand",
}: CTASectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className={`section ${variants[variant]}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">
            {headline}
          </h2>
          {body && (
            <p className="mb-8 text-lg opacity-90">{body}</p>
          )}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant={variant === "light" ? "primary" : "secondary"}
              size="lg"
              href={primaryCta.href}
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                variant="outline"
                size="lg"
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
