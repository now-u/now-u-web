import React from "react";
import { Button } from "../components/Button";

import { TitleBodyButton } from "@/components/PageHeader";
import { PartnerGrid } from "@/components/PartnerGrid";
import { IconRow } from "@/components/IconRow";

import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  {
    icon: faInstagram,
    title: "Jadon Smith",
    subtitle: "I'm a just an icon living",
  },
  {
    icon: faInstagram,
    title: "Jadon Smith",
    subtitle: "I'm a just an icon living",
  },
  {
    icon: faInstagram,
    title: "Jadon Smith",
    subtitle: "I'm a just an icon living",
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="grid place-items-center">
      <IconRow iconList={icons} />
      <TitleBodyButton
        title="Meet our partners"
        body={[
          "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        ]}
        buttonRequired={false}
        buttonText=""
      />
      <PartnerGrid />
    </div>
  );
};
