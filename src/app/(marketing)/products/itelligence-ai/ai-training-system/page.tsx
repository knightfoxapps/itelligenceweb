import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/page-hero";
import { AITrainingContent } from "./content";

export const metadata: Metadata = {
  title: "AI Training System",
  description: "Coaching that redeems revenue. The training layer of itelligence.AI, turning your lowest-scoring calls into coaching automatically.",
};

export default function AITrainingSystemPage() {
  return (
    <main>
      <PageHero
        eyebrow="itelligence.AI"
        headline="Coaching That Redeems Revenue"
        subheadline="The training layer of itelligence.AI, turning your lowest-scoring calls into coaching automatically, aimed at the gaps that actually cost you."
        backgroundImage="/images/products/hero-ai-training.png"
        primaryCta={{ label: "Book a Demo", href: "/get-started" }}
      />
      <AITrainingContent />
    </main>
  );
}
