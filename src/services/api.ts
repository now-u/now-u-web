import { type components, type paths } from "./apiTypes";
import createClient from "openapi-fetch";

export type Cause = components["schemas"]["Cause"];
export type Organisation = components["schemas"]["Organisation"];
export type Faq = components["schemas"]["Faq"];
export type BlogPost = components["schemas"]["Blog"];

export const apiClient = createClient<paths>({
  baseUrl: "https://causes.dev.apiv2.now-u.com",
});

export async function getCauses(): Promise<Cause[]> {
  const { data, error, response } = await apiClient.GET("/causes/");

  if (!response.ok || error !== undefined) {
    console.error(`[${response.status}] Failed to fetch causes: ${error}`);
    return [];
  }

  return data.results ?? [];
}

export async function getFaqs(): Promise<Faq[]> {
  const { data, error, response } = await apiClient.GET("/faqs/");

  if (!response.ok || error !== undefined) {
    console.error(`[${response.status}] Failed to fetch faqs: ${error}`);
    return [];
  }

  return data.results ?? [];
}

export async function getOrganisations(): Promise<Organisation[]> {
  const { data, error, response } = await apiClient.GET("/organisations/");

  if (!response.ok || error !== undefined) {
    console.error(
      `[${response.status}] Failed to fetch organisations: ${error}`,
    );
    return [];
  }

  return data.results ?? []
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error, response } = await apiClient.GET("/blogs/");

  if (!response.ok || error !== undefined) {
    console.error(
      `[${response.status}] Failed to fetch blog post list: ${error}`,
    );
    return [];
  }

  return data.results ?? [];
}

export async function getBlogPost(postSlug: string): Promise<BlogPost | null> {
  const { data, error, response } = await apiClient.GET("/blogs/{slug}/", {
    params: {
      path: { slug: postSlug },
    },
  });

  if (!response.ok || error !== undefined) {
    console.error(`[${response.status}] Failed to fetch blog post: ${error}`);
    return null;
  }

  return data;
}
