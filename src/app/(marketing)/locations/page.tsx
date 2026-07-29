import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/page-hero";
import { LocationsContent } from "./content";

export const metadata: Metadata = {
  title: "Our Locations",
  description: "Nine facilities across four countries, plus a U.S. remote network — all within a few hours of the markets they serve.",
};

export default function LocationsPage() {
  return (
    <main>
      <PageHero
        headline="Distance is an Operating Cost"
        subheadline="Nine facilities across four countries, plus a U.S. remote network for licensed work, all within a few hours of the markets they serve."
        backgroundImage="/images/locations/hero-locations.png"
        primaryCta={{ label: "Request Performance Pilot", href: "/performance-pilot" }}
      />
      <LocationsContent />
    </main>
  );
}
