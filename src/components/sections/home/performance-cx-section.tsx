"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * "Choice Intelligence That Earns Retention" — matches mockup:
 * - Blue gradient wave background (the animated gif/png)
 * - White text centered
 * - Outline buttons
 */
export function PerformanceCXSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      {/* Dark blue 3D wave — fills entire background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/home/performance-cx-wave.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-medium text-brand-gold">
            Performance CX
          </p>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Choice Intelligence That Earns Retention
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-300 md:text-lg">
            We see the patterns behind why customers reach out, why they buy,
            and why they choose to stay. Applied through QA, trend analysis,
            and lifecycle engagement, we make revenue predictable and repeatable.
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
