"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { VideoDialog } from "@/components/ui/video-dialog";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden"
    >
      {/* Background wave graphic */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <Image
          src="/images/home/hero-wave.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-850/60" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-[5%] py-24 text-center md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold md:text-base">
            Performance by Design
          </p>
          <h1 className="mb-6 text-5xl font-extrabold text-white md:text-7xl lg:text-8xl">
            Your Customer. Their Choice.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            We shape each interaction across the CX lifecycle with managed
            intelligence and influential delivery — turning the power of customer
            choice in your favor.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10">
            <Button size="lg" href="/performance-pilot">
              Start a Pilot
            </Button>
            <Button variant="outline" size="lg" href="/products/itelligence-ai">
              itelligence.AI
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Video thumbnail (bottom-right, desktop) */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        onClick={() => setVideoOpen(true)}
        className="absolute bottom-8 right-[5%] z-10 hidden cursor-pointer overflow-hidden rounded-lg shadow-2xl transition-transform hover:scale-105 md:block md:w-56 lg:w-64"
        aria-label="Watch the itelligenceCX video"
      >
        <div className="relative aspect-video">
          <Image
            src="/images/home/video-thumbnail.jpg"
            alt="Watch the itelligenceCX story"
            fill
            className="object-cover"
            sizes="256px"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <PlayIcon />
          </div>
        </div>
      </motion.button>

      {/* Video dialog */}
      <VideoDialog
        open={videoOpen}
        onOpenChange={setVideoOpen}
        src="/videos/the-choice.mp4"
      />
    </section>
  );
}

function PlayIcon() {
  return (
    <svg
      className="h-14 w-14 text-white drop-shadow-lg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="12" fillOpacity="0.3" />
      <path d="M9.5 7.5v9l7-4.5-7-4.5z" />
    </svg>
  );
}
