'use client'
import { type Post } from '@/app/blog/utils';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Placeholder from '@/assets/graphics/placeholder.png';

export function BlogTile(props: { post: Post }): JSX.Element {
  const { slug, headerImage, title, author, readingTime } = props.post;
  const [src, setSrc] = useState<string | StaticImageData>(headerImage ?? Placeholder);
  return (
    <Link href={`blog/${slug}`}>
      <div className="bg-cream h-full rounded-lg hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
        <div className="w-full h-64 relative top-0 right-0 rounded-lg">
          <Image
            src={src}
            onError={() => {
              setSrc(Placeholder)
            }}
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
