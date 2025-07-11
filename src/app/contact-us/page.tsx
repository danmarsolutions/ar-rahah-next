import ContactForm from "@/components/ui/contact-form";
import Header from "@/components/ui/header";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="w-full flex flex-col items-center">
      <Header />
      {/* Get in Touch */}
      <section className="w-full flex flex-col gap-20 px-4 md:px-8 lg:px-38 py-16 lg:py-20">
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
            <div className="border border-slate-300 rounded-2xl flex flex-row items-center justify-center size-16">
              <Mail size="60%" strokeWidth="1px" />
            </div>
            <div className="font-semibold">Email:</div>
            <div>info@arrahah.com</div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="border border-slate-300 rounded-2xl flex flex-row items-center justify-center size-16">
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
      </section>
      {/* Contact Form */}
      <section className="w-full flex flex-col gap-15 lg:gap-20 px-4 md:px-8 lg:px-38 2xl:px-56 py-16 lg:py-20">
        <h2 className="font-inter-tight text-[32px] lg:text-5xl font-semibold">
          Or fill this form below to get inquired!
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}
