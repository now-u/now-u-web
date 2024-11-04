import React from "react";
import md from "markdown-it";
import { getPostBySlug } from "../utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// NOTE: https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour

function AuthorTile(props: {
  name: string;
  description: string;
  profilePictureURL: string;
}): JSX.Element {
  return (
    <div className="flex flex-col mt-10 mb-6 gap-4 md:flex-row md:items-center">
      <div className="aspect-square h-24 w-24 md:h-32 md:w-32 relative">
        {props.profilePictureURL !== "" ? (
          <Image
            src={props.profilePictureURL}
            alt="Blog Image"
            className="object-cover object-center w-full h-full rounded-full m-0"
            sizes="100vw"
            fill
          />
        ) : (
          <FontAwesomeIcon
            className="object-cover object-center w-full h-full rounded-full m-0"
            color="#DDD"
            icon={faUserCircle}
          />
        )}
      </div>
      <div>
        <p className="m-0 mb-2 font-bold"> {props.name} </p>
        <p className="m-0"> {props.description} </p>
      </div>
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const blog = await getPostBySlug(params.slug);
  if (blog === undefined) {
    notFound();
  }

  return (
    <>
      <title>{`now-u | ${blog.title}`}</title>

      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col py-10 px-4 prose prose-gray">
          <Link className="underline text-orange font-bold" href={"/blog"}>
            {" "}
            {"< "} Back{" "}
          </Link>
          <div className="">
            <Image
              src={blog.headerImage}
              alt="Blog Header Image"
              className="object-cover w-full h-64 m-0 rounded-lg mt-4 my-2"
              width={448}
              height={252}
            />
          </div>
          <div className="mt-4">
            <h1 className="text-3xl mb-2">{blog.title}</h1>
            {blog.subtitle !== "" && (
              <p className="text-gray-500 mt-0">{blog.subtitle}</p>
            )}
          </div>
          <hr className="m-0" />
          {/* Divider */}
          <div
            dangerouslySetInnerHTML={{ __html: md().render(blog.content) }}
          />
          {blog.author !== null && (
            <AuthorTile
              name={blog.author.full_name}
              description={blog.author.description}
              profilePictureURL={blog.author.profile_picture_url}
            />
          )}
        </div>
      </div>
    </>
  );
}
