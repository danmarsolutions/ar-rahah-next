import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
    href: string
    children?: React.ReactNode
    className?: string
}

export default function ButtonLink({ href, children, className }: Props) {
    return (
        <Link
            href={href}
            className={cn("w-fit h-fit flex flex-row items-center justify-center gap-2 px-5 py-3 font-inter-tight font-medium text-base text-white bg-black rounded-full transition-transform duration-300 hover:scale-105", className)}
        >
            {children}
        </Link>
    )
}