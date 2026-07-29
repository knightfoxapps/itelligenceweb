"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { VideoDialog } from "@/components/ui/video-dialog";

export function PerformanceCXSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section ref={ref} className="relative overflow-hidden section">
      {/* Animated wave background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/performance-cx-wave.png"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Video / image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <button
              onClick={() => setVideoOpen(true)}
              className="group relative w-full cursor-pointer overflow-hidden rounded-lg shadow-xl"
              aria-label="Play video: Choice Intelligence That Earns Retention"
            >
              <div className="aspect-video">
                <Image
                  src="/images/home/video-thumbnail.jpg"
                  alt="Performance CX video"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                  <svg className="ml-1 h-6 w-6 text-brand-blue" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue md:mb-4">
              Performance CX
            </p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Choice Intelligence That Earns Retention
            </h2>
            <p className="text-lg text-muted-foreground">
              We see the patterns behind why customers reach out, why they buy,
              and why they choose to stay. Applied through QA, trend analysis,
              and lifecycle engagement, we make revenue predictable and
              repeatable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/performance-pilot">Start a Pilot</Button>
              <Button variant="ghost" href="/products/itelligence-ai">
                itelligence.AI →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <VideoDialog
        open={videoOpen}
        onOpenChange={setVideoOpen}
        src="/videos/the-choice.mp4"
      />
    </section>
  );
}
