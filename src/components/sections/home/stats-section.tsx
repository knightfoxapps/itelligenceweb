"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statsOperation = [
  { value: "12+ Years", label: "Longest Client Tenure" },
  { value: "30%", label: "Increase in Workforce Productivity" },
  { value: "60%", label: "Faster Time to Proficiency" },
];

const statsDelivery = [
  { value: "25%", label: "Retail Ramp Scale in 4 Weeks" },
  { value: "30%", label: "Booking Conversion Lift" },
  { value: "30%", label: "Churn Reduction" },
];

/**
 * Stats section — matches mockup:
 * - White background
 * - "Performance, Measured" eyebrow
 * - Two groups: "Inside our Operation" + "What We Deliver"
 * - Large bold stat values, small labels below
 * - 3-column grid per group
 */
export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-2 text-sm font-medium text-muted-foreground">Performance, Measured</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Inside our Operation</h2>
        </motion.div>

        {/* Operation stats */}
        <div className="mb-14 grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
          {statsOperation.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <p className="text-4xl font-bold text-brand-blue md:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Delivery stats header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <p className="mb-2 text-sm font-medium text-muted-foreground">Performance, Measured</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">What We Deliver</h2>
        </motion.div>

        {/* Delivery stats */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
          {statsDelivery.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            >
              <p className="text-4xl font-bold text-brand-blue md:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
