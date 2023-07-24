"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/utils/tagHelper";
import { COOKIE_CONSENT_VALUE, useCookieConsent } from "@/hooks/useCookieConsent";

export default function GoogleAnalytics({
  GTAG,
}: {
  GTAG: string;
}): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [cookieConsent] = useCookieConsent();

  useEffect(() => {
    if (pathname !== null) {
      const url = `${pathname}${searchParams.toString()} `;
      cookieConsent === COOKIE_CONSENT_VALUE.GRANTED && pageview(GTAG, url);
    } else {
      console.log("No pathname");
    }
  }, [pathname, searchParams, GTAG, cookieConsent]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${GTAG}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}
