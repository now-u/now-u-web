import React, { lazy } from "react";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

import { Nunito, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { getRequiredEnvironmentVariable } from "@/utils/getRequiredEnvironmentVariable";
import { Toaster } from "@/components/ui/toaster";
import { ScrollHack } from "@/components/ScrollHack";

const Analytics = lazy(async () => await import("@/components/Analytics"));

const GA_TAG = getRequiredEnvironmentVariable("GA_TAG_ID");
const GTAG_TAG = getRequiredEnvironmentVariable("GTAG_TAG_ID");
const AW_TAG = getRequiredEnvironmentVariable("AW_TAG_ID");

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
      <Analytics gaId={GA_TAG} gtmId={GTAG_TAG} analyticsTag={AW_TAG} />
      <body>
        <ScrollHack />
        <main className="flex flex-col align-items-center">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
