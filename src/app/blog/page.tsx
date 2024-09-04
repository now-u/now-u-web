import React from "react";

import { HeaderSubtitle } from "@/components/Header";

import { getStaticPosts } from "./utils";
import { BlogTile, type BlogTileProps } from "@/components/BlogTile";
import { Newsletter } from "@/components/Newsletter";
import { getBlogPosts } from "@/services/api";

async function Blog(): Promise<JSX.Element> {
  const remotePosts = await getBlogPosts();
  const staticPosts = await getStaticPosts();

  const allBlogs: BlogTileProps[] = remotePosts.map((blog) => {
      return {
        id: `remote-${blog.slug}`,
        href: `blog/${blog.id}`,
        headerImageURL: blog.header_image.url,
        title: blog.title,
        authors: blog.authors.filter((author) => author.name).map((author) => author.name ?? ""),
        readingTime: blog.reading_time.toString()
      }
    }
  ).concat(staticPosts.map((blog) => {
      return {
        id: `static-${blog.slug}`,
        href: `blog/${blog.slug}`,
        headerImageURL: blog.headerImage,
        title: blog.title,
        authors: blog.author?.full_name === undefined ? [] : [blog.author.full_name],
        readingTime: blog.readingTime
      }
    })
  )


  return (
    <>
      <title>now-u | Blog</title>

      <HeaderSubtitle
        title="Blog"
        subtitle="Find all the latest blog articles from now-u below"
      />
      <div className="flex flex-col items-center">
        <div className="max-w-screen-2xl grid col-span-1 first:col-span-2 md:grid-cols-2 gap-5 m-5 sm:mx-32 sm:my-10">
          {
              allBlogs.map((blog) => (
                <BlogTile key={blog.id} {...blog} />
              ))
          }
        </div>
      </div>
      <div className="flex justify-center">
        <Newsletter />
      </div>
    </>
  );
}

export default Blog;
