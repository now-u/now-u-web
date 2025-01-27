import React from "react";
import Image from "next/image";

interface InternalIconProps {
  source: any,
  alt: string;
  className?: string
}

interface IconProps {
  className?: string
}

export type IconComponent = React.FC<IconProps>;

export const InternalIcon: React.FC<InternalIconProps> = ({source, alt, className}) => {
  return <Image src={source} alt={alt} role="presentation" className={className ?? ""} />;
};

export default InternalIcon;
