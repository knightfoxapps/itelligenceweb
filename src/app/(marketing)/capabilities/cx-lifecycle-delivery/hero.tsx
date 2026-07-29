"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * CX Lifecycle hero — matches mockup exactly:
 * - Full-width hero photo (woman on phone in crowd)
 * - Blue gradient overlay at bottom blending into text area
 * - "Engage, Grow & Retain" eyebrow
 * - "CX Lifecycle Delivery" large headline in white
 * - Description text
 * - Two outline buttons
 */
export function CXLifecycleHero() {
  return (
    <section className="relative">
      {/* Full-bleed hero photo */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src="/images/capabilities/hero-cx-lifecycle.png"
          alt="CX Lifecycle Delivery"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Blue gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-blue" />
      </div>

      {/* Text content on blue background */}
      <div className="bg-brand-blue px-[5%] pb-16 pt-10 md:pb-20 md:pt-12">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium text-white/70">
              Engage, Grow & Retain
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              CX Lifecycle Delivery
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 md:text-lg">
              How customer engagement work gets delivered end to end, across every
              channel and every lifecycle moment. The discipline of running customer
              operations as one integrated motion rather than a stitched-together service line.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline" href="/performance-pilot">
                Start a Pilot
              </Button>
              <Button variant="outline" href="#how-it-shows-up">
                See How It Shows Up
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
