import { components, paths } from "./causesApiTypes";
import { Fetcher } from "openapi-typescript-fetch";

export type Cause = components["schemas"]["cause"];
export type FAQ = components["schemas"]["faq"];
export type Organisation = components["schemas"]["organisation"];
export type PressCoverage = components["schemas"]["press_article"];

export const apiClient = Fetcher.for<paths>();
apiClient.configure({
  baseUrl: "https://staging.api.now-u.com",
});

export const newApiClient = Fetcher.for<paths>();
newApiClient.configure({
  baseUrl: "https://causes.dev.apiv2.now-u.com",
});
