import { getLocalStorage, setLocalStorage } from "@/utils/storageHelper";
import { useEffect, useState } from "react";

type ActiveCookiesType = "granted" | "denied" | "not-set" | "loading";
export enum COOKIE_CONSENT_VALUE {
  GRANTED = "granted",
  DENIED = "denied",
  NOT_SET = "not-set",
  LOADING = "loading",
}

export function useCookieConsent(): [
  ActiveCookiesType,
  (cookiesActive: ActiveCookiesType) => void
] {
  const [cookiesActive, setCookiesActive] = useState<ActiveCookiesType>(
    COOKIE_CONSENT_VALUE.LOADING
  );

  useEffect(() => {
    const storedCookieConsent: ActiveCookiesType =
      getLocalStorage<ActiveCookiesType>(
        "cookie_consent",
        COOKIE_CONSENT_VALUE.NOT_SET
      );
    setCookieConsent(storedCookieConsent);
  }, [setCookiesActive]);

  function setCookieConsent(cookiesActive: ActiveCookiesType): void {
    setLocalStorage("cookie_consent", cookiesActive);
    setCookiesActive(cookiesActive);
  }

  return [cookiesActive, setCookieConsent];
}
