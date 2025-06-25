import Header from "@/components/ui/header";
import Image from "next/image";

export default function AboutUs() {
    return (
        <main className="w-full flex flex-col">
            <Header />
            {/* Purpose */}
            <section className="w-full h-fit grid grid-cols-[min-content_2fr] grid-rows-[auto_auto] gap-y-6 md:gap-y-8 gap-x-8 px-4 py-14 sm:px-12 xl:px-20">
                <h1 className="w-full col-span-full order-2 lg:order-1 font-inter-tight font-semibold text-center md:text-left text-4xl md:text-5xl">Where Purpose Meets Exploration</h1>
                <div className="w-full lg:min-w-[400px] col-span-full order-2 lg:col-span-1 flex flex-col gap-4 md:text-lg font-albert-sans text-center md:text-left">
                    <p>At Ar Rahah, we believe travel is more than just a change in scenery — it&apos;s a spiritual revival. Inspired by our Islamic tradition and heritage, we craft experiences that elevate the soul, enrich the mind, and connect you with the legacies of the past.</p>
                    <p>Our journeys are designed for Muslim travelers who seek deeper meaning, halal assurance, and authentic cultural encounters. Whether you’re walking in the footsteps of the Ottomans in Istanbul or reflecting in the silence of Andalusia’s ancient masjids, every trip with Ar Rahah is a step toward spiritual growth and mindful discovery.</p>
                </div>
                <div className="relative w-full h-[420px] lg:h-full rounded-xl order-1 lg:order-3 col-span-full lg:col-span-1">
                    <Image
                        className="rounded-3xl md:rounded-[60px] object-cover"
                        src='/about-us/blue-cave.jpg'
                        alt=""
                        fill
                    />
                </div>
            </section>
            {/* Our Mission Our Story */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] 2xl:grid-cols-[2fr_1fr] grid-rows-[auto_auto] gap-8 lg:gap-10 2xl:gap-20 px-4 py-10 sm:py-14 sm:px-12 xl:px-24">
                <div className="relative w-full aspect-square lg:aspect-auto lg:h-full row-start-3 lg:row-start-1 row-span-full">
                    <Image
                        className="rounded-3xl sm:rounded-[60px] object-cover"
                        src='/about-us/aerial-drone.jpg'
                        alt=""
                        fill
                    />
                </div>
                <div className="flex flex-col gap-6 md:gap-8">
                    <h2 className="font-inter-tight font-semibold text-3xl sm:text-4xl">Our Mission</h2>
                    <p className="font-albert-sans sm:text-lg">To create meaningful, halal-conscious travel experiences that nurture the soul, reconnect you with Islamic history, and inspire a lifelong love for exploration through the lens of faith.</p>
                </div>
                <div className="flex flex-col gap-6 md:gap-8">
                    <h2 className="font-inter-tight font-semibold text-3xl sm:text-4xl">Our Story</h2>
                    <p className="font-albert-sans sm:text-lg">Founded by a team of Muslim explorers, educators, and travel experts, Ar Rahah was born out of the need for spiritually grounded journeys that align with our values. Like many of you, we’ve been on trips where we had to compromise — on food, prayer spaces, or meaningful content. So we set out to change that.</p>
                </div>
            </section>
            {/* What Sets Us Apart */}
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 2xl:gap-30 px-4 py-10 sm:py-14 sm:px-12 xl:px-24">
                <div className="basis-1/2 w-full flex flex-col gap-14 order-2 lg:order-1">
                    <div className="flex flex-col gap-3">
                        <div style={{ WebkitTextStroke: '1px black' }} className="font-inter-tight text-5xl text-white font-extrabold ">01</div>
                        <h3 className="font-inter-tight text-2xl font-semibold">Halal-Centric Travel</h3>
                        <p className="text-lg">Every itinerary is designed with the Muslim traveler in mind. Enjoy Zabiha halal meals, prayer breaks built into the schedule, and accommodations that respect your values — so you can travel in peace, without compromise.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div style={{ WebkitTextStroke: '1px black' }} className="font-inter-tight text-5xl text-white font-extrabold ">02</div>
                        <h3 className="font-inter-tight text-2xl font-semibold">Faith-Based Experiences</h3>
                        <p className="text-lg">We bring Islamic history to life. With knowledgeable guides and engaging storytellers, you’ll walk through the pages of Islamic civilization — learning from the lives of prophets, scholars, and empires that shaped our ummah.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div style={{ WebkitTextStroke: '1px black' }} className="font-inter-tight text-5xl text-white font-extrabold ">03</div>
                        <h3 className="font-inter-tight text-2xl font-semibold">Authentic & Local</h3>
                        <p className="text-lg">We work closely with trusted local partners who understand both the destination and the deen. This means you’ll gain deeper insights into culture, community, and heritage — all through an Islamic lens.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div style={{ WebkitTextStroke: '1px black' }} className="font-inter-tight text-5xl text-white font-extrabold ">04</div>
                        <h3 className="font-inter-tight text-2xl font-semibold">A Community of Travelers</h3>
                        <p className="text-lg">Our tours attract like-minded individuals seeking connection, reflection, and inspiration. It’s more than just a group tour — it’s a temporary ummah on the road, where bonds are formed and memories are made.</p>
                    </div>
                </div>
                <div className="basis-1/2 w-full flex flex-col order-1 lg:order-2 gap-12">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-inter-tight text-3xl sm:text-5xl md:text-4xl font-semibold">What Sets Us Apart</h2>
                        <p className="font-albert-sans text-lg font-light">At Ar Rahah, we don&apos;t just take you places — we take you deeper. Our journeys are carefully crafted to reflect Islamic values at every stage, offering more than just a vacation. From the moment you join us, you&apos;re part of something meaningful — a travel experience designed around purpose, faith, and discovery.</p>
                    </div>
                    <div className="relative w-full h-full aspect-square lg:aspect-auto">
                        <Image
                            className="rounded-3xl sm:rounded-[60px] object-cover"
                            src='/about-us/river-bank.jpg'
                            alt=""
                            fill
                        />
                    </div>
                </div>
            </section>
            {/* A Journey of Reflection */}
            <section className="w-full flex flex-col items-center gap-14 px-4 py-10 sm:py-14 sm:px-12 xl:px-24">
                <div className="w-full flex flex-col items-center gap-4">
                    <h2 className="font-inter-tight font-semibold text-3xl sm:text-5xl text-center">A Journey of Reflection</h2>
                    <p className="font-albert-sans text-xl text-center max-w-[1356px]">Whether you&apos;re seeking a spiritual reset, historical inspiration, or a memorable family adventure, Ar Rahah invites you to discover the world with purpose.
                        Because with the right intention, every journey becomes an act of worship.</p>
                </div>
                <div className="relative w-full h-[300px] sm:h-[480px] lg:h-[512px]">
                    <Image
                        className="rounded-3xl sm:rounded-[60px] object-cover object-bottom"
                        src='/about-us/boatman.jpg'
                        alt=""
                        fill
                    />
                </div>
            </section>
        </main>
    )
}