"use client";

import React from "react";
import Link from "next/link";
import NowULogo from "@/assets/now-u-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { AppStoreBadge, PlayStoreBadge } from "./AppStoreBadge";
import Image from "next/image";
import {
  aboutRoutes,
  legalAndInfoRoutes,
  mainRoutes,
  type NamedRoute,
} from "@/model/Routes";

export const socialMediaLinks = [
  {
    key: 1,
    icon: faInstagram,
    link: "https://www.instagram.com/now_u_app",
  },
  {
    key: 2,
    icon: faFacebookF,
    link: "https://www.facebook.com/nowufb",
  },
  {
    key: 3,
    icon: faXTwitter,
    link: "https://twitter.com/now_u_app",
  },
  {
    key: 4,
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/company/now-u",
  },
];

export const Footer = (): JSX.Element => {
  return (
    <div className="bg-cream">
      <div className="px-16 py-10 justify-center max-w-screen-2xl w-full flex flex-col gap-2 mx-auto">
        <div className="flex flex-col gap-6 min-[952px]:flex-row min-[952px]:justify-between min-[952px]:items-center">
          {/* Logo + Sectioned links */}
          <div className="">
            {/* now-u Logo */}
            <Link href="/">
              <Image
                className="mx-auto min-[952px]:mx-0 h-5 w-auto"
                src={NowULogo}
                alt="now-u"
              />
            </Link>

            {/* Sectioned Links */}
            <div className="my-4 flex flex-col gap-4 sm:flex-row sm:gap-16 sm:justify-center min-[952px]:justify-start">
              <FooterLinkSection title="Links" routes={mainRoutes} />
              <FooterLinkSection title="About now-u" routes={aboutRoutes} />
              <FooterLinkSection title="Terms" routes={legalAndInfoRoutes} />
            </div>
          </div>

          <div className="flex flex-col gap-1 -translate-y-4">
            <div className="flex justify-center min-[952px]:justify-end my-3 space-x-8">
              {socialMediaLinks.map((socialMedia) => {
                return (
                  <Link
                    className="p-2"
                    key={socialMedia.key}
                    href={socialMedia.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="hover:cursor-pointer hover:text-orange"
                      size="2xl"
                      icon={socialMedia.icon}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="self-center min-[952px]:self-end">
              <div className="flex flex-row items-center w-72 gap-2">
                <AppStoreBadge />
                <PlayStoreBadge />
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-500">
          Community Interest Company (12709184) and Charitable Incorporated
          Organisation (1196568)
        </p>
      </div>
    </div>
  );
};

const FooterLinkSection = ({
  title,
  routes,
}: {
  title: string;
  routes: NamedRoute[];
}): React.ReactNode => {
  return (
    <div>
      <h4 className="text-gray-500">{title}</h4>
      <ul className="list-none">
        {routes.map((route) => (
          <li key={route.text} className="p-0">
            <Link className="hover:underline" href={route.to}>
              <div>{route.text}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// TODO: Make sure footer goes to end of the page on 'Get in Touch' page
