import ButtonLink from "@/components/ui/button-link";
import DestinationCarousel from "@/components/ui/destination-carousel";
import ExperienceCarousel from "@/components/ui/experience-carousel";
import Header from "@/components/ui/header";
import { Section, SectionBadge } from "@/components/ui/section";
import { Phone } from "lucide-react";
import Testimonials from "@/components/ui/testimonials";
import { TripsCarousel } from "@/components/ui/trips-carousel";

import {
  CalendarDays,
  ChevronRight,
  MapPin,
  ChevronsRight,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* Header + Hero wrapper to fill viewport */}
      <div className="h-screen flex flex-col">
        <Header />
        {/* Hero */}
        <section className="relative flex-1 flex flex-col items-end lg:flex-row lg:items-end justify-center sm:justify-end gap-12 p-4 sm:p-12">
          <Image
            src="/hero.jpg"
            fill
            alt="Scenic travel destination"
            className="-z-10 object-cover object-center"
          />
          <div className="flex flex-col gap-6 sm:gap-4 text-white">
            <h1 className="font-inter-tight text-left text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-semibold">
              <span className="whitespace-nowrap">Ar Rahah</span>—Your
              Trusted Muslim-Friendly Travel Partner
            </h1>
            <div className="font-albert-sans text-left md:text-lg xl:text-lg leading-tight max-w-4xl">
              Specializing in creating enriching travel experiences
              tailored for Muslim travelers. From halal-certified
              dining to prayer accommodations and spiritually
              meaningful itineraries, we ensure your journey is
              seamless, fulfilling, and aligned with your
              values—wherever you go.
            </div>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <ButtonLink
              href="/about-us"
              variant="onDarkOutline"
              className="md:text-md font-semibold min-w-max sm:self-end"
            >
              <span>About Us</span>
              <ChevronsRight aria-hidden />
            </ButtonLink>
            <ButtonLink
              href="/contact-us"
              variant="tertiary"
              className="md:text-lg font-semibold min-w-max sm:self-end"
            >
              <Phone size="1.25em" aria-hidden /> Contact Us
            </ButtonLink>
            {/* <ButtonLink
              href="/turkey"
              variant="secondary"
              className="md:text-lg font-semibold min-w-max sm:self-end"
            >
              <span>10 Days Turkey Exploration Trip</span>
              <ChevronsRight aria-hidden />
            </ButtonLink> */}
          </div>
        </section>
      </div>
      {/* Spiritual Adventure */}
      <Section
        id="topTours"
        variant="muted"
        className="flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-6">
          <SectionBadge>Spiritual Adventure</SectionBadge>
          <h2 className="font-inter-tight font-semibold text-3xl text-center leading-tight lg:text-left lg:text-5xl">
            Top Tours to Spark Your Wanderlust
          </h2>
          <p className="font-albert-sans text-lg text-center lg:text-left">
            Explore our top-rated tours, crafted with powerful
            stories, unforgettable sights, and soul-stirring
            experiences.
          </p>
        </div>
        {/* <TripCard selected={true} /> */}
        {/* Uncomment the following line to enable the TripsCarousel component for multiple trips */}
        <TripsCarousel />
      </Section>
      {/* Ar Raha - 10 Days Turkey
      <section className="w-full flex flex-col lg:flex-row justify-between p-4 py-14 sm:p-12 xl:p-24 2xl:p-32 gap-10 xl:gap-20">
        <div className="w-full h-fit lg:max-w-[456px] 2xl:max-w-[646px] flex flex-col gap-8 xl:gap-14">
          <div className="flex flex-col gap-8">
            <h2 className="font-inter-tight font-semibold text-[32px] lg:text-4xl text-4xl leading-snug">
              Ar Rahah - 10 Days Turkey Exploration: Culture, History,
              and Spirituality
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 md:gap-4 font-albert-sans text-base">
              <div className="flex flex-row items-center gap-2">
                <MapPin /> Turkey
              </div>
              <div className="flex flex-row items-center gap-2">
                <CalendarDays /> Oct 15, 2025 - Oct 24, 2025
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between gap-4 max-w-xl">
            <div className="w-fit flex flex-col gap-2 font-albert-sans text-base">
              <div className="whitespace-nowrap">Starting from</div>
              <div className="text-2xl sm:text-3xl xl:text-3xl">
                $2,900 CAD
              </div>
              <div className="whitespace-nowrap">Per Person</div>
            </div>
            <div className="border border-black w-full h-0"></div>
            <div className="w-fit flex flex-col gap-2 font-albert-sans text-base">
              <div>To</div>
              <div className="text-2xl sm:text-3xl xl:text-3xl">
                $3,900 CAD
              </div>
              <div className="whitespace-nowrap">Per Person</div>
            </div>
          </div>
          <ButtonLink href="/turkey" variant="primary">
            See more details
            <ChevronRight aria-hidden />
          </ButtonLink>
        </div>
        <div className="basis-1/2 w-full h-fit grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-[minmax(256px,2fr)_1fr] grid-rows-2 gap-2 md:gap-4">
          <div className="relative h-full w-full row-span-2">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src="/mosque.jpg"
              alt="Historic mosque in Turkey"
              fill
            />
          </div>
          <div className="relative h-full aspect-square">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src="/bird-flying.jpg"
              alt="Bird in flight over landscape"
              fill
            />
          </div>
          <div className="relative h-full aspect-square">
            <Image
              className="rounded-xl md:rounded-2xl object-cover"
              src="/hot-balloons.jpg"
              alt="Hot air balloons over Cappadocia"
              fill
            />
          </div>
        </div>
        <ButtonLink
          href="/turkey"
          variant="primary"
          className="flex lg:hidden w-full"
        >
          See more details
          <ChevronRight aria-hidden />
        </ButtonLink>
      </section> */}
      {/* Video */}
      {/* Uncomment below when we have a video for this section */}
      {/* <section className="w-full py-14 px-4 sm:px-12 xl:px-24 2xl:px-32"> */}
      {/*   <div className="relative w-full aspect-square sm:aspect-video max-h-[90vh] flex flex-col justify-center items-center gap-2 sm:gap-6"> */}
      {/*     <Image */}
      {/*       src="/hot-balloons.jpg" */}
      {/*       alt="" */}
      {/*       fill */}
      {/*       className="rounded-3xl lg:rounded-[60px] -z-10 object-cover" */}
      {/*     /> */}
      {/*     <CirclePlay */}
      {/*       className="size-12 sm:size-32" */}
      {/*       color="white" */}
      {/*       strokeWidth="1px" */}
      {/*     /> */}
      {/*     <div className="text-white font-inter-tight font-semibold text-2xl sm:text-4xl"> */}
      {/*       Explore Turkey with us! */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}

      {/* Our Destinations */}
      <Section
        id="destinations"
        className="flex flex-col gap-10 xl:gap-16 2xl:gap-20"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 xl:gap-16 2xl:gap-20">
          <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-4">
            <SectionBadge>Our Destinations</SectionBadge>
            <h2 className="font-inter-tight font-semibold text-3xl text-center leading-tight lg:text-left lg:text-5xl">
              Your next favorite place awaits
            </h2>
          </div>
          <div className="flex flex-col gap-6 max-w-[822px] items-center lg:items-start place-self-center lg:place-self-end">
            <p className="text-center lg:text-left">
              Get the best value for your halal-friendly travel —
              enjoy exclusive discounts, seasonal offers, and curated
              getaways designed with Muslim travelers in mind.
            </p>
            <ButtonLink href="/about-us" variant="primary">
              Learn more
              <ChevronsRight aria-hidden />
            </ButtonLink>
          </div>
        </div>
        <DestinationCarousel />
      </Section>

      {/* Signature Experiences */}
      <Section
        variant="muted"
        className="flex flex-col gap-10 xl:gap-16 2xl:gap-20"
      >
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col items-center lg:items-start gap-8">
            <SectionBadge>Signature Experiences</SectionBadge>
            <h2 className="font-inter-tight font-semibold text-3xl text-center lg:text-left lg:text-5xl">
              What&apos;s so special about this?
            </h2>
          </div>
          <ButtonLink
            href="/about-us"
            variant="primary"
            className="hidden lg:flex place-self-end"
          >
            Learn more
            <ChevronsRight aria-hidden />
          </ButtonLink>
        </div>
        <ExperienceCarousel />
      </Section>
      {/* Testimonials */}
      <Section
        id="testimonials"
        className="min-h-[50vh] flex flex-col justify-center items-center gap-8"
      >
        <div className="flex flex-col items-center gap-4">
          <SectionBadge>Loyalty Speaks</SectionBadge>
          <h2 className="font-inter-tight font-semibold text-3xl lg:text-5xl">
            Testimonials
          </h2>
        </div>
        <Testimonials />
      </Section>
      <section className="relative w-full sm:max-h-[512px] min-h-[40vh] flex flex-col items-center justify-center text-white p-4 md:p-6">
        <Image
          className="p-4 rounded-3xl md:rounded-hero -z-10 object-cover object-center"
          src="/uncover-unique.jpg"
          alt="Uncover unique travel destinations"
          fill
        />
        <div className="flex flex-col items-center justify-center font-albert-sans gap-12 max-w-[1074px] m-8 md:mx-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-center leading-tight">
              Uncover unique destinations tailored just for you by{" "}
              <span className="whitespace-nowrap">Ar Rahah</span>
            </h2>
          </div>
          <ButtonLink href="/turkey" variant="secondary">
            Book Trip to Turkey
            <ChevronsRight aria-hidden />
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
