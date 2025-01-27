import Heading from "@/stories/atoms/Heading";
import { type IconComponent } from "@/stories/atoms/Icon";
import React from "react";

interface ContentProps {
  icon?: IconComponent;
  caption: string
  heading: string
  subheading?: string
  body: string
}

const ContentTemplate: React.FC<ContentProps> = (
  {icon, caption, heading, subheading, body}) => {
  const Icon = icon
  return (
    <div className="flex flex-col items-start gap-6 desktop:gap-8">
    {Icon !== undefined && <Icon className="w-8 h-8 tablet:w-12 tablet:h-12 desktop:w-16 desktop:h-16" /> }
    <Heading style="quaternary"
             eyebrow={caption} title={heading} subtitle={subheading} />
    <p className="text-body text-txt-secondary">{body}</p>
  </div>
  )
}

export default ContentTemplate;