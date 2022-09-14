import React from "react";

import {
  BodyText,
  HeaderSubtitle,
  SectionText,
  TitleText,
} from "@/components/Header";
import Elgars from "@/assets/images/elgars.png";
import { TeamGrid } from "@/components/TeamGrid";
import { IconRow } from "@/components/IconRow";
import { icons } from "@/pages/Home";
import { Button } from "@/components/Button";

// Meet the team button appears twice; this is a hacky way of changing the position it appears on the page
// for mobile vs web users.

export const About = (): JSX.Element => {
  return (
    <div>
      <HeaderSubtitle
        title="About Us"
        subtitle="Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      />
      <div className="flex flex-col lg:flex-row place-content-around bg-cream place-items-center px-10 py-10">
        <div className="md:w-3/4 lg:w-1/2">
          <SectionText
            title="Our Story"
            body={[
              "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
              "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            ]}
          />
        </div>

        <img
          className=" w-4/5 md:w-1/2 lg:w-1/3 p-10 xl:p-1"
          src={Elgars}
          alt=""
        />
      </div>
      <div className="flex flex-col lg:flex-row py-20 px-10">
        <div className="flex-1 my-auto lg:m-32">
          <SectionText
            title="Meet The Team"
            body={[
              "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut.",
              "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut.",
            ]}
          />
          <div className="hidden lg:grid place-items-center">
            <Button buttonText="Meet the team" onClick={() => {}} />
          </div>
        </div>
        <div className="flex-1">
          <TeamGrid />
        </div>
        <div className="grid lg:hidden place-items-center">
          <Button buttonText="Meet the team" onClick={() => {}} />
        </div>
      </div>
      <IconRow iconList={icons} />
    </div>
  );
};
