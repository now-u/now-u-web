import React from "react";
import ImageFrame from "@/stories/atoms/ImageFrame";
import Heading from "@/stories/atoms/Heading";
import { ClockIcon } from "@heroicons/react/24/outline";

export interface BlogTileProps {
  title: string;
  src: string;
  alt: string;
  author: string;
  estimatedReadingTimeInMinutes: number;
}

const BlogTile: React.FC<BlogTileProps> = ({
  title,
  src,
  alt,
  author,
  estimatedReadingTimeInMinutes,
}) => {
  return (
    <div className="flex flex-col items-start bg-framework-background-secondary rounded-container">
      <ImageFrame src={src} alt={alt} imageClassName="rounded-t-container"  containerClassName="w-full" />
      <div className="p-[24px] tablet:p-[32px] w-full">
        <Heading
          style="quaternary"
          title={title}
        />
        <div className="flex flex-col gap-[24px] desktop:gap-[32px] text-txt-secondary text-body">
          <p className="">{author}</p>
          <div className="flex flex-row gap-[8px] items-center">
            <ClockIcon className="size-6"/>
          <span>{formatTimeSpan(estimatedReadingTimeInMinutes)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatTimeSpan = (minutes: number): string => {
  return minutes === 1 ? "1 minute" : `${minutes} minutes`;
}

export default BlogTile;
