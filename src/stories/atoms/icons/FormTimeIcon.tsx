import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/form/time.svg";

const FormTimeIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="Time" />
);

export default FormTimeIcon;