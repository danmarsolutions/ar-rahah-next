import Link from "next/link";
import Image from "next/image";
import ButtonLink from "./button-link";
import { ChevronsRight } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:p-4 font-albert-sans">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 py-12 lg:py-16 px-6 sm:px-8 lg:px-12 md:rounded-4xl bg-black text-white">
        {/* Left column: All content */}
        <div className="flex flex-col gap-8">
          {/* Pack your bags container */}
          <div className="flex flex-col gap-6 lg:max-w-[600px]">
            <h2 className="font-inter-tight text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Pack your bags — your spiritual journey awaits!
            </h2>
            <div className="text-lg">
              Join a community of conscious travelers exploring the
              world through a lens of faith.
            </div>
            {/* Book Button - shown on small/medium viewports */}
            <ButtonLink
              href="/turkey"
              variant="secondary"
              className="w-fit self-center lg:hidden"
            >
              Book a Vacation
              <ChevronsRight aria-hidden />
            </ButtonLink>
          </div>

          {/* Socials */}
          <div className="flex flex-row gap-4 text-lg">
            <a
              href="https://www.instagram.com/ar.rahah?utm_source=ig_web_button_share_sheet&igsh=MXJ6MGVzbzBhd3Fidw=="
              target="_blank"
              className="flex flex-row gap-2.5 items-center justify-between border border-white/20 rounded-full px-5 py-3 cursor-pointer hover:bg-white/10 transition-colors"
            >
              <FaInstagram className="size-5" />
              <span className="hidden sm:block">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/arrahahtours/"
              target="_blank"
              className="flex flex-row gap-2.5 items-center justify-between border border-white/20 rounded-full px-5 py-3 cursor-pointer hover:bg-white/10 transition-colors"
            >
              <FaFacebook className="size-5" />
              <span className="hidden sm:block">Facebook</span>
            </a>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-lg sm:text-xl font-medium font-inter-tight">
                Explore
              </h4>
              <div className="flex flex-col gap-1.5 sm:gap-2 text-white/50 text-sm sm:text-base">
                <Link
                  className="cursor-pointer hover:underline"
                  href="/#destinations"
                >
                  Destinations
                </Link>
                <Link
                  className="cursor-pointer hover:underline"
                  href="/#topTours"
                >
                  Top Tours
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-lg sm:text-xl font-medium font-inter-tight">
                About Us
              </h4>
              <div className="flex flex-col gap-1.5 sm:gap-2 text-white/50 text-sm sm:text-base">
                <Link
                  className="cursor-pointer hover:underline"
                  href="/about-us"
                >
                  Our Story
                </Link>
                <Link
                  className="cursor-pointer hover:underline"
                  href="/#testimonials"
                >
                  Testimonials
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-lg sm:text-xl font-medium font-inter-tight">
                Support
              </h4>
              <div className="flex flex-col gap-1.5 sm:gap-2 text-white/50 text-sm sm:text-base">
                <Link
                  className="cursor-pointer hover:underline"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Button + Images - Hidden on mobile, shown on lg and up */}
        <div className="hidden lg:flex flex-col gap-6 items-end self-center">
          <ButtonLink
            href="/turkey"
            variant="secondary"
            className="w-fit"
          >
            Book a Vacation
            <ChevronsRight aria-hidden />
          </ButtonLink>
          <div className="grid w-[420px] xl:w-[480px] aspect-square grid-cols-3 grid-rows-3 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="relative">
                <Image
                  className="rounded-lg object-cover"
                  src={`/footer/f${index + 1}.png`}
                  alt=""
                  fill
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
