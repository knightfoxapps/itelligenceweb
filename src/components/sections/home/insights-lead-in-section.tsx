"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";

const caseStudies = [
  { stat: "Scaled 20% in 6 weeks", tags: ["Engage", "Retail"] },
  { stat: "$6.1M in monthly bookings", tags: ["Grow", "Travel"] },
  { stat: "45% HR efficiency lift", tags: ["Grow", "Retail"] },
  { stat: "110% to collections target", tags: ["Grow", "Collections"] },
  { stat: "98% tech support CSAT", tags: ["Engage", "Retail"] },
  { stat: "Call volume cut 50% with self-serve", tags: ["Grow", "Retail"] },
];

export function InsightsLeadInSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl md:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Proven Outcomes
          </p>
          <h2 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Customer Lifecycle Intelligence at Scale
          </h2>
          <p className="text-lg text-muted-foreground">
            Some of our clients have been with us for more than a decade.
            That&apos;s not loyalty. That&apos;s results.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button href="/performance-pilot">Start a Pilot</Button>
            <Button variant="ghost" href="/insights">
              Performance Insights →
            </Button>
          </div>
        </motion.div>

        {/* Case study list */}
        <div className="border-t border-gray-100">
          {caseStudies.map((study, i) => (
            <motion.a
              key={study.stat}
              href="/insights"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-start gap-3 border-b border-gray-100 py-5 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center md:gap-6 md:py-6 md:px-4"
            >
              <span
                className={clsx(
                  "text-lg font-bold transition-colors md:text-xl",
                  hoveredIndex !== null && hoveredIndex !== i
                    ? "text-gray-300"
                    : "text-foreground",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={clsx(
                  "flex-1 text-2xl font-bold transition-colors md:text-4xl lg:text-5xl",
                  hoveredIndex !== null && hoveredIndex !== i
                    ? "text-gray-300"
                    : "text-foreground",
                )}
              >
                {study.stat}
              </h3>
              <div className="flex gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-gray-200 bg-muted px-2 py-1 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
