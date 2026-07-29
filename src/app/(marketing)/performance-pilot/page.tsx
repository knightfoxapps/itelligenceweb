import type { Metadata } from "next";
import { PilotHero } from "./hero";
import { PilotContent } from "./content";

export const metadata: Metadata = {
  title: "Performance Pilot",
  description: "Skip the scoping, start in two weeks. A 120-day pilot structured around outcomes defined upfront.",
};

export default function PerformancePilotPage() {
  return (
    <main>
      <PilotHero />
      <PilotContent />
    </main>
  );
}
