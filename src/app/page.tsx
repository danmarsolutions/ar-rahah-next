import DestinationCarousel from '@/components/ui/destination-carousel';
import ExperienceCarousel from '@/components/ui/experience-carousel';
import Header from '@/components/ui/header';
import Testimonials from '@/components/ui/testimonials';
import TripsCarousel from '@/components/ui/trips-carousel';
import { CalendarDays, ChevronRight, CirclePlay, MapPin } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-full flex flex-col'>
      {/* Hero */}
      <section className='relative h-screen max-h-[720px] lg:max-h-[1080px] flex flex-col justify-end lg:flex-row gap-12 lg:items-end p-6 sm:m-4 sm:p-12'>
        <Image
          src="/hero.jpg"
          fill={true}
          alt=""
          className='-z-10 rounded-xl object-cover'
        />
        <Header isHome />
        <div className='flex flex-col gap-8 text-white'>
          <h1 className='font-inter-tight text-center sm:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold'>
            Discover Turkey with <span className='whitespace-nowrap'>Ar Rahah</span> - Your Trusted Muslim-Friendly Travel Partner
          </h1>
          <div className='font-albert-sans text-center sm:text-left md:text-lg xl:text-2xl max-w-6xl'>
            Embark on our exclusive 10-day halal-certified journey through Turkey — a land where faith, history, and breathtaking landscapes converge. From Istanbul&apos;s majestic mosques to the ancient wonders of Cappadocia, Ar Rahah curates every moment with your values in mind. Join travelers from around the world on an unforgettable adventure steeped in Islamic heritage and cultural discovery.
          </div>
        </div>
        <Link href='/package' className='w-fit min-w-max self-center sm:self-end flex flex-row items-center justify-center gap-4 font-inter-tight font-semibold sm:text-xl bg-white rounded-full px-6 py-3 sm:py-4 xl:px-12 xl:py-6 cursor-pointer'>
          10 Days Turkey Exploration Trip
          <img className='w-[1.5em] h-fit' src='/icons/black-triple-chevron.svg' />
        </Link>
      </section>
      {/* Ar Raha - 10 Days Turkey */}
      <section className='w-full flex flex-col lg:flex-row justify-between p-4 py-14 sm:p-12 xl:p-24 gap-10 xl:gap-20 2xl:p-32'>
        <div className='w-full h-fit lg:max-w-[456px] 2xl:max-w-[646px] flex flex-col gap-8 xl:gap-14'>
          <div className='flex flex-col gap-8'>
            <h2 className='font-inter-tight font-semibold text-[32px] lg:text-4xl xl:text-5xl leading-snug'>
              Ar Rahah - 10 Days Turkey Exploration: Culture, History, and Spirituality
            </h2>
            <div className='flex flex-col lg:flex-row gap-8 md:gap-4 font-albert-sans text-lg'>
              <div className='flex flex-row gap-2'><MapPin /> Turkey</div>
              <div className='flex flex-row gap-2'><CalendarDays /> Oct 15, 2025 - Oct 24, 2025</div>
            </div>
          </div>
          <div className='w-full flex flex-row items-center justify-between gap-4 max-w-xl'>
            <div className='w-fit flex flex-col gap-2 font-albert-sans text-lg'>
              <div className='whitespace-nowrap'>Starting from</div>
              <div className='text-2xl sm:text-3xl xl:text-4xl'>$9,000</div>
              <div className='whitespace-nowrap'>Per Person</div>
            </div>
            <div className='border border-black w-full h-0'></div>
            <div className='w-fit flex flex-col gap-2 font-albert-sans text-lg'>
              <div>To</div>
              <div className='text-2xl sm:text-3xl xl:text-4xl'>$19,000</div>
              <div className='whitespace-nowrap'>Per Person</div>
            </div>
          </div>
          <Link href='/package' className='hidden lg:flex w-fit flex-row items-center justify-between gap-4 px-6 py-4 2xl:py-6 font-inter-tight text-lg text-white bg-black rounded-full'>
            See more details
            <ChevronRight />
          </Link>
        </div>
        <div className='basis-1/2 w-full h-fit grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-[minmax(256px,2fr)_1fr] grid-rows-2 gap-2 md:gap-4'>
          <div className='relative h-full w-full row-span-2'>
            <Image
              className='rounded-lg md:rounded-2xl object-cover'
              src='/mosque.jpg'
              alt=''
              fill
            />
          </div>
          <div className='relative h-full aspect-square'>
            <Image
              className='rounded-lg md:rounded-2xl object-cover'
              src='/bird-flying.jpg'
              alt=''
              fill
            />
          </div>
          <div className='relative h-full aspect-square'>
            <Image
              className='rounded-lg md:rounded-2xl object-cover'
              src='/hot-balloons.jpg'
              alt=''
              fill
            />
          </div>
        </div>
        <Link href='/' className='flex lg:hidden w-full flex-row justify-center items-center gap-4 px-4 py-4 font-inter-tight text-lg text-white bg-black rounded-full'>
          See more details
          <ChevronRight />
        </Link>
      </section>
      {/* Spirtual Adventure */}
      <section className='bg-[#F7F7F7] flex flex-col w-full items-center gap-20 p-4 sm:p-12 xl:p-24 2xl:p-32'>
        <div className='flex flex-col items-center gap-8'>
          <div className='bg-[#EFEFEF] w-fit font-inter-tight py-3 px-5 rounded-full'>Spirtual Adventure</div>
          <h2 className='font-inter-tight font-semibold text-[32px] text-center leading-none lg:text-left lg:text-5xl xl:text-6xl'>Top Tours to Spark Your Wanderlust</h2>
          <p className='font-albert-sans text-lg text-center lg:text-left'>Explore our top-rated tours, crafted with powerful stories, unforgettable sights, and soul-stirring experiences.</p>
        </div>
        <TripsCarousel />
      </section>
      {/* Video */}
      <section className='w-full py-14 px-4 sm:px-12 xl:px-24 2xl:px-32'>
        <div className='relative w-full aspect-square sm:aspect-video max-h-[90vh] flex flex-col justify-center items-center gap-2 sm:gap-6'>
          <Image
            src='/hot-balloons.jpg'
            alt=""
            fill
            className='rounded-3xl lg:rounded-[60px] -z-10 object-cover'
          />
          <CirclePlay className='size-12 sm:size-32' color='white' strokeWidth='1px' />
          <div className='text-white font-inter-tight font-semibold text-2xl sm:text-4xl'>Explore Turkey with us!</div>
        </div>
      </section>
      {/* Our Destinations */}
      <section className='w-full flex flex-col gap-10 xl:gap-20 p-4 py-14 sm:p-12 xl:p-24 2xl:p-32'>
        <div className='flex flex-col lg:flex-row justify-between gap-14 sm:gap-6 lg:gap-16 xl:gap-32'>
          <div className='flex flex-col items-center lg:items-start gap-14 lg:gap-8'>
            <div className='bg-[#EFEFEF] w-fit font-inter-tight py-3 px-5 rounded-full'>Our Destinations</div>
            <h2 className='font-inter-tight font-semibold text-[32px] text-center leading-none lg:text-left lg:text-5xl xl:text-6xl'>Your next favorite place awaits</h2>
          </div>
          <div className='flex flex-col gap-7 max-w-[822px] items-center lg:items-start place-self-center lg:place-self-end'>
            <p className='text-center lg:text-left'>Get the best value for your halal-friendly travel — enjoy exclusive discounts, seasonal offers, and curated getaways designed with Muslim travelers in mind.</p>
            <Link href='/' className='w-full flex flex-row items-center justify-center gap-4 sm:w-fit bg-black rounded-full py-3 lg:py-4 xl:py-6 px-8 text-white text-center font-inter-tight sm:text-lg font-semibold cursor-pointer'>
              Learn more
              <img className='w-[1.75em] h-fit' src='/icons/triple-chevron.svg' />
            </Link>
          </div>
        </div>
        <DestinationCarousel />
      </section>
      {/* Signature Experiences */}
      <section className='w-full flex flex-col gap-10 xl:gap-20 bg-[#F7F7F7] p-4 py-14 sm:p-12 xl:p-24 2xl:p-32'>
        <div className='flex flex-col lg:flex-row justify-between '>
          <div className='flex flex-col items-center lg:items-start gap-8'>
            <div className='bg-[#EFEFEF] w-fit font-inter-tight py-3 px-5 rounded-full'>Signature Experiences</div>
            <h2 className='font-inter-tight font-semibold text-[32px] text-center lg:text-left lg:text-5xl xl:text-6xl'>What&apos;s so special about this?</h2>
          </div>
          <Link href='/' className='w-fit h-fit hidden place-self-end lg:flex flex-row items-center gap-4 sm:w-fit bg-black rounded-full py-3 lg:py-4 xl:py-6 px-8 text-white text-center font-inter-tight sm:text-lg font-semibold cursor-pointer'>
            Learn more
            <img className='w-[1.5em] h-fit' src='/icons/triple-chevron.svg' />
          </Link>
        </div>
        <ExperienceCarousel />
      </section>
      {/* Testimonials */}
      <section className='w-full flex flex-col items-center gap-8 p-4 py-14 sm:p-12 xl:p-24 2xl:p-32'>
        <div className='bg-[#EFEFEF] w-fit font-inter-tight py-3 px-5 rounded-full'>Loyalty Speaks</div>
        <h2 className='font-inter-tight font-semibold text-[32px] lg:text-5xl xl:text-6xl'>Testimonials</h2>
        <Testimonials />
      </section>
    </main>
  );
}
