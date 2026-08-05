"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  { image: "/images/home/capability-1.png", eyebrow: "Engage, Grow & Retain", title: "CX Lifecycle Delivery", description: "Built to absorb the pressure of seasonal demand and fast innovation. Every call, every chat, every signal optimized for your business's growth.", href: "/capabilities/cx-lifecycle-delivery" },
  { image: "/images/home/capability-2.png", eyebrow: "Understand Customer Why", title: "Insight Activation", description: "The trends behind customer behavior surfaced from every interaction. QA frameworks built around your business, trend analysis tuned to your industry.", href: "/capabilities/insight-activation" },
  { image: "/images/home/capability-3.png", eyebrow: "CX-Led Culture", title: "Intelligent Nearshore Workforce", description: "The region's world-renowned legacy in hospitality has nurtured a versatile, CX-savvy workforce cultivated through personalized training.", href: "/capabilities/nearshore-talent" },
  { image: "/images/home/capability-4.png", eyebrow: "Precision Framework", title: "Operational Design", description: "Channel strategy, integration architecture, automation deployment, and AI adoption that transforms and unifies CX operations.", href: "/capabilities/operational-design" },
];

/**
 * "How We Design Performance" — matches mockup:
 * - White background
 * - Two-column header (headline left, description right)
 * - Four cards in a row with rounded images, eyebrow, title, description, "Learn More" link
 */
export function CapabilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center text-center md:mb-16"
        >
          <h2 className="text-[60px] font-medium leading-[64px] text-black">
            How We Design Performance
          </h2>
          <p className="mt-4 text-[24px] font-semibold leading-[28px] text-black">
            Performance is not speed alone. It&apos;s the named outcomes
            <br className="hidden md:inline" />
            delivered with precision, by design.
          </p>
        </motion.div>

        {/* Four cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  width={400}
                  height={400}
                  className="w-full max-w-[280px] object-contain"
                />
              </div>
              <p className="mb-1 text-sm font-medium text-muted-foreground">
                {cap.eyebrow}
              </p>
              <h3 className="mb-3 text-xl font-bold text-black md:text-2xl">
                {cap.title}
              </h3>
              <p className="mb-6 flex-1 text-sm text-muted-foreground">
                {cap.description}
              </p>
              <Link
                href={cap.href}
                className="inline-flex items-center justify-center rounded-lg bg-[#e7c64a] px-5 py-1.5 text-sm font-medium text-black shadow-[0_2px_0_0_rgba(0,0,0,0.85)] transition-colors hover:bg-[#d4b443]"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
