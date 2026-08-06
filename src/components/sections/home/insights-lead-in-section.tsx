"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
 * - proven-outcomes-wave.png background on top half
 * - Two-column header: headline left, body text + CTA buttons right
 * - Numbered case study rows with tag pills (left)
 * - Tall architectural photo (right)
 */
export function InsightsLeadInSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative bg-white px-[5%] pt-0 pb-16 md:pb-24 lg:pb-28">
      {/* Background wave — extends up into the stats section above, covers header area, fades before numbered rows */}
      <div className="pointer-events-none absolute inset-x-0 -top-[200px] z-0 h-[700px]">
        <Image
          src="/images/home/proven-outcomes-wave.png"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="container relative z-10 mx-auto">
        {/* Header — two column: title left, body + buttons right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-1 items-start gap-6 md:mb-16 md:grid-cols-2 md:gap-12 lg:gap-20"
        >
          <div>
            <p className="mb-0 text-[24px] font-medium leading-[56px] text-black">Proven Outcomes</p>
            <h2 className="text-[68px] font-medium leading-[72px] text-black">
              Customer Lifecycle Intelligence at Scale
            </h2>
          </div>
          <div>
            <p className="text-[18px] font-normal leading-[22px] text-black">
              Some of our clients have been with us for more than a decade.
              That&apos;s more than loyalty. That&apos;s Results.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-5 py-1.5 text-sm font-medium text-white shadow-[0_2px_0_0_rgba(0,0,0,0.85)] transition-colors hover:bg-brand-blue/90"
              >
                About
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center justify-center rounded-lg bg-[#f4f5f7] px-5 py-1.5 text-sm font-medium text-black shadow-[0_2px_0_0_rgba(0,0,0,0.85)] transition-colors hover:bg-[#ebedf0]"
              >
                Performance Insights
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Case studies */}
        <div className="mt-16">
          <div className="border-t border-gray-200">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.stat}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex items-center gap-8 border-b border-gray-200 py-8"
              >
                <span className={clsx(
                  "text-[36px] font-medium leading-[54px] transition-colors",
                  hoveredIndex !== null && hoveredIndex !== i ? "text-gray-200" : "text-[#b4b4b4]"
                )}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={clsx(
                  "flex-1 text-[50px] font-semibold leading-[54px] transition-colors",
                  hoveredIndex !== null && hoveredIndex !== i ? "text-gray-200" : "text-black"
                )}>
                  {study.stat}
                </h3>
                <div className="flex gap-3">
                  {study.tags.map((tag) => (
                    <span key={tag} className="flex h-[27px] w-[101px] items-center justify-center rounded-full border border-gray-300 text-xs font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
