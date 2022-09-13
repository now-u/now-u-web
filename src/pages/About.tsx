import React from "react";

import {
  TitleBodyButton,
  PageHeader,
  PageSection,
} from "@/components/PageHeader";
import Elgars from "@/assets/images/elgars.png";
import { CircularPortraitGrid } from "@/components/CircularPortraitGrid";
import { IconRow } from "@/components/IconRow";
import { icons } from "./Home";

export const About = (): JSX.Element => {
  return (
    <div>
      <PageHeader
        title="About Us"
        body={[
          "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        ]}
        buttonRequired={false}
        buttonText=""
      />
      <PageSection
        title="Our Story"
        image={Elgars}
        body={[
          "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        ]}
        buttonRequired={false}
        buttonText=""
      />
      <div className="flex flex-col md:flex-row py-20 px-10">
        <div className="flex-1 my-auto">
          <TitleBodyButton
            title="Meet the Team"
            body={[
              "Aenean interdum varius ultrices.",
              "Aenean interdum varius ultrices.",
            ]}
            buttonRequired={true}
            buttonText="Meet the Team"
          />
        </div>
        <div className="flex-1">
          <CircularPortraitGrid />
        </div>
      </div>
      <IconRow iconList={icons} />
    </div>
  );
};
