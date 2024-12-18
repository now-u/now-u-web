import React, { lazy } from "react";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { getRequiredEnvironmentVariable } from "@/utils/getRequiredEnvironmentVariable";
import { Toaster } from "@/components/ui/toaster";
import { ScrollHack } from "@/components/ScrollHack";
import OGImage from "assets/graphics/og-image.png"
import type { Metadata } from "next";

const Analytics = lazy(async () => await import("@/components/Analytics"));

const GA_TAG = getRequiredEnvironmentVariable("GA_TAG_ID");
const GTAG_TAG = getRequiredEnvironmentVariable("GTAG_TAG_ID");
const AW_TAG = getRequiredEnvironmentVariable("AW_TAG_ID");

const ppPangram = localFont({
  src: [
    {
      path: '../assets/fonts/PPPangramSansRounded-Regular/PPPangramSansRounded-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/PPPangramSansRounded-Medium/PPPangramSansRounded-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/PPPangramSansRounded-Semibold/PPPangramSansRounded-Semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/fonts/PPPangramSansRounded-Bold/PPPangramSansRounded-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-pppangram'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.now-u.com'),
  title: "now-u",
  description: "Learn more about this non-profit with a mission to inform, involve and inspire people to help tackle some of the world's most pressing social and environmental issues.",
  openGraph: {
    siteName: "now-u",
    images: [
      {
        url: OGImage.src,
      }
    ],
    type: "website"
  }
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html className={`${ppPangram.className}`}>
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
