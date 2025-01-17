import React from "react";
import Image from "next/image";
import actionAdvocate from "@/assets/icons/actions/advocate.svg";
import actionGetInformed from "@/assets/icons/actions/get-informed.svg";
import actionRaiseMoney from "@/assets/icons/actions/raise-money.svg";
import actionGetInvolved from "@/assets/icons/actions/get-involved.svg";

export const AtomIcons: Record<string, any> = {
  // Actions
  "action-advocate": actionAdvocate,
  "action-get-informed": actionGetInformed,
  "action-get-involved": actionGetInvolved,
  "action-raise-money": actionRaiseMoney
} as const

export type AtomIcon = typeof AtomIcons[keyof typeof AtomIcons]

interface IconProps {
  name: AtomIcon;
  alt?: string;
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, alt, className}) => {
  const source = AtomIcons[name];

  return <Image src={source} alt={alt ?? name} role="presentation" className={className ?? ""} />;
};

export default Icon;
