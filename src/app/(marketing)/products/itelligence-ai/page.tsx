import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/page-hero";
import { ProductContent } from "./content";

export const metadata: Metadata = {
  title: "itelligence.AI",
  description:
    "Understand what every conversation is telling you. itelligence.AI captures and scores every interaction, then tells you what is really happening.",
};

export default function IntelligenceAIPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Operating Model"
        headline="Understand What Every Conversation Is Telling You"
        subheadline="itelligence.AI captures and scores every interaction in the operation we manage for you, then tells you what is really happening, and gets that to the people who can act before the moment passes."
        backgroundImage="/images/products/hero-itelligence-ai.png"
        primaryCta={{ label: "Book a Demo", href: "/get-started" }}
      />
      <ProductContent />
    </main>
  );
}
