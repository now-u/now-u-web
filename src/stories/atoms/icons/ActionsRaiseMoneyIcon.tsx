import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/actions/raise-money.svg";

const ActionsRaiseMoneyIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="RaiseMoney" />
);

export default ActionsRaiseMoneyIcon;