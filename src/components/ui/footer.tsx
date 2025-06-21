import Link from "next/link"
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="w-full flex flex-col md:p-4 font-albert-sans">
            <div className="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr] auto-rows-auto lg:grid-rows-[auto_auto] lg:grid-flow-col gap-y-10 xl:gap-y-20 py-15 2xl:py-20 px-8 lg:px-10 2xl:px-15 md:rounded-4xl bg-black text-white">
                {/* Pack your bags container */}
                <div className="grow 2xl:max-w-[864px] flex flex-col gap-8">
                    <h2 className="font-inter-tight text-3xl md:text-5xl lg:text-6xl font-semibold leading-10 md:leading-14 lg:leading-18">Pack your bags — your spiritual journey awaits!</h2>
                    <div className="text-lg">Join a community of conscious travelers exploring the world through a lens of faith.</div>
                    {/* Socials */}
                    <div className="flex flex-row gap-6 text-lg">
                        <a className="flex flex-row gap-2.5 items-center justify-between border-0 lg:border border-white/20 rounded-full px-6 py-4 cursor-pointer">
                            <img className="size-5" src='/icons/instagram.svg' />
                            <span className="hidden lg:block">Instagram</span>
                        </a>
                        <a className="flex flex-row gap-2.5 items-center justify-between border-0 lg:border border-white/20 rounded-full px-6 py-4 cursor-pointer">
                            <img className="size-5" src='/icons/facebook.svg' />
                            <span className="hidden lg:block">Facebook</span>
                        </a>
                        <a className="flex flex-row gap-2.5 items-center justify-between border-0 lg:border border-white/20 rounded-full px-6 py-4 cursor-pointer">
                            <img className="size-5" src='/icons/youtube.svg' />
                            <span className="hidden lg:block">Youtube</span>
                        </a>
                    </div>
                </div>
                {/* Nav Links */}
                <div className="w-full lg:max-w-[620px] flex flex-col md:flex-row lg:flex-wrap xl:flex-row gap-y-10">
                    <div className="w-full md:max-w-[180px] flex flex-col gap-6 2xl:gap-8">
                        <h4 className="text-2xl font-medium font-inter-tight">Explore</h4>
                        <div className="flex flex-col gap-2 text-white/50 text-lg">
                            <Link className="cursor-pointer hover:underline" href='/'>Destinations</Link>
                            <Link className="cursor-pointer hover:underline" href='/'>Top Tours</Link>
                            <Link className="cursor-pointer hover:underline" href='/'>Travel Guidance</Link>
                            <Link className="cursor-pointer hover:underline" href='/'>Adventure Blogs</Link>
                        </div>
                    </div>
                    <div className="w-full md:max-w-[180px] flex flex-col gap-6 2xl:gap-8">
                        <h4 className="text-2xl font-medium font-inter-tight">About Us</h4>
                        <div className="flex flex-col gap-2 text-white/50 text-lg">
                            <Link className="cursor-pointer hover:underline" href='/about-us'>Our Story</Link>
                            <Link className="cursor-pointer hover:underline" href='/'>Testimonials</Link>
                            <Link className="cursor-pointer hover:underline" href='/'>Sustainability</Link>
                        </div>
                    </div>
                    <div className="w-full md:max-w-[180px] flex flex-col gap-6 2xl:gap-8">
                        <h4 className="text-2xl font-medium font-inter-tight">Support</h4>
                        <div className="flex flex-col gap-2 text-white/50 text-lg">
                            <Link className="cursor-pointer hover:underline" href='/'>Help</Link>
                            <Link className="cursor-pointer hover:underline" href='/contact-us'>Contact Us</Link>
                            <Link className="cursor-pointer hover:underline" href='/'>Travel FAQs</Link>
                            <Link className="cursor-pointer hover:underline" href='/'>Group Bookings</Link>
                        </div>
                    </div>
                </div>
                {/* Book Button */}
                <Link href='/' className='w-full md:w-fit h-fit row-start-2 md:col-start-1 lg:col-start-2 md:row-start-2 md:row-end-3 lg:row-start-1 lg:row-end-2 justify-self-end flex flex-row items-center justify-center gap-2 px-8 py-3 md:py-6 bg-white text-black text-lg font-semibold rounded-full'>
                    <span>Book a Vacation</span>
                    <img className='w-[1.5em] h-fit' src='/icons/black-triple-chevron.svg' />
                </Link>
                {/* Images */}
                <div className="w-full md:w-[420px] aspect-[5/4.5] lg:place-self-end row-start-3 md:row-start-2 md:row-end-3 md:col-start-1 lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:row-span-2 grid grid-cols-3 grid-rows-3 gap-2 ">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div key={index} className="relative">
                            <Image
                                className="rounded-lg object-cover"
                                src={`/footer/f${index + 1}.png`}
                                alt=""
                                fill
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}