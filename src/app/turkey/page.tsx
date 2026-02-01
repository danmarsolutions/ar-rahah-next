import Header from "@/components/ui/header";
import TurkeyPageTabs from "@/components/ui/turkey-page-tabs";
import { CalendarDays, MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Turkey Trip",
  description:
    "Join us for an unforgettable 10-day journey through Turkey with Ar Rahah. Explore the rich history, culture, and spirituality of this beautiful country, from the bustling streets of Istanbul to the serene landscapes of Cappadocia. Experience the warmth of Turkish hospitality and discover the timeless beauty of Ottoman heritage.",
};

export default function Package() {
  return (
    <main className="w-full">
      <Header />
      {/* Ar Rahah - 10 Days */}
      <section className="w-full flex flex-col gap-8 p-4 sm:p-8 md:p-10 lg:p-14">
        <h1 className="max-w-[1280px] leading-[1.25] font-inter-tight font-medium text-4xl md:text-5xl">
          Ar Rahah - 10 Days Turkey Exploration: Culture, History, and
          Spirituality
        </h1>
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
          <div className="w-full flex flex-col lg:flex-row gap-6 font-albert-sans text-base">
            <div className="flex flex-row gap-2">
              <MapPin /> Turkey
            </div>
            <div className="flex flex-row gap-2">
              <CalendarDays /> Oct 15, 2025 - Oct 24, 2025
            </div>
          </div>
          {/* <div className="w-full lg:w-fit flex flex-row gap-2 text-lg">
                        <button className="w-full sm:w-fit flex flex-row items-center justify-center gap-2 rounded-xl py-3 px-5 border-2"><Heart /> Save</button>
                        <PackageSelect />
                    </div> */}
          <div className="self-start grid grid-cols-[1fr_2fr_1fr] grid-rows-1 lg:hidden w-full flex-row items-center justify-between gap-4 max-w-lg">
            <div className="flex flex-col gap-2 font-albert-sans text-lg">
              <div className="whitespace-nowrap">Starting from</div>
              <div className="text-2xl sm:text-3xl xl:text-4xl">
                $2,900 CAD
              </div>
              <div className="whitespace-nowrap">Per Person</div>
            </div>
            <div className="w-full border border-black -ml-3 h-0"></div>
            <div className="flex flex-col gap-2 font-albert-sans text-lg">
              <div>To</div>
              <div className="text-2xl sm:text-3xl xl:text-4xl">
                $3,900 CAD
              </div>
              <div className="whitespace-nowrap">Per Person</div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[360px] sm:min-h-[480px] md:min-h-[680px] grid grid-cols-[minmax(180px,1fr)_minmax(100px,180px)] sm:grid-cols-[minmax(316px,1fr)_minmax(200px,300px)] md:grid-cols-[1fr_300px] xl:grid-cols-[1fr_500px] grid-rows-2 gap-2 sm:gap-4">
          <div className="relative row-span-2 h-full w-full flex flex-col gap-6 justify-end lg:p-6 xl:p-12">
            <Image
              className="rounded-xl md:rounded-2xl -z-10 object-cover object-bottom"
              src="/mosque.jpg"
              alt="Historic mosque in Turkey"
              fill
            />
            <div className="hidden lg:block font-inter-tight font-semibold text-5xl text-white">
              Pricing
            </div>
            <div className="hidden lg:flex w-full flex-row items-center justify-between gap-4 text-white max-w-xl">
              <div className="w-fit flex flex-col gap-2 font-albert-sans text-lg">
                <div className="whitespace-nowrap">Starting from</div>
                <div className="text-2xl sm:text-3xl xl:text-4xl">
                  $2,900 CAD
                </div>
                <div className="whitespace-nowrap">Per Person</div>
              </div>
              <div className="border border-white w-full h-0"></div>
              <div className="w-fit flex flex-col gap-2 font-albert-sans text-lg">
                <div>To</div>
                <div className="text-2xl sm:text-3xl xl:text-4xl">
                  $3,900 CAD
                </div>
                <div className="whitespace-nowrap">Per Person</div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src="/bird-flying.jpg"
              alt="Bird in flight over landscape"
              fill
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src="/hot-balloons.jpg"
              alt="Hot air balloons over Cappadocia"
              fill
            />
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <TurkeyPageTabs />
    </main>
  );
}
