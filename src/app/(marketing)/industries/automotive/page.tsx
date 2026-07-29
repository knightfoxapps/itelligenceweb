import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/page-hero";
import { AutomotiveContent } from "./content";

export const metadata: Metadata = {
  title: "Automotive",
  description:
    "Transform every customer interaction, from first inquiry to legacy purchase, into measurable commercial value.",
};

export default function AutomotivePage() {
  return (
    <main>
      <PageHero
        headline="Customer Experience That Moves Revenue Forward"
        subheadline="Transform every customer interaction, from first inquiry to legacy purchase, into measurable commercial value."
        backgroundImage="/images/industries/hero-automotive.png"
        primaryCta={{ label: "Explore Your CX Opportunity", href: "/get-started" }}
      />
      <AutomotiveContent />
    </main>
  );
}
