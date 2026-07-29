import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/hero-section";
import { TheShiftSection } from "@/components/sections/home/the-shift-section";
import { PerformanceCXSection } from "@/components/sections/home/performance-cx-section";
import { SolutionMappingSection } from "@/components/sections/home/solution-mapping-section";
import { CapabilitiesSection } from "@/components/sections/home/capabilities-section";
import { ProductSuiteSection } from "@/components/sections/home/product-suite-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import { InsightsLeadInSection } from "@/components/sections/home/insights-lead-in-section";
import { FaqSection } from "@/components/sections/home/faq-section";

export const metadata: Metadata = {
  title: "itelligenceCX | Performance CX by Design",
  description:
    "We shape each interaction across the CX lifecycle with managed intelligence and influential delivery — turning the power of customer choice in your favor.",
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <TheShiftSection />
      <PerformanceCXSection />
      <SolutionMappingSection />
      <CapabilitiesSection />
      <ProductSuiteSection />
      <StatsSection />
      <InsightsLeadInSection />
      <FaqSection />
    </main>
  );
}
