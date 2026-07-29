"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    image: "/images/home/capability-1.png",
    eyebrow: "Engage, Grow & Retain",
    title: "CX Lifecycle Delivery",
    description:
      "Built to absorb the pressure of seasonal demand and fast innovation. Every call, every chat, every signal optimized for your business's growth.",
    href: "/capabilities/cx-lifecycle-delivery",
  },
  {
    image: "/images/home/capability-2.png",
    eyebrow: "Understand Customer Why",
    title: "Insight Activation",
    description:
      "The trends behind customer behavior surfaced from every interaction. QA frameworks built around your business, trend analysis tuned to your industry.",
    href: "/capabilities/insight-activation",
  },
  {
    image: "/images/home/capability-3.png",
    eyebrow: "CX-Led Culture",
    title: "Intelligent Nearshore Workforce",
    description:
      "The region's world-renowned legacy in hospitality has nurtured a versatile, CX-savvy workforce. We cultivate and develop local talent through a personalized training system.",
    href: "/capabilities/nearshore-talent",
  },
  {
    image: "/images/home/capability-4.png",
    eyebrow: "Precision Framework",
    title: "Operational Design",
    description:
      "Channel strategy, integration architecture, automation deployment, and AI adoption that transforms and unifies CX operations.",
    href: "/capabilities/operational-design",
  },
];

export function CapabilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 gap-5 md:mb-16 md:grid-cols-2 md:gap-12 lg:gap-20"
        >
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            How We Design Performance
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Performance is not speed alone. It&apos;s the named outcomes,
            delivered with precision, by design.
          </p>
        </motion.div>

        {/* Four cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={cap.href} className="group block">
                <div className="mb-5 overflow-hidden rounded-lg md:mb-6">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    width={400}
                    height={280}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  {cap.eyebrow}
                </p>
                <h3 className="mb-3 text-xl font-bold md:text-2xl">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cap.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:underline">
                  Learn More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
