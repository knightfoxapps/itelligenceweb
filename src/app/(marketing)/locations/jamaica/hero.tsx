"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Jamaica hero — matches mockup:
 * - White background
 * - "Caribbean" eyebrow centered, "Jamaica" headline in brand blue
 * - Map silhouette of Jamaica with cultural photo composited inside
 * - Gold dot pattern accent right side
 */
export function JamaicaHero() {
  return (
    <section className="relative overflow-hidden bg-white px-[5%] pb-8 pt-12 md:pb-12 md:pt-16">
      {/* Gold dot pattern accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-30">
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-medium text-muted-foreground">Caribbean</p>
          <h1 className="mb-8 text-4xl font-bold text-brand-blue md:text-5xl lg:text-6xl">
            Jamaica
          </h1>
        </motion.div>

        {/* Map silhouette with photo inside */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-3xl"
        >
          <Image
            src="/images/locations/hero-jamaica.png"
            alt="Jamaica — cultural vibrancy and CX excellence"
            width={900}
            height={500}
            className="w-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
