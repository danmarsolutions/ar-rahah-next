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

export default function Testimonials() {

    const [api, setApi] = useState<CarouselApi>();

    return (
        <Carousel
            setApi={setApi}
            opts={{
                align: "center",
                loop: true,
                dragFree: false,
            }}
            className="w-full flex flex-row gap-32 items-center"
        >
            <div onClick={() => api?.scrollPrev()} className="flex flex-row items-center justify-center size-10 rounded-full bg-[#EFEFEF] aspect-square">
                <ChevronLeft size={24} />
            </div>
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="">
                        <div className="font-albert-sans text-6xl text-center">“I've been on many tours, but this one felt different. From visiting Sahabah sites to attending historical lectures, Ar Rahah made everything smooth, halal, and inspiring. JazakAllah Khair!”</div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div onClick={() => api?.scrollNext()} className="flex flex-row items-center justify-center size-10 rounded-full bg-black text-white aspect-square">
                <ChevronRight size={24} />
            </div>
        </Carousel>
    )
}
