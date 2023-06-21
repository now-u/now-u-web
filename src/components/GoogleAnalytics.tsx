'use client';

import Script from 'next/script'
import {usePathname, useSearchParams} from 'next/navigation'
import { useEffect } from "react";
import {pageview} from "@/utils/tagHelper";
import { getLocalStorage } from '@/utils/storageHelper';

export default function GoogleAnalytics({GTAG} : {GTAG : string}){
  const storedCookieConsent = getLocalStorage("cookie_consent", null);
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()

    pageview(GTAG, url);

  }, [pathname, searchParams, GTAG]);
  return (
    <>
      <Script strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}/>
      <Script id='google-analytics' strategy="afterInteractive"
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
  )}
