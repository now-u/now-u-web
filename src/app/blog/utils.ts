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
  const blog = await getBlogPost(slug)
  if (blog !== null) {
    const blogAuthor = blog.authors.length > 0 ? blog.authors[0] : null
    return {
      slug,
      title: blog.title,
      subtitle: blog.subtitle,
      content: blog.body,
      // Maps API author to BlogWriter type
      author: blogAuthor === null ? null : {
        id: blogAuthor?.id ?? -1,
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
  return await getDynamicPostBySlug(slug)
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
