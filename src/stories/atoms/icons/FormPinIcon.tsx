import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/form/pin.svg";

const FormPinIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="Pin" />
);

export default FormPinIcon;