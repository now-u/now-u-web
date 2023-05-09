import React from "react";

import { HeaderSubtitle, SectionBody } from "@/components/Header";

import { BodyText, TitleText } from "@/components/Text";

import { TeamGrid } from "@/components/TeamGrid";
import { IconRow } from "@/components/IconRow";

import { LinkButton } from "@/components/Button";

import { AppStoreBadge } from "@/components/AppStoreBadge";

import { Newsletter } from "@/components/Newsletter";

import Elgars from "@/assets/images/elgars.png";

import OrganisationGraphic from "@/assets/graphics/organisation_graphic.png";
import PhoneIcon from "@/assets/graphics/phone_icon.png";
import LoudspeakerIcon from "@/assets/graphics/loudspeaker_icon.png";
import LightbulbIcon from "@/assets/graphics/lightbulb_icon.png";

import Image from "next/image";

const icons = [
  {
    icon: PhoneIcon,
    title: "1. Download the app",
    subtitle:
      "Download the now-u app and start supporting causes you care about, through impactful actions that suit you.",
  },
  {
    icon: LoudspeakerIcon,
    title: "2. Spread the word!",
    subtitle:
      "Help us change the world for the better by sharing our work on social media, and telling your family and friends.",
  },
  {
    icon: LightbulbIcon,
    title: "3. Support us",
    subtitle:
      "Support us to improve our impact by suggesting charities and campaigns.",
  },
];

const About = (): JSX.Element => {
  return (
    <>
      <title>now-u | About Us</title>
      <div className="flex flex-col">
        <HeaderSubtitle
          title="About Us"
          subtitle="Our app connects you with impactful actions you can take to help tackle pressing social and environmental issues. We aspire to become the new model of collective action and altruism, bringing people together to create a world of good. "
        />
        <div className="flex flex-col lg:flex-row place-content-around bg-cream place-items-center px-10 py-10">
          <div className="max-w-screen-2xl flex flex-col md:flex-row justify-around my-10">
            <div className="md:w-3/4 lg:w-1/2 xl:w-1/3">
              <SectionBody
                title="Our Story"
                body={[
                  "Founded by brother and sister, James and Lizzie Elgar, in April 2020, now-u was inspired by the acts of kindness and solidarity that were seen all over the world during the Covid-19 pandemic.",
                  "Our founders noticed that many people wanted to take action to help others during these difficult times, but weren’t sure how.",
                  "They decided to create a platform to empower everyone to support causes they care about, and the charities working on the front lines of global issues.",
                ]}
              />
            </div>
            <Image
              className="order-1 md:order-2 w-2/3 w-full md:w-1/2 lg:w-1/3 p-4 xl:p-10 md:object-cover"
              src={Elgars}
              alt=""
            />
          </div>
        </div>
        <div className="bg-slate-100  w-full flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
          <div className="max-w-screen-2xl flex flex-col md:flex-row items-center justify-around">
            <Image
              className="w-2/3 md:w-1/2 lg:w-1/3 pb-5 xl:p-1"
              src={OrganisationGraphic}
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
              <LinkButton
                buttonText="Get in Touch"
                href={{ pathname: "/get-in-touch" }}
              />
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl flex flex-col md:flex-row py-20 px-10 self-center">
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <SectionBody
              title="Meet the team"
              body={[
                "now-u has grown into a team of more than (insert figure)  from across the world who support us with everything from web development to marketing.",
                "Want to join us on our journey? Get in touch here to discover volunteering opportunities at now-u.",
              ]}
            />
            <LinkButton
              buttonText="Meet the team"
              href={{
                href: "https://www.linkedin.com/company/now-u/people/",
              }}
            />
          </div>
          <div className="md:w-1/2">
            <TeamGrid />
          </div>
        </div>
        <div className="bg-slate-100 py-10 md:py-20 xl:pt-32 flex flex-col place-items-center">
          <TitleText text="How you can help" />
          <div className="py-5">
            <IconRow iconList={icons} />
          </div>
          <div className="flex items-center mt-5 md:justify-start">
            <div className="w-36 h-12 md:w-60 md:h-20 relative mr-3">
              <AppStoreBadge store="AppleStore" />
            </div>
            <div className="w-36 h-12 md:w-60 md:h-20 relative">
              <AppStoreBadge store="GooglePlayStore" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default About;
