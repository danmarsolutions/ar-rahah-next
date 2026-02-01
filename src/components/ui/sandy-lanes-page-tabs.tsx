"use client";

import TripPageTabs, {
  TripTabsConfig,
} from "@/components/ui/trip-page-tabs";

const sandyLanesConfig: TripTabsConfig = {
  overview: {
    image: "/sandy_lane.avif",
    imageAlt: "Sandy Lanes Cottage Resort lakefront view",
    title: "About Sandy Lanes Cottage Resort",
    paragraphs: [
      "Escape the hustle and bustle of city life and immerse yourself in the tranquil beauty of Ontario's cottage country. Sandy Lanes Cottage Resort offers a unique halal-friendly retreat where families can reconnect, relax, and create lasting memories together.",
      "Nestled along a pristine lakefront, our private cottages provide the perfect backdrop for your getaway. Whether you're gliding across the water in a kayak, enjoying a friendly volleyball match, or simply unwinding on your private deck with a BBQ, every moment is designed for relaxation and enjoyment.",
      "What makes Sandy Lanes truly special is our commitment to providing a comfortable experience for Muslim families. With dedicated times for sisters to enjoy water activities privately, halal food options available on-site, and a family-friendly atmosphere throughout, you can focus on what matters most—quality time with your loved ones.",
      "This isn't just a vacation—it's an opportunity to disconnect from the digital world and reconnect with nature and family. Come experience the peace and serenity that only cottage country can offer.",
    ],
  },
  // No itinerary for resort stays
  inclusions: {
    included: [
      "Private cottage with AC & fully equipped kitchen",
      "BBQ facilities",
      "Non-motorized water equipment (Kayaks, Canoes & Paddle Boats)",
      "Volleyball & Badminton",
      "Exclusive separate time for Sisters",
      "Access to resort amenities",
    ],
    excluded: [
      "Jet Ski rentals",
      "100% Halal Food on-site (available at additional cost)",
      "Personal expenses",
      "Transportation to/from resort",
    ],
  },
};

export default function SandyLanesPageTabs() {
  return <TripPageTabs config={sandyLanesConfig} />;
}
