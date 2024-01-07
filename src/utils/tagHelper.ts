export const pageview = (GTAG: string, url: string): void => {
  window.gtag("config", GTAG, {
    page_path: url,
  });
};
