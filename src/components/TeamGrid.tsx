import React from "react";

import Elgars from "@/assets/images/elgars.png";

import Image, { type StaticImageData } from "next/image";

interface CircularPortrait {
  image: StaticImageData;
  name: string;
  role: string;
}

// Most Valuable Players (MVPs) should be at start of this list so are shown to mobile users
const portraits = [
  { id: 1, image: Elgars, name: "J&L", role: "People" },
  { id: 2, image: Elgars, name: "J&L", role: "People" },
  { id: 3, image: Elgars, name: "J&L", role: "People" },
  { id: 4, image: Elgars, name: "J&L", role: "People" },
  { id: 5, image: Elgars, name: "J&L", role: "People" },
  { id: 6, image: Elgars, name: "J&L", role: "People" },
];

const CircularPortraitTile = (props: {
  portrait: CircularPortrait;
}): JSX.Element => {
  return (
    <div>
      <Image
        className="rounded-full p-2 m-auto"
        src={props.portrait.image}
        alt="Circular Portrait Image"
      />
      <h2 className="font-bold">{props.portrait.name}</h2>
      <h3 className="mb-3">{props.portrait.role}</h3>
    </div>
  );
};

export const TeamGrid = (): JSX.Element => {
  return (
    <div>
      <div className="hidden md:grid md:grid-rows-2 md:grid-cols-3 text-center">
        {portraits.map((portrait) => (
          <CircularPortraitTile key={portrait.id} portrait={portrait} />
        ))}
      </div>
      <div className="md:hidden grid grid-rows-2 grid-cols-2 text-center">
        {portraits.slice(0, 4).map((portrait) => (
          <CircularPortraitTile key={portrait.id} portrait={portrait} />
        ))}
      </div>
    </div>
  );
};
