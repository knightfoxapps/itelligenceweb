"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function SectionBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[50vh] overflow-hidden md:h-[60vh]">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/home/section-break.png"
          alt="itelligenceCX team"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
