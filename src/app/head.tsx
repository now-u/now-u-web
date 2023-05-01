import React from "react";
import Script from 'next/script';
// const GTAG = getRequiredEnvironmentVariable("GTAG");
import {GTAG} from '@/utils/constants';

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
