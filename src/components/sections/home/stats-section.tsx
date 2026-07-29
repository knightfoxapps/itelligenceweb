"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const statsOperation = [
  { value: "12+", unit: "Years", label: "Longest Client Tenure" },
  { value: "30%", unit: "", label: "Increase in Workforce Production" },
  { value: "60%", unit: "", label: "Faster Time to Proficiency" },
];

const statsDelivery = [
  { value: "25%", unit: "", label: "Retail Ramp Scale in 6 Weeks" },
  { value: "30%", unit: "", label: "Booking Conversion Lift" },
  { value: "30%", unit: "", label: "Churn Reduction" },
];

function StatItem({
  stat,
  index,
  inView,
}: {
  stat: (typeof statsOperation)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-l-2 border-brand-blue pl-6 md:pl-8"
    >
      <p className="text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">
        {stat.value}
        {stat.unit && (
          <span className="ml-1 text-2xl font-bold md:text-3xl">
            {stat.unit}
          </span>
        )}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden section">
      {/* Wave graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/home/proven-outcomes-wave.png"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>

      <div className="container relative z-10">
        {/* Inside our Operation */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">
              Performance, Measured
            </p>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Inside our Operation
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
            {statsOperation.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* What We Deliver */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">
              Performance, Measured
            </p>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              What We Deliver
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-10">
            {statsDelivery.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i + 3} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
