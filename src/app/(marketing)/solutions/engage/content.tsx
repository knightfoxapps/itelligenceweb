"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FAQSection } from "@/components/sections/shared/faq-section";
import { CTASection } from "@/components/sections/shared/cta-section";
import { Handshake, Target, TrendingUp, GraduationCap } from "lucide-react";

const solutions = [
  {
    tag: "SKILLED",
    title: "Adaptive Support",
    description:
      "Trained specialists who rely on situational analysis and critical thinking, not scripts, solve problems, resolve complex escalations, and handle the nuances of white glove accounts.",
  },
  {
    tag: "CONNECTED",
    title: "Multilingual Voice and Digital",
    description:
      "Bilingual English-Spanish support that is culturally relevant and delivered through nearshore teams. Multilingual digital solutions to cost-effectively extend your reach across markets.",
  },
  {
    tag: "INTELLIGENT",
    title: "AI-First Support",
    description:
      "Always-on, domain-trained AI solution that is responsive and scalable with intelligent routing to human support for high-impact issues.",
  },
  {
    tag: "SCALABLE",
    title: "CX Surge Management",
    description:
      "Dynamic and proven staffing models that can flex with cyclical volumes. Streamlined recruitment and onboarding processes ensure speed without compromising quality.",
  },
];

const channels = [
  { title: "Customer Support", description: "Machine intelligence and human touch for resolution consistency across critical moments." },
  { title: "Technical Support", description: "Proactive Tier I and II support from skilled specialists who diagnose, troubleshoot and resolve complex service issues." },
  { title: "Back Office", description: "Back-end processes that keep your front end strong and allow you to cost-effectively deliver quality CX with precision." },
];

const howWeEngage = [
  { icon: Handshake, title: "Leadership Proximity", description: "Senior leaders embedded within your operation ensure decisions are fast, informed, and aligned with your brand vision." },
  { icon: Target, title: "Outcome-Led Quality Assurance", description: "We measure what matters. Every interaction is scored against the outcomes that drive your business, not just a checklist." },
  { icon: TrendingUp, title: "Intelligence That Compounds", description: "Our AI learns from every interaction. The system gets smarter, your team gets sharper, and your customers feel the difference." },
  { icon: GraduationCap, title: "Skilled Nearshore Workforce", description: "Culturally aligned, technically fluent talent that operates as a seamless extension of your brand, not an outsourced function." },
];

const faqs = [
  {
    question: "What's the difference between Engage Solutions and a traditional contact center?",
    answer: "Traditional contact centers are often designed to manage volume and execute transactions. Engage is designed to influence outcomes and turn cost-centers into profit centers by going below the surface of frontline interactions with a continuous loop of insight generation and sharing that flows through the CX ecosystem.",
  },
  {
    question: "What is Contact Center as a Service (CCaaS) to itelligenceCX?",
    answer: "CCaaS is all of the contact center essentials needed to deliver CX operations. We offer inbound and outbound customer contact services across phone, email, social media and chat.",
  },
  {
    question: "What hours of operation do you offer?",
    answer: "We offer 24/7 coverage, 365 days a year. Set the shifts based on your business's needs.",
  },
  {
    question: "What languages do you offer?",
    answer: "Our in-culture human communicators can engage in English or Spanish, while our Digital Agents can communicate in any preferred language.",
  },
  {
    question: "How do seasonal volume ramps work?",
    answer: "We combine predictive workforce planning, flexible staffing models, technology, and streamlined onboarding to meet changing demand without compromising service quality. AI-assisted recruitment allows us to identify choice candidates faster, while our comprehensive training programs lead to quick proficiency attainment.",
  },
];

export function EngageContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* S2: Buyer relevance */}
      <Section>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Loyalty is Not Guaranteed. It is Earned, One Customer Choice at a Time.
            </h2>
            <p className="text-lg text-muted-foreground">
              Escalations, waning retention, volume fluctuations… In a market where quality of experience makes or breaks brand loyalty, performance matters more than intention. Speed and efficiency build confidence, while empathy and personalization gain trust. Go beyond transactional delivery with front line engagement built to capture and improve the modern customer experience.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/solutions/engage-buyer.jpg"
              alt="Customer engagement"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </Section>

      {/* S3: Emotional bridge */}
      <Section bg="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            It&apos;s the Reason They Choose to Come Back...
          </h2>
          <p className="text-xl text-muted-foreground">
            For the next flight. For the next Mother&apos;s Day gift. For the next download. For the next check-in.
          </p>
        </div>
      </Section>

      {/* S4: Solutions grid */}
      <Section ref={ref}>
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">Solutions</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">CX That Can Do Hard Things</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Fully engaged human and digital CX delivery shaped by client preferences and ever ready to scale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-lg border border-gray-100 p-6 transition-shadow hover:shadow-md"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-blue">{sol.tag}</p>
              <h3 className="mb-3 text-xl font-bold">{sol.title}</h3>
              <p className="text-sm text-muted-foreground">{sol.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* S5: Channels */}
      <Section>
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">Essentials</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Full-Service Delivery</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            We combine machine intelligence and human touch for resolution consistency and to build brand confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {channels.map((ch) => (
            <div key={ch.title} className="rounded-lg border border-gray-100 p-6">
              <h3 className="mb-3 text-xl font-bold">{ch.title}</h3>
              <p className="text-sm text-muted-foreground">{ch.description}</p>
              <Button variant="link" className="mt-4 p-0" href="/get-started">Get started →</Button>
            </div>
          ))}
        </div>
      </Section>

      {/* S6: Stats */}
      <Section bg="dark">
        <div className="mb-10">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Impactful Performance</h2>
          <p className="text-lg text-gray-300">Full stack customer engagement. Outcomes you can measure.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="border-l-2 border-brand-gold pl-6">
            <p className="text-4xl font-extrabold text-white md:text-5xl">20%</p>
            <p className="mt-2 text-sm text-gray-400">Retail scale in 6 weeks</p>
          </div>
          <div className="border-l-2 border-brand-gold pl-6">
            <p className="text-4xl font-extrabold text-white md:text-5xl">98%</p>
            <p className="mt-2 text-sm text-gray-400">Tech support CSAT</p>
          </div>
          <div className="border-l-2 border-brand-gold pl-6">
            <p className="text-4xl font-extrabold text-white md:text-5xl">50%</p>
            <p className="mt-2 text-sm text-gray-400">Call volume reduction with self-serve</p>
          </div>
        </div>
      </Section>

      {/* S7: How We Engage */}
      <Section>
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">How We Engage</p>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Every Interaction Tells a Story</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Through our AI-powered global operating model, data flows seamlessly from frontline customer touchpoints to CX teams and leaders. Insights become action and action becomes loyalty.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {howWeEngage.map((item) => (
            <div key={item.title} className="border-l-2 border-brand-blue pl-6">
              <item.icon className="mb-3 h-6 w-6 text-brand-blue" />
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* S8: itelligence.AI lead-in */}
      <Section bg="muted">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Go Beyond Transactions with Intelligent Engagement
            </h2>
            <p className="text-lg text-muted-foreground">
              The voice of the customer is louder than ever, and we are listening. No more swimming in data, overwhelmed by how to use it. We are your interpreters through itelligence.AI. Get stronger CX delivery through enhanced performance monitoring, interaction personalization, pattern decoding, and insight surfacing.
            </p>
            <Button className="mt-6" href="/products/itelligence-ai">Explore itelligence.AI</Button>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/products/hero-itelligence-ai.png"
              alt="itelligence.AI platform"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </Section>

      {/* S11: FAQ */}
      <FAQSection
        headline="Engage FAQ"
        subheadline="Everything you need to know about our intelligent engagement solutions."
        faqs={faqs}
      />

      {/* S12: CTA */}
      <CTASection
        headline="Don't Assume Your Provider's Performance. Let Them Prove It."
        primaryCta={{ label: "Launch Your Pilot", href: "/performance-pilot" }}
        secondaryCta={{ label: "Get Started", href: "/get-started" }}
      />
    </>
  );
}
