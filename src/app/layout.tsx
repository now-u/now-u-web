import React, { lazy } from "react";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

import { Nunito, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { getRequiredEnvironmentVariable } from "@/utils/getRequiredEnvironmentVariable";
import { Toaster } from "@/components/ui/toaster";

const Analytics = lazy(async () => await import("@/components/Analytics"));

const GTAG = getRequiredEnvironmentVariable("GTAG_ID");

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["400"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html className={`${nunito.variable} ${nunitoSans.variable} font-sans`}>
      <Analytics gtmId={GTAG} />
      <body className="flex flex-col align-items-center">
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
