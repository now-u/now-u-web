import React from "react";
import fs from "fs";
import md from 'markdown-it';
import { getPostBySlug } from "../utils";

// NOTE: https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour

// TODO Type this properly
export async function getStaticPaths(): Promise<any> {
  const postsFilePath = "src/app/blog/posts"
  const fileNames = fs.readdirSync(postsFilePath);
  return {
    paths: fileNames.map(fileName => ({ params: { slug: fileName.replace(".md", "") }})),
    fallback: false
  }
}

export default async function Page({ params }: { params: { slug: string } }): Promise<JSX.Element> {
  const blog = await getPostBySlug(params.slug);
  return (
    <div className="prose mx-auto my-20">
        <div dangerouslySetInnerHTML={{ __html: md().render(blog.content) }} />
    </div>
  );
}
