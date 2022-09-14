import React from "react";
import { Button } from "../components/Button";

import { TitleBodyButton } from "@/components/PageHeader";
import { PartnerGrid, partners } from "@/components/PartnerGrid";
import { IconRow } from "@/components/IconRow";

import {
  IconDefinition,
  faCheck,
  faClipboardList,
  faEarthAfrica,
} from "@fortawesome/free-solid-svg-icons";

export const icons = [
  {
    icon: faCheck,
    title: "Choose a cause",
    subtitle:
      "Download the app and discover our 6 causes. Choose the ones that mean the most to you.",
  },
  {
    icon: faClipboardList,
    title: "Take action",
    subtitle:
      "From signing a petition to spreading the world, take action for your causes in simple but impactful ways.",
  },
  {
    icon: faEarthAfrica,
    title: "Shape a better world",
    subtitle:
      "The more actions you take, the bigger impact we make. Support your chosen social and environmental causes, and help change the world.",
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="grid place-items-center">
      <IconRow iconList={icons} />
      <TitleBodyButton
        title="Meet our partners"
        body={["Aenean interdum varius ultrices.", "Ut at egestas lorem."]}
        buttonRequired={false}
        buttonText=""
      />
      <PartnerGrid partnersList={partners} />
      <Button buttonText="View All" onClick={() => {}} />
    </div>
  );
};
