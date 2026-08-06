"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statsRow1 = [
  { value: "12+ Years", label: "Longest Client Tenure" },
  { value: "30%", label: "Increase in Workforce Productivity" },
  { value: "60%", label: "Faster Time to Proficiency" },
];

const statsRow2 = [
  { value: "25%", label: "Retail Ramp Scale in 4 Weeks" },
  { value: "30%", label: "Banking Conversion Lift" },
  { value: "30%", label: "Churn Reduction" },
];

/**
 * Stats section — matches mockup:
 * - White background
 * - "Performance, Measured" eyebrow 28px medium
 * - "Inside Our Operation" heading 68px medium
 * - Two rows of 3 stats with left blue border
 * - Large blue stat values, black labels below
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
          <p className="mb-0 text-[28px] font-medium leading-[34px] text-black">Performance, Measured</p>
          <h2 className="text-[68px] font-medium leading-[72px] text-black">Inside Our Operation</h2>
        </motion.div>

        {/* Row 1 stats */}
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
          {statsRow1.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="border-l-[3px] border-[#dadada] pl-4"
            >
              <p className="text-[60px] font-bold leading-[64px] text-brand-blue">
                {stat.value}
              </p>
              <p className="mt-2 text-[30px] font-medium leading-[36px] text-black">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Row 2 stats */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
          {statsRow2.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              className="border-l-[3px] border-[#dadada] pl-4"
            >
              <p className="text-[60px] font-bold leading-[64px] text-brand-blue">
                {stat.value}
              </p>
              <p className="mt-2 text-[30px] font-medium leading-[36px] text-black">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
