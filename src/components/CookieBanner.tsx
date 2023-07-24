"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export default function CookieBanner(): JSX.Element {
  const [cookieConsent, setCookieConsent] = useCookieConsent();

  const onAcceptCookie = (): void => {
	setCookieConsent(true);
  };
  const onDenyCookie = (): void => {
	setCookieConsent(false);
  };

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });
  }, [cookieConsent]);
  return (
    <div
      className={`${cookieConsent != null ? "hidden" : "flex"} 
                        my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                        bg-blue  rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p className="text-gray-300">
            We use <span className="font-bold text-orange">cookies</span> on our
            site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-300 font-bold rounded-md border-gray-900"
          onClick={() => {
            onDenyCookie();
          }}
        >
          Decline
        </button>
        <button
          className="bg-orange text-black font-bold px-5 py-2 rounded-lg"
          onClick={() => {
            onAcceptCookie();
          }}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
