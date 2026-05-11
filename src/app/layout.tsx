import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yana Speciality Dental Clinic | Premium Oral Care in Addis Ababa",
  description: "Experience world-class dentistry at Yana Speciality Dental Clinic. From cosmetic smile design to precision implants, we provide expert care with state-of-the-art technology in the heart of Ethiopia.",
  keywords: ["dentist Addis Ababa", "Dental implants Ethiopia", "cosmetic dentistry Addis", "orthodontics Addis Ababa", "Yana Speciality Dental Clinic"],
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

import LoadingProvider from "@/components/LoadingProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
