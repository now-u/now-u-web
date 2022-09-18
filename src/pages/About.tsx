import React from "react";

import { HeaderSubtitle, SectionBody } from "@/components/Header";

import { BodyText, TitleText } from "@/components/Text";

import Elgars from "@/assets/images/elgars.png";
import { TeamGrid } from "@/components/TeamGrid";
import { IconRow } from "@/components/IconRow";
import { icons } from "@/pages/Home";
import { Button } from "@/components/Button";
import {
  AppleStoreBadgeType,
  AppStoreBadges,
  GooglePlayBadgeType,
} from "@/components/AppStoreBadge";
import { Newsletter } from "@/components/Newsletter";

export const About = (): JSX.Element => {
  return (
    <div className="grid place-items-center">
      <HeaderSubtitle
        title="About Us"
        subtitle="Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      />
      <div className="flex flex-col lg:flex-row place-content-around bg-cream place-items-center px-10 py-10">
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3">
          <SectionBody
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
      <div className="bg-slate-100  w-full flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
        <img
          className="w-2/3 md:w-1/2 lg:w-1/3 p-10 xl:p-1"
          src={Elgars}
          alt=""
        />
        <div className="text-center pb-5 lg:w-1/2 xl:w-1/3">
          <TitleText text="Our charity journey" />
          <BodyText
            text={[
              "now-u started life as a Community Interest Company (CIC), but at the end of 2021, we established the now-u community charity. These two organisations now work together closely under the shared now-u brand.",
              "The CIC remains in place to develop and manage the now-u digital products, whilst the Charitable Incorporated Organisation (CIO) creates charitable campaigns and builds strategic partnerships with selected charities tackling our six now-u charitable causes.",
              "Please get in touch if you have any questions!",
            ]}
          />
          <Button buttonText="Learn more" onClick={() => {}} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-20 px-10 place-items-center">
        <div className="flex-1 order-2 md:order-1 my-auto lg:mx-10 xl:mx-20">
          <SectionBody
            title="Meet The Team"
            body={[
              "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut.",
              "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut.",
            ]}
          />
          <div className="grid place-items-center">
            <Button buttonText="Meet the team" onClick={() => {}} />
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <TeamGrid />
        </div>
      </div>
      <div className="bg-slate-100 py-10 md:py-20 xl:py-32 flex flex-col place-items-center">
        <TitleText text="How you can help" />
        <div className="py-5">
          <IconRow iconList={icons} />
        </div>
        <div className="flex pt-4 mb-5 md:mb-0">
          <AppStoreBadges />
        </div>
      </div>
      <div className="md:px-20">
        <Newsletter />
      </div>
    </div>
  );
};
