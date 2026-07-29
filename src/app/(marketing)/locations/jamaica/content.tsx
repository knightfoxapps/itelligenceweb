"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/sections/shared/cta-section";

const locationCards = [
  { city: "Montego Bay, Jamaica", tagline: "Our home, and Where it All Started", facilities: "Freeport, Montego Bay", language: "English", timezone: "UTC-5, no daylight saving" },
  { city: "Kingston, Jamaica", tagline: "Attracting diverse talent from the largest metro hub.", facilities: "Kingston, Jamaica", language: "English", timezone: "UTC-5, no daylight saving" },
];

const talentTraits = [
  { title: "Resilient", description: "Resilience here is cultural, not coached. The team shows up." },
  { title: "Industry Reputation", description: "Decades of industry growth have changed who walks through the door. Some arrive with real time already spent on a floor, so a demanding program starts with people who've handled one before." },
  { title: "Choosing Career Growth", description: "At the end of the day, they're choosing to grow with our team, not just take a job." },
];

const whyJamaica = [
  { title: "Scale", description: "If a program needs fifty people in six weeks, here that's a scheduling question, rather than an emergency. This is where we have our largest workforce with the widest range of experience." },
  { title: "Leadership Proximity", description: "Our leaders are in the building, coaching the shift while it happens. And when you want to see it for yourself, direct flights get you there in half a day." },
  { title: "Native English", description: "English is the first language here, not a second one, and it carries British roots. The spelling, the phrasing, and the reference point a UK customer expects are already ingrained." },
  { title: "Cultural Affinity", description: "American brands, sports, and television have been part of daily life here for generations. Nobody is learning the reference points from a training deck." },
  { title: "Hospitality Roots", description: "This is where clients put the human work that matters most. The warmth is not a script. It comes from people raised to make someone feel welcome, and a customer can tell the difference in the first ten seconds." },
];

export function JamaicaContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* S2–S3: Location Cards */}
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {locationCards.map((card) => (
            <div key={card.city} className="rounded-lg border border-gray-100 p-6 md:p-8">
              <h3 className="mb-2 text-xl font-bold">{card.city}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{card.tagline}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Facilities:</span> {card.facilities}</p>
                <p><span className="font-semibold text-foreground">Language:</span> {card.language}</p>
                <p><span className="font-semibold text-foreground">Timezone:</span> {card.timezone}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* S4: Gallery / Two Sites */}
      <Section bg="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">Two Sites, Opposite Coasts</h2>
          <p className="text-lg text-muted-foreground">
            Montego Bay and Kingston are 2.5 hours apart, which means a local event stays local instead of becoming your event. This matters the most when you need country redundancy.
          </p>
        </div>
        {/* Gallery placeholder */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-lg bg-gray-200" />
          ))}
        </div>
      </Section>

      {/* S5: Talent Profile */}
      <Section ref={ref}>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Who Works Here</h2>
          <p className="text-lg text-muted-foreground">A deep market, so we hire for fit, not to fill a class.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {talentTraits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="border-t-2 border-brand-blue pt-4"
            >
              <h3 className="mb-2 text-lg font-bold">{trait.title}</h3>
              <p className="text-sm text-muted-foreground">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* S6: Why Clients Choose Jamaica */}
      <Section bg="muted">
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Clients Choose Jamaica</h2>
          <p className="text-lg text-muted-foreground">Those who experience &quot;it&quot;, say it&apos;s hard to find anywhere else.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyJamaica.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* S7: Community */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">Community Means Resilience in Jamaica</h2>
          <p className="mb-4 text-sm font-medium uppercase text-muted-foreground">Cultural fluency isn&apos;t a KPI but it shows up in the numbers you track.</p>
          <p className="text-lg text-muted-foreground">
            We understand the culture because it is ours. The people leading this operation are from the same place as the people on the floor, so they know what makes someone stay and what makes someone leave. That&apos;s why we have high quality, high service, low turnover. That cultural fluency flows straight into the numbers you track.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Come See It for Yourself"
        body="Schedule a site visit and meet our pilot team."
        primaryCta={{ label: "Get Started Today", href: "/get-started" }}
      />
    </>
  );
}
