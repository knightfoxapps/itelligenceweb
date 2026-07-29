"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SundialSection } from "@/components/sections/shared/sundial-section";
import { FAQSection } from "@/components/sections/shared/faq-section";
import { CTASection } from "@/components/sections/shared/cta-section";
import { Sparkles, MessageCircle, SlidersHorizontal } from "lucide-react";

const sundialCards = [
  {
    eyebrow: "ENGAGE",
    title: "How We Engage",
    description:
      "Modern automotive retail demands frictionless experiences across every channel. Intelligent routing and insight-empowered CX specialists facilitate easy bookings and personalized interactions, ensuring every inquiry becomes an opportunity to strengthen trust and accelerate purchase decisions.",
    cta: { label: "Explore Engage", href: "/solutions/engage" },
  },
  {
    eyebrow: "GROW",
    title: "How We Grow",
    description:
      "When customers are evaluating a major purchase, speed is not measured by miles. It's measured by your brand's ability to convert interest into action. AI-assisted support, smart automation and VIP-level service leads to greater close rates, ongoing vehicle servicing revenue and a smooth, unified sales experience.",
    cta: { label: "Explore Grow", href: "/solutions/grow" },
  },
  {
    eyebrow: "RETAIN",
    title: "How We Retain",
    description:
      "Choice is built long after the sale. Every service interaction shapes future loyalty. A recall notice, a warranty question, a missed payment reminder — each one is a chance to earn trust or lose it. We turn those moments into insight: patterns in service calls that reveal where loyalty is quietly won or lost.",
    cta: { label: "Explore Retain", href: "/solutions/retain" },
  },
];

const capabilities = [
  { title: "Driver-to-Ownership CX Lifecycle Delivery", description: "Engage shoppers across every touchpoint, from first click to final purchase.", href: "/capabilities/cx-lifecycle-delivery" },
  { title: "Insight Activation for Automotive", description: "Connect insight to operations to drive high performance and innovation.", href: "/capabilities/insight-activation" },
  { title: "Intelligent Workforce for Modern Customer Journeys", description: "Trained nearshore teams that build trust and accelerate purchase decisions.", href: "/capabilities/nearshore-talent" },
  { title: "Scalable Workforce Design for Retail and Service Networks", description: "Strategies built to scale across sales, servicing, roadside assistance, dispatch and rentals.", href: "/capabilities/operational-design" },
];

const caseStudies = [
  { tag: "GROW", stat: "Converted 70% of queries to leads", context: "Our enhanced web-based live chat solution resulted in a sales lift for a leading automotive retailer." },
  { tag: "RETAIN", stat: "New quality framework results in 98% QA scores", context: "Our customized QA framework created a trackable, repeatable coaching process for a major transportation service provider." },
];

const faqs = [
  { question: "How do you support the end-to-end automotive customer journey?", answer: "We help automotive brands, dealerships, service networks, roadside assistance providers, and rental companies create connected experiences across every stage of the customer lifecycle. From digital inquiries and appointment scheduling to post-service follow-up, we combine intelligent technology, skilled nearshore teams, and data-driven insights." },
  { question: "How do you turn customer interactions into measurable business outcomes?", answer: "Every customer interaction is a source of insight. Using AI-enabled analytics and performance intelligence, we identify buying signals, service trends, friction points, and opportunities to improve the customer experience." },
  { question: "Can your solutions integrate with our existing automotive systems?", answer: "Yes. Our solutions are designed to work alongside your existing technology ecosystem, including CRM platforms, dealer management systems, service scheduling tools, contact center technologies, and digital retail platforms." },
  { question: "How quickly can you scale support across multiple locations?", answer: "Our flexible nearshore delivery model enables organizations to scale quickly across dealerships, service centers and digital channels. We design workforce strategies around your business goals." },
];

export function AutomotiveContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* S2: Stats */}
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-lg border border-gray-100 p-8">
            <p className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Industry Pressure</p>
            <p className="text-3xl font-bold md:text-4xl">40%</p>
            <p className="mt-2 text-muted-foreground">expect the car buying experience to justify the price.</p>
            <p className="mt-1 text-xs text-gray-400">Deloitte, 2025</p>
          </div>
          <div className="rounded-lg border-2 border-brand-blue bg-brand-blue/5 p-8">
            <p className="mb-2 text-sm font-semibold uppercase text-brand-blue">itelligenceCX Performance</p>
            <p className="text-3xl font-bold text-brand-blue md:text-4xl">70%</p>
            <p className="mt-2 text-muted-foreground">of live chat queries converted to leads.</p>
          </div>
        </div>
      </Section>

      {/* S3: Industry context */}
      <Section>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">The Era of the Value-Seeking Consumer</h2>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">In a high-cost market, customer experience is the true differentiator.</p>
            <p className="text-lg text-muted-foreground">
              The car market has changed. Vehicles cost more, confidence is thinner, and loyalty no longer comes free. Buyers aren&apos;t just choosing a vehicle. They&apos;re deciding whether the whole experience is worth the investment. That decision is made in every service call, every claims update, every question about financing or charging.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-muted p-8">
            {/* Placeholder for auto subsection image */}
            <div className="h-64 w-full rounded bg-gray-200" />
          </div>
        </div>
      </Section>

      {/* S4: Sundial — Engage / Grow / Retain */}
      <SundialSection
        heading="Customers Are Investing in the Experience, Not Just the Car."
        subheading="While most organizations operate sales, service, and support in silos, we unify those interactions through AI-enabled intelligence and operational expertise."
        cards={sundialCards}
      />

      {/* S5: Capabilities */}
      <Section bg="muted" ref={ref}>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Built for Scale, Built for Speed</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Activate smarter automotive customer journeys with intelligent workforce design, and nearshore delivery built for speed and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link href={cap.href} className="group block rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-lg font-bold">{cap.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{cap.description}</p>
                <span className="text-sm font-semibold text-brand-blue group-hover:underline">Learn more →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* S6: Platform */}
      <Section>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">One Platform. Continuous Customer Intelligence.</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Convert conversations into insight that improve sales, service, and retention.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Quality & Insight Engine" },
            { icon: MessageCircle, title: "AI Agent Performance Coach" },
            { icon: SlidersHorizontal, title: "High-Powered Workforce Optimizer" },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-100 p-6 text-center">
              <item.icon className="mx-auto mb-3 h-10 w-10 text-brand-blue" />
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/products/itelligence-ai">Explore itelligence.AI</Button>
        </div>
      </Section>

      {/* S7: Case Studies */}
      <Section bg="muted">
        <div className="mb-10">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Automotive CX in Action</h2>
          <p className="text-lg text-muted-foreground">Discover how we deliver measurable results across the automotive lifecycle.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.stat} className="rounded-lg bg-white p-8 shadow-sm">
              <span className="mb-3 inline-block rounded-sm bg-brand-blue/10 px-2 py-1 text-xs font-bold text-brand-blue">{cs.tag}</span>
              <h3 className="mb-3 text-2xl font-bold">{cs.stat}</h3>
              <p className="text-sm text-muted-foreground">{cs.context}</p>
              <Button variant="link" className="mt-4 p-0">Read full case study →</Button>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTASection
        headline="Turn Customer Interactions into Competitive Advantage."
        body="See how intelligent operations can help you increase conversions, improve service performance, and build lasting loyalty."
        primaryCta={{ label: "Explore Your CX Opportunity", href: "/get-started" }}
      />
    </>
  );
}
