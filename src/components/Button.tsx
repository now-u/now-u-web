import Link from "next/link";
import React, { type MouseEvent } from "react";
import { type UrlObject } from "url";

type ButtonStyle = "text" | "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

interface GenericButtonProps {
  textColor?: string;
  size?: ButtonSize;
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  /// Additional `class` properties
  className?: string;
}

interface LinkButtonProps extends GenericButtonProps {
  title?: string;
  href: string | UrlObject;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}

interface ButtonProps
  extends GenericButtonProps,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  title?: string;
  onClick?: (event: MouseEvent) => void;
  children?: React.ReactNode;
}

const buttonStyleClassName = (
  props: GenericButtonProps,
  defaultButtonStyle: ButtonStyle = "primary",
): string => {
  const {
    textColor,
    size = "medium",
    buttonStyle = defaultButtonStyle,
    disabled,
  } = props;

  const commonBorderedButtonStyle: string = "";
  const inferredTextColor =
    (textColor ?? undefined) !== undefined
      ? textColor
      : buttonStyle === "primary"
        ? "text-white"
        : "text-amber";

  let fontWeight: string;
  let fontSize: string;
  let padding: string;
  let shadow: string;
  const activeStyle: string = "active:brightness-[80%] cursor-pointer";
  let disabledStyle: string = "";
  let backgroundColor: string = "";

  switch (size) {
    case "small": {
      padding = "px-6 py-1";
      fontSize = "text-base";
      fontWeight = "font-normal";
      break;
    }
    case "medium": {
      padding = "px-11 py-2";
      fontSize = "text-lg";
      fontWeight = disabled === true ? "font-normal" : "font-bold";
      break;
    }
    case "large": {
      padding = "px-10 py-3";
      fontSize = "text-lg";
      fontWeight = disabled === true ? "font-normal" : "font-bold";
      break;
    }
  }

  switch (buttonStyle) {
    case "primary": {
      shadow = "";
      disabledStyle = "bg-primary-disabled cursor-none";
      backgroundColor = "bg-amber";
      break;
    }
    case "secondary": {
      shadow = "shadow";
      disabledStyle = "text-secondary-disabled cursor-none";
      backgroundColor = "bg-white";
      break;
    }
    default: {
      shadow = "";
      break;
    }
  }

  if (buttonStyle === "text") {
    return `${inferredTextColor} ${fontSize} ${fontWeight} hover:underline`;
  } else {
    return `text-center ${commonBorderedButtonStyle} ${inferredTextColor} ${fontSize} ${fontWeight} ${backgroundColor} ${padding} ${shadow} rounded-lg ${
      disabled === true ? disabledStyle : activeStyle
    } select-none`;
  }
};

export const LinkButton = (props: LinkButtonProps): JSX.Element => {
  const { title, href, target, children, className, rel } = props;
  return (
    <Link
      rel={rel ?? ""}
      href={href}
      target={target}
      className={`${buttonStyleClassName(props, "text")} ${className ?? ""}`}
    >
      {title}
      {children}
    </Link>
  );
};

export const Button = (props: ButtonProps): React.ReactNode => {
  // Not ideal, need to manually specify members not in html button props:
  const { textColor, size, buttonStyle, disabled, className, ...htmlButtonProps } = props;

  return (
    <button
      className={`${buttonStyleClassName(props, "primary")} ${className ?? ""}`}
      {...htmlButtonProps}
    >
      {props.title}
      {props.children}
    </button>
  );
};
