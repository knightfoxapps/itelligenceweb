import type { Metadata } from "next";
import { XHero } from "@/components/sections/shared/x-hero";
import { AutomotiveContent } from "./content";

export const metadata: Metadata = {
  title: "Automotive",
  description: "Transform every customer interaction, from first inquiry to legacy purchase, into measurable commercial value.",
};

export default function AutomotivePage() {
  return (
    <main>
      <XHero
        eyebrow="Industry"
        headline="Automotive"
        body="Transform every customer interaction, from first inquiry to legacy purchase, into measurable commercial value."
        image="/images/industries/hero-automotive.png"
        imageAlt="Automotive customer experience"
        cta={{ label: "Get in Touch", href: "/get-started" }}
      />
      <AutomotiveContent />
    </main>
  );
}
