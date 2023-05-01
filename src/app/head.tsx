import React from "react";
import { getRequiredEnvironmentVariable } from '@/utils/getRequiredEnvironmentVariable';
import Script from 'next/script';
export const GTAG = getRequiredEnvironmentVariable("GTAG");

export default function Head(): JSX.Element {
  return (
    <>
      <title></title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GTAG}');
    `}
      </Script>
    </>
  );
}
