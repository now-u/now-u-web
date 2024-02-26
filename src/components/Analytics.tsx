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
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject",
              showPreferencesBtn: "Preferences",
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject",
              savePreferencesBtn: "Accept current selection",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Yep we use cookies! 🍪😋",
                  description:
                    "Some of our cookies are essential, while others help us to improve your experience by providing insights into how the site is being used. You can opt in for ‘performance’ and ‘marketing’ cookies by clicking the individual controls below.",
                },
                {
                  title: "Strictly Necessary cookies",
                  description:
                    "Necessary cookies enable core functionality such as page navigation and access to secure areas. The website cannot function properly without these cookies, and can only be disabled by changing your browser preferences.",
                  linkedCategory: CookieCategory.Necessary,
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "We use software including Google Analytics to help us improve our website by collecting and reporting information on how you use it. The cookies collect information in a way that does not directly identify anyone.",
                  linkedCategory: CookieCategory.Analytics,
                },
                {
                  title: "Marketing",
                  description:
                    "We use software including Google Analytics to help us improve our website by collecting and reporting information on how you use it. The cookies collect information in a way that does not directly identify anyone.",
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
