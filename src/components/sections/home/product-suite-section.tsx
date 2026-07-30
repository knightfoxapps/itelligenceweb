"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarChart3, Brain, Bot } from "lucide-react";

const products = [
  { icon: BarChart3, title: "QA and Trend Analysis", href: "/products/itelligence-ai/qa-trend-analysis" },
  { icon: Brain, title: "AI Training System", href: "/products/itelligence-ai/ai-training-system" },
  { icon: Bot, title: "AI Workforce", href: "/products/itelligence-ai/ai-workforce" },
];

/**
 * "The Operating Model — itelligence.AI" — matches mockup:
 * - Subtle wave background
 * - Two-column header (title left, description + CTA right)
 * - Three cards with icons in blue circles, title, "Explore" link
 * - Closing statement centered below
 */
export function ProductSuiteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-[5%] py-16 md:py-24 lg:py-28">
      {/* Full-width gold wave background band */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center">
        <Image
          src="/images/home/operating-model-wave.png"
          alt=""
          width={1920}
          height={900}
          className="w-full opacity-70"
        />
      </div>

      <div className="container relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 items-start gap-6 md:mb-16 md:grid-cols-2 md:gap-12 lg:gap-20"
        >
          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">The Operating Model</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              itelligence.AI
            </h2>
          </div>
          <div>
            <p className="text-base text-muted-foreground md:text-lg">
              itelligence.AI is how we turn data into insight and insight into
              action. Every conversation gets captured and analyzed. The patterns
              we find shape how teams get trained, how AI agents get tuned, and
              how we enhance each next interaction.
            </p>
            <div className="mt-6">
              <Button href="/products/itelligence-ai">Explore itelligence.AI</Button>
            </div>
          </div>
        </motion.div>

        {/* Three product cards with blue circle icons */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {products.map((product, i) => (
            <motion.div
              key={product.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <Link href={product.href} className="group block text-center">
                {/* Blue circle icon */}
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10">
                  <product.icon className="h-8 w-8 text-brand-blue" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {product.title}
                </h3>
                <span className="text-sm font-medium text-brand-blue group-hover:underline">
                  Explore →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center text-sm text-muted-foreground md:mt-14"
        >
          Scale AI solutions as your business evolves, or engage the full performance stack.
        </motion.p>
      </div>
    </section>
  );
}
