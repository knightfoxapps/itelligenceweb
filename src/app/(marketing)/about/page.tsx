import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of itelligenceCX — from BPO to intelligence-led CX. Over a decade of performance, proven across industries.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
