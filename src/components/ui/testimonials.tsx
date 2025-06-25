'use client';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react";


import { useState } from "react";

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
            <div onClick={() => api?.scrollPrev()} className="hidden self-center lg:flex flex-row items-center justify-center size-10 rounded-full bg-[#EFEFEF] aspect-square">
                <ChevronLeft size={24} />
            </div>
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="w-full">
                        <Card />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div onClick={() => api?.scrollNext()} className="hidden self-center lg:flex flex-row items-center justify-center size-10 rounded-full bg-black text-white aspect-square">
                <ChevronRight size={24} />
            </div>
            <div className="flex lg:hidden flex-row gap-4 self-center">
                <div onClick={() => api?.scrollPrev()} className="flex flex-row items-center justify-center size-10 rounded-full bg-[#EFEFEF] aspect-square">
                    <ChevronLeft size={24} />
                </div>
                <div onClick={() => api?.scrollNext()} className="flex flex-row items-center justify-center size-10 rounded-full bg-black text-white aspect-square">
                    <ChevronRight size={24} />
                </div>
            </div>
        </Carousel>
    )

    function Card() {
        return (
            <div className="w-full flex flex-col items-center justify-center">
                <p className="w-full font-albert-sans text-2xl lg:text-4xl text-center">
                    “I&apos;ve been on many tours, but this one felt different. From visiting Sahabah sites to attending historical lectures, Ar Rahah made everything smooth, halal, and inspiring. JazakAllah Khair!”
                </p>
            </div>
        )
    }
}
