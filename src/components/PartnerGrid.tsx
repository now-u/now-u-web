import React from "react";

import Elgars from "@/assets/images/elgars.png";

interface PartnerTileProps {
  image: string;
  link: string;
}

// Most Valuable Partners (MVPs) should be at start of this list so are shown to mobile users
export const partners = [
  { image: Elgars, link: "https://uk.linkedin.com/in/james-elgar-768501170" },
  { image: Elgars, link: "https://uk.linkedin.com/in/james-elgar-768501170" },
  { image: Elgars, link: "https://uk.linkedin.com/in/james-elgar-768501170" },
  { image: Elgars, link: "https://uk.linkedin.com/in/james-elgar-768501170" },
  { image: Elgars, link: "https://uk.linkedin.com/in/james-elgar-768501170" },
  { image: Elgars, link: "https://uk.linkedin.com/in/james-elgar-768501170" },
  { image: Elgars, link: "https://uk.linkedin.com/in/james-elgar-768501170" },
  { image: Elgars, link: "https://uk.linkedin.com/in/james-elgar-768501170" },
];

const PartnerTile = (props: PartnerTileProps): JSX.Element => {
  return <img src={props.image} alt="" className="wmax" />;
};

export const PartnerGrid = (props: {
  partnersList: PartnerTileProps[];
}): JSX.Element => {
  return (
    <div>
      <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-4 justify-items-center lg:px-60 p-5">
        {props.partnersList.slice(0, 4).map((partner) => (
          <PartnerTile image={partner.image} link={partner.link} />
        ))}
      </div>
      <div className="hidden md:grid md:grid-cols-4 md:grid-rows-1 gap-4 justify-items-center lg:px-60 p-5">
        {props.partnersList.slice(4, 8).map((partner) => (
          <PartnerTile image={partner.image} link={partner.link} />
        ))}
      </div>
    </div>
  );
};
