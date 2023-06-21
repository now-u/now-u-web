export const pageview = (GTAG : string, url : string) => {
  window.gtag("config", GTAG, {
    page_path: url,
  });
};
