import Script from 'next/script';
import { GTAG } from '@/utils/constants';
import React from 'react';

export default function GAnalytics(): JSX.Element {
  return (
    <>
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
