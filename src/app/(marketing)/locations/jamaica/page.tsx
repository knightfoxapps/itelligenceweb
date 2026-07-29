import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/page-hero";
import { JamaicaContent } from "./content";

export const metadata: Metadata = {
  title: "Jamaica",
  description: "A country built on making people feel welcome. The instinct came first, the industry came after.",
};

export default function JamaicaPage() {
  return (
    <main>
      <PageHero
        headline="Hospitality Roots Run Deep"
        subheadline="A country built on making people feel welcome. The instinct came first, the industry came after."
        backgroundImage="/images/locations/hero-jamaica.png"
        primaryCta={{ label: "Get Started", href: "/get-started" }}
      />
      <JamaicaContent />
    </main>
  );
}
