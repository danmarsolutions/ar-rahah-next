import { Globe, Phone } from "lucide-react";
import HeaderNav from "./header-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header({ isHome }: { isHome?: boolean }) {
    return (
        <header className={cn("w-full flex flex-row justify-between items-center px-4 sm:px-8 py-5", isHome && 'absolute top-0 left-0')}>
            {/* Logo */}
            <div className="flex flex-row items-center gap-2 sm:gap-4">
                <img
                    src='/logo.png'
                    alt="Ar-Rahah logo"
                    className="aspect-square w-10 sm:w-16 lg:w-24"
                />
                <span className={cn("font-galada h-fit text-2xl sm:text-3xl lg:text-4xl leading-none", isHome && 'text-white')}>AR Rahah</span>
            </div>
            {/* Nav Link */}
            <HeaderNav />
            {/* Buttons */}
            <div className="hidden lg:flex flex-row items-center lg:gap-4 font-inter-tight text-lg">
                <button className={cn("flex flex-row gap-2 items-center bg-white border border-black rounded-full py-2 lg:py-3 px-4 lg:px-6 cursor-pointer select-none hover:bg-black/80 hover:text-white", isHome && 'bg-white/30 text-white border-white')}><Globe size='1.25em' /> ENG</button>
                <Link href='/contact-us' className={cn("flex flex-row gap-2 items-center bg-black text-white border border-black rounded-full py-2 lg:py-3 px-4 lg:px-6 cursor-pointer select-none hover:bg-black/80", isHome && 'bg-white/30 text-white border-white')}><Phone size='1.25em' /> Contact Us</Link>
            </div>
        </header>
    )
}