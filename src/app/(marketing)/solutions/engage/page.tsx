import type { Metadata } from "next";
import { XHero } from "@/components/sections/shared/x-hero";
import { EngageContent } from "./content";

export const metadata: Metadata = {
  title: "Engage",
  description: "End-to-end CX delivery measured in outcomes, maximized for efficiency and designed for sustained lifecycle engagement.",
};

export default function EngagePage() {
  return (
    <main>
      <XHero
        eyebrow="Engage"
        headline="Captivate Customer Attention at Every Interaction"
        body="End-to-end CX delivery measured in outcomes, maximized for efficiency and designed for sustained lifecycle engagement."
        image="/images/solutions/hero-engage.png"
        imageAlt="Engaged customer experience team"
        cta={{ label: "Launch Pilot", href: "/performance-pilot" }}
      />
      <EngageContent />
    </main>
  );
}
