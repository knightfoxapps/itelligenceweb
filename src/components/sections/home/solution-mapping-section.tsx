"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    icon: "/images/home/icon-engage.png",
    title: "I want every interaction to count.",
    description: "Solutions for scaling support, ramping for seasonal volume, adding automation, integrating digital services, and resolving the calls AI can't handle.",
    cta: "View Services",
    href: "/solutions/engage",
  },
  {
    icon: "/images/home/icon-grow.png",
    title: "I want to acquire new customers.",
    description: "Solutions for outbound sales, qualified pipeline, and converting customer intelligence into revenue.",
    cta: "View Services",
    href: "/solutions/grow",
  },
  {
    icon: "/images/home/icon-retain.png",
    title: "I want to reduce churn and defend market share.",
    description: "Solutions for churn defense, loyalty design, and QA that creates repeating revenue.",
    cta: "View Services",
    href: "/solutions/retain",
  },
];

/**
 * "Start Where it Matters Most" — matches mockup:
 * - White background with dotted pattern
 * - Left-aligned headline, wraps after "Where"
 * - Three columns with icon, title, description, button
 */
export function SolutionMappingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-[5%] py-16 md:py-20 lg:py-24">
      {/* Dotted background pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-start">
        <Image
          src="/images/home/solution-wave.png"
          alt=""
          width={1920}
          height={900}
          className="w-full opacity-60"
        />
      </div>

      <div className="container relative z-10 mx-auto">
        {/* Heading — left aligned, wraps after "Where" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-16"
        >
          <h2 className="text-[68px] font-medium leading-[72px] text-black">
            Start Where<br className="hidden md:inline" />
            it Matters Most
            <Image
              src="/images/home/arrow-most.png"
              alt=""
              width={38}
              height={38}
              className="ml-10 inline-block align-middle"
            />
          </h2>
        </motion.div>

        {/* Three columns — spread evenly across full width */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-1 h-28 w-28 md:h-36 md:w-36 lg:h-44 lg:w-44">
                <Image
                  src={sol.icon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mb-3 max-w-[230px] text-[24px] font-medium leading-[28px] text-black">
                {sol.title}
              </h3>
              <p className="mb-6 max-w-[280px] flex-1 text-[18px] font-normal leading-[22px] text-black">
                {sol.description}
              </p>
              <Link
                href={sol.href}
                className="inline-flex items-center justify-center rounded-lg bg-[#f4f5f7] px-5 py-1.5 text-sm font-medium text-foreground shadow-[0_2px_0_0_rgba(0,0,0,0.85)] transition-colors hover:bg-[#ebedf0]"
              >
                {sol.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
