import { type components, type paths } from "./apiTypes";
import createClient from "openapi-fetch";

export type Cause = components["schemas"]["Cause"];
export type Organisation = components["schemas"]["Organisation"];
export type Faq = components["schemas"]["Faq"];
export type BlogPost = components["schemas"]["Blog"];

export const apiClient = createClient<paths>({
  baseUrl: "https://causes.dev.apiv2.now-u.com",
  fetch: fetch,
  cache: "no-store"
});

export async function getCauses(): Promise<Cause[]> {
  const { data, error, response } = await apiClient.GET("/causes/");

  if (!response.ok || error !== undefined) {
    console.error(`[${response.status}] Failed to fetch causes: ${error}`);
    return [];
  }

  return data ?? [];
}

export async function getFaqs(): Promise<Faq[]> {
  const { data, error, response } = await apiClient.GET("/faqs/", {
    params: {
      query: {
        limit: 0,
      },
    },
  });

  if (!response.ok || error !== undefined) {
    console.error(`[${response.status}] Failed to fetch faqs: ${error}`);
    return [];
  }

  return data.results ?? [];
}

export async function getOrganisations(
  limit: number = 0,
  offset: number | undefined = undefined,
): Promise<Organisation[]> {
  const { data, error, response } = await apiClient.GET("/organisations/", {
    params: {
      query:
        offset === undefined
          ? {
              limit,
            }
          : {
              limit,
              offset,
            },
    },
  });

  if (!response.ok || error !== undefined) {
    console.error(
      `[${response.status}] Failed to fetch organisations: ${error}`,
    );
    return [];
  }

  return data.results ?? [];
}

/**
 * Get a list of blog posts.
 * @param limit the maximum number of blog posts to fetch. Use 0 to represent no upper limit.
 * @param offset the current result page offset.
 */
export async function getBlogPosts(
  limit: number = 0,
  offset: number | undefined = undefined,
): Promise<BlogPost[]> {
  const { data, error, response } = await apiClient.GET("/blogs/", {
    params: {
      query:
        offset === undefined
          ? {
              limit,
            }
          : {
              limit,
              offset,
            },
    },
  });

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
