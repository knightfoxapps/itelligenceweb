import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/page-hero";
import { PilotContent } from "./content";

export const metadata: Metadata = {
  title: "Performance Pilot",
  description: "Skip the scoping, start in two weeks. A 120-day pilot structured around outcomes defined upfront, at a fixed price.",
};

export default function PerformancePilotPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Performance Pilot"
        headline="Skip the Scoping, Start in Two Weeks"
        subheadline="Most CX engagements open with months of scoping and a contract to match. The Performance Pilot gets to the solution faster. You pick the outcome, we put a dedicated team on it at a fixed price, and you're live in about two weeks."
        backgroundImage="/images/cta/hero-pilot.png"
        overlay="dark"
      />
      <PilotContent />
    </main>
  );
}
