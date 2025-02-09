import { type IconComponent } from "@/stories/atoms/Icon";
import React from "react";
import ContentTemplate from "@/stories/organisms/ContentTemplate";

interface ContentTileProps {
  imageURL: string;
  icon?: IconComponent;
  caption: string;
  heading: string;
  subheading?: string;
  body: string;
  children?: React.ReactNode;
}

const ContentTile: React.FC<ContentTileProps> = ({
  imageURL,
  icon,
  caption,
  heading,
  subheading,
  body,
  children,
}) => {
  return (
    <div className="flex flex-col bg-framework-background-secondary rounded-container">
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
