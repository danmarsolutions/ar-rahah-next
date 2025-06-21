import { cn } from "@/lib/utils";

type Props = {
    currentItem: number
    totalItems: number
    className?: string
}

export default function ProgressBar({ currentItem, totalItems, className }: Props) {

    // Calculate the position as a percentage
    const indicatorPosition = ((currentItem - 1) / totalItems) * 100;

    return (
        <div
            className={cn("relative bg-[#EFEFEF] h-2 rounded-full w-full", className)}
        >
            {/* Moveable indicator div */}
            <div
                className="absolute top-0 bg-black h-full rounded transition-all duration-200 ease-in-out"
                style={{
                    left: `${indicatorPosition}%`,
                    width: `calc(100% / ${totalItems})`
                }}
            />
        </div>
    );
}