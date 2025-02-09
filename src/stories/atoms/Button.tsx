import React from "react";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  style: "primary" | "secondary";
  /** Button contents */
  title: string;
  /** Optional click handler */
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  style = "secondary",
  title = "",
  onClick = undefined,
  disabled = false,
}) => {
  let styleClasses: string = "";

  switch (style) {
    case "primary":
      styleClasses =
        "text-txt-primary bg-brand-primary focus:ring-brand-primary/50 hover:bg-[color-mix(in_srgb,#FFFFFF_15%,var(--brand-primary))] disabled:text-txt-disabled disabled:bg-framework-background-tertiary";
      break;
    case "secondary":
      styleClasses = "text-txt-primary dark:text-txt-primary-dark bg-framework-background-tertiary dark:bg-framework-background-tertiary-dark hover:bg-[color-mix(in_srgb,#FFFFFF_15%,var(--framework-background-tertiary))] dark:hover:bg-[color-mix(in_srgb,#FFFFFF_15%,var(--framework-background-tertiary-dark))] focus:ring-framework-border dark:focus:ring-framework-border-dark disabled:text-txt-disabled disabled:bg-framework-background-tertiary dark:disabled:text-txt-disabled-dark dark:disabled:bg-framework-background-tertiary-dark";
      break;
  }

  return (
    <button
      className={`${styleClasses}
      rounded-[8px] text-button py-[12.5px]
      desktop:py-[18.5px] px-[32px] focus:outline-hidden focus:ring-3
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
