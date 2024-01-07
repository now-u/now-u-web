import { type components, type paths } from "./apiTypes";
import { Fetcher } from "openapi-typescript-fetch";

export type Cause = components["schemas"]["Cause"];
export type Organisation = components["schemas"]["Organisation"];
export type Faq = components["schemas"]["Faq"];

export const apiClient = Fetcher.for<paths>();
apiClient.configure({
  baseUrl: "https://causes.dev.apiv2.now-u.com",
});
