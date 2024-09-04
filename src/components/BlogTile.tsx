"use client";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Placeholder from "@/assets/graphics/placeholder.png";

interface BlogTileProps {
  href: string,
  headerImageURL: string
  title: string
  authors: string[],
  readingTime: string
}

export function BlogTile({ href, headerImageURL, title, authors, readingTime }: BlogTileProps): JSX.Element {
  const [src, setSrc] = useState<string | StaticImageData>(
    headerImageURL ?? Placeholder,
  );

  return (
    <Link href={href}>
      <div className="bg-cream h-full rounded-lg hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
        <div className="w-full h-64 relative top-0 right-0 rounded-lg">
          <Image
            src={src}
            onError={() => {
              setSrc(Placeholder);
            }}
            alt="Blog Image"
            className="object-cover w-full h-full rounded-t-lg"
            sizes="100vw"
            fill
          />
        </div>
        <div className="flex flex-row justify-between p-4 items-stretch">
          <div>
            <h2 className="flex-1 font-bold">{title}</h2>
            <h2>{authorNameSubtitle(authors)}</h2>
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

/**
 * Generate a descriptive string of blog authors.
 * @param names Author names.
 */
const authorNameSubtitle = (names: string[]): string => {
  if (names.length === 0) {
    return ""
  } else if (names.length === 1) {
    return names[0];
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]}`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} more`
  }
}
