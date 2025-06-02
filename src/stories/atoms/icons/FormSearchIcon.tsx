import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/form/search.svg";

const FormSearchIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="Search" />
);

export default FormSearchIcon;