import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const buttonLinkVariants = cva(
  "w-fit h-fit flex flex-row items-center justify-center gap-2 px-5 py-3 font-inter-tight font-medium text-base rounded-full transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-accent text-brand-accent-foreground hover:opacity-90",
        default: "bg-black text-white hover:opacity-90",
        secondary:
          "bg-white text-black border border-black/20 hover:bg-black/5",
        tertiary:
          "bg-white text-black border border-black/20 hover:opacity-90",
        outline:
          "bg-transparent text-foreground border border-border hover:bg-muted",
        /** For use on dark backgrounds (e.g. hero) */
        onDark:
          "bg-white/30 text-white border border-white hover:bg-white hover:text-black",
        /** Translucent dark for hero secondary CTA */
        onDarkOutline:
          "bg-black/50 text-white border border-white hover:bg-black/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type Props = {
  href: string;
  children?: React.ReactNode;
  className?: string;
} & VariantProps<typeof buttonLinkVariants>;

export default function ButtonLink({
  href,
  children,
  className,
  variant = "default",
}: Props) {
  return (
    <Link
      href={href}
      className={cn(buttonLinkVariants({ variant }), className)}
    >
      {children}
    </Link>
  );
}
