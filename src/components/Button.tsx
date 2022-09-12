import React from "react";

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button
      className="bg-orange text-black font-bold mt-2 py-2 px-2 rounded-md"
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
};
