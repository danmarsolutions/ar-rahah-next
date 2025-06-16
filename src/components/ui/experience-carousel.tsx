'use client';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"


import { useState } from "react";

export default function ExperienceCarousel() {

    const [api, setApi] = useState<CarouselApi>();

    return (
        <Carousel
            setApi={setApi}
            opts={{
                align: "center",
                loop: false,
                dragFree: false,
            }}
            className="w-full flex flex-col gap-20"
        >
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2">
                        <Card />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="w-full flex flex-row justify-between">
                <div className="relative w-96 h-2 bg-[#EFEFEF] grid grid-cols-4 grid-rows-1 rounded-full">
                    <div className={cn("relative h-full rounded-full", 'col-span-1')}>
                        <div className="absolute bg-black w-[100px] h-full transition-all duration-1000 ease-in-out transform"></div>
                    </div>
                </div>
                <div className="flex flex-row gap-2.5">
                    <div onClick={() => api?.scrollPrev()} className="flex flex-row items-center justify-center size-10 rounded-full bg-[#EFEFEF]">
                        <ChevronLeft size={24} />
                    </div>
                    <div onClick={() => api?.scrollNext()} className="flex flex-row items-center justify-center size-10 rounded-full bg-black text-white">
                        <ChevronRight size={24} />
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

function Card() {
    return (
        <div className="flex flex-col gap-6 h-fit w-full border rounded-2xl p-4">
            <div className="w-full h-full flex flex-row justify-between">
                <div className="relative w-full aspect-[450/350]">
                    <Image
                        src='/spirtual-journey.jpg'
                        className="rounded-2xl -z-10"
                        alt=""
                        // objectFit="cover"
                        fill
                    />
                </div>
                <div className="w-full font-albert-sans font-semibold text-5xl text-right">01</div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="font-inter-tight font-semibold text-3xl">Spiritually Enriching Journeys:</div>
                <p className="font-albert-sans text-2xl">Not just vacations — our tours reconnect you with Islamic history and heritage, guided by scholars and experts.</p>
            </div>
        </div>
    )
}