"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Image from "next/image";

const steps = [
  { number: "1", title: "Pick the Outcome That Matters", description: "Answer rate, first-call resolution, conversion, retention. You name the number you want to move, and we match it to a pre-built pilot." },
  { number: "2", title: "Fixed Scope, Fixed Price", description: "Standard terms, no custom scoping, no MSA marathon. You know what you're getting, and what it costs, before you sign." },
  { number: "3", title: "Dedicated Pilot Leadership, Live in Two Weeks", description: "Not a team we scramble to hire. A specialist pilot team with a lead who owns your outcome, assigned and coaching the floor from day one." },
  { number: "4", title: "120 Days, Measured the Whole Way", description: "A built-in QA framework tracks the outcome from day one. At the end you have data, not a hunch." },
  { number: "5", title: "Proof That Points to What's Next", description: "The results become the business case for a full engagement, or a clean, low-cost stopping point if it's not the fit." },
];

type Outcome = "answer-rate" | "first-call-resolution" | "conversion" | "retention" | "churn-reduction" | "";
type Volume = "small" | "medium" | "large" | "";

const outcomeOptions = [
  { value: "answer-rate", label: "Answer Rate / Service Level" },
  { value: "first-call-resolution", label: "First-Call Resolution" },
  { value: "conversion", label: "Conversion / Sales" },
  { value: "retention", label: "Retention / Loyalty" },
  { value: "churn-reduction", label: "Churn Reduction" },
];

const volumeOptions = [
  { value: "small", label: "Under 1,000 interactions/month" },
  { value: "medium", label: "1,000–10,000 interactions/month" },
  { value: "large", label: "10,000+ interactions/month" },
];

function getRecommendation(outcome: Outcome, volume: Volume): string {
  if (!outcome || !volume) return "";

  const recommendations: Record<string, string> = {
    "answer-rate": "Based on your inputs, we recommend an Engage Pilot focused on service level optimization with dedicated surge capacity and intelligent routing.",
    "first-call-resolution": "Based on your inputs, we recommend an Engage Pilot with AI-assisted resolution tracking and real-time coaching to improve first-contact outcomes.",
    "conversion": "Based on your inputs, we recommend a Grow Pilot with outbound conversion specialists and AI-powered lead scoring to accelerate pipeline.",
    "retention": "Based on your inputs, we recommend a Retain Pilot with loyalty operations, churn signal detection, and proactive save strategies.",
    "churn-reduction": "Based on your inputs, we recommend a Retain Pilot focused on early churn detection, root-cause analysis, and win-back automation.",
  };

  const volumeNote = volume === "large"
    ? " Given your volume, we'll deploy a multi-team structure with dedicated leadership from day one."
    : volume === "medium"
    ? " At your volume, a focused pilot team of 10–15 specialists delivers measurable results within the 120-day window."
    : " At your volume, a lean pilot team delivers personalized attention and fast iteration.";

  return recommendations[outcome] + volumeNote;
}

export function PilotContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [outcome, setOutcome] = useState<Outcome>("");
  const [volume, setVolume] = useState<Volume>("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const recommendation = getRecommendation(outcome, volume);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to Freshsales API
    setSubmitted(true);
  };

  return (
    <>
      {/* S2: How It Works */}
      <Section ref={ref}>
        {/* Sundial graphic background */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-5">
          <Image src="/images/shared/starburst.png" alt="" width={500} height={500} />
        </div>
        <div className="relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Choose Your Outcome, We Handle the Rest</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative rounded-lg border border-gray-100 p-6 md:p-8"
            >
              <span className="mb-3 inline-block text-3xl font-extrabold text-brand-blue/20">{step.number}</span>
              <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </Section>

      {/* S3: What It Costs */}
      <Section bg="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">A Small Bet with a Clear Number</h2>
          <p className="text-lg text-muted-foreground">
            Fixed monthly price, for your outcome over 90 to 120 days. No long contract to escape, no enterprise procurement cycle to survive. A pilot is one thing done well. The deeper build, the custom integrations, the full ramp — those come after, once the number is proven.
          </p>
        </div>
      </Section>

      {/* S4: Conditional Form */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Start Your Pilot</h2>
            <p className="text-lg text-muted-foreground">
              Tell us the outcome you want to move. You will hear back within one business day with the pilot that fits and what it costs.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Outcome selector */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  What outcome do you want to move?
                </label>
                <select
                  value={outcome}
                  onChange={(e) => setOutcome(e.target.value as Outcome)}
                  className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                >
                  <option value="">Select an outcome...</option>
                  {outcomeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Volume selector */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  What&apos;s your monthly interaction volume?
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value as Volume)}
                  className="w-full rounded-sm border border-gray-200 bg-white px-4 py-3 text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  required
                >
                  <option value="">Select volume...</option>
                  {volumeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Recommendation display */}
              {recommendation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border-2 border-brand-blue/20 bg-brand-blue/5 p-6"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-blue">Our Recommendation</p>
                  <p className="text-sm text-foreground">{recommendation}</p>
                </motion.div>
              )}

              {/* Contact fields (shown after recommendation) */}
              {recommendation && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 border-t border-gray-100 pt-6"
                >
                  <p className="text-sm font-semibold">Enter your details to connect with our solutions team:</p>

                  <div>
                    <label className="mb-1 block text-sm text-muted-foreground">Company</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-sm border border-gray-200 px-4 py-3 text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-muted-foreground">Work Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-sm border border-gray-200 px-4 py-3 text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit — Hear Back in 1 Business Day
                  </Button>
                </motion.div>
              )}
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-lg bg-brand-blue/5 p-8 text-center"
            >
              <div className="mb-4 text-4xl">✓</div>
              <h3 className="mb-2 text-2xl font-bold">We&apos;ve Got It</h3>
              <p className="text-muted-foreground">
                Within one business day, you&apos;ll hear from someone who leads pilots every week. We&apos;ll confirm the outcome, the team, the price, and the start date. No deck ambush, no scoping marathon.
              </p>
            </motion.div>
          )}
        </div>
      </Section>

      {/* S5: What Happens Next */}
      <Section bg="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">What Happens Next</h2>
          <p className="text-lg text-muted-foreground">
            Within one business day, you hear from someone who leads pilots every week — not a rep reading a script. We confirm the outcome, the team, the price, and the start date. No deck ambush, no scoping marathon.
          </p>
        </div>
      </Section>
    </>
  );
}
