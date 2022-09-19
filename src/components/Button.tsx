import React from 'react'

interface ButtonProps {
  buttonText: string
  onClick: () => void
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button
      className="bg-orange text-white font-bold my-4 py-2 px-2 rounded-md hover:drop-shadow-xl hover:-translate-y-1 active:translate-y-0 active:drop-shadow-none"
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  )
}
