"use client";

import HeaderNav from "./header-nav";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-between items-center px-4 sm:px-8 py-0.5">
      <Link
        href="/"
        className="flex flex-row items-center gap-2 sm:gap-4"
      >
        <Image
          src="/logo-clean.png"
          alt="Ar-Rahah logo"
          className="h-auto rounded-full w-16 lg:w-22 brightness-0"
          width={700}
          height={700}
        />
      </Link>
      <HeaderNav />
      <Link
        href="/"
        className="flex flex-row items-center gap-2 sm:gap-4"
      >
        <Image
          src="/logo-clean.png"
          alt="Ar-Rahah logo"
          className="h-auto rounded-full w-16 lg:w-22 brightness-0"
          width={700}
          height={700}
        />
      </Link>
    </header>
  );
}
