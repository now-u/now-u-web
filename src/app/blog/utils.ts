import fs from "fs";
import matter from "gray-matter";
import { type BlogWriter, getBlogWriter } from "./writers";
import { getBlogPost } from "@/services/api";

const POSTS_FILE_PATH = "src/app/blog/posts";

/**
 * Type for rendering blog post page.
 */
export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  content: string;
  author: BlogWriter | null;
  headerImage: string;
  readingTime: string;
  publishedDate: string;
}

export async function getStaticPostSlugs(): Promise<string[]> {
  const fileNames = fs.readdirSync(POSTS_FILE_PATH);
  return fileNames.map((fileName) => fileName.replace(".md", ""));
}

/**
 * Dynamic blogs have integer blog id as slug.
 * Use this to differentiate between static and dynamic slugs.
 * @param slug Blog post slug string.
 */
export function isStaticBlogPost(slug: string): boolean {
  return isNaN(parseInt(slug))
}

/**
 * Get a static post using slug.
 * @param slug URL slug string. Should be a non-numerical string.
 */
export async function getStaticPostBySlug(slug: string): Promise<Post> {
  const readFile = fs.readFileSync(`${POSTS_FILE_PATH}/${slug}.md`, "utf-8");
  const {
    data: {
      title,
      subtitle,
      authorId,
      headerImage,
      readingTime,
      publishedDate,
    },
    content,
  } = matter(readFile);

  const author = authorId != null ? getBlogWriter(authorId) : null;

  return {
    slug,
    title,
    subtitle,
    content,
    author,
    headerImage,
    readingTime,
    publishedDate,
  };
}

/**
 * Get a remote blog post using slug.
 * @param slug URL slug string that denotes a remote blog integer ID.
 */
export async function getDynamicPostBySlug(slug: string): Promise<Post | undefined> {
  const blogID = parseInt(slug)
  const blog = await getBlogPost(blogID)
  if (blog !== null) {
    const blogAuthor = blog.authors.length > 0 ? blog.authors[0] : null
    return {
      slug,
      title: blog.title,
      subtitle: blog.subtitle,
      content: blog.body,
      author: {
        // TODO: author currently don't have ID
        id: blogAuthor?.picture?.id ?? blogID,
        full_name: blogAuthor?.name ?? "",
        description: blogAuthor?.description ?? "",
        profile_picture_url: blogAuthor?.picture?.url ?? ""
      },
      headerImage: blog.header_image.url,
      readingTime: blog.reading_time.toString(),
      publishedDate: blog.release_at
    }
  } else {
    return undefined
  }
}

/**
 * Get post using slug.
 *
 * @param slug URL slug in a string.
 */
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  if (isStaticBlogPost(slug)) { // Get a static post.
    return await getStaticPostBySlug(slug);
  } else { // Get a remote post from API.
    return await getDynamicPostBySlug(slug)
  }
}

/**
 * This only applies to static pages.
 */
export async function getStaticPosts(): Promise<Post[]> {
  const staticPostSlugs = await getStaticPostSlugs();
  const blogs = await Promise.all(staticPostSlugs.map(getStaticPostBySlug));

  blogs.sort(
    (b1, b2) =>
      new Date(b2.publishedDate).getTime() -
      new Date(b1.publishedDate).getTime(),
  );
  return blogs;
}
