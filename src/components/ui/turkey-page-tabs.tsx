"use client";

import TripPageTabs, {
  TripTabsConfig,
} from "@/components/ui/trip-page-tabs";
import TourPlanAccordion from "@/components/ui/tour-plan-accordion";

const turkeyConfig: TripTabsConfig = {
  overview: {
    image: "/bird-flying.jpg",
    imageAlt: "Bird in flight over Turkish landscape",
    title: "About Turkey Trip",
    paragraphs: [
      "This tour is designed to inspire and educate, immersing you in the heart of Ottoman history while drawing out timeless lessons that resonate today. From the breathtaking grandeur of Istanbul's mosques and palaces to the spiritual sanctity of Bursa, you'll walk in the footsteps of sultans, scholars, and visionaries who defined an era of progress and coexistence.",
      "Unlike conventional tours, we bring Islamic history to life with expert-guided insights, captivating stories, and a focus on the values and achievements that made the Ottoman Empire extraordinary. With every step, you'll not only discover the richness of the past but also uncover lessons that will stay with you for a lifetime.",
      "This is not just a holiday—it is an exploration of faith, history, and civilization. It is a journey of learning, reflection, and inspiration. As you walk through the lands that have witnessed the rise and fall of empires, you will gain a deeper appreciation for the legacies that continue to shape our world today.",
    ],
  },
  itinerary: {
    badge: "Tour Plan",
    title: "10 Day Itinerary",
    subtitle:
      "(Please note, this Itinerary is subject to change based on Travel Logistics)",
    content: <TourPlanAccordion />,
  },
  inclusions: {
    included: [
      "9 Nights accommodations",
      "Breakfast & Dinner",
      "A/C Transport during the Tour",
      "Professional Guide in English",
      "Entrance Fees to the indicated Museums & Sites",
      "Parking costs",
      "Presentations & History talks",
      "Taxes",
    ],
    excluded: [
      "Any meals outside of included meals",
      "Personal Expenses",
      "Optional Tours",
      "Any local transport outside of itinerary i.e. taxis etc.",
      "Hot air Balloon ride in Cappadocia",
    ],
  },
};

export default function TurkeyPageTabs() {
  return <TripPageTabs config={turkeyConfig} />;
}
