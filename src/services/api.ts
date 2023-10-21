import { type components, type paths } from "./apiTypes";
import { Fetcher } from "openapi-typescript-fetch";

export type Cause = components["schemas"]["Cause"];
export type Organisation = components["schemas"]["Organisation"];

export const newApiClient = Fetcher.for<paths>();
newApiClient.configure({
  baseUrl: "https://causes.dev.apiv2.now-u.com",
});
