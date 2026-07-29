import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/page-hero";
import { CXLifecycleContent } from "./content";

export const metadata: Metadata = {
  title: "CX Lifecycle Delivery",
  description: "CX Performance at every stage of customer choice. Engage every customer with delivery that optimizes every call, every chat, every signal.",
};

export default function CXLifecycleDeliveryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Engage, Grow & Retain"
        headline="At the Tipping Point of Loyalty"
        subheadline="CX Performance at every stage of customer choice."
        backgroundImage="/images/capabilities/hero-cx-lifecycle.png"
        primaryCta={{ label: "Start a Pilot", href: "/performance-pilot" }}
        secondaryCta={{ label: "itelligence.AI", href: "/products/itelligence-ai" }}
      />
      <CXLifecycleContent />
    </main>
  );
}
