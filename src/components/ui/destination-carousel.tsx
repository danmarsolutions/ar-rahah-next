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
import ProgressBar from "./carousel-progress-bar";

export default function DestinationCarousel() {

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {

        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })

    }, [api])

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
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <Card />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="w-full flex flex-row items-center justify-between">
                <ProgressBar className="hidden md:block md:max-w-xs md:col-span-1 self-center" currentItem={current + 1} totalItems={count} />
                <div className="w-full flex flex-row justify-center md:justify-end gap-2.5">
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
        <div className="flex flex-col gap-8 h-[60vh] max-h-[620px] w-full">
            <div className="relative w-full transition-all linear duration-300 h-full">
                <Image
                    src='/tower-with-cloud.jpg'
                    className="rounded-2xl -z-10 object-cover object-bottom"
                    alt=""
                    fill
                />
                <div className="w-full h-full flex flex-col justify-between select-none p-6">
                    <div className="w-fit bg-white rounded-full py-3 px-4 font-inter-tight font-medium">15 destinations</div>
                    <div className="flex flex-col gap-3 text-white">
                        <div className="font-semibold text-2xl sm:text-3xl">
                            Turkey
                        </div>
                        <p className="font-albert-sans sm:text-lg leading-snug">Ottoman legacies, whirling dervishes, and Istanbul’s grand mosques.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}