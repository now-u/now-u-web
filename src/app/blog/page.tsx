import React from "react";

import { Header } from "@/components/Header";
import { BlogTile, type BlogTileProps } from "@/components/BlogTile";
import { Newsletter } from "@/components/Newsletter";
import { getBlogPosts } from "@/services/api";

async function Blog(): Promise<JSX.Element> {
  const remotePosts = await getBlogPosts();

  const allBlogs: BlogTileProps[] = remotePosts.map((blog) => {
    return {
      id: `remote-blog-${blog.id.toString()}`,
      href: `blog/${blog.slug}`,
      headerImageURL: blog.header_image.url,
      title: blog.title,
      authors: blog.authors
        .filter((author) => author.name)
        .map((author) => author.name ?? ""),
      readingTime: blog.reading_time.toString(),
    };
  });

  return (
    <>
      <title>now-u | Blog</title>

      <Header
        title="Blog"
        body="Find all the latest blog articles from now-u below"
      />

      {allBlogs.length > 0 ? (
        <div className="max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5 sm:mx-32 sm:my-10">
            {allBlogs.map((blog) => (
              <BlogTile key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto text-center my-8 gap-4 flex flex-col items-center">
          <h2 className="font-bold text-3xl">Oops! Something went wrong.</h2>
          <p className="text-lg">
            Sorry, we couldn&apos;t load the blog articles at the moment. <br />
            Please try again later.
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <Newsletter />
      </div>
    </>
  );
}

export default Blog;
