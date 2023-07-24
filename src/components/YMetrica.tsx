"use client";

import Script from "next/script";
import React from "react";
import { COOKIE_CONSENT_VALUE, useCookieConsent } from "@/hooks/useCookieConsent";

export default function YMetrica({ YM }: { YM: string }): JSX.Element {
  const [cookieConsent] = useCookieConsent();

  return cookieConsent === COOKIE_CONSENT_VALUE.GRANTED ? (
    <>
      <Script
        id={"yandex-metrica"}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
               ym(${YM}, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
               });
                `,
        }}
      />
    </>
  ) : (
    <></>
  );
}
