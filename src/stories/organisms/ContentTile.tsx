import { type IconComponent } from "@/stories/atoms/Icon";
import React from "react";
import ContentTemplate from "@/stories/organisms/ContentTemplate";
import Image from "next/image";
import ImageFrame from "@/stories/atoms/ImageFrame";

interface ContentTileProps {
  src: string;
  alt: string;
  icon?: IconComponent;
  caption?: string;
  heading: string;
  subheading?: string;
  body?: string;
  children?: React.ReactNode;
}

const ContentTile: React.FC<ContentTileProps> = ({
  src,
  alt,
  icon,
  caption,
  heading,
  subheading,
  body,
  children,
}) => {
  return (
    <div className="flex flex-col bg-framework-background-secondary rounded-container w-full">
      <ImageFrame src={src} alt={alt} imageClassName="rounded-t-container"/>
      <div role="presentation" className="">
        <ContentTemplate
          icon={icon}
          caption={caption ?? undefined}
          heading={heading}
          subheading={subheading}
          body={body ?? undefined}
        >
          {children}
        </ContentTemplate>
      </div>
    </div>
  );
};

export default ContentTile;
