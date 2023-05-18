import React from "react";
import fs from "fs";
import md from "markdown-it";
import { getPostBySlug } from "../utils";
import { BlogWriter } from "../writers";
import Image from "next/image";
import { LinkButton } from '@/components/Button';

// NOTE: https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour

function AuthorTile(props: { author: BlogWriter }): JSX.Element {
  const { author } = props;
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="h-32 w-32 mb-6 md:w-96 relative mr-5">
        <Image
          src={author.profile_picture_url}
          alt="Blog Image"
          className="object-cover w-full h-full rounded-full"
          sizes="100vw"
          fill
        />
      </div>
      <div>
        <p className="mb-2 font-bold"> {author.full_name} </p>
        <p className="mt-0"> {author.description} </p>
      </div>
    </div>
  );
}

// TODO Type this properly
export async function generateStaticParams(): Promise<any> {
  const postsFilePath = "src/app/blog/posts";
  const fileNames = fs.readdirSync(postsFilePath);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(".md", "")
  }));
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const blog = await getPostBySlug(params.slug);

  return (
    <>
      <title>{ `now-u | ${blog.title}` }</title>

    <div className="prose mx-auto my-20">
      <LinkButton buttonText={'Back'} href={'/blog'} />
      <div dangerouslySetInnerHTML={{ __html: md().render(blog.content) }} />
      {blog.author !== null && <AuthorTile author={blog.author} />}
    </div>
    </>
  );
}
