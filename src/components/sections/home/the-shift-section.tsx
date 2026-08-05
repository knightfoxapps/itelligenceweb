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
    <section ref={ref} className="bg-white px-[5%] py-6 md:py-8 lg:py-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-[24px] font-medium leading-[26px] text-[#6f6f6f]">
              The Shift
            </p>
            <h2 className="mb-6 text-[48px] font-semibold leading-[1.03] text-black">
              Lifecycle Moments,<br className="hidden md:inline" />
              Decoded
            </h2>
            <p className="max-w-[32rem] text-[18px] font-normal leading-[22px] text-black">
              The customer cares about the experience. We care about
              why they choose it.
            </p>
            <p className="mt-5 max-w-[32rem] text-[18px] font-normal leading-[22px] text-black">
              We work with CX leaders running operations and managing
              complex service expectations at scale. With consumer
              autonomy higher than ever, understanding customer choice
              is too important to miss, and the gap between insight and
              action is where we win trust.
            </p>
          </motion.div>

          {/* X-shaped image — gold X is baked into the PNG */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full md:-my-10 lg:-my-16"
          >
            <div className="relative aspect-[910/900]">
              <Image
                src="/images/home/the-shift-x.png"
                alt="The shift in customer experience"
                fill
                className="object-contain object-right"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
