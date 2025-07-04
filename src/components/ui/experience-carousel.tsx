'use client';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"


import { useEffect, useState } from "react";
import ProgressBar from "./carousel-progress-bar";
import ButtonLink from "./button-link";

export default function ExperienceCarousel() {

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
            className="w-full flex flex-col gap-10 lg:gap-20"
        >
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="lg:basis-1/2">
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
            <ButtonLink href='/about-us' className="flex lg:hidden w-full">
                Learn more
                <img className='w-[1.75em] h-fit self-center' src='/icons/triple-chevron.svg' />
            </ButtonLink>
        </Carousel>
    )
}

function Card() {
    return (
        <div className="flex flex-col gap-6 w-full border rounded-2xl p-4">
            <div className="w-full h-full flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between">
                <div className="basis-[80%] xl:basis-[60%] aspect-[370/350] lg:aspect-[450/350] order-2 lg:order-1 relative">
                    <Image
                        src='/spirtual-journey.jpg'
                        className="rounded-2xl -z-10 object-cover"
                        alt=""
                        fill
                    />
                </div>
                <div className="w-fit h-full order-1 lg:order-2 font-albert-sans font-semibold text-5xl text-left lg:text-right">01</div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="font-inter-tight font-semibold text-2xl sm:text-3xl">Spiritually Enriching Journeys:</div>
                <p className="font-albert-sans sm:text-xl">Not just vacations — our tours reconnect you with Islamic history and heritage, guided by scholars and experts.</p>
            </div>
        </div>
    )
}