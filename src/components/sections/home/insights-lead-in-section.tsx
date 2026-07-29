"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";

const caseStudies = [
  { stat: "Scaled 20% in 6 weeks", tags: ["Engage", "Retail"] },
  { stat: "$6.1M in monthly bookings", tags: ["Grow", "Travel"] },
  { stat: "45% HR efficiency lift through automation", tags: ["Grow", "Retail"] },
  { stat: "110% to collections target", tags: ["Grow", "Collections"] },
  { stat: "98% tech support CSAT", tags: ["Engage", "Retail"] },
  { stat: "Call volume cut 50% with self-serve", tags: ["Grow", "Retail"] },
];

/**
 * "Customer Lifecycle Intelligence at Scale" — matches mockup:
 * - Two-column layout: case study list left, photo right
 * - "Proven Outcomes" eyebrow
 * - Large headline with CTA buttons
 * - Numbered case study rows with tag pills
 * - Man in suit photo on right side
 */
export function InsightsLeadInSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left column - text + case studies */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="mb-2 text-sm font-medium text-muted-foreground">Proven Outcomes</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Customer Lifecycle Intelligence at Scale
              </h2>
              <p className="mb-6 text-base text-muted-foreground">
                Some of our clients have been with us for more than a decade.
                That&apos;s not loyalty. That&apos;s results.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" href="/performance-pilot">Start a Pilot</Button>
                <Button variant="ghost" href="/insights">Performance Insights →</Button>
              </div>
            </motion.div>

            {/* Case study rows */}
            <div className="mt-8 border-t border-gray-100">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.stat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex items-center gap-4 border-b border-gray-100 py-4"
                >
                  <span className={clsx(
                    "text-sm font-bold transition-colors",
                    hoveredIndex !== null && hoveredIndex !== i ? "text-gray-300" : "text-foreground"
                  )}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={clsx(
                    "flex-1 text-lg font-bold transition-colors md:text-xl",
                    hoveredIndex !== null && hoveredIndex !== i ? "text-gray-300" : "text-foreground"
                  )}>
                    {study.stat}
                  </h3>
                  <div className="flex gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column - photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <Image
              src="/images/home/faq-image.png"
              alt="Performance outcomes"
              width={350}
              height={500}
              className="h-full max-h-[550px] w-auto rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
