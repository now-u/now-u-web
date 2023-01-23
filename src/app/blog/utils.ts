import fs from 'fs';
import matter from 'gray-matter';
import { BlogWriter, getBlogWriter } from "./writers";

const POSTS_FILE_PATH = "src/app/blog/posts"

export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  content: string;
  author: BlogWriter | null;
  headerImage: string,
  readingTime: string,
}

export async function getPostSlugs(): Promise<string[]> {
  const fileNames = fs.readdirSync(POSTS_FILE_PATH);
  return fileNames.map(fileName => fileName.replace(".md", ""))
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const readFile = fs.readFileSync(`${POSTS_FILE_PATH}/${slug}.md`, "utf-8");
  const {
    data: { title, subtitle, authorId, headerImage, readingTime },
    content,
  } = matter(readFile);

  const author = authorId != null ? getBlogWriter(authorId) : null

  return {
    slug,
    title,
    subtitle,
    content,
    author,
    headerImage,
    readingTime
  };
}

export async function getPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  return await Promise.all(slugs.map(getPostBySlug));
}
