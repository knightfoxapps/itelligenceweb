"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Headphones, TrendingUp, Shield } from "lucide-react";

const solutions = [
  {
    icon: Headphones,
    title: "I want every interaction to count",
    description:
      "Solutions for scaling support, ramping for seasonal volume, adding automation, integrating digital services, and resolving the calls AI can't handle.",
    cta: "Engage Solutions",
    href: "/solutions/engage",
  },
  {
    icon: TrendingUp,
    title: "I want to acquire new customers.",
    description:
      "Solutions for outbound sales, qualified pipeline, and converting customer intelligence into revenue.",
    cta: "Grow Solutions",
    href: "/solutions/grow",
  },
  {
    icon: Shield,
    title: "I want to reduce churn and defend market share.",
    description:
      "Solutions for churn defense, loyalty design, and QA that creates repeating revenue.",
    cta: "Retain Solutions",
    href: "/solutions/retain",
  },
];

export function SolutionMappingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden section">
      {/* Wave background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home/solution-wave.png"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
      </div>

      <div className="container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl md:mb-16"
        >
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Start Where it Matters Most
          </h2>
        </motion.div>

        {/* Three cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col"
            >
              <div className="mb-5 md:mb-6">
                <solution.icon className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                {solution.title}
              </h3>
              <p className="flex-1 text-muted-foreground">
                {solution.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button variant="secondary" href={solution.href}>
                  {solution.cta}
                </Button>
                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
                >
                  Learn
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center text-sm font-medium text-muted-foreground md:mt-16"
        >
          Every solution is built on the itelligence.AI operating model.
        </motion.p>
      </div>
    </section>
  );
}
