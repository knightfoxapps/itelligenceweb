"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
    <section ref={ref} className="relative overflow-hidden pt-14 pb-32 md:pt-20 md:pb-44 lg:pt-24 lg:pb-52">
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
          className="max-w-3xl"
        >
          <p className="mb-2 text-[24px] font-medium leading-[60px] text-[#99dbf8]">
            Performance CX
          </p>
          <h2 className="mb-14 text-6xl font-semibold leading-tight text-white md:text-7xl md:leading-tight">
            Choice Intelligence<br className="hidden md:inline" />
            That Earns Retention
          </h2>
          <p className="max-w-[30rem] text-[18px] font-normal leading-[22px] text-white">
            We see the patterns behind why customers reach out, why they buy,
            and why they choose to stay. Applied through QA, trend analysis,
            and lifecycle engagement, we make revenue predictable and repeatable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
