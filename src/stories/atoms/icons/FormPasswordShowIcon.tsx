import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/form/password-show.svg";

const FormPasswordShowIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="PasswordShow" />
);

export default FormPasswordShowIcon;