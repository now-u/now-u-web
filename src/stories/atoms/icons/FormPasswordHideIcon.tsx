import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/form/password-hide.svg";

const FormPasswordHideIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="PasswordHide" />
);

export default FormPasswordHideIcon;