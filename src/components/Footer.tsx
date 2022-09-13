import React from "react";
import { Route } from "@/utils/constants";
import { Link } from "react-router-dom";
import {} from "@heroicons/react/24/outline";
import NowULogo from "@/assets/now-u-logo.svg";
import { navigation as headerNavigation, NamedRoute } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  IconDefinition,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  AppleStoreBadgeType,
  AppStoreBadge,
  GooglePlayBadgeType,
} from "./AppStoreBadge";

const navigation: NamedRoute[] = [
  ...headerNavigation,
  { text: "FAQ", to: Route.HOME },
];

const socialMediaLinks: Array<{ icon: IconDefinition; link: string }> = [
  {
    icon: faInstagram,
    link: "https://google.com",
  },
  {
    icon: faFacebookF,
    link: "https://google.com",
  },
  {
    icon: faTwitter,
    link: "https://google.com",
  },
  {
    icon: faLinkedinIn,
    link: "https://google.com",
  },
];

export const Footer = (): JSX.Element => {
  return (
    <div className="bg-cream w-full px-5 py-5">
      <img
        className="mx-auto md:mx-0 h-5 w-auto mb-5"
        src={NowULogo}
        alt="now-u"
      />
      <div className="flex flex-col">
        <div className="grid grid-cols-2 grid-rows-3 text-center mb-5 md:mb-0 md:flex md:divide-x-2 md:divide-current">
          {navigation.map((route) => (
            <Link className="px-5 md:first:pl-0" key={route.text} to={route.to}>
              {" "}
              {route.text}{" "}
            </Link>
          ))}
        </div>
        <div className="flex justify-center md:justify-end mb-3 space-x-8">
          {socialMediaLinks.map((socialMedia) => {
            return (
              <FontAwesomeIcon
                className="hover:cursor-pointer"
                size="2xl"
                icon={socialMedia.icon}
                key={socialMedia.link}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col text-center md:text-start">
        <div className="flex justify-center md:justify-end pt-4 mb-5 md:mb-0">
          {[GooglePlayBadgeType, AppleStoreBadgeType].map((type) => {
            return (
              <div className="w-20 pl-1" key={type.link}>
                {" "}
                <AppStoreBadge type={type} />{" "}
              </div>
            );
          })}
        </div>
        <p className="text-slate-500">Registered charity number: 000000</p>
      </div>
    </div>
  );
};
