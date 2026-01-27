"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import tripsData from "@/lib/trips.json";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";
import ButtonLink from "./button-link";
import ProgressBar from "./carousel-progress-bar";

type Trip = (typeof tripsData.trips)[number];

export function TripsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
        dragFree: false,
      }}
      className="w-full grid grid-cols-2 gap-16 2xl:gap-20 h-fit [&>div[data-slot='carousel-content']]:col-span-full [&>div[data-slot='carousel-content']]:order-2"
    >
      <ProgressBar
        className="col-span-full max-w-full md:max-w-xs md:order-1 md:col-span-1 self-center"
        currentItem={current + 1}
        totalItems={count}
      />
      <div className="flex flex-row gap-2.5 self-center justify-self-center md:justify-self-end col-span-full md:col-span-1 order-3 md:order-1">
        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          aria-label="Previous tour"
          className="flex flex-row items-center justify-center size-10 rounded-full bg-carousel-btn-inactive hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ChevronLeft size={24} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => api?.scrollNext()}
          aria-label="Next tour"
          className="flex flex-row items-center justify-center size-10 rounded-full bg-black text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ChevronRight size={24} aria-hidden />
        </button>
      </div>
      <CarouselContent>
        {tripsData.trips.map((trip) => (
          <CarouselItem key={trip.id} className="basis-full">
            <DestinationCard trip={trip} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function DestinationCard({ trip }: { trip: Trip }) {
  const { pricing, dates, location, images } = trip;
  const childPrice = pricing.childPricing?.price;
  const adultPrice = pricing.price;
  const currency = pricing.currency;

  // Use childPrice as "from" and adultPrice as "to" if both exist
  const hasRange = childPrice && adultPrice;
  const gallery = images.gallery ?? [images.hero];

  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10 xl:gap-16">
      <div className="w-full h-fit lg:max-w-[400px] 2xl:max-w-[500px] flex flex-col gap-6 xl:gap-10 shrink-0">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h2 className="font-inter-tight font-semibold text-2xl lg:text-3xl xl:text-4xl leading-snug">
            {trip.title}: {trip.subtitle}
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 md:gap-4 font-albert-sans text-sm lg:text-base">
            <div className="flex flex-row items-center gap-2">
              <MapPin size={18} /> {location.country}
            </div>
            <div className="flex flex-row items-center gap-2">
              <CalendarDays size={18} /> {formatDate(dates.start)} -{" "}
              {formatDate(dates.end)}
            </div>
          </div>
        </div>
        {hasRange ? (
          <div className="w-full flex flex-row items-center justify-between gap-4 max-w-md mx-auto lg:mx-0">
            <div className="w-fit flex flex-col gap-1 font-albert-sans text-sm">
              <div className="whitespace-nowrap">Starting from</div>
              <div className="text-xl sm:text-2xl xl:text-2xl font-medium">
                ${childPrice.toLocaleString()} {currency}
              </div>
              <div className="whitespace-nowrap">Per Person</div>
            </div>
            <div className="border border-black w-full h-0"></div>
            <div className="w-fit flex flex-col gap-1 font-albert-sans text-sm">
              <div>To</div>
              <div className="text-xl sm:text-2xl xl:text-2xl font-medium">
                ${adultPrice.toLocaleString()} {currency}
              </div>
              <div className="whitespace-nowrap">Per Person</div>
            </div>
          </div>
        ) : adultPrice ? (
          <div className="w-fit flex flex-col gap-1 font-albert-sans text-sm mx-auto lg:mx-0">
            <div className="whitespace-nowrap">Starting from</div>
            <div className="text-xl sm:text-2xl xl:text-2xl font-medium">
              ${adultPrice.toLocaleString()} {currency}
            </div>
            <div className="whitespace-nowrap">Per Person</div>
          </div>
        ) : (
          <div className="w-fit font-albert-sans text-sm mx-auto lg:mx-0">
            <div className="text-xl sm:text-2xl xl:text-2xl font-medium">
              {pricing.note}
            </div>
          </div>
        )}
        <ButtonLink
          href={`/${trip.slug}`}
          variant="primary"
          className="hidden lg:flex"
        >
          See more details
          <ChevronRight aria-hidden />
        </ButtonLink>
      </div>
      {gallery.length >= 3 ? (
        <div className="w-full lg:basis-1/2 lg:shrink-0 max-h-[50vh] lg:max-h-[400px] grid grid-cols-[2fr_1fr] grid-rows-2 gap-2 md:gap-3">
          <div className="relative h-full w-full row-span-2">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src={gallery[0]}
              alt={trip.title}
              fill
            />
          </div>
          <div className="relative h-full aspect-square">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src={gallery[1]}
              alt={trip.title}
              fill
            />
          </div>
          <div className="relative h-full aspect-square">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src={gallery[2]}
              alt={trip.title}
              fill
            />
          </div>
        </div>
      ) : (
        <div className="relative w-full lg:basis-1/2 lg:shrink-0 h-[50vh] lg:h-[400px]">
          <Image
            className="rounded-xl md:rounded-2xl object-cover"
            src={gallery[0]}
            alt={trip.title}
            fill
          />
        </div>
      )}
      <ButtonLink
        href={`/${trip.slug}`}
        variant="primary"
        className="flex lg:hidden w-full"
      >
        See more details
        <ChevronRight aria-hidden />
      </ButtonLink>
    </div>
  );
}

export function TripCard({ selected }: { selected: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 w-full h-full",
        !selected && "opacity-60",
      )}
    >
      <div
        className={cn(
          "relative w-full",
          selected
            ? "h-[500px] md:h-[60vh] "
            : "h-[400px] md:h-[50vh]",
        )}
      >
        <Image
          src="/tower-with-cloud.jpg"
          className="rounded-2xl object-cover select-none"
          alt="Tower with clouds, Turkey landscape"
          fill
        />
      </div>
      <div className="flex flex-col gap-3 select-none">
        <div className="flex flex-row justify-between items-center font-inter-tight">
          <div
            className={cn(
              "font-semibold",
              selected
                ? "text-2xl md:text-3xl"
                : "text-lg md:text-2xl",
            )}
          >
            Rise of the Ottomans
          </div>
          <div className="text-sm md:text-lg font-medium whitespace-nowrap">
            10 Days <span className="text-black/50">/ 9 Nights</span>
          </div>
        </div>
        <p className="font-albert-sans md:text-lg">
          Walk in the footsteps of empires.
        </p>
        <div className="md:text-lg flex flex-row gap-2">
          <MapPin /> Istanbul, Bursa, Konya, Cappadocia
        </div>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 md:flex-row justify-between text-base text-center font-albert-sans",
          selected ? "visible" : "invisible",
        )}
      >
        <div className="px-4 py-4 3xl:px-8 3xl:py-4 border rounded-full bg-white">
          From $2,900 CAD
        </div>
        <ButtonLink
          href="/turkey"
          variant="primary"
          className="px-4 py-4 3xl:px-8 3xl:py-4 text-center"
        >
          Book Trip to Turkey
        </ButtonLink>
      </div>
    </div>
  );
}
