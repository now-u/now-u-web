import React from "react";
import { type IconComponent, InternalIcon } from "@/stories/atoms/Icon";
import iconFile from "../../../assets/icons/form/secure-payment.svg";

const FormSecurePaymentIcon: IconComponent = ({ className }) => (
  <InternalIcon source={iconFile} className={ className } alt="SecurePayment" />
);

export default FormSecurePaymentIcon;