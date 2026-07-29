"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FAQSection } from "@/components/sections/shared/faq-section";
import { CTASection } from "@/components/sections/shared/cta-section";

const deliveryPillars = [
  { title: "Channel Orchestration", description: "Your customer wants options depending on their preference at a given moment in time. Whether it's instantaneous, self-service, human or digital, we orchestrate the communication journey for your target segments and service requirements." },
  { title: "Surge Management", description: "Managing costs while finding people, onboarding, designing and delivering training, measuring quality — doing all of this fast. We absorb seasonal demand, product launches, and growth spurts without quality drops." },
  { title: "Humans Where They Matter, Technology Where It Scales", description: "Our responsive operating framework evolves with your business. Technology scales effectively during ramp seasons and rapid growth periods. Humans engage where it matters most." },
  { title: "Real-Time Adjustments", description: "Predictive, not just responsive. Our operational oversight turns micro-adjustments into strong macro-performance. We capture the trends, watch the signals, and analyze the patterns that inform your next move." },
];

const lifecycleCards = [
  { tag: "Engage", title: "Seasonal Surge", description: "A modern framework able to withstand the pressure while still flexing with your business. Built for the front line of modern customer relationships." },
  { tag: "Grow", title: "Conversion Operations", description: "Turn intent into revenue for the trial, the upgrade, and the renewal. Growth comes from the conversations you are already having." },
  { tag: "Retain", title: "Loyalty Operations", description: "Know the why behind customer gains or loss. Uncover the root causes of retention, churn and customer satisfaction." },
];

const faqs = [
  { question: "How do you manage compliance for highly regulated industries across the customer lifecycle?", answer: "We have extensive experience in regulated industries like healthcare, utilities, insurance, and fintech. Our customizable framework and specialized workforce support complex delivery and are supported by our SOC 2 Type II and PCI certifications. With itelligence.AI we monitor up to 100% of all voice and non-voice interactions." },
  { question: "Does the cost of delivery change according to the volume of transactions, channels or languages needed?", answer: "Yes. Volume, channel mix, and language requirements all affect cost, and so does complexity. A short transactional chat and a forty-minute regulated conversation are not the same unit of work. We scope against your actual interaction profile and can structure it per interaction or per hour." },
  { question: "How do you determine what channels are best for my CX needs?", answer: "It begins with understanding your customer and why they engage. Based on details like customer demographics and engagement preferences, we assess legacy options and digital options. We also look at intent complexity and urgency to determine when and where to integrate virtual or human agents." },
];

export function CXLifecycleContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* S2: The Moments That Matter */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">The Moments That Matter</h2>
          <p className="text-lg text-muted-foreground">
            Customer relationships are like any relationship. They have their ups and downs. Sometimes a package goes missing, or a system fails, maybe the bill was incorrect, or their subscription lapsed.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Then there are peaks. The repeat customer redeeming their loyalty points. The new member who gives a 5-star rating — the upgrades and upsells. The smiles.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            These are the moments of truth, the stages of customer choice, that define lasting connection. This is CX lifecycle delivery. Behind every touchpoint is a system of technology and people, and it either earns the next moment or costs you one.
          </p>
        </div>
      </Section>

      {/* S3: Hard-Wired Agility */}
      <Section bg="muted">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Hard-Wired Agility</h2>
            <p className="mb-4 text-sm font-medium uppercase text-muted-foreground">It&apos;s many small wins that result in compounded performance success.</p>
            <p className="text-lg text-muted-foreground">
              CX Lifecycle delivery begins with leadership proximity, a visible and engaged account team with ownership locked in from the beginning. Decision velocity moves in days, not quarters, and named outcomes are results, not aspirations.
            </p>
          </div>
          <div className="flex items-center">
            <Image src="/images/capabilities/cx-agility.jpg" alt="Hard-wired agility" width={500} height={400} className="rounded-lg object-cover" />
          </div>
        </div>
      </Section>

      {/* S4: Behind the Every Day */}
      <Section ref={ref}>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Behind the Every Day of Customer Satisfaction</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            For every season, there is a strategy. At every touch point, a decision. We make it fast and we make it count.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {deliveryPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-lg border border-gray-100 p-6 md:p-8"
            >
              <h3 className="mb-3 text-lg font-bold">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* S5: CX Lifecycle in Action */}
      <Section>
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">CX Lifecycle</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">See CX Lifecycle Delivery in Action</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">Earn the relationship, grow it, keep it. This is where value acquisition lives.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {lifecycleCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-gray-100 p-6 md:p-8">
              <span className="mb-3 inline-block rounded-sm bg-brand-blue/10 px-2 py-1 text-xs font-bold text-brand-blue">{card.tag}</span>
              <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* S6: itelligence.AI */}
      <Section bg="dark">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">itelligence.AI Breaks Through the Noise</h2>
            <p className="mb-4 text-lg text-gray-300">AI-powered analytics give the signal. An experienced operational team acts.</p>
            <p className="text-gray-400">
              itelligence.AI is not an add-on. It&apos;s the platform on which lifecycle delivery is built and how data becomes one of your most valuable assets. It can predict, enhance, and guide smarter decisions.
            </p>
            <Button className="mt-6" variant="secondary" href="/products/itelligence-ai">Explore itelligence.AI</Button>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/capabilities/cx-platform.jpg" alt="itelligence.AI platform" width={400} height={300} className="rounded-lg" />
          </div>
        </div>
      </Section>

      {/* S7: FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTASection
        headline="Start the Conversation Today"
        body="See how lifecycle delivery can transform your customer outcomes."
        primaryCta={{ label: "Start a Pilot", href: "/performance-pilot" }}
        secondaryCta={{ label: "Get Started", href: "/get-started" }}
      />
    </>
  );
}
