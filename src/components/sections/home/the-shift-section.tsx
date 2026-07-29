"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function TheShiftSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue md:mb-4">
              The Shift
            </p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Lifecycle Moments, Decoded
            </h2>
            <p className="text-lg text-muted-foreground">
              The customer cares about the experience. We care about why they
              choose it. We work with CX leaders running operations and managing
              complex service expectations at scale. With consumer autonomy higher
              than ever, understanding customer choice is too important to miss,
              and the gap between insight and action is where we win trust.
            </p>
          </motion.div>

          {/* X Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <Image
              src="/images/home/the-shift-x.png"
              alt="The shift in customer experience"
              width={600}
              height={500}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
