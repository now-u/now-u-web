import React from "react";

import { HeaderSubtitle } from "@/components/Header";

import { getPosts } from "./utils";
import { BlogTile } from "@/components/BlogTile";
import { Newsletter } from "@/components/Newsletter";

async function Blog(): Promise<JSX.Element> {
  const blogs = await getPosts();
  return (
    <>
      <title>now-u | Blog</title>

      <HeaderSubtitle
        title="Blog"
        subtitle="Find all the latest blog articles from now-u below"
      />
      <div className="flex flex-col items-center">
        <div className="max-w-screen-2xl grid col-span-1 first:col-span-2 md:grid-cols-2 gap-5 m-5 sm:mx-32 sm:my-10">
          {blogs.map((blog) => (
            <BlogTile key={blog.slug} post={blog} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Newsletter />
      </div>
    </>
  );
}

export default Blog;
