import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/services/api";
import { cookies } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  cookies()
  const now = Date.now();
  // Filter non-archived blog posts
  const blogPosts: MetadataRoute.Sitemap = (await getBlogPosts())
    .filter((b) => {
      if (b.end_at) {
        const endDate = Date.parse(b.end_at);
        return now < endDate;
      } else {
        return true;
      }
    })
    .map((blog) => ({
      url: `https://www.now-u.com/blog/${blog.slug}`,
      lastModified: blog.updated_at ? new Date(blog.updated_at) : undefined,
      changeFrequency: "yearly",
      priority: 0.8, // blogs are less critical
    }));

  const mainLinks: MetadataRoute.Sitemap = [
    {
      url: "https://www.now-u.com",
      lastModified: new Date("2024-11-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.now-u.com/causes",
      lastModified: new Date("2024-11-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.now-u.com/about",
      lastModified: new Date("2024-11-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.now-u.com/charity-partnership",
      lastModified: new Date("2024-11-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.now-u.com/blog",
      lastModified: new Date("2024-11-06"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.now-u.com/get-in-touch",
      lastModified: new Date("2024-11-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.now-u.com/press",
      lastModified: new Date("2024-11-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.now-u.com/info/cookie-policy",
      lastModified: new Date("2023-08-01"),
      changeFrequency: "yearly",
    },
    {
      url: "https://www.now-u.com/info/privacy-notice",
      lastModified: new Date("2023-08-01"),
      changeFrequency: "yearly",
    },
    {
      url: "https://www.now-u.com/info/terms-and-conditions-for-users",
      lastModified: new Date("2022-12-01"),
      changeFrequency: "yearly",
    },
  ];
  return [...mainLinks, ...blogPosts];
}
