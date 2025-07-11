"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";
import ProgressBar from "./carousel-progress-bar";

type Destination = {
  image: string;
  title: string;
  description: string;
  year: string;
};

const destinations: Destination[] = [
  {
    image: "/sandy_lane.avif",
    title: "Sandy Lane Resort",
    description:
      "Lakeside cabins, peaceful nature, and cozy comfort just a few hours from the city.",
    year: "2019",
  },
  {
    image: "/bonnie_view_inn.jpeg",
    title: "Bonnie View Inn",
    description:
      "Rustic charm meets modern ease on a quiet waterfront escape.",
    year: "2023",
  },
  {
    image: "/tower-with-cloud.jpg",
    title: "Turkey",
    description:
      "Ottoman legacies, whirling dervishes, and Istanbul’s grand mosques.",
    year: "2025",
  },
];

export default function DestinationCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    function updateCount() {
      setCount(api?.scrollSnapList().length ?? 0);
    }
    updateCount();
    addEventListener("resize", updateCount);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      removeEventListener("resize", updateCount);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        dragFree: false,
      }}
      className="w-full flex flex-col gap-12 lg:gap-20"
    >
      <CarouselContent>
        {destinations.map((destination, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <DestinationCard destination={destination} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-full flex flex-row items-center justify-between">
        <ProgressBar
          className="hidden md:block md:max-w-xs md:col-span-1 self-center"
          currentItem={current + 1}
          totalItems={count}
        />
        <div className="w-full flex flex-row justify-center md:justify-end gap-2.5">
          <div
            onClick={() => api?.scrollPrev()}
            className="flex flex-row items-center justify-center size-10 rounded-full bg-[#EFEFEF]"
          >
            <ChevronLeft size={24} />
          </div>
          <div
            onClick={() => api?.scrollNext()}
            className="flex flex-row items-center justify-center size-10 rounded-full bg-black text-white"
          >
            <ChevronRight size={24} />
          </div>
        </div>
      </div>
    </Carousel>
  );
}

function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <div className="flex flex-col gap-8 h-[60vh] max-h-[620px] w-full">
      <div className="relative w-full transition-all linear duration-300 h-full">
        <Image
          src={destination.image}
          className="rounded-2xl -z-10 object-cover object-bottom"
          alt=""
          fill
        />
        <div className="w-full h-full flex flex-col justify-between select-none p-6">
          <div className="w-fit bg-white rounded-full py-3 px-4 font-inter-tight font-medium">
            {destination.year}
          </div>
          <div className="flex flex-col gap-3 text-white bg-black/10 backdrop-blur-sm p-6 rounded-xl">
            <div className="font-semibold text-2xl sm:text-3xl">
              {destination.title}
            </div>
            <p className="font-albert-sans sm:text-lg leading-snug">
              {destination.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
