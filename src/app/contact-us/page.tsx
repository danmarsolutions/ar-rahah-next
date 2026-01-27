import ContactForm from "@/components/ui/contact-form";
import Header from "@/components/ui/header";
import { Section } from "@/components/ui/section";
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
      <Section className="w-full flex flex-col items-center gap-20 !px-4 md:!px-8 lg:!px-16 xl:!px-24 2xl:!px-32">
        <div className="flex flex-col items-center gap-8">
          <h1 className="w-full text-4xl md:text-5xl md:text-center font-inter-tight font-semibold">
            Let&apos;s Get In Touch
          </h1>
          <p className="md:text-xl md:text-center font-albert-sans max-w-[1200px]">
            We would love to hear from you! Whether you have questions
            about a tour, want to arrange a private group, or need
            special accommodations (dietary or otherwise), our team is
            here to assist. Insha’Allah, we’ll ensure your travel
            plans are smooth and tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row justify-between font-albert-sans text-lg md:text-xl">
          <div className="w-full flex flex-col gap-4">
            <div
              className="border border-border rounded-2xl flex flex-row items-center justify-center size-16"
              aria-hidden
            >
              <Mail size="60%" strokeWidth="1px" />
            </div>
            <div className="font-semibold">Email:</div>
            <div>info@arrahah.com</div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div
              className="border border-border rounded-2xl flex flex-row items-center justify-center size-16"
              aria-hidden
            >
              <Phone size="60%" strokeWidth="1px" />
            </div>
            <div className="font-semibold">Phone:</div>
            <div>647-233-8739</div>
          </div>
          {/* <div className="w-full flex flex-col gap-4"> */}
          {/*   <div className="border border-slate-300 rounded-2xl flex flex-row items-center justify-center size-16"> */}
          {/*     <MapPin size="60%" strokeWidth="1px" /> */}
          {/*   </div> */}
          {/*   <div className="font-semibold">Office:</div> */}
          {/*   <div> */}
          {/*     Lorem ipsum dolor sit amet consectetur. Turpis eu */}
          {/*     accumsan */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </Section>
      {/* Contact Form */}
      <Section className="w-full flex flex-col items-center gap-16 lg:gap-20 !px-4 md:!px-8 lg:!px-16 xl:!px-24 2xl:!px-32">
        <h2 className="font-inter-tight text-3xl lg:text-5xl font-semibold w-full text-center lg:text-left">
          Or fill this form below to get inquired!
        </h2>
        <ContactForm />
      </Section>
    </main>
  );
}
