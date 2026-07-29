"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart3, Brain, Bot } from "lucide-react";

const products = [
  {
    icon: BarChart3,
    title: "QA and Trend Analysis",
    href: "/products/itelligence-ai/qa-trend-analysis",
  },
  {
    icon: Brain,
    title: "AI Training System",
    href: "/products/itelligence-ai/ai-training-system",
  },
  {
    icon: Bot,
    title: "AI Workforce",
    href: "/products/itelligence-ai/ai-workforce",
  },
];

export function ProductSuiteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden section">
      {/* Wave background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home/operating-model-wave.png"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 items-start gap-6 md:mb-16 md:grid-cols-2 md:gap-12 lg:gap-20"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">
              The Operating Model
            </p>
            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              itelligence.AI
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              itelligence.AI is how we turn data into insight and insight into
              action. Every conversation gets captured and analyzed. The patterns
              we find shape how teams get trained, how AI agents get tuned, and
              how we enhance each next interaction.
            </p>
            <div className="mt-6">
              <Button href="/products/itelligence-ai">
                Explore itelligence.AI
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Three product cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            >
              <Link
                href={product.href}
                className="group block rounded-lg border border-gray-100 p-6 transition-all hover:border-brand-blue/20 hover:shadow-lg md:p-8"
              >
                <div className="mb-5 md:mb-6">
                  <product.icon className="h-10 w-10 text-brand-blue" />
                </div>
                <h3 className="mb-3 text-xl font-bold md:text-2xl">
                  {product.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:underline">
                  Explore
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-center text-sm text-muted-foreground md:mt-14"
        >
          Scale AI solutions as your business evolves, or engage the full
          performance stack.
        </motion.p>
      </div>
    </section>
  );
}
