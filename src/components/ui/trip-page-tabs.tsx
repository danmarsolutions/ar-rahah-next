"use client";

import { Section, SectionBadge } from "@/components/ui/section";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CircleCheck, CircleX } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export interface TripTabsConfig {
  overview: {
    image: string;
    imageAlt: string;
    title: string;
    paragraphs: string[];
  };
  itinerary?: {
    badge: string;
    title: string;
    subtitle?: string;
    content: ReactNode;
  };
  inclusions: {
    included: string[];
    excluded: string[];
  };
}

interface TripPageTabsProps {
  config: TripTabsConfig;
}

export default function TripPageTabs({ config }: TripPageTabsProps) {
  const showItinerary = !!config.itinerary;
  const defaultTab = "overview";

  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <div className="sticky top-0 z-20 bg-background border-b">
        <div className="px-4 sm:px-8 md:px-10 lg:px-14 flex justify-center">
          <TabsList variant="line" className="h-14">
            <TabsTrigger
              value="overview"
              className="px-4 sm:px-6 font-inter-tight text-base sm:text-lg"
            >
              Overview
            </TabsTrigger>
            {showItinerary && (
              <TabsTrigger
                value="itinerary"
                className="px-4 sm:px-6 font-inter-tight text-base sm:text-lg"
              >
                Itinerary
              </TabsTrigger>
            )}
            <TabsTrigger
              value="whats-included"
              className="px-4 sm:px-6 font-inter-tight text-base sm:text-lg"
            >
              What&apos;s Included
            </TabsTrigger>
          </TabsList>
        </div>
      </div>

      {/* Overview Tab */}
      <TabsContent value="overview" className="mt-0">
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-[1fr_max-content] lg:grid-rows-1 gap-20 lg:gap-10 2xl:gap-20 p-4 py-14 sm:p-12 xl:p-24 2xl:p-32">
          <div className="relative w-full row-start-2 lg:row-auto min-h-[350px] sm:min-h-[420px]">
            <Image
              className="rounded-2xl lg:rounded-hero object-cover"
              src={config.overview.image}
              alt={config.overview.imageAlt}
              fill
            />
          </div>
          <div className="flex flex-col gap-8 font-albert-sans sm:text-lg">
            <h2 className="font-inter-tight text-[32px] lg:text-4xl xl:text-5xl font-semibold">
              {config.overview.title}
            </h2>
            {config.overview.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      </TabsContent>

      {/* Itinerary Tab */}
      {showItinerary && config.itinerary && (
        <TabsContent value="itinerary" className="mt-0">
          <Section className="flex flex-col gap-16 lg:gap-20">
            <div className="flex flex-col gap-6 lg:gap-8">
              <SectionBadge className="text-sm sm:text-base">
                {config.itinerary.badge}
              </SectionBadge>
              <div className="font-inter-tight flex flex-wrap gap-2 items-end">
                <h2 className="font-semibold text-left text-3xl lg:text-5xl">
                  {config.itinerary.title}
                </h2>
                {config.itinerary.subtitle && (
                  <span className="font-normal text-xl">
                    {config.itinerary.subtitle}
                  </span>
                )}
              </div>
            </div>
            {config.itinerary.content}
          </Section>
        </TabsContent>
      )}

      {/* What's Included Tab */}
      <TabsContent value="whats-included" className="mt-0">
        <Section className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-8">
            <SectionBadge className="text-sm sm:text-base">
              Inclusion & Exclusion
            </SectionBadge>
            <h2 className="font-inter-tight font-semibold text-center text-3xl lg:text-5xl">
              What&apos;s Covered in your Experience?
            </h2>
          </div>
          <InclusionTable
            included={config.inclusions.included}
            excluded={config.inclusions.excluded}
          />
        </Section>
      </TabsContent>
    </Tabs>
  );
}

function InclusionTable({
  included,
  excluded,
}: {
  included: string[];
  excluded: string[];
}) {
  const maxRows = Math.max(included.length, excluded.length);
  const tableRows = Array.from({ length: maxRows }, (_, i) => ({
    included: included[i] || "",
    excluded: excluded[i] || "",
  }));

  return (
    <>
      <table className="min-w-max overflow-hidden hidden lg:table table-fixed border-separate">
        <thead className="h-fit text-white bg-black">
          <tr className="w-full h-full font-inter-tight text-lg sm:text-2xl font-semibold">
            <th
              className="text-center rounded-tl-2xl p-4 py-6"
              scope="col"
            >
              <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 h-full">
                <CircleCheck size="1.25em" aria-hidden />
                <span>Included</span>
              </div>
            </th>
            <th
              className="text-center rounded-tr-2xl p-4 py-6"
              scope="col"
            >
              <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 h-full">
                <CircleX size="1.25em" aria-hidden />
                <span>Not Included</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="font-albert-sans font-medium text-center sm:text-lg [&>*]:h-fit [&>tr>*]:px-4 [&>tr>*]:py-6 [&>tr>*:nth-child(odd)]:border-l [&>tr>*:nth-child(even)]:border-r [&>tr:last-child>*]:border-b [&>tr>*]:border-t [&>tr>*:nth-child(even)]:text-destructive">
          {tableRows.map((row, index) => (
            <tr key={index}>
              <td
                className={
                  index === maxRows - 1 ? "rounded-bl-2xl" : ""
                }
              >
                {row.included}
              </td>
              <td
                className={
                  index === maxRows - 1 ? "rounded-br-2xl" : ""
                }
              >
                {row.excluded}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="lg:hidden divide-y divide-gray-200 w-full">
        <div className="flex flex-col">
          {included.map((item, index) => (
            <div className="py-2" key={index}>
              <div className="text-green-600 font-semibold flex items-center gap-2">
                <CircleCheck size="1em" aria-hidden />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {excluded.map((item, index) => (
            <div className="py-2" key={index}>
              <div className="text-destructive font-semibold flex items-center gap-2">
                <CircleX size="1em" aria-hidden />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
