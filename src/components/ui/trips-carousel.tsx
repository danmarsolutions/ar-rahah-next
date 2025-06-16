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
            className="w-full flex flex-col gap-20"
        >
            <div className="w-full flex flex-row justify-between">
                <div className="relative w-96 h-2 bg-[#EFEFEF] grid grid-cols-4 grid-rows-1 rounded-full">
                    <div className={cn("relative h-full rounded-full", 'col-span-1')}>
                        <div className="absolute bg-black w-[100px] h-full transition-[height] duration-1000 ease-in-out transform"></div>
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
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-[70%] xl:basis-1/3">
                        <TripCard selected={index === current} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

function TripCard({ selected }: { selected: boolean }) {
    return (
        <div className="flex flex-col gap-8 h-[70vh] w-full xl:aspect-[8/9]">
            <div className={cn("relative w-full  transition-all linear duration-1000", selected ? 'h-full' : 'h-[80%]')}>
                <Image
                    src='/tower-with-cloud.jpg'
                    className="rounded-2xl"
                    alt=""
                    objectFit="cover"
                    fill
                />
            </div>
            <div className="flex flex-col gap-3 select-none">
                <div className="flex flex-row justify-between items-center font-inter-tight">
                    <div className={cn("font-semibold", selected ? 'text-4xl' : 'text-2xl')}>
                        Rise of the Ottomans
                    </div>
                    <div className="text-lg font-medium whitespace-nowrap">10 Days <span className="text-black/50">/ 9 Nights</span></div>
                </div>
                <p className="font-albert-sans text-lg">Walk in the footsteps of empires.</p>
                <div className='flex flex-row gap-2'><MapPin /> Istanbul, Bursa, Konya, Cappadocia</div>
            </div>
            <div className={cn("flex flex-row justify-between text-lg font-albert-sans transistion-[opacity] duration-500", selected ? 'visible opacity-100' : 'invisible opacity-0')}>
                <div className="px-4 py-4 3xl:px-8 3xl:py-4 border rounded-full bg-white">From $2,499</div>
                <div className="px-4 py-4 3xl:px-8 3xl:py-4 text-white rounded-full bg-black">Book Trip to Turkey</div>
            </div>
        </div>
    )
}