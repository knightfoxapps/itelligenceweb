import type { Metadata } from "next";
import { XHero } from "@/components/sections/shared/x-hero";
import { LocationsContent } from "./content";

export const metadata: Metadata = {
  title: "Our Locations",
  description: "Nine facilities across four countries, plus a U.S. remote network — all within a few hours of the markets they serve.",
};

export default function LocationsPage() {
  return (
    <main>
      <XHero
        eyebrow="Our Locations"
        headline="Destination CX"
        body="Nine facilities across four countries, plus a U.S. remote network for licensed work, all within a few hours of the markets they serve."
        image="/images/locations/hero-locations.png"
        imageAlt="Aerial view of Caribbean nearshore delivery center"
        headlineColor="brand-gold"
      />
      <LocationsContent />
    </main>
  );
}
