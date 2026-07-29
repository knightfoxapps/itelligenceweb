import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/page-hero";
import { EngageContent } from "./content";

export const metadata: Metadata = {
  title: "Engage",
  description:
    "End-to-end CX delivery measured in outcomes, maximized for efficiency and designed for sustained lifecycle engagement.",
};

export default function EngagePage() {
  return (
    <main>
      <PageHero
        headline="Captivate Customer Attention at Every Interaction"
        subheadline="End-to-end CX delivery measured in outcomes, maximized for efficiency and designed for sustained lifecycle engagement."
        backgroundImage="/images/solutions/hero-engage.png"
        primaryCta={{ label: "Launch Pilot", href: "/performance-pilot" }}
        secondaryCta={{ label: "itelligence.AI", href: "/products/itelligence-ai" }}
      />
      <EngageContent />
    </main>
  );
}
