import type { Metadata } from "next";
import { CXLifecycleHero } from "./hero";
import { CXLifecycleContent } from "./content";

export const metadata: Metadata = {
  title: "CX Lifecycle Delivery",
  description: "CX Performance at every stage of customer choice.",
};

export default function CXLifecycleDeliveryPage() {
  return (
    <main>
      <CXLifecycleHero />
      <CXLifecycleContent />
    </main>
  );
}
