import type { Metadata } from "next";
import { Inter_Tight, Albert_Sans, Galada } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/next";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const galada = Galada({
  variable: "--font-galada",
  weight: "400",
  subsets: ["latin"],
});

const description =
  "Ar Rahah—Your Trusted Muslim-Friendly Travel Partner. Specializing in creating enriching travel experiences tailored for Muslim travelers. From halal-certified dining to prayer accommodations and spiritually meaningful itineraries, we ensure your journey is seamless, fulfilling, and aligned with your values—wherever you go.";

export const metadata: Metadata = {
  title: {
    template: "%s | Ar-Rahah",
    default: "Ar-Rahah",
    absolute: "Home | Ar-Rahah",
  },
  description,
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ar-Rahah",
    description,
    url: "https://arrahah.com",
    siteName: "Ar-Rahah",
    type: "website",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${albertSans.variable} ${galada.variable} flex flex-col mx-auto w-full antialiased box-border`}
      >
        {children}
        {/* Uncover unique destinations */}
        {/* footer */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
