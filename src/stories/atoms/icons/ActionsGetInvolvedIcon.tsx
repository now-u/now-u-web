import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/actions/get-involved.svg";

const ActionsGetInvolvedIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="GetInvolved" />
);

export default ActionsGetInvolvedIcon;