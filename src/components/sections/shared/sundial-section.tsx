"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface SundialCard {
  eyebrow: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

interface SundialSectionProps {
  heading?: string;
  subheading?: string;
  cards: SundialCard[];
}

export function SundialSection({ heading, subheading, cards }: SundialSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Advance the numeral as scroll progresses
  const numeralY = useTransform(
    scrollYProgress,
    cards.map((_, i) => (i + 1) / (cards.length + 2)),
    cards.map((_, i) => `${-i * 100}%`),
  );

  const springY = useSpring(numeralY, { stiffness: 100, damping: 25 });

  return (
    <section ref={containerRef} className="section">
      <div className="container">
        {(heading || subheading) && (
          <div className="mb-12 max-w-2xl md:mb-16">
            {heading && (
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-lg text-muted-foreground">{subheading}</p>
            )}
          </div>
        )}

        <div className="relative grid grid-cols-1 items-start gap-8 md:grid-cols-[auto_1fr] md:gap-16 lg:gap-20">
          {/* Sticky numeral with starburst */}
          <div className="sticky top-[30%] hidden h-40 items-start overflow-hidden md:flex">
            <div className="relative flex items-center">
              {/* Starburst graphic behind the number */}
              <Image
                src="/images/shared/starburst.png"
                alt=""
                width={160}
                height={160}
                className="absolute -left-4 -top-4 h-48 w-48 opacity-15"
              />
              <span className="text-8xl font-extrabold text-gray-200 lg:text-9xl">
                0
              </span>
              <motion.div style={{ y: springY }}>
                {cards.map((_, i) => (
                  <span
                    key={i}
                    className="block text-8xl font-extrabold text-foreground lg:text-9xl"
                  >
                    {i + 1}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-12 md:space-y-20">
            {cards.map((card, i) => (
              <SundialCard key={i} card={card} index={i} containerRef={containerRef} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SundialCard({
  card,
  index,
  containerRef,
}: {
  card: SundialCard;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start center", "end center"],
  });

  const barWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const width = useTransform(barWidth, [0, 1], ["0%", "100%"]);

  return (
    <div ref={cardRef} className="flex flex-col">
      {/* Mobile numeral */}
      <span className="mb-4 text-5xl font-extrabold text-gray-200 md:hidden">
        0{index + 1}
      </span>

      {/* Progress bar */}
      <div className="mb-6 h-0.5 w-full bg-gray-100">
        <motion.div className="h-full bg-brand-blue" style={{ width }} />
      </div>

      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-blue">
        {card.eyebrow}
      </p>
      <h3 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
        {card.title}
      </h3>
      <p className="text-muted-foreground md:text-lg">{card.description}</p>

      {card.cta && (
        <a
          href={card.cta.href}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
        >
          {card.cta.label}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      )}
    </div>
  );
}
