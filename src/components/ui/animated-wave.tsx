"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedWaveProps {
  src: string;
  opacity?: number;
  /** Gentle horizontal drift speed in seconds per cycle */
  duration?: number;
}

/**
 * Animated wave background — gentle continuous horizontal drift.
 * Used per design brief: "Animate the wave with a gentle, continuous motion
 * with a slow horizontal drift or undulation that loops seamlessly."
 */
export function AnimatedWave({
  src,
  opacity = 0.15,
  duration = 20,
}: AnimatedWaveProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 h-full w-[200%]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          style={{ opacity }}
          sizes="200vw"
        />
      </motion.div>
    </div>
  );
}
