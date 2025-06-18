import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CircleCheck } from "lucide-react"

export default function TourPlanAccordion() {
    return (
        <Accordion type="single" collapsible className="flex flex-col gap-4 lg:gap-8">
            {Array.from({ length: 10 }).map((_, index) => (
                <AccordionItem key={index} className="border last:border-b font-albert-sans rounded-2xl lg:rounded-4xl p-6 lg:p-8" value={index.toString()}>
                    <AccordionTrigger className="text-lg font-semibold p-0">Day 1 - The Gateway to History</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-2xl pt-14">
                        <div className="flex flex-row items-center gap-4"><CircleCheck size='1.25em' /><span>Plan</span></div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}