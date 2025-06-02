import type { Preview } from "@storybook/react";
import localFont from "next/font/local";
import "../src/app/globals.css";

import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";

// Include font using next/font
const ppPangram = localFont({
  src: [
    {
      path: "../src/assets/fonts/PPPangramSansRounded-Regular/PPPangramSansRounded-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/PPPangramSansRounded-Medium/PPPangramSansRounded-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/PPPangramSansRounded-Semibold/PPPangramSansRounded-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../src/assets/fonts/PPPangramSansRounded-Bold/PPPangramSansRounded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pppangram",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={ppPangram.className}>
        <Story />
      </main>
    ),
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),
  ],
};

export default preview;
