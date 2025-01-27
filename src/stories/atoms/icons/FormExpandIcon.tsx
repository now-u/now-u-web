import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/form/expand.svg";

const FormExpandIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="Expand" />
);

export default FormExpandIcon;