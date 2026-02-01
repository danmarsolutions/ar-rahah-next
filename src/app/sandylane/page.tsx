import Header from "@/components/ui/header";
import SandyLanesPageTabs from "@/components/ui/sandy-lanes-page-tabs";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sandy Lanes Cottage Resort",
  description:
    "Experience a relaxing getaway at Sandy Lanes Cottage Resort with halal-friendly amenities and activities for the whole family. Affordable halal fun for all ages in Ontario's beautiful cottage country.",
};

export default function SandyLanesPage() {
  return (
    <main className="w-full">
      <Header />
      {/* Hero Section */}
      <section className="w-full flex flex-col gap-8 p-4 sm:p-8 md:p-10 lg:p-14">
        <h1 className="max-w-[1280px] leading-[1.25] font-inter-tight font-medium text-4xl md:text-5xl">
          Sandy Lanes Cottage Resort: Affordable Halal Fun For All
          Ages
        </h1>
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
          <div className="w-full flex flex-col lg:flex-row gap-6 font-albert-sans text-base">
            <div className="flex flex-row gap-2">
              <MapPin /> Ontario, Canada
            </div>
            <div className="flex flex-row gap-2">
              <CalendarDays /> Aug 21, 2026 - Aug 26, 2026
            </div>
          </div>
        </div>

        {/* Flexible Duration Badge */}
        <div className="w-full">
          <div className="inline-flex items-center gap-2 px-4 py-3 bg-primary/10 border border-primary/20 rounded-xl">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-albert-sans font-medium text-primary">
              Flexible Stay Options: 2-night, 3-night, or 5-night
              packages available for weekends & weekdays
            </span>
          </div>
        </div>

        {/* Pricing - Mobile */}
        <div className="self-start lg:hidden w-full max-w-lg">
          <div className="flex flex-col gap-4 font-albert-sans">
            <div className="flex flex-row items-end gap-8">
              <div className="flex flex-col gap-1">
                <div className="text-sm text-muted-foreground">
                  Adult
                </div>
                <div className="text-2xl sm:text-3xl font-semibold">
                  $1,500 CAD
                </div>
                <div className="text-sm text-muted-foreground">
                  Per Person
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm text-muted-foreground">
                  Child (2-11)
                </div>
                <div className="text-2xl sm:text-3xl font-semibold">
                  $600 CAD
                </div>
                <div className="text-sm text-muted-foreground">
                  Per Person
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              * Price varies based on duration and accommodation
              options
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="w-full min-h-[360px] sm:min-h-[480px] md:min-h-[680px] grid grid-cols-[minmax(180px,1fr)_minmax(100px,180px)] sm:grid-cols-[minmax(316px,1fr)_minmax(200px,300px)] md:grid-cols-[1fr_300px] xl:grid-cols-[1fr_500px] grid-rows-2 gap-2 sm:gap-4">
          <div className="relative row-span-2 h-full w-full flex flex-col gap-6 justify-end lg:p-6 xl:p-12">
            <Image
              className="rounded-xl md:rounded-2xl -z-10 object-cover"
              src="/sandy_lane.avif"
              alt="Sandy Lanes Cottage Resort"
              fill
            />
            {/* Pricing - Desktop */}
            <div className="hidden lg:block font-inter-tight font-semibold text-5xl text-white">
              Pricing
            </div>
            <div className="hidden lg:flex w-full flex-col gap-4 text-white max-w-xl">
              <div className="flex flex-row items-end gap-12">
                <div className="flex flex-col gap-1 font-albert-sans">
                  <div className="text-lg opacity-80">Adult</div>
                  <div className="text-3xl xl:text-4xl font-semibold">
                    $1,500 CAD
                  </div>
                  <div className="text-lg opacity-80">Per Person</div>
                </div>
                <div className="flex flex-col gap-1 font-albert-sans">
                  <div className="text-lg opacity-80">
                    Child (2-11)
                  </div>
                  <div className="text-3xl xl:text-4xl font-semibold">
                    $600 CAD
                  </div>
                  <div className="text-lg opacity-80">Per Person</div>
                </div>
              </div>
              <p className="text-sm opacity-70">
                * Price varies based on duration and accommodation
                options
              </p>
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src="/sandy_lane.avif"
              alt="Cottage lakefront view"
              fill
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src="/sandy_lane.avif"
              alt="Resort activities"
              fill
            />
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <SandyLanesPageTabs />
    </main>
  );
}
