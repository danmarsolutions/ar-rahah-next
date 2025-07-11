import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleCheck } from "lucide-react";

export type TourPlanDay = {
  title: string;
  activities: string[];
};

const tourPlan: TourPlanDay[] = [
  {
    title: "Day 1 - The Gateway to History",
    activities: [
      "Arrive and settle into Istanbul",
      "Tour of Istanbul",
    ],
  },
  {
    title: "Day 2 - Tracing the Roots of the Roman & Ottoman Empires",
    activities: [
      "Visit Tomb of Abu Ayyub Al-Ansari (ra)",
      "Tour of Iznik (Nicea)",
      "Travel to Bursa",
    ],
  },
  {
    title: "Day 3 - The Birthplace of the Ottoman Empire",
    activities: [
      "Explore Tombs of Osman and Orhan Ghazi",
      "Visit the Green Mosque",
      "Tour of the Grand Mosque and Silk Bazaar",
      "Tour of the Beautiful City of Bursa",
    ],
  },
  {
    title: "Day 4 - Tracing the Roots of the Ottoman Empire",
    activities: [
      "Visit the Ertugrul Ghazi Masjid and Tomb in Sogut",
      "Travel through the Landscapes of Anatolia",
      "Travel from Bursa to Sogut",
    ],
  },
  {
    title: "Day 5 - Konya Sufi Experience & Journey to Cappadocia",
    activities: [
      "Explore the Mevlana Museum and learn about Rumi’s teachings",
      "Attend a whirling Dervishes performance",
      "Visit the Karatay Medrese and Ince Minaret Merese",
      "Travel to Cappadocia",
    ],
  },
  {
    title: "Day 6 - Cappadocia Exploration: A Land of Wonders",
    activities: [
      "Optional: Hot Air Balloon Ride over the Cappadocia landscape",
      "Visit Uchisar Castle for panoramic view of Cappadocia",
      "Visit the Goreme Open-Air Museum",
      "Wander through surreal Devren Valley and its unique rock formations.",
    ],
  },
  {
    title:
      "Day 7 – Cappadocia to Ankara: A Journey into Modern Turkey",
    activities: [
      "Visit Anitkabir Mausoleum",
      "Explore the Museum of Anatolian Civilizations and its treasures from Ancient Anatolia",
      "Learn about the diverse history of Turkey from Hittites to Ottoman.",
    ],
  },
  {
    title:
      "Day 8 – Ankara to Istanbul: The Heart of the Ottoman Empire",
    activities: [
      "Visit the Sulemaniye Mosque and Ottoman Complex.",
      "Explore the Grand Bazaar for last-minute shipping & souvenirs.",
      "Experience the blend of ancient history and modern Istanbul life.",
    ],
  },
  {
    title: "Day 9 – Istanbul: Discovering the Ottoman Hertitage",
    activities: [
      "Explore the opulent Topkapi Palace and the Otoman Sultans residence.",
      "Visit the Hagia Sopia Mosque and its historical significance.",
      "Enjoy a Bosphorus Cruise for breathtaking views of Istanbul’s Skyline.",
    ],
  },
  {
    title:
      "Day 10 – Departure form Istanbul: Farewell to a Journey Through Time",
    activities: [
      "Last moment for exploration or relaxation in Istanbul.",
      "Departure from Turkey.",
    ],
  },
];

export default function TourPlanAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-4 lg:gap-8"
    >
      {tourPlan.map((plan, index) => (
        <AccordionItem
          key={index}
          className="border last:border-b font-albert-sans rounded-2xl lg:rounded-2xl p-4"
          value={index.toString()}
        >
          <AccordionTrigger className="text-lg font-semibold p-0">
            {plan.title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-xl pt-8">
            {plan.activities.map((activity, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-row items-center gap-4 ps-4"
                >
                  <CircleCheck className="size-5" />
                  <span>{activity}</span>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
