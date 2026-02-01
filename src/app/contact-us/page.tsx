import ContactForm from "@/components/ui/contact-form";
import Header from "@/components/ui/header";
import { Section } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ar Rahah, your trusted Muslim-friendly travel partner. Whether you have questions about our tours, need assistance with bookings, or want to arrange a private group, our team is here to help. Contact us via email or phone, and let us assist you in planning your next enriching travel experience.",
};

export default function ContactUs() {
  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      {/* Get in Touch */}
      <Section className="w-full flex flex-col items-center gap-12 md:gap-16 lg:gap-20 !px-6 sm:!px-8 md:!px-12 lg:!px-16 xl:!px-24 2xl:!px-32">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h1 className="w-full text-3xl sm:text-4xl md:text-5xl text-center font-inter-tight font-semibold">
            Let&apos;s Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center font-albert-sans max-w-[1200px]">
            We would love to hear from you! Whether you have questions
            about a tour, want to arrange a private group, or need
            special accommodations (dietary or otherwise), our team is
            here to assist. Insha&apos;Allah, we&apos;ll ensure your
            travel plans are smooth and tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 font-albert-sans text-lg sm:text-lg md:text-xl">
          <div className="flex flex-col gap-3 p-4 sm:p-6 rounded-2xl bg-muted/50 border border-border/30 items-center sm:items-start w-fit mx-auto sm:mx-0">
            <div
              className="border border-border rounded-2xl flex flex-row items-center justify-center size-12 sm:size-14 md:size-16 bg-background"
              aria-hidden
            >
              <Mail
                className="size-6 sm:size-7 md:size-8"
                strokeWidth={1.5}
              />
            </div>
            <div className="font-semibold">Email:</div>
            <div className="break-all">info@arrahah.com</div>
          </div>
          <div className="flex flex-col gap-3 p-4 sm:p-6 rounded-2xl bg-muted/50 border border-border/30 items-center sm:items-start w-fit mx-auto sm:mx-0">
            <div
              className="border border-border rounded-2xl flex flex-row items-center justify-center size-12 sm:size-14 md:size-16 bg-background"
              aria-hidden
            >
              <Phone
                className="size-6 sm:size-7 md:size-8"
                strokeWidth={1.5}
              />
            </div>
            <div className="font-semibold">Phone:</div>
            <div>647-233-8739</div>
          </div>
        </div>
      </Section>
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <Separator />
      </div>
      {/* Contact Form */}
      <Section className="w-full flex flex-col items-center gap-10 md:gap-16 lg:gap-20 !px-6 sm:!px-8 md:!px-12 lg:!px-16 xl:!px-24 2xl:!px-32">
        <h2 className="font-inter-tight text-2xl sm:text-3xl lg:text-5xl font-semibold w-full text-center">
          Or fill this form below to get inquired!
        </h2>
        <div className="w-full max-w-[900px]">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
