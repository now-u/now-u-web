import Heading from "@/stories/atoms/Heading";
import { type IconComponent } from "@/stories/atoms/Icon";
import React from "react";

interface ContentProps {
  icon?: IconComponent;
  caption?: string;
  heading: string;
  subheading?: string;
  body?: string;
  children?: React.ReactNode;
}

const ContentTemplate: React.FC<ContentProps> = ({
  icon,
  caption,
  heading,
  subheading,
  body,
  children,
}) => {
  const Icon = icon;
  return (
    <div className="flex flex-col items-start gap-[24px] desktop:gap-[32px] p-[24px] tablet:p-[32px]">
      {Icon !== undefined  && (
        <Icon className="w-8 h-8 tablet:w-12 tablet:h-12 desktop:w-16 desktop:h-16" />
      )}
      <Heading
        style="quaternary"
        eyebrow={caption ?? undefined}
        title={heading}
        subtitle={subheading ?? undefined}
      />
      {body  && <p className="text-body text-txt-secondary">{body}</p>}
      <div className="flex flex-row gap-[16px]">{children}</div>
    </div>
  );
};

export default ContentTemplate;
