import { type components, type paths } from "./apiTypes";
import createClient from "openapi-fetch";

export type Cause = components["schemas"]["Cause"];
export type Organisation = components["schemas"]["Organisation"];
export type Faq = components["schemas"]["Faq"];

export const apiClient = createClient<paths>({
  baseUrl: "https://causes.dev.apiv2.now-u.com",
});

export async function getCauses(): Promise<Cause[]> {
  const { data, error, response } = await apiClient.GET("/causes/")

  if (!response.ok || error !== undefined) {
    console.error(`[${response.status}] Failed to fetch causes: ${error}`);
    return [];
  }

  return data;
}

export async function getFaqs(): Promise<Faq[]> {
    const { data, error, response } = await apiClient.GET("/faqs/");

    if (!response.ok || error !== undefined) {
      console.error(`[${response.status}] Failed to fetch faqs: ${error}`);
      return [];
    }

    return data;
}

export async function getOrganisations(): Promise<Organisation[]> {
  const { data, error, response } = await apiClient.GET("/organisations/");

  if (!response.ok || error !== undefined) {
    console.error(`[${response.status}] Failed to fetch faqs: ${error}`);
    return [];
  }

  return data;
}