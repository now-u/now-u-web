import { Header } from "@/components/Header";
import { HeaderText, SubtitleText } from "@/components/Text";
import React from "react";

import Elgars from "@/assets/images/elgars.png";

interface PressTileProps {
  image: string;
  title: string;
  newspaper: string;
}
const PressTile = (props: PressTileProps): JSX.Element => {
  return (
    <div className="w-full flex flex-col hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
      <img
        src={props.image}
        alt="Blog Image"
        className="object-cover object-top h-20 lg:h-32"
      />
      <div className="pt-5">
        <h2 className="font-bold">{props.title}</h2>
        <h2 className="font-bold text-xs">{props.newspaper}</h2>
      </div>
    </div>
  );
};

const pressPieces = [
  {
    image: Elgars,
    title: "Holidays & Hats with the Elgars",
    newspaper: "Sevenoaks Chronicle",
  },
  {
    image: Elgars,
    title: "Holidays & Hats with the Elgars",
    newspaper: "Sevenoaks Chronicle",
  },
  {
    image: Elgars,
    title: "Holidays & Hats with the Elgars",
    newspaper: "Sevenoaks Chronicle",
  },
  {
    image: Elgars,
    title: "Holidays & Hats with the Elgars",
    newspaper: "Sevenoaks Chronicle",
  },
  {
    image: Elgars,
    title: "Holidays & Hats with the Elgars",
    newspaper: "Sevenoaks Chronicle",
  },
  {
    image: Elgars,
    title: "Holidays & Hats with the Elgars",
    newspaper: "Sevenoaks Chronicle",
  },
];

// TODO: Press Pack
export const Press = (): JSX.Element => {
  return (
    <div>
      <Header title="Press" />
      <div className="bg-cream m-10 text-center">
        <HeaderText text="press@now-u.com" />
        <div className="py-5">
          <SubtitleText text="For all press enquiries, contact us on the above link." />
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 m-10">
        {pressPieces.slice(1).map((piece) => (
          <PressTile
            image={piece.image}
            title={piece.title}
            newspaper={piece.newspaper}
          />
        ))}
      </div>
    </div>
  );
};
