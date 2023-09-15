import { components, paths } from "./apiTypes";
import { Fetcher } from "openapi-typescript-fetch";

export type Cause = components["schemas"]["cause"];
export type Organisation = components["schemas"]["organisation"];

export const newApiClient = Fetcher.for<paths>();
newApiClient.configure({
  baseUrl: "https://causes.dev.apiv2.now-u.com",
});
