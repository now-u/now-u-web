import { getLocalStorage, setLocalStorage } from "@/utils/storageHelper";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_SET_VALUE = "true";

export function useCookieConsent(): [boolean, (cookiesActive: boolean) => void] {
	const [cookiesActive, setCookiesActive] = useState(false);
  
	useEffect(() => {
		const storedCookieConsent = getLocalStorage("cookie_consent", "");
		setCookieConsent(storedCookieConsent === COOKIE_CONSENT_SET_VALUE);
	}, [setCookiesActive]);

	function setCookieConsent(cookiesActive: boolean): void {
		setLocalStorage("cookie_consent", cookiesActive ? COOKIE_CONSENT_SET_VALUE : "");
		setCookiesActive(cookiesActive);
	}

	return [cookiesActive, setCookieConsent];
}
