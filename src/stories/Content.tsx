import Heading from "@/stories/Heading";
import React, { type ReactElement } from "react";
import Icon, { type AtomIcon } from "@/stories/Icon";
import { type ButtonProps } from "@/stories/Button";

interface ContentProps {
  icon?: AtomIcon;
  caption: string
  heading: string
  subheading?: string
  body: string,
  children: ReactElement<ButtonProps>
}

const Content: React.FC<ContentProps> = (
  {icon, caption, heading, subheading, body}) => {
  return <div className="flex flex-col items-start gap-6 desktop:gap-8">
    {icon && <Icon name={icon} alt={caption} className="w-8 h-8 tablet:w-12 tablet:h-12 desktop:w-16 desktop:h-16"/> }
    <Heading style="quaternary"
             eyebrow={caption} title={heading} subtitle={subheading} />
    <p className="text-body text-txt-secondary">{body}</p>
    
  </div>
}

export default Content;