"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { pageview } from "@/utils/tagHelper";
import { getLocalStorage } from "@/utils/storageHelper";

export default function GoogleAnalytics({ GTAG }: { GTAG: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [cookieConsent, setCookieConsent] = useState(false);
  const storedCookieConsent = getLocalStorage("cookie_consent", null)

  useEffect(() => {
    const url = pathname + searchParams.toString();
    storedCookieConsent && setCookieConsent(storedCookieConsent);
    cookieConsent && pageview(GTAG, url);
  }, [pathname, searchParams, GTAG, cookieConsent]);
  return (
     <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${cookieConsent && GTAG}`}
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
                
                gtag('config', '${cookieConsent && GTAG}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}
