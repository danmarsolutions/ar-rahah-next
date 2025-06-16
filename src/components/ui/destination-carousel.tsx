'use client';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image"


import { useEffect, useState } from "react";

export default function DestinationCarousel() {

    const [api, setApi] = useState<CarouselApi>();

    return (
        <Carousel
            setApi={setApi}
            opts={{
                align: "center",
                loop: true,
                dragFree: false,
            }}
            className="w-full flex flex-col gap-20"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
        <div className="flex flex-col gap-8 h-fit w-full">
            <div className="relative w-full transition-all linear duration-300 h-[600px]">
                <Image
                    src='/tower-with-cloud.jpg'
                    className="rounded-2xl -z-10"
                    alt=""
                    objectFit="cover"
                    fill
                />
                <div className="w-full h-full flex flex-col justify-between select-none p-6">
                    <div className="w-fit bg-white rounded-full py-3 px-4 font-inter-tight font-medium">15 destinations</div>
                    <div className="flex flex-col gap-3 text-white">
                        <div className="font-semibold text-3xl">
                            Turkey
                        </div>
                        <p className="font-albert-sans text-lg leading-snug">Ottoman legacies, whirling dervishes, and Istanbul’s grand mosques.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}