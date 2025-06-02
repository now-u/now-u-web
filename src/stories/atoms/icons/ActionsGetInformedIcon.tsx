import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/actions/get-informed.svg";

const ActionsGetInformedIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="GetInformed" />
);

export default ActionsGetInformedIcon;