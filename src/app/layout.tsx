import React from "react";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

import { Nunito, Nunito_Sans } from "@next/font/google";
import { Footer } from "@/components/Footer";
import { YM } from "@/components/YMetrica";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { getRequiredEnvironmentVariable } from "@/utils/getRequiredEnvironmentVariable";
import CookieBanner from "@/components/CookieBanner";
import { getLocalStorage } from "@/utils/storageHelper";
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
      <GoogleAnalytics GTAG={GTAG} />
      <body className="flex flex-col align-items-center">
        <div>
          <img
            src={"https://mc.yandex.ru/watch/" + YM}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
        <Navbar />
        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
