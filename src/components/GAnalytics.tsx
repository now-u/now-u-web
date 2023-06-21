import Script from "next/script";
import React from "react";
import { getRequiredEnvironmentVariable } from "@/utils/getRequiredEnvironmentVariable";

const GTAG = getRequiredEnvironmentVariable("GTAG_ID");

interface GAnalyticsProps {
  accept: boolean;
}

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
        gtag('consent', 'default, {
        'analytics_storage': 'denied'}'
        gtag('js', new Date());
        gtag('config', '${GTAG}');
    `}
      </Script>
    </>
  );
}
