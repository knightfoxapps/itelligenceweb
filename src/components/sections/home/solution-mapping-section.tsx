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
    description: "Solutions for scaling support, ramping for seasonal volume, adding automation, integrating digital services, and resolving the calls AI can't handle.",
    cta: "Engage Solutions",
    href: "/solutions/engage",
  },
  {
    icon: TrendingUp,
    title: "I want to acquire new customers.",
    description: "Solutions for outbound sales, qualified pipeline, and converting customer intelligence into revenue.",
    cta: "Grow Solutions",
    href: "/solutions/grow",
  },
  {
    icon: Shield,
    title: "I want to reduce churn and defend market share.",
    description: "Solutions for churn defense, loyalty design, and QA that creates repeating revenue.",
    cta: "Retain Solutions",
    href: "/solutions/retain",
  },
];

/**
 * "Start Where it Matters Most" — matches mockup:
 * - White background with subtle animated wave
 * - Centered headline
 * - Three columns with icon above, text below, button at bottom
 * - "Every solution is built on the itelligence.AI operating model." bridge text
 */
export function SolutionMappingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-[5%] py-16 md:py-24 lg:py-28">
      {/* Full-width wave background band */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center">
        <Image
          src="/images/home/solution-wave.png"
          alt=""
          width={1920}
          height={900}
          className="w-full opacity-60"
        />
      </div>

      <div className="container relative z-10 mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Start Where it Matters Most
          </h2>
        </motion.div>

        {/* Three columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-start"
            >
              <sol.icon className="mb-5 h-10 w-10 text-brand-blue" strokeWidth={1.5} />
              <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                {sol.title}
              </h3>
              <p className="mb-6 flex-1 text-sm text-muted-foreground md:text-base">
                {sol.description}
              </p>
              <Button variant="outline" size="sm" href={sol.href}>
                {sol.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bridge text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center text-lg font-medium text-foreground md:mt-16 md:text-xl"
        >
          Every solution is built on the itelligence.AI operating model.
        </motion.p>
      </div>
    </section>
  );
}
