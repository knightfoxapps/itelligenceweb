import type { Metadata } from "next";
import { JamaicaHero } from "./hero";
import { JamaicaContent } from "./content";

export const metadata: Metadata = {
  title: "Jamaica",
  description: "A country built on making people feel welcome. The instinct came first, the industry came after.",
};

export default function JamaicaPage() {
  return (
    <main>
      <JamaicaHero />
      <JamaicaContent />
    </main>
  );
}
