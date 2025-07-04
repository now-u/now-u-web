import React from "react";
import { LinkButton } from "@/components/Button";
import { SectionBody } from "@/components/Header";
import { HeaderText, SubtitleText, TitleText } from "@/components/Text";
import { PartnerGrid } from "@/components/PartnerGrid";
import { IconRow } from "@/components/IconRow";
import ExploreScreenImage from "@/assets/graphics/explore_screen.webp";
import CausesGlobe from "@/assets/graphics/causes_globe.webp";
import LoveGlobe from "@/assets/graphics/love_globe.webp";
import TickIcon from "@/assets/graphics/tick_icon.webp";
import ClipboardIcon from "@/assets/graphics/clipboard_icon.webp";
import GlobeIcon from "@/assets/graphics/globe_icon.webp";
import Image from "next/image";
import { AppStoreBadge, PlayStoreBadge } from "@/components/AppStoreBadge";
import { Newsletter } from "@/components/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drive Changes | now-u"
}


const icons = [
  {
    icon: TickIcon,
    title: "Choose a cause",
    subtitle:
      "Discover our 6 charitable causes on the now-u app and choose the ones that mean most to you",
  },
  {
    icon: ClipboardIcon,
    title: "Take action",
    subtitle:
      "From signing a petition to volunteering, take action in a wide range of impactful ways",
  },
  {
    icon: GlobeIcon,
    title: "Drive change",
    subtitle:
      "More action drives greater impact.  Join our community helping drive lasting change",
  },
];

function Home(): JSX.Element {
  return (
    <>
      <div className="grid place-items-center">
        <div className="bg-linear-to-b from-gradlight w-full to-graddark flex justify-around">
          <div className="max-w-(--breakpoint-xl) flex flex-col md:flex-row w-full place-items-center py-20 px-5">
            <div className="">
              <div className="text-center mt-3 md:mt-0 md:text-start pb-5 flex flex-col items-center md:items-start">
                <div className="md:w-4/5 mb-3">
                  <HeaderText text="Let’s drive change" />
                </div>
                <div className="w-4/5">
                  <SubtitleText text="Download the now-u app to learn more about important social and environmental issues and to find effective ways to support causes you care about." />
                </div>
              </div>
              <div className="flex flex-col items-center sm:flex-row justify-center md:justify-start pt-4 mb-5 md:mb-0 gap-2">
                  <AppStoreBadge/>
                  <PlayStoreBadge/>
              </div>
            </div>
            <div className="flex order-1 md:order-2 w-2/3 max-md:px-4 sm:mx-8 lg:mx-10">
              <Image
                className="w-full md:w-1/2 pb-5 xl:p-1 m-auto"
                src={ExploreScreenImage}
                width={250} height={250}
                alt="explore screenshot"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="py-5 md:py-20 xl:py-32">
          <IconRow iconList={icons} />
        </div>
        <div className="bg-cream w-full flex flex-col md:flex-row justify-center place-items-center py-20">
          <div className="max-w-(--breakpoint-xl) flex flex-col md:flex-row  px-5 ">
            <div className="order-2 md:order-1 md:w-3/5 flex flex-col gap-2">
              <TitleText text="Explore our causes" />
              <div className="w-4/5">
                <SubtitleText text="Drawing on the United Nations Sustainable Development Goals, we focus on 6 social and environmental causes." />
                <br />
                <SubtitleText text="We work closely with trusted charities across our cause areas to provide informative & engaging learning materials, effective actions and impactful campaigns." />
              </div>
              <LinkButton className="md:self-start mt-6" title="View Causes" href="/causes" buttonStyle="primary"/>
            </div>
            <Image
              className="order-1 m-auto md:order-2 w-2/3 md:w-1/3 lg:w-1/4 pb-5 xl:p-1"
              src={CausesGlobe}
              width={240} height={240}
              loading="lazy"
              alt="causes graphic"
            />
          </div>
        </div>
        <div className="angled-divider bg-slate-100 w-full flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
          <div className="max-w-(--breakpoint-2xl) flex flex-col md:flex-row ">
            <Image
              className="w-2/3 m-auto md:w-1/2 lg:w-1/3 pb-5 xl:p-1"
              src={LoveGlobe}
              width={240} height={240}
              loading="lazy"
              alt="love graphic"
            />
            <div className="pb-5 md:w-1/2 flex flex-col">
              <TitleText text="A new non-profit" />
              <div className="w-4/5">
                <SubtitleText text="At now-u, we aim to empower anyone to take action for causes they care about, in partnership with charities." />
                <br />
                <SubtitleText text="We are made up of two non-profit teams working side by side: one creating our digital products and one developing our campaigns." />
              </div>
              <LinkButton className="mt-6 md:self-start" title="Learn more" href="/about" buttonStyle="primary"/>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col place-items-center text-center">
          <div className="w-2/3 md:w-2/3">
            <SectionBody
              title="Our collaborations"
              body={[
                "We work with a wide range of charities doing amazing work across the world.",
                "Want to find out more about collaborating with us? Get in touch!",
              ]}
            />
          </div>
          <PartnerGrid />
        </div>
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
