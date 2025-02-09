import { type IconComponent } from "@/stories/atoms/Icon";
import React from "react";
import ContentTemplate from "@/stories/organisms/ContentTemplate";
import Image from "next/image";

interface ContentTileProps {
  src: string;
  alt: string;
  imageClassName?: string;
  icon?: IconComponent;
  caption: string;
  heading: string;
  subheading?: string;
  body: string;
  children?: React.ReactNode;
}

const ContentTile: React.FC<ContentTileProps> = ({
  src,
  alt,
  imageClassName,
  icon,
  caption,
  heading,
  subheading,
  body,
  children,
}) => {
  return (
    <div className="flex flex-col bg-framework-background-secondary rounded-container w-full">
      <div role="presentation" className={imageClassName ?? ""}>
        <Image src={src} alt={alt} width="480" height="270" className="block object-cover relative w-full h-full rounded-t-container" />
      </div>
      <div role="presentation" className="">
        <ContentTemplate
          icon={icon}
          caption={caption}
          heading={heading}
          subheading={subheading}
          body={body}
        >
          {children}
        </ContentTemplate>
      </div>
    </div>
  );
};

export default ContentTile;
