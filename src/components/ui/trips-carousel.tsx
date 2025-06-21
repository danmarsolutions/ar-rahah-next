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

export default function TripsCarousel() {

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
                align: "center",
                loop: true,
                dragFree: false,
            }}
            className="w-full grid grid-cols-2 gap-16 2xl:gap-20 h-fit [&>div[data-slot='carousel-content']]:col-span-full [&>div[data-slot='carousel-content']]:order-2"
        >
            <ProgressBar className="col-span-full max-w-full md:max-w-xs md:order-1 md:col-span-1 self-center" currentItem={current + 1} totalItems={count} />
            <div className="flex flex-row gap-2.5 self-center justify-self-center md:justify-self-end col-span-full md:col-span-1 order-3 md:order-1">
                <div onClick={() => api?.scrollPrev()} className="flex flex-row items-center justify-center size-10 rounded-full bg-[#EFEFEF]">
                    <ChevronLeft size={24} />
                </div>
                <div onClick={() => api?.scrollNext()} className="flex flex-row items-center justify-center size-10 rounded-full bg-black text-white">
                    <ChevronRight size={24} />
                </div>
            </div>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-[80%] md:basis-[70%] lg:basis-1/2 xl:basis-1/3">
                        <TripCard selected={index === current} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

function TripCard({ selected }: { selected: boolean }) {
    return (
        <div className={cn("flex flex-col gap-8 w-full h-full", !selected && 'opacity-60')}>
            <div className={cn("relative w-full", selected ? 'h-[500px] md:h-[60vh] ' : 'h-[400px] md:h-[50vh]')}>
                <Image
                    src='/tower-with-cloud.jpg'
                    className="rounded-2xl object-cover select-none"
                    alt=""
                    fill
                />
            </div>
            <div className="flex flex-col gap-3 select-none">
                <div className="flex flex-row justify-between items-center font-inter-tight">
                    <div className={cn("font-semibold", selected ? 'text-2xl md:text-3xl' : 'text-lg md:text-2xl')}>
                        Rise of the Ottomans
                    </div>
                    <div className="text-sm md:text-lg font-medium whitespace-nowrap">10 Days <span className="text-black/50">/ 9 Nights</span></div>
                </div>
                <p className="font-albert-sans md:text-lg">Walk in the footsteps of empires.</p>
                <div className='md:text-lg flex flex-row gap-2'><MapPin /> Istanbul, Bursa, Konya, Cappadocia</div>
            </div>
            <div className={cn("flex flex-col gap-2 md:flex-row justify-between text-lg text-center font-albert-sans", selected ? 'visible' : 'invisible')}>
                <div className="px-4 py-4 3xl:px-8 3xl:py-4 border rounded-full bg-white">From $2,499</div>
                <div className="px-4 py-4 3xl:px-8 3xl:py-4 text-white rounded-full bg-black">Book Trip to Turkey</div>
            </div>
        </div>
    )
}