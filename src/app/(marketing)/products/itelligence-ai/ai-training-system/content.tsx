"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/sections/shared/cta-section";

const solutions = [
  { title: "Practice in Simulation Before the Real Call", description: "A virtual practice environment where agents rehearse by voice or chat — the hard product question, the irate customer, the tangled support issue — before any of it reaches a live customer. It bridges the gap between the classroom and the floor." },
  { title: "AI Coaching Podcasts", description: "Short, personalized coaching built automatically from an agent's own low-scoring calls, ready the same day, so feedback is grounded in what actually happened rather than a generic module." },
  { title: "Skill-Gap Analysis and Ramp Tracking", description: "Analysis reads across an agent's or a team's interactions to find the recurring miss, and measures new hires against graduated ramp targets, so coaching targets the real weakness." },
  { title: "Auto Training Assignments", description: "Training triggered based on established QA targets and onboarding that moves new hires through step-by-step progression, so the right lesson reaches the right person without a manager assigning it by hand." },
];

const relatedModules = [
  { title: "QA & Trend Analysis", description: "The scoring and analytics layer of itelligence.AI", href: "/products/itelligence-ai/qa-trend-analysis" },
  { title: "AI Workforce", description: "The workforce layer of itelligence.AI", href: "/products/itelligence-ai/ai-workforce" },
  { title: "itelligence.AI", description: "The platform for performance CX", href: "/products/itelligence-ai" },
];

export function AITrainingContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* S2: The Problem */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">Traditional Coaching Arrives After the Tipping Point Has Passed</h2>
          <p className="mb-4 text-sm font-medium uppercase text-muted-foreground">By the time feedback reaches an agent, the call is a week old and the lesson is one-size-fits-all.</p>
          <p className="text-lg text-muted-foreground">
            In most operations, a supervisor listens to a handful of calls and gives feedback days later, which feels disconnected from what the agent is experiencing in real time. New hires ramp slowly because no one can pinpoint where each one is falling short. The coaching that would change behavior comes too late to make a difference in reaching revenue targets.
          </p>
        </div>
      </Section>

      {/* S3: Solutions */}
      <Section bg="muted" ref={ref}>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Fixing the Knowledge and Confidence Gap</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">Coaching, analysis, and tracking that follow what the floor actually needs.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-lg bg-white p-6 shadow-sm md:p-8"
            >
              <h3 className="mb-3 text-lg font-bold">{sol.title}</h3>
              <p className="text-sm text-muted-foreground">{sol.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* S4: Where Knowledge Enriches */}
      <Section>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Where Knowledge Enriches CX Performance</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Every call teaches the system what to coach next. The AI Training System draws from the same scoring that runs your QA, so coaching reflects the reality of your operations today, not last quarter. As the operation runs, the model learns your business and your standards, and the coaching sharpens with it.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {relatedModules.map((mod) => (
            <Link key={mod.href} href={mod.href} className="group rounded-lg border border-gray-100 p-6 transition-all hover:border-brand-blue/30 hover:shadow-md">
              <h3 className="mb-2 text-lg font-bold group-hover:text-brand-blue">{mod.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{mod.description}</p>
              <span className="text-sm font-semibold text-brand-blue group-hover:underline">Learn More →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Experience a New Way of Continuous Learning"
        body="Watch coaching build itself."
        primaryCta={{ label: "Book a Demo", href: "/get-started" }}
      />
    </>
  );
}
