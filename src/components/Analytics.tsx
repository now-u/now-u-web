"use client";

import { useEffect, useState } from "react";
import { run } from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";

const enum CookieCategory {
  Necessary = "necessary",
  Analytics = "analytics",
  Marketing = "marketing",
}

export default function Analytics(props: { gtmId: string }): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [analyticsStorageGranted, setAnalyticsStorageGranted] = useState(false);

  // Initially disabled google analytics storage until consent is granted
  useEffect(() => {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
  }, []);

  useEffect(() => {
    if (analyticsStorageGranted) {
      const url = `${pathname}${searchParams?.toString() ?? ""}`;
      window.gtag("config", props.gtmId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, props.gtmId, analyticsStorageGranted]);

  useEffect(() => {
    void run({
      hideFromBots: true,
      categories: {
        [CookieCategory.Necessary]: {
          enabled: true,
          readOnly: true,
        },
        [CookieCategory.Analytics]: {},
        [CookieCategory.Marketing]: {},
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies 🍪😋",
              description:
                "We use cookies to ensure you get the best experience on our website and to get anonymized statistics about usage. Please review the options below.",
              acceptAllBtn: "Accept",
              acceptNecessaryBtn: "Reject",
              showPreferencesBtn: "Preferences",
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Accept current selection",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Yep we use cookies! 🍪😋",
                  description: "I want one!",
                },
                {
                  title: "Strictly Necessary cookies",
                  description:
                    "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                  linkedCategory: CookieCategory.Necessary,
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: CookieCategory.Analytics,
                },
                {
                  title: "Marketing",
                  description: "Lorem ipsum",
                  linkedCategory: CookieCategory.Marketing,
                },
                {
                  title: "More information",
                  description:
                    'For more information check our <a href="/info/privacy-notice">Privacy Notice</a> and <a href="/info/cookie-policy">Cookie Policy</a>. For any queries please <a href="/get-in-touch">contact us</a>.',
                },
              ],
            },
          },
        },
      },

      onConsent: ({ cookie }) => {
        const analyticsGranted = cookie.categories.includes(
          CookieCategory.Analytics,
        );
        window.gtag("consent", "update", {
          analytics_storage: analyticsGranted ? "granted" : "denied",
          ad_storage: cookie.categories.includes(CookieCategory.Marketing)
            ? "granted"
            : "denied",
        });

        setAnalyticsStorageGranted(analyticsGranted);
      },
    });
  }, []);

  return <GoogleAnalytics gaId={props.gtmId} />;
}
