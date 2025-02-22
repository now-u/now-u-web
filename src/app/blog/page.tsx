import React from "react";

import { Header } from "@/components/Header";
import { Newsletter } from "@/components/Newsletter";
import { getBlogPosts } from "@/services/api";
import type { Metadata } from "next";
import BlogSearchButton from "@/components/BlogSearchBar";
import BlogTile from "@/stories/organisms/BlogTile";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | now-u"
};

async function Blog(): Promise<JSX.Element> {
  const remotePosts = await getBlogPosts();

  return (
    <>
      <Header
        title="Blog"
        body="Find all the latest blog articles from now-u below"
      />
      <BlogSearchButton />
      {remotePosts.length > 0 ? (
        <div className="max-w-(--breakpoint-2xl) mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5 sm:mx-32 sm:my-10">
            {remotePosts.map((blog) => (
              <Link key={`remote-blog-${blog.id.toString()}`} href={`/blog/${blog.slug}`}>
                <BlogTile src={blog.header_image.url} alt={blog.title}
                          title={blog.title}
                          author={blog.authors.length > 0 ? (blog.authors[0].name ?? "") : ""}
                          estimatedReadingTimeInMinutes={blog.reading_time} />
              </Link>
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
