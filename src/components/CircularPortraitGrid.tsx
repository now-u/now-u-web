import React from "react";

import Elgars from "@/assets/images/elgars.png";

interface CircularPortrait {
  image: string;
  name: string;
  role: string;
}

const portraits = [
  { image: Elgars, name: "J&L", role: "Cult Leaders" },
  { image: Elgars, name: "J&L", role: "Cult Leaders" },
  { image: Elgars, name: "J&L", role: "Cult Leaders" },
  { image: Elgars, name: "J&L", role: "Cult Leaders" },
  { image: Elgars, name: "J&L", role: "Cult Leaders" },
  { image: Elgars, name: "J&L", role: "Cult Leaders" },
];

const CircularPortraitTile = (props: {
  portrait: CircularPortrait;
}): JSX.Element => {
  return (
    <div>
      <img
        className="rounded-full w-3/4 m-auto"
        src={props.portrait.image}
        alt="Circular Portrait Image"
      />
      <h2 className="font-bold">{props.portrait.name}</h2>
      <h3>{props.portrait.role}</h3>
    </div>
  );
};

export const CircularPortraitGrid = (): JSX.Element => {
  return (
    <div className="grid grid-rows-2 grid-cols-3 text-center">
      {portraits.map((portrait) => (
        <CircularPortraitTile portrait={portrait} />
      ))}
    </div>
  );
};
