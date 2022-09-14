import React from "react";

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button
      className="bg-orange text-white font-bold my-2 py-2 px-2 rounded-md hover:drop-shadow-xl hover:-translate-y-[0.1rem] active:translate-y-[0.2rem] active:drop-shadow-md"
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
};
