"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/**
 * "The Shift" section — matches mockup:
 * - White background
 * - Left: eyebrow + headline + body text
 * - Right: Photo inside the X clip-path shape
 */
export function TheShiftSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              The Shift
            </p>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Lifecycle Moments, Decoded
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              The customer cares about the experience. We care about why they
              choose it. We work with CX leaders running operations and managing
              complex service expectations at scale. With consumer autonomy higher
              than ever, understanding customer choice is too important to miss,
              and the gap between insight and action is where we win trust.
            </p>
          </motion.div>

          {/* X-shaped image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div
              className="relative aspect-square overflow-hidden"
              style={{
                clipPath:
                  "polygon(30% 0%, 50% 30%, 70% 0%, 100% 0%, 100% 30%, 70% 50%, 100% 70%, 100% 100%, 70% 100%, 50% 70%, 30% 100%, 0% 100%, 0% 70%, 30% 50%, 0% 30%, 0% 0%)",
              }}
            >
              <Image
                src="/images/home/the-shift-x.png"
                alt="The shift in customer experience"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
