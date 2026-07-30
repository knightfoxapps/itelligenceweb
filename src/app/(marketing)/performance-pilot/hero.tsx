"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Performance Pilot hero — matches mockup exactly:
 * - Full-viewport dark blue background
 * - 3D wave graphic filling the entire section
 * - "Performance by design" large white headline
 * - Gold vertical line accent
 * - Description text in light gray
 * - "See the difference." in gold
 * - Outline "Begin Pilot" button with gold border
 */
export function PilotHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-850">
      {/* 3D wave background — fills the whole section */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/home/performance-cx-wave.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-[5%] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl"
        >
          <h1 className="mb-12 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Performance<br />by design
          </h1>

          {/* Gold vertical line accent */}
          <div className="mx-auto mb-12 h-20 w-px bg-brand-gold" />

          <p className="mx-auto mb-6 max-w-lg text-base text-gray-300 md:text-lg">
            Not every AI solution is built the same. Our custom solutions protect
            your data while giving you the flexibility to adapt to your business needs.
          </p>
          <p className="mb-10 text-base text-gray-400 md:text-lg">
            It&apos;s not just about keeping up — it&apos;s about moving forward.
          </p>

          <p className="mb-8 text-xl font-semibold text-brand-gold md:text-2xl">
            See the difference.
          </p>

          <Button
            variant="outline"
            size="lg"
            href="#start-pilot"
            className="border-brand-gold text-brand-gold hover:bg-brand-gold/10"
          >
            Begin Pilot
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
