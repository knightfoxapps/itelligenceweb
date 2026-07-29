"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FAQSection } from "@/components/sections/shared/faq-section";
import { CTASection } from "@/components/sections/shared/cta-section";
import { MapPin, Globe, Clock, Star } from "lucide-react";

const locations = [
  { name: "Jamaica", tagline: "Our Largest Workforce, and Where it All Started", locations: "Montego Bay, Kingston", language: "English", timezone: "UTC-5, no daylight saving", bestFor: "Scale in English, and the widest range of program types", href: "/locations/jamaica" },
  { name: "Saint Lucia", tagline: "New and Untapped Highly Skilled Talent", locations: "Vieux Fort", language: "English", timezone: "UTC-4, no daylight saving", bestFor: "Programs where tenure decides the outcome", href: "/locations/st-lucia" },
  { name: "Belize", tagline: "Only Country in Central America Where English is the Official Language", locations: "Belize City", language: "English and Spanish", timezone: "UTC-6, no daylight saving", bestFor: "Technical and digital programs that need English on U.S. hours", href: "/locations/belize" },
  { name: "Honduras", tagline: "Our Native Spanish-Language Talent Pool", locations: "San Pedro Sula", language: "Spanish and bilingual", timezone: "UTC-6, no daylight saving", bestFor: "Spanish-language delivery at scale", href: "/locations/honduras" },
  { name: "United States", tagline: "Specialized Talent for Regulated Roles", locations: "WAH (distributed)", language: "English and Spanish", timezone: "Distributed across US zones", bestFor: "Licensed and regulated roles that legally have to sit onshore", href: "/locations/north-america" },
];

const faqs = [
  { question: "I currently have CX operations Offshore. What if I only want to move part of it closer to home?", answer: "That is how most Nearshore engagements start. A brand launches one program, sees what changes, and moves more when it makes sense. What we usually find is that the cost savings were real on the proposal but showed up in attrition, travel, or in the management layer." },
];

export function LocationsContent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* S2: Closer to Home */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Closer to Home</h2>
          <p className="text-lg text-muted-foreground">
            When an operation sits twelve plus hours away, the distance shows up in performance. A decision waits overnight for someone to wake up. The leader who should be on the floor is on a video call at six in the morning instead.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team works your hours. Our leaders are in the building, coaching the floor while the shift is happening. And when you want to see it for yourself, Miami is under two hours out.
          </p>
        </div>
      </Section>

      {/* S3: Location Grid */}
      <Section bg="muted" ref={ref}>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">The Views Are Nice, the Outcome Is Even Better</h2>
          <p className="text-lg text-muted-foreground">Each location answers a different operational need.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Link href={loc.href} className="group block h-full rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-blue/30 border border-transparent">
                <h3 className="mb-1 text-xl font-bold group-hover:text-brand-blue">{loc.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{loc.tagline}</p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand-blue" /><span className="font-semibold text-foreground">Facilities:</span> {loc.locations}</p>
                  <p className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5 text-brand-blue" /><span className="font-semibold text-foreground">Language:</span> {loc.language}</p>
                  <p className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand-blue" /><span className="font-semibold text-foreground">Timezone:</span> {loc.timezone}</p>
                  <p className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-brand-blue" /><span className="font-semibold text-foreground">Best for:</span> {loc.bestFor}</p>
                </div>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-blue group-hover:underline">Learn More →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* S4: LaCa */}
      <Section>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-blue">Latin America and the Caribbean</p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">One Region, One Operation</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              LaCa is Latin America and the Caribbean, where every country sits inside your working day.
            </p>
            <p className="text-muted-foreground">
              The Caribbean is where English is a first language and the economies were built on hospitality. It sits on Eastern and Atlantic time, closest to the U.S. East Coast. Latin America is a mature Nearshore market with a multilingual workforce built around technology.
            </p>
            <p className="mt-4 text-muted-foreground">
              Belize built its tertiary system around technical training. Saint Lucia produces people equipped for fintech and software. Honduras turns out bilingual graduates trained in technology and data science. This region staffs the digital work, as well as the conversation.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-muted p-4">
            <Image src="/images/locations/map-wide.png" alt="itelligenceCX locations across the Caribbean and North America" width={600} height={400} className="w-full rounded-lg" />
          </div>
        </div>
      </Section>

      {/* S5: Geographic Resilience */}
      <Section bg="dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">Geographic Resilience in the Nearshore Lowers Risk</h2>
          <p className="mb-4 text-lg text-gray-300">Protect revenue potential with locations that are not in the &quot;top 20 for risk&quot; index list.</p>
          <p className="text-gray-400">
            Three of the largest offshore BPO destinations sit in the top twenty of the World Risk Index. None of our locations do. That is a published ranking, not a marketing position. Our sites are in low-risk, high-resilience countries where business continuity is paramount. Through year-round disaster preparedness, we maintain 99.9% uptime through the hurricane season.
          </p>
          <Button className="mt-8" variant="secondary" href="/performance-pilot">Request Performance Pilot</Button>
        </div>
      </Section>

      {/* S6: Buyer Markets */}
      <Section>
        <div className="mb-12 md:mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">One Region, Three Buyer Markets</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">The same operation reaches your customers in the US, Canada, and the UK.</p>
        </div>
        <p className="max-w-3xl text-muted-foreground">
          A North American brand gets full working-day overlap and a two-hour flight. A Canadian brand gets the same hours and the same proximity. A UK brand gets something the offshore alternative cannot offer: an afternoon that overlaps your morning, and a team whose English needs no adjustment for a British customer. From here, a brand serving all three does it from one operation instead of three.
        </p>
      </Section>

      {/* S7: Homegrown */}
      <Section bg="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">The Caribbean&apos;s Largest Homegrown CX Provider</h2>
          <p className="mb-2 text-sm font-semibold text-brand-blue">We Started Here</p>
          <p className="text-lg text-muted-foreground">
            We were founded in Jamaica and grew out of the region rather than arriving in it. Most providers here open sites from afar. Our local roots show up in who we can hire, how long they stay, and what they bring to a conversation — and it&apos;s the part of this business that no amount of investment can buy.
          </p>
        </div>
      </Section>

      {/* S8: FAQ */}
      <FAQSection faqs={faqs} headline="Location Questions" />

      {/* CTA */}
      <CTASection
        headline="Come See It for Yourself"
        body="Schedule a site visit and meet our pilot team."
        primaryCta={{ label: "Get Started Today", href: "/get-started" }}
      />
    </>
  );
}
