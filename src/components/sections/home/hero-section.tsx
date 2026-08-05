"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Homepage Hero — matches V2 design:
 * - White background
 * - Full-width blue wave band flowing horizontally through the hero
 * - "Performance by Design" eyebrow in gray (no period)
 * - Blue headline: "Your Customer. Their Choice."
 * - Sub-body text above the wave
 * - Below the wave: larger bold statement + two outline CTA buttons
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Full-width wave band — flows horizontally right below the subtext */}
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
      <div className="container relative z-10 mx-auto px-[5%] py-16 md:py-24 lg:py-28">
        {/* Upper section — above the wave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-1 text-2xl font-normal text-[#757575] md:text-2xl leading-[2.5]">
            Performance by Design
          </p>
          <h1 className="mb-5 text-5xl font-semibold text-[#116ea7] md:text-6xl lg:text-[4rem] lg:leading-[1.07]">
            Your Customer. Their Choice.
          </h1>
          <p className="mx-auto max-w-[39rem] text-lg font-medium text-black md:text-xl text-center">
            We shape each interaction across the CX lifecycle with managed
            intelligence and influential delivery turning the power of<br className="hidden md:inline" />
            customer choice in your favor.
          </p>
        </motion.div>

        {/* Lower section — below the wave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mt-32 max-w-3xl text-center md:mt-40 lg:mt-48"
        >
          <p className="mx-auto mb-8 max-w-[46rem] text-2xl font-semibold text-foreground md:text-[1.75rem] lg:text-[1.75rem] lg:leading-[1.14] text-center">
            In a world where customer tastes change rapidly<br className="hidden md:inline" />
            and competition moves fast, we keep brand<br className="hidden md:inline" />
            builders ahead of market pace.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/performance-pilot"
              className="inline-flex h-[43px] w-[152px] items-center justify-center rounded-lg bg-brand-blue text-base font-medium text-white shadow-[0_0_12px_2px_rgba(17,110,167,0.4),0_2px_0_0_rgba(0,0,0,0.7)] transition-colors hover:bg-secondary-blue"
            >
              Start a Pilot
            </Link>
            <Link
              href="/products/itelligence-ai"
              className="inline-flex h-[43px] w-[152px] items-center justify-center rounded-lg bg-[#f4f5f7] text-base font-medium text-foreground shadow-[0_2px_0_0_rgba(0,0,0,0.7)] transition-colors hover:bg-[#ebedf0]"
            >
              itelligence.AI
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
