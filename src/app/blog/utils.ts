import { type BlogWriter} from "./writers";
import { getBlogPost } from "@/services/api";

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
  updateDate: string;
  archiveDate?: string;
}

/**
 * Get a remote blog post using slug.
 * @param slug URL slug string that denotes a remote blog slug.
 */
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
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
      publishedDate: blog.release_at,
      updateDate: blog.updated_at,
      archiveDate: blog.end_at ?? undefined
    }
  } else {
    return undefined
  }
}