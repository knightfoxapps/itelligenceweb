"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { icon: "/images/home/icon-qa.png", title: "QA and Trend Analysis", href: "/products/itelligence-ai/qa-trend-analysis" },
  { icon: "/images/home/icon-training.png", title: "AI Training System", href: "/products/itelligence-ai/ai-training-system" },
  { icon: "/images/home/icon-workforce.png", title: "AI Workforce", href: "/products/itelligence-ai/ai-workforce" },
];

/**
 * "The Operating Model — itelligence.AI" — matches mockup:
 * - Subtle gold wave background
 * - Two-column header (title left, description right)
 * - Three cards with PNG icons inside translucent rounded boxes
 * - Closing statement centered below
 */
export function ProductSuiteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-[5%] pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-14 lg:pb-28">
      {/* Full-width gold wave background band */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/home/operating-model-wave.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto">
        {/* Header — title left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 items-start gap-6 md:mb-16 md:grid-cols-2 md:gap-12 lg:gap-20"
        >
          <div>
            <p className="mb-0 text-[24px] font-medium leading-[56px] text-black">The Operating Model</p>
            <h2 className="text-[68px] font-medium leading-[66px] text-black">
              itelligence.AI
            </h2>
          </div>
          <div>
            <p className="max-w-[440px] text-[18px] font-normal leading-[22px] text-black">
              itelligence.AI is how we turn data into insight and insight into
              action. Every conversation gets captured and analyzed. The patterns
              we find shape how teams get trained, how AI agents get tuned and how we
              enhance each interaction.
            </p>
          </div>
        </motion.div>

        {/* Three product cards with translucent rounded boxes */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {products.map((product, i) => (
            <motion.div
              key={product.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon image with title and button overlaid at bottom */}
              <div className="relative">
                <Image
                  src={product.icon}
                  alt={product.title}
                  width={380}
                  height={420}
                  className="object-contain"
                />
                <div className="absolute inset-x-0 bottom-8 flex flex-col items-center">
                  <h3 className="mb-2 text-[20px] font-semibold leading-[21px] text-black">
                    {product.title}
                  </h3>
                  <Link
                    href={product.href}
                    className="inline-flex h-[32px] w-[87px] items-center justify-center rounded-lg bg-[#43c2ff] text-xs font-medium text-black shadow-[0_2px_0_0_rgba(0,0,0,0.85)] transition-colors hover:bg-[#35b0ed]"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center text-[28px] font-semibold leading-[34px] text-black md:mt-14"
        >
          Scale AI solutions as your business evolves,
          <br className="hidden md:inline" />
          or engage the full performance stack.
        </motion.p>
      </div>
    </section>
  );
}
