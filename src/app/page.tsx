import React from "react";
import { LinkButton } from "../components/Button";

import { SectionBody } from "@/components/Header";

import { HeaderText, SubtitleText, TitleText } from "@/components/Text";

import { PartnerGrid } from "@/components/PartnerGrid";
import { IconRow } from "@/components/IconRow";
import ExploreScreenImage from "@/assets/graphics/explore_screen.png";
import CausesGlobe from "@/assets/graphics/causes_globe.png";
import LoveGlobe from "@/assets/graphics/love_globe.png";

import TickIcon from "@/assets/graphics/tick_icon.png";
import ClipboardIcon from "@/assets/graphics/clipboard_icon.png";
import GlobeIcon from "@/assets/graphics/globe_icon.png";

import Image from "next/image";

import { AppStoreBadge } from "@/components/AppStoreBadge";
import { Newsletter } from "@/components/Newsletter";

const icons = [
  {
    icon: TickIcon,
    title: "Choose a cause",
    subtitle:
      "Download the app and discover our 6 causes. Choose the ones that mean the most to you.",
  },
  {
    icon: ClipboardIcon,
    title: "Take action",
    subtitle:
      "From signing a petition to spreading the world, take action for your causes in simple but impactful ways.",
  },
  {
    icon: GlobeIcon,
    title: "Shape a better world",
    subtitle:
      "The more actions you take, the bigger impact we make. Support your chosen social and environmental causes, and help change the world.",
  },
];

function Home(): JSX.Element {
  return (
    <div className="grid place-items-center">
      <div className="bg-gradient-to-b from-gradlight w-full to-graddark flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
        <div className="order-2 md:order-1 w-full">
          <div className="text-center mt-3 md:mt-0 md:text-start pb-5 flex flex-col items-center">
            <div className="w-96 mb-3">
              <HeaderText text="It’s time to change together" />
            </div>
            <div className="w-4/5">
              <SubtitleText text="Download the app to discover simple, meaningful and effective ways to support causes that you care about." />
            </div>
          </div>
          <div className="flex justify-center md:justify-start pt-4 mb-5 md:mb-0">
            <div className="w-36 h-12 md:w-60 md:h-20 relative mr-3">
              <AppStoreBadge store="AppleStore" border/>
            </div>
            <div className="w-36 h-12 md:w-60 md:h-20 relative">
              <AppStoreBadge store="GooglePlayStore" border/>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full">
          <Image
            className="w-2/3 md:w-full lg:w-1/2 pb-5 xl:p-1 m-auto"
            src={ExploreScreenImage}
            alt="explore screenshot"
          />
        </div>
      </div>
      <div className="py-5 md:py-20 xl:py-32">
        <IconRow iconList={icons} />
      </div>
      <div className="bg-cream w-full flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
        <div className="order-2 md:order-1 text-center pb-5 md:w-1/2">
          <TitleText text="Explore our causes" />
          <div className="w-2/3 m-auto">
            <SubtitleText text="Support the social and environmental causes that mean the most to you. Our causes align with the United Nations Sustainable Development Goals, from Health and Wellbeing to Equality and Human Rights." />
          </div>
          <LinkButton buttonText="View Causes" href="/causes" />
        </div>
        <Image
          className="order-1 m-auto md:order-2 w-2/3 md:w-1/3 lg:w-1/4 pb-5 xl:p-1"
          src={CausesGlobe}
          alt="causes graphic"
        />
      </div>
      <div className="angled-divider bg-slate-100 w-full flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
        <Image
          className="w-2/3 m-auto md:w-1/2 lg:w-1/3 pb-5 xl:p-1"
          src={LoveGlobe}
          alt="love graphic"
        />
        <div className="text-center pb-5 md:w-1/2">
          <TitleText text="Our mission" />
          <div className="w-2/3 m-auto">
            <SubtitleText text="Our mission is to inform, involve and inspire people to help tackle some of the world’s most pressing social and environmental issues, in partnership with charities." />
          </div>
          <LinkButton buttonText="Learn more" href="/about" />
        </div>
      </div>
      <div className="mt-20 flex flex-col place-items-center">
        <div className="w-1/3">
          <SectionBody
            title="Meet The Partners"
            body={[
              "We work with charities doing amazing work across the world. Want to find out more about partnering with now-u?",
              "Download our partnership guide here or get in touch!",
            ]}
          />
        </div>
        {/* @ts-expect-error Server Component */}
        <PartnerGrid />
        <LinkButton buttonText="View All" href="/" />
      </div>
      <Newsletter />
    </div>
  );
}

export default Home;
