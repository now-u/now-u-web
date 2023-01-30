import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { HeaderSubtitle } from "@/components/Header";

import Image from "next/image";
import Link from "next/link";

import { Post, getPosts } from "./utils";

function BlogTile(props: { post: Post }): JSX.Element {
  const { slug, headerImage, title, author, readingTime } = props.post;
  return (
    <Link href={`blog/${slug}`}>
      <div className="bg-cream h-full rounded-lg hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
        <div className="w-full h-64 relative top-0 right-0 rounded-lg">
          <Image
            src={headerImage}
            alt="Blog Image"
            className="object-cover w-full h-full rounded-lg"
            sizes="100vw"
            fill
          />
        </div>
        <div className="flex flex-row justify-between p-4 items-stretch">
          <div>
            <h2 className="flex-1 font-bold">{title}</h2>
            <h2>{author?.full_name}</h2>
          </div>
          <div className="flex items-center w-32 justify-end h-full">
            <FontAwesomeIcon icon={faClock} size="1x" className="mr-2" />
            <h4>
              {readingTime} {readingTime === "1" ? "min" : "mins"}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

async function Blog(): Promise<JSX.Element> {
  const blogs = await getPosts();
  return (
    <div>
      <HeaderSubtitle
        title="Blog"
        subtitle="Include copy about sustainable development goals and that below you can see which causes are linked to which goals. We partner with trusted charities and social enterprises to bring you focused monthly campaigns with clear and attainable objectives. Each campaign contains informative resources and actions you can complete, curated to inform, involve and inspire..."
      />
      <div className="grid col-span-1 first:col-span-2 sm:grid-cols-2 gap-5 m-5 sm:mx-32 sm:my-10">
        {blogs.map((blog) => (
          <BlogTile key={blog.slug} post={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
