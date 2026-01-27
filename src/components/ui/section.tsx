import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Use alternate background (section-bg) for alternating sections */
  variant?: "default" | "muted";
};

export function Section({
  variant = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full",
        variant === "muted" && "bg-section-bg",
        "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24",
        "py-6 md:py-8 lg:py-10 xl:py-10",
        className,
      )}
      {...props}
    />
  );
}

type SectionBadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function SectionBadge({
  children,
  className,
  ...props
}: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "bg-pill-bg w-fit font-inter-tight py-3 px-5 rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
