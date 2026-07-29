"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  backgroundImage: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlay?: "dark" | "medium" | "light";
}

const overlayMap = {
  dark: "bg-black/60",
  medium: "bg-black/40",
  light: "bg-black/20",
};

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  backgroundImage,
  primaryCta,
  secondaryCta,
  overlay = "medium",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden md:min-h-[70vh]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayMap[overlay]}`} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-[5%] py-20 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              {eyebrow}
            </p>
          )}
          <h1 className="mb-6 text-4xl font-extrabold text-white md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          {subheadline && (
            <p className="max-w-xl text-lg text-gray-200 md:text-xl">
              {subheadline}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <Button size="lg" href={primaryCta.href}>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button variant="outline" size="lg" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
