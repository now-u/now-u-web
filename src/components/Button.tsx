import Link from "next/link";
import React from "react";
import { type UrlObject } from "url";

interface ButtonProps {
  buttonText: string;
  href: string | UrlObject;
  target?: string;
  variant?: string;
}

export const buttonVariant: Record<string, string> = {
  orange: "bg-orange text-black font-bold py-3 px-4 rounded-lg hover:drop-shadow-xl hover:-translate-y-1 active:translate-y-0 active:drop-shadow-none no-underline",
  white: "bg-white text-black font-bold py-3 px-4 rounded-lg hover:drop-shadow-xl hover:-translate-y-1 active:translate-y-0 active:drop-shadow-none no-underline",
  disabled: "border border-black text-black font-bold py-3 px-4 rounded-lg no-underline opacity-25 cursor-not-allowed",
}

export const buttonStyle =
  "bg-orange text-black font-bold py-3 px-4 rounded-lg hover:drop-shadow-xl hover:-translate-y-1 active:translate-y-0 active:drop-shadow-none no-underline";

export const LinkButton = (props: ButtonProps): JSX.Element => {
  const { href, buttonText, target, variant = 'orange' } = props;
  return (
    <div className="mt-10 mb-10">
      <Link className={buttonVariant[variant]} href={href} target={target}>
        {buttonText}
      </Link>
    </div>
  );
};

export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): JSX.Element => {
  return (
    <button className={buttonStyle} {...props}>
      {props.children}
    </button>
  );
};
