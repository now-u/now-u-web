import React from "react";
import { Header, SectionBody } from "@/components/Header";
import { BodyText, TitleText } from "@/components/Text";
import { IconRow } from "@/components/IconRow";
import { LinkButton } from "@/components/Button";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { Newsletter } from "@/components/Newsletter";
import Elgars from "@/assets/images/elgars.png";
import PhoneIcon from "@/assets/graphics/phone_icon.png";
import LoudspeakerIcon from "@/assets/graphics/loudspeaker_icon.png";
import LightbulbIcon from "@/assets/graphics/lightbulb_icon.png";

import Image from "next/image";

const icons = [
  {
    icon: PhoneIcon,
    title: "1. Download",
    subtitle:
      "Download the now-u app and start supporting causes you care about, through impactful actions that suit you",
  },
  {
    icon: LoudspeakerIcon,
    title: "2. Share",
    subtitle:
      "Help us change the world for the better by sharing our work on social media, and telling your family and friends",
  },
  {
    icon: LightbulbIcon,
    title: "3. Contribute",
    subtitle:
      "Support us in improving our impact by contributing to campaigns and suggesting new campaigns and charities",
  },
];

const About = (): JSX.Element => {
  return (
    <>
      <title>now-u | About Us</title>
      <div className="flex flex-col text-center">
        <Header
          title="About now&#8288;-&#8288;u"
          body={[
            "now-u is a new non-profit with a mission to inform, involve and inspire people to help tackle some of the world's most pressing social and environmental issues.",
            "We aspire to become the new model of collective action and altruism, connecting you with charitable campaigns and bringing people together to create a world of good."
          ]}
        />
        <div className="flex flex-col lg:flex-row place-content-around bg-cream place-items-center px-5 py-10">
          <div className="md:max-w-screen-md lg:max-w-screen-lg flex flex-col md:flex-row justify-between my-10">
            <div className="md:w-2/4 lg:w-1/2 xl:w-3/5 text-left">
              <SectionBody
                title="Our Story"
                body={[
                  "Founded in April of 2020 by siblings James and Lizzie Elgar, now-u was inspired by the acts of kindness and solidarity seen worldwide during the Covid-19 pandemic.",
                  "Our founders noticed that many people wanted to help others during these difficult times, but lacked routes to do so.",
                  "So, they created a platform to connect people with charities working on the front lines of global issues, empowering everyone to drive lasting change.",
                ]}
              />
            </div>
            <Image
              className="order-1 md:order-2 w-2/3 w-full md:w-1/2 lg:w-1/3 p-4 xl:p-5 md:object-cover"
              src={Elgars}
              alt="Founders of the now-u"
            />
          </div>
        </div>
        <div className="bg-slate-100  w-full flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
          <div className="md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center md:items-start md:text-left justify-around">
              <TitleText text="Our charity journey" />
              <BodyText
                text={[
                  "We started life in 2020 as a Community Interest Company (CIC). Then at the end of 2021, we established the now-u community charity. These two organisations now work together closely as part of now-u.",
                  "The non-profit CIC remains in place to develop and manage now-u’s digital products, while the charity develops our content, runs our campaigns and develops strategic partnerships with other charities.",
                ]}
              />
              <LinkButton
                className="mt-6 md:self-start"
                title="Get in Touch"
                href={{ pathname: "/get-in-touch"}}
                buttonStyle="primary"
              />
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-col md:flex-row py-20 px-10 self-center">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl">
            <SectionBody
              title="Our team"
              body={[
                "The now-u team has grown to include over 40 people from around the world, across a wide range of roles such as software development, graphic design and marketing.",
                "Interested in getting involved? We’d love to hear from you!",
              ]}
            />
            <LinkButton
              title="Meet the team"
              href="https://www.linkedin.com/company/now-u/people/"
              buttonStyle="primary"
              target={"_blank"}
            />
          </div>
        </div>
        <div className="bg-slate-100 py-10 md:py-20 xl:pt-32 flex flex-col place-items-center">
          <TitleText text="How you can help" />
          <div className="py-5 max-w-screen-xl text-center">
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
