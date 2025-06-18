import PackageSelect from "@/components/ui/package-select";
import TourPlanAccordion from "@/components/ui/tour-plan-accordion";
import { CalendarDays, CircleCheck, CircleX, Heart, MapPin } from "lucide-react";
import Image from 'next/image'


export default function Package() {

    return (
        <main className="w-full">
            <section className="w-full flex flex-col gap-8 p-4 sm:p-8 md:p-10 lg:p-14">
                <h1 className="max-w-[1280px] leading-[1.25] font-inter-tight font-medium text-4xl md:text-5xl">Ar Rahah - 10 Days Turkey Exploration: Culture, History, and Spirituality</h1>
                <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
                    <div className='w-full flex flex-col lg:flex-row gap-6 font-albert-sans text-lg'>
                        <div className='flex flex-row gap-2'><MapPin /> Turkey</div>
                        <div className='flex flex-row gap-2'><CalendarDays /> Oct 15, 2025 - Oct 24, 2025</div>
                    </div>
                    <div className="w-full lg:w-fit flex flex-row gap-2 text-lg">
                        <button className="w-full sm:w-fit flex flex-row items-center justify-center gap-2 rounded-xl py-3 px-5 border-2"><Heart /> Save</button>
                        <PackageSelect />
                    </div>
                    <div className='self-start grid grid-cols-[1fr_2fr_1fr] grid-rows-1 lg:hidden w-full flex-row items-center justify-between gap-4 max-w-lg'>
                        <div className='flex flex-col gap-2 font-albert-sans text-lg'>
                            <div className='whitespace-nowrap'>Starting from</div>
                            <div className='text-2xl sm:text-3xl xl:text-4xl'>$9,000</div>
                            <div className='whitespace-nowrap'>Per Person</div>
                        </div>
                        <div className='w-full border border-black -ml-3 h-0'></div>
                        <div className='flex flex-col gap-2 font-albert-sans text-lg'>
                            <div>To</div>
                            <div className='text-2xl sm:text-3xl xl:text-4xl'>$19,000</div>
                            <div className='whitespace-nowrap'>Per Person</div>
                        </div>
                    </div>
                </div>
                <div className='w-full min-h-[360px] sm:min-h-[480px] md:min-h-[680px] grid grid-cols-[minmax(180px,1fr)_minmax(100px,180px)] sm:grid-cols-[minmax(316px,1fr)_minmax(200px,300px)] md:grid-cols-[1fr_300px] xl:grid-cols-[1fr_500px] grid-rows-2 gap-2 sm:gap-4'>
                    <div className='relative row-span-2 h-full w-full flex flex-col gap-6 justify-end lg:p-6 xl:p-12'>
                        <Image
                            className='rounded-lg md:rounded-2xl -z-10'
                            src='/mosque.jpg'
                            objectFit='cover'
                            objectPosition="bottom"
                            alt=''
                            fill
                        />
                        <div className="hidden lg:block font-inter-tight font-semibold text-5xl text-white">Pricing</div>
                        <div className='hidden lg:flex w-full flex-row items-center justify-between gap-4 text-white max-w-xl'>
                            <div className='w-fit flex flex-col gap-2 font-albert-sans text-lg'>
                                <div className='whitespace-nowrap'>Starting from</div>
                                <div className='text-2xl sm:text-3xl xl:text-4xl'>$9,000</div>
                                <div className='whitespace-nowrap'>Per Person</div>
                            </div>
                            <div className='border border-white w-full h-0'></div>
                            <div className='w-fit flex flex-col gap-2 font-albert-sans text-lg'>
                                <div>To</div>
                                <div className='text-2xl sm:text-3xl xl:text-4xl'>$19,000</div>
                                <div className='whitespace-nowrap'>Per Person</div>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-full w-full'>
                        <Image
                            className='rounded-lg md:rounded-2xl'
                            src='/bird-flying.jpg'
                            objectFit='cover'
                            alt=''
                            fill
                        />
                    </div>
                    <div className='relative h-full w-full'>
                        <Image
                            className='rounded-lg md:rounded-2xl'
                            src='/hot-balloons.jpg'
                            objectFit='cover'
                            alt=''
                            fill
                        />
                    </div>
                </div>
            </section>
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-[1fr_max-content] lg:grid-rows-1 gap-20 lg:gap-10 2xl:gap-20 p-4 py-14 sm:p-12 xl:p-24 2xl:p-32">
                <div className="relative w-full row-start-2 lg:row-auto min-h-[350px] sm:min-h-[420px] ">
                    <Image
                        className="rounded-4xl"
                        src='/bird-flying.jpg'
                        alt=""
                        objectFit="cover"
                        fill
                    />
                </div>
                <div className="flex flex-col gap-8 font-albert-sans sm:text-lg">
                    <h2 className="font-inter-tight text-[32px] lg:text-4xl xl:text-5xl font-semibold">About Turkey Trip</h2>
                    <p>This tour is designed to inspire and educate, immersing you in the heart of Ottoman history while drawing out timeless lessons that resonate today. From the breathtaking grandeur of Istanbul’s mosques and palaces to the spiritual sanctity of Bursa, you’ll walk in the footsteps of sultans, scholars, and visionaries who defined an era of progress and coexistence.</p>
                    <p>Unlike conventional tours, we bring Islamic history to life with expert-guided insights, captivating stories, and a focus on the values and achievements that made the Ottoman Empire extraordinary. With every step, you’ll not only discover the richness of the past but also uncover lessons that will stay with you for a lifetime.</p>
                    <p>This is not just a holiday—it is an exploration of faith, history, and civilization. It is a journey of learning, reflection, and inspiration. As you walk through the lands that have witnessed the rise and fall of empires, you will gain a deeper appreciation for the legacies that continue to shape our world today.</p>
                    <p>This is not just a holiday—it is an exploration of faith, history, and civilization. It is a journey of learning, reflection, and inspiration. As you walk through the lands that have witnessed the rise and fall of empires, you will gain a deeper appreciation for the legacies that continue to shape our world today.</p>
                </div>
            </section>
            <section className="w-full flex flex-col gap-15 lg:gap-20 p-4 py-14 sm:p-12 xl:p-24 2xl:p-32">
                <div className='flex flex-col items-center gap-8'>
                    <div className='bg-[#EFEFEF] text-[14px] sm:text-base w-fit font-inter-tight py-3 px-5 rounded-full'>Inclusion & Exclusion</div>
                    <h2 className='font-inter-tight font-semibold text-center text-[32px] lg:text-5xl xl:text-6xl'>What's Covered in your Experience?</h2>
                </div>
                <table className="w-full overflow-hidden table-fixed border-separate">
                    <thead className="h-[80px] sm:h-[100px] xl:h-[150px] text-white bg-black">
                        <tr className="w-full h-full font-inter-tight text-lg sm:text-2xl lg:text-4xl 2xl:text-5xl font-semibold">
                            <th className="text-center rounded-tl-2xl md:rounded-tl-3xl lg:rounded-tl-4xl" scope="col">
                                <div className="flex flex-row items-center justify-center gap-3 lg:gap-6 h-full">
                                    <CircleCheck size="1.25em" />
                                    <span>Included</span>
                                </div>
                            </th>
                            <th className="text-center rounded-tr-2xl md:rounded-tr-3xl lg:rounded-tr-4xl" scope="col">
                                <div className="flex flex-row items-center justify-center gap-3 lg:gap-6 h-full">
                                    <CircleX size="1.25em" />
                                    <span>Not Included</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-albert-sans font-medium text-center sm:text-xl lg:text-2xl [&>*]:h-[80px] sm:[&>*]:h-[100px] xl:[&>*]:h-[150px] [&>tr>*]:p-4 [&>tr>*:nth-child(odd)]:border-l [&>tr>*:nth-child(even)]:border-r [&>tr:last-child>*]:border-b [&>tr>*]:border-t  [&>tr>*:nth-child(even)]:text-red-500">
                        <tr>
                            <td>9 Nights accommodations</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Breakfast & Dinner</td>
                            <td>Any meals outside of included meals</td>
                        </tr>
                        <tr>
                            <td>A/C Transport during the Tour</td>
                            <td>Personal Expenses</td>
                        </tr>
                        <tr>
                            <td>Professional Guide in English</td>
                            <td>Optional Tours</td>
                        </tr>
                        <tr>
                            <td>Entrance Fees to the indicated Museums & Sites</td>
                            <td>Any local transport outside of itinerary i.e. taxis etc.</td>
                        </tr>
                        <tr>
                            <td>Parking costs</td>
                            <td>Hot air Balloon ride in Cappadocia</td>
                        </tr>
                        <tr>
                            <td>Presentations & History talks</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td className="rounded-bl-2xl md:rounded-bl-3xl lg:rounded-bl-4xl">Taxes</td>
                            <td className="rounded-br-2xl md:rounded-br-3xl lg:rounded-br-4xl">-</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="flex flex-col gap-15 lg:gap-20 p-4 py-14 sm:p-12 xl:p-24 2xl:p-32">
                <div className='flex flex-col gap-6 lg:gap-8'>
                    <div className='bg-[#EFEFEF] text-[14px] sm:text-base w-fit font-inter-tight py-3 px-5 rounded-full'>Tour Plan</div>
                    <div className="font-inter-tight flex flex-wrap gap-2 items-end">
                        <h2 className=' font-semibold text-left text-[32px] lg:text-5xl xl:text-6xl'>10 Day Itinerary </h2>
                        <span className="font-normal text-xl lg:text-2xl">(Please note, this Itinerary is subject to change based on Travel Logistics)</span>
                    </div>
                </div>
                <TourPlanAccordion />
            </section>
        </main>
    )
}