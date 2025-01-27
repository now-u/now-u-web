import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/actions/advocate.svg";

const ActionsAdvocateIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="Advocate" />
);

export default ActionsAdvocateIcon;