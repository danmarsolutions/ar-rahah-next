"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";
import ProgressBar from "./carousel-progress-bar";
import ButtonLink from "./button-link";

type Experience = {
  image: string;
  title: string;
  description: string;
};
const experiences: Experience[] = [
  {
    image: "/prayer_mountain.png",
    title: "Halal-Centric Travel",
    description:
      "Travel with ease knowing your meals, prayers, and values are always prioritized.",
  },
  {
    image: "/dubai_mosque.jpg",
    title: "Faith-Based Experiences",
    description:
      "Step into Islamic history with stories of prophets, scholars, and civilizations.",
  },
  {
    image: "/muslim_market.jpg",
    title: "Authentic & Local",
    description:
      "Explore each destination through a trusted, local, and Islamic lens.",
  },
  {
    image: "/topi_walking.jpg",
    title: "A Community of Travelers",
    description:
      "Join a like-minded group seeking reflection, connection, and meaningful memories.",
  },
];

export default function ExperienceCarousel() {
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
      className="w-full flex flex-col gap-10 lg:gap-20"
    >
      <CarouselContent>
        {experiences.map((experience, index) => (
          <CarouselItem key={index} className="lg:basis-1/2">
            <ExperienceCard experience={experience} num={index + 1} />
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
      <ButtonLink href="/about-us" className="flex lg:hidden w-full">
        Learn more
        <ChevronsRight />
      </ButtonLink>
    </Carousel>
  );
}

function ExperienceCard({
  experience,
  num,
}: {
  experience: Experience;
  num: number;
}) {
  return (
    <div className="flex flex-col gap-6 w-full border rounded-2xl p-4">
      <div className="w-full h-full flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between">
        <div className="basis-[80%] xl:basis-[60%] aspect-[370/350] lg:aspect-[450/350] order-2 lg:order-1 relative">
          <Image
            src={experience.image}
            className="rounded-2xl -z-10 object-cover"
            alt=""
            fill
          />
        </div>
        <div className="w-fit h-full order-1 lg:order-2 font-albert-sans font-semibold text-5xl text-left lg:text-right">
          {num}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-inter-tight font-semibold text-2xl sm:text-3xl">
          {experience.title}
        </div>
        <p className="font-albert-sans sm:text-xl">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
