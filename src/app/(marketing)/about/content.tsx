"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { VideoDialog } from "@/components/ui/video-dialog";
import { CTASection } from "@/components/sections/shared/cta-section";

const howWeEngage = [
  { title: "Leadership Proximity", description: "Senior leaders embedded within your operation ensure decisions are fast, informed, and aligned with your brand vision." },
  { title: "Outcome-Led Quality Assurance", description: "We measure what matters. Every interaction is scored against the outcomes that drive your business." },
  { title: "Intelligence That Compounds", description: "Our AI learns from every interaction. The system gets smarter, your team gets sharper, and your customers feel the difference." },
  { title: "Skilled Nearshore Workforce", description: "Culturally aligned, technically fluent talent that operates as a seamless extension of your brand." },
];

const timeline = [
  { year: "2012", event: "Founded in Jamaica with a single site and a vision for Caribbean-delivered CX." },
  { year: "2014", event: "Expanded to Belize — building dual-site resilience." },
  { year: "2016", event: "Opened Honduras operations, adding bilingual English-Spanish capacity." },
  { year: "2017", event: "Launched St. Lucia site for redundancy and specialized programs." },
  { year: "2018", event: "North America onshore operations established." },
  { year: "2019", event: "First enterprise client tenure crosses 7 years." },
  { year: "2020", event: "Pandemic pivot: 100% remote in 72 hours, zero clients lost." },
  { year: "2021", event: "AI-first transformation begins — investment in proprietary models." },
  { year: "2022", event: "itelligence.AI platform launched internally." },
  { year: "2023", event: "Full rebrand to itelligenceCX — from BPO to intelligence-led CX." },
  { year: "2024", event: "itelligence.AI opens to managed clients. CoachCast, RTA, Virtual Agent modules ship." },
  { year: "2025", event: "Multi-tenant SaaS platform (HARQ) enters market. 12+ year client relationships maintained." },
];

export function AboutContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(timelineRef, { once: true, margin: "-80px" });
  const [expandedYear, setExpandedYear] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* S1: Hero with X pattern and video */}
      <section ref={heroRef} className="relative flex min-h-[80vh] items-center overflow-hidden bg-gray-850">
        <motion.div className="absolute inset-0 z-0" style={{ scale: heroScale }}>
          {/* Video playing inside X clip-path mask */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: "polygon(0% 0%, 35% 0%, 50% 35%, 65% 0%, 100% 0%, 100% 15%, 68% 50%, 100% 85%, 100% 100%, 65% 100%, 50% 65%, 35% 100%, 0% 100%, 0% 85%, 32% 50%, 0% 15%)",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              poster="/images/about/x-reference.jpg"
            >
              <source src="/videos/the-choice.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Fallback solid bg visible outside the X */}
          <div className="absolute inset-0 -z-10 bg-gray-850" />
        </motion.div>

        <div className="container relative z-10 px-[5%] py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="mb-6 text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
              Intelligence-Led. Performance-Driven.
            </h1>
            <p className="mb-8 text-xl text-gray-200">
              We started as operators. We became builders. Now we&apos;re redefining what a CX partner can be.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" onClick={() => setVideoOpen(true)}>
                Watch Our Story
              </Button>
              <Button variant="outline" size="lg" href="/get-started">
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>

        <VideoDialog open={videoOpen} onOpenChange={setVideoOpen} src="/videos/the-choice.mp4" />
      </section>

      {/* S2: Who we are */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">Who We Are</p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            From BPO to Intelligence-Led CX
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re not a traditional outsourcer. We&apos;re a performance partner that combines nearshore talent, proprietary AI, and operational discipline to deliver measurable outcomes. Every client relationship is built on shared numbers, not just shared seats.
          </p>
        </div>
      </Section>

      {/* S3: How We Engage (capabilities) */}
      <Section bg="muted">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">Different</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How We Engage</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Four principles define every operation we run.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howWeEngage.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* S4: Timeline */}
      <Section ref={timelineRef}>
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">Legacy</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Journey</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Over a decade of building, learning, and earning trust.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100 md:left-8" />

          <div className="space-y-2">
            {timeline.map((item, i) => (
              <motion.button
                key={item.year}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                onClick={() => setExpandedYear(expandedYear === item.year ? null : item.year)}
                className="relative flex w-full items-start gap-4 pl-12 text-left transition-colors hover:bg-muted/50 rounded-lg py-3 px-4 md:pl-16"
              >
                {/* Dot */}
                <div className={`absolute left-3 top-4 h-3 w-3 rounded-full transition-colors md:left-7 ${expandedYear === item.year ? "bg-brand-blue scale-125" : "bg-gray-300"}`} />
                
                <span className="flex-shrink-0 text-sm font-bold text-brand-blue w-12">{item.year}</span>
                <div className="flex-1">
                  <p className={`text-sm transition-colors ${expandedYear === item.year ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                    {item.event}
                  </p>
                </div>
                <svg className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform ${expandedYear === item.year ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Start the Conversation Today"
        body="We shape each interaction across the CX lifecycle with managed intelligence and influential delivery."
        primaryCta={{ label: "Start a Pilot", href: "/performance-pilot" }}
        secondaryCta={{ label: "itelligence.AI", href: "/products/itelligence-ai" }}
        variant="dark"
      />
    </>
  );
}
