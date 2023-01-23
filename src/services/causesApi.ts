import { components, paths } from "./causesApiTypes";
import { Fetcher } from "openapi-typescript-fetch";

export type Cause = components["schemas"]["cause"];
export type FAQ = components["schemas"]["faq"];
export type Organisation = components["schemas"]["organisation"];

export const apiClient = Fetcher.for<paths>();
apiClient.configure({
  baseUrl: "https://api.now-u.com",
});
