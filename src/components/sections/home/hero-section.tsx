"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Homepage Hero — matches mockup:
 * - White background
 * - Full-width blue wave band flowing horizontally through the hero
 * - Photo of woman with tablet positioned top-right, overlapping wave
 * - Dark text centered below/on the wave
 * - "Performance by Design" eyebrow in gold
 * - Two outline buttons
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Full-width wave band — flows horizontally through the section */}
      <div className="pointer-events-none absolute left-0 top-[15%] z-0 w-full">
        <Image
          src="/images/home/hero-wave.png"
          alt=""
          width={1920}
          height={900}
          className="w-full"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-[5%] py-20 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-medium text-brand-gold md:text-base">
            Performance by Design.
          </p>
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Your Customer. Their Choice.
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            We shape each interaction across the CX lifecycle with managed
            intelligence and influential delivery turning the power of customer
            choice in your favor.
          </p>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            In a world where customer tastes change rapidly and competition moves
            fast, we keep brand builders ahead of market pace.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" href="/performance-pilot">
              Start a Pilot
            </Button>
            <Button variant="outline" href="/products/itelligence-ai">
              itelligence.AI
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
