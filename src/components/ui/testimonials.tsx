"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useState } from "react";

type Testimonial = {
  testimonial: string;
  credit: string;
};

const testimonials: Testimonial[] = [
  {
    testimonial:
      "As a family, we’re always looking for trips that align with our values. This one checked every box; nature, fun, faith, and connection.",
    credit: "Ammar A, Oshawa",
  },
  {
    testimonial:
      "Loved how everything was thought through — from halal meals to organized prayers and even private beach hours for the sisters. It made relaxing so easy.",
    credit: "Jahanzeb A, Markham",
  },
  {
    testimonial:
      "I didn’t think I’d enjoy a cottage trip this much. The vibe was so peaceful, the group was respectful, and the food was legit. Already planning to come again.",
    credit: "Danyal A, Whitby",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        dragFree: false,
      }}
      className="w-full flex flex-col lg:flex-row gap-10 xl:gap-24 2xl:gap-32"
    >
      <div
        onClick={() => api?.scrollPrev()}
        className="hidden self-center lg:flex flex-row items-center justify-center size-10 rounded-full bg-[#EFEFEF] aspect-square"
      >
        <ChevronLeft size={24} />
      </div>
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="w-full">
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        onClick={() => api?.scrollNext()}
        className="hidden self-center lg:flex flex-row items-center justify-center size-10 rounded-full bg-black text-white aspect-square"
      >
        <ChevronRight size={24} />
      </div>
      <div className="flex lg:hidden flex-row gap-4 self-center">
        <div
          onClick={() => api?.scrollPrev()}
          className="flex flex-row items-center justify-center size-10 rounded-full bg-[#EFEFEF] aspect-square"
        >
          <ChevronLeft size={24} />
        </div>
        <div
          onClick={() => api?.scrollNext()}
          className="flex flex-row items-center justify-center size-10 rounded-full bg-black text-white aspect-square"
        >
          <ChevronRight size={24} />
        </div>
      </div>
    </Carousel>
  );

  function TestimonialCard({
    testimonial,
    credit,
  }: {
    testimonial: string;
    credit: string;
  }) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <p className="w-full font-albert-sans text-2xl lg:text-4xl text-center">
          “{testimonial}”
        </p>
        <p className="font-albert-sans text-lg lg:text-xl text-center italic mt-8">
          -{credit}
        </p>
      </div>
    );
  }
}
