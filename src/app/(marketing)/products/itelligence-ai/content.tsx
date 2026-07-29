"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FAQSection } from "@/components/sections/shared/faq-section";
import { CTASection } from "@/components/sections/shared/cta-section";

const productPillars = [
  {
    eyebrow: "Hear it All",
    title: "Score Every Conversation",
    description:
      "We score every interaction we handle for you, voice and digital, against your standard as it happens. Custom vocabulary teaches the platform about your brand terms, so the scoring understands your business rather than a generic template.",
  },
  {
    eyebrow: "Understand the Why",
    title: "See What's Actually Happening",
    description:
      "We read sentiment, intent, and emotion as calls happen, and flag escalation risk and compliance breaks in real time. Every interaction is summarized with its action items, and because the platform reads meaning, you can search across every transcript by what was said, not just the keywords used.",
  },
  {
    eyebrow: "Act in Time",
    title: "Turn Signal into Action",
    description:
      "Intelligence doesn't sit in a dashboard waiting to be noticed. Coaching builds itself from the exact call, alerts reach the coach and the account lead, and insight feeds your CRM while the moment is still open.",
  },
];

const modules = [
  {
    title: "QA & Trend Analysis",
    description: "Score every interaction against your standard and catch the patterns forming through instantaneous dashboards.",
    href: "/products/itelligence-ai/qa-trend-analysis",
  },
  {
    title: "AI Training System",
    description: "Coaching that builds itself from real calls, so training follows what the floor actually needs.",
    href: "/products/itelligence-ai/ai-training-system",
  },
  {
    title: "AI Workforce",
    description: "AI agents alongside your people, with routing that sends complexity to a person.",
    href: "/products/itelligence-ai/ai-workforce",
  },
];

const timeline = [
  { phase: "Weeks 1–3", title: "Connect", description: "Connect to your CRM, ingest recordings and metadata, map your scorecard, sandbox on your data." },
  { phase: "Weeks 4–11", title: "Calibrate", description: "Dual score against your current QA, track variance, and tune to your standard." },
  { phase: "Week 12+", title: "Activate", description: "Dashboards live, alerts on, reports on your cadence. Monthly calibration holds variance at or under 5%." },
];

const operatingModel = [
  { title: "Partnership", description: "Trusted, end-to-end relationships. We share the outcome, and nothing gets lost between the room where it was agreed and the floor where it happens." },
  { title: "People", description: "Strategists, operators, and CX leaders who work as one team with yours towards a shared number." },
  { title: "Delivery", description: "Leadership close to the floor, feeling the urgency and pushing the operation forward every cycle." },
  { title: "Experience", description: "Agents who protect your brand at every touchpoint, with service that feels personal, because, to the customer, it is." },
];

const faqs = [
  { question: "Which systems do you integrate with?", answer: "The major contact-center, telephony, and CRM platforms, through secure APIs, or we ingest recordings directly by SFTP. If you can export the interaction, we can read it." },
  { question: "Do we have to replace our existing tools?", answer: "No. itelligence.AI works alongside what you already have. And, if your operations need a new tool or capability, we design it in, and stay accountable for how it performs." },
  { question: "How is our data protected?", answer: "Our platform carries its own SOC 2 certification. PII is redacted during processing, before anything is stored or analyzed, and the platform is multi-tenant, isolated at every layer, with SSO through your identity provider." },
  { question: "How accurate is the scoring?", answer: "Transcription reaches 95 percent or better accuracy, and AI scores hold under 5% variance to your human QA, kept there by monthly calibration." },
  { question: "What do you need from us to start?", answer: "Access to recordings and metadata, your QA scorecard, and your CRM and API documentation. We handle the rest." },
];

export function ProductContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* S2: Problem */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">
            Your Customers Are Telling You Why. Now It&apos;s Time to Understand.
          </h2>
          <p className="text-lg text-muted-foreground">
            The reasons customers stay, buy, and leave are spoken every day, across more conversations than any team can hear on its own. Most of it is never heard. QA listens to a handful of calls a week. Surveys come back from a fraction of customers. The refund policy driving repeat contacts, the objection that keeps losing the sale — all of it passes unheard, until it surfaces in a number you can no longer change.
          </p>
        </div>
      </Section>

      {/* S3: Three pillars */}
      <Section bg="muted" ref={ref}>
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">One Platform, Every Conversation</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            It captures all of it, reads what matters, and puts the signal where someone can use it.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {productPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-lg bg-white p-8 shadow-sm"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-blue">{pillar.eyebrow}</p>
              <h3 className="mb-4 text-xl font-bold">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* S4: Modules */}
      <Section>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">One Unified Operation</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Explore each system, or see how they work together. Coverage is measured by the interactions we handle for you. You pay for coverage, not for features locked behind a wall.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {modules.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="group rounded-lg border border-gray-100 p-6 transition-all hover:border-brand-blue/30 hover:shadow-md md:p-8"
            >
              <h3 className="mb-3 text-xl font-bold">{mod.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{mod.description}</p>
              <span className="text-sm font-semibold text-brand-blue group-hover:underline">Learn More →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* S5: Integration Timeline */}
      <Section bg="dark">
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Tuned for a New Standard</h2>
          <p className="text-lg text-gray-300">How fast depends on how your CRM connects and whether your API documentation is ready.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {timeline.map((step, i) => (
            <div key={step.phase} className="border-l-2 border-brand-gold pl-6">
              <p className="mb-1 text-sm font-bold text-brand-gold">{step.phase}</p>
              <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* S6: Operating model */}
      <Section>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            itelligence.AI Is the Core of Our Global Operating Model
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            itelligence.AI didn&apos;t come from a vendor. When AI reshaped this industry, we built our own models that continuously train conversational data. It sits at the center and turns the parts of every engagement into a smart loop.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {operatingModel.map((item) => (
            <div key={item.title} className="border-t-2 border-brand-blue pt-4">
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection
        headline="What Buyers Want to Know"
        faqs={faqs}
      />

      {/* CTA */}
      <CTASection
        headline="Hear What You've Been Missing"
        body="See what full coverage surfaces across your customer lifecycle, and what it could change."
        primaryCta={{ label: "Book a Demo", href: "/get-started" }}
      />
    </>
  );
}
