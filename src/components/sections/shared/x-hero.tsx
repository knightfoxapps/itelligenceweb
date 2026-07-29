"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface XHeroProps {
  /** Small text above the headline */
  eyebrow?: string;
  /** Main headline */
  headline: string;
  /** Body text below headline */
  body?: string;
  /** Image inside the X shape */
  image: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** CTA button */
  cta?: { label: string; href: string };
  /** Layout: image left (default) or right */
  imagePosition?: "left" | "right";
  /** Headline color override */
  headlineColor?: "dark" | "brand-blue" | "brand-gold";
}

const headlineColors = {
  dark: "text-foreground",
  "brand-blue": "text-brand-blue",
  "brand-gold": "text-brand-gold",
};

/**
 * X-Shape Hero — the signature itelligenceCX design element.
 * Photo displayed inside an X clip-path, with text positioned beside it.
 * Used on: Industry pages, Location pages, Solution pages, About.
 */
export function XHero({
  eyebrow,
  headline,
  body,
  image,
  imageAlt = "",
  cta,
  imagePosition = "left",
  headlineColor = "dark",
}: XHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className={`container mx-auto grid min-h-[70vh] grid-cols-1 items-center gap-8 px-[5%] py-16 md:grid-cols-2 md:gap-12 lg:min-h-[80vh] lg:gap-16 ${
          imagePosition === "right" ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* X-Shape Image */}
        <motion.div
          initial={{ opacity: 0, x: imagePosition === "left" ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative md:[direction:ltr]"
        >
          <div className="relative mx-auto w-full max-w-lg">
            {/* X outline frame (decorative) */}
            <svg
              viewBox="0 0 500 500"
              className="absolute inset-0 z-10 h-full w-full"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.3"
            >
              <path d="M125 0 L250 175 L375 0 M375 500 L250 325 L125 500 M0 125 L175 250 L0 375 M500 125 L325 250 L500 375" />
            </svg>

            {/* Image clipped to X shape */}
            <div
              className="relative aspect-square overflow-hidden"
              style={{
                clipPath:
                  "polygon(30% 0%, 50% 30%, 70% 0%, 100% 0%, 100% 30%, 70% 50%, 100% 70%, 100% 100%, 70% 100%, 50% 70%, 30% 100%, 0% 100%, 0% 70%, 30% 50%, 0% 30%, 0% 0%)",
              }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:[direction:ltr]"
        >
          {eyebrow && (
            <p className="mb-3 text-sm font-medium text-muted-foreground md:text-base">
              {eyebrow}
            </p>
          )}
          <h1
            className={`mb-5 text-4xl font-bold md:text-5xl lg:text-6xl ${headlineColors[headlineColor]}`}
          >
            {headline}
          </h1>
          {body && (
            <p className="max-w-lg text-base text-muted-foreground md:text-lg">
              {body}
            </p>
          )}
          {cta && (
            <div className="mt-6 md:mt-8">
              <Button variant="primary" href={cta.href}>
                {cta.label}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
