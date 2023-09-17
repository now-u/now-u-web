"use client";

import React from "react";
import Link from "next/link";
import NowULogo from "@/assets/now-u-logo.svg";
import { navigation as headerNavigation, NamedRoute } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { AppStoreBadge } from "./AppStoreBadge";

import Image from "next/image";

const navigation: NamedRoute[] = [
  ...headerNavigation,
  { text: "FAQ", to: "/faq" },
  { text: "Press", to: "/press" },
  { text: "Cookie Notice", to: "/info/cookie-policy" },
  { text: "Privacy Notice", to: "/info/privacy-notice" },
];

export const socialMediaLinks = [
  {
    key: 1,
    icon: faInstagram,
    link: "https://google.com",
  },
  {
    key: 2,
    icon: faFacebookF,
    link: "https://google.com",
  },
  {
    key: 3,
    icon: faTwitter,
    link: "https://google.com",
  },
  {
    key: 4,
    icon: faLinkedinIn,
    link: "https://google.com",
  },
];

export const Footer = (): JSX.Element => {
  return (
    <div className="bg-cream w-full flex px-5 py-5 justify-center">
      <div className="max-w-screen-2xl flex w-full">
        <div className="mx-10 mt-5 w-full">
          <Link href="/">
            <Image
              className="mx-auto md:mx-0 h-5 w-auto"
              src={NowULogo}
              alt="now-u"
            />
          </Link>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 text-center mb-5 lg:mb-0 md:flex md:divide-x-2 md:divide-current my-5">
              {navigation.map((route) => (
                <Link
                  className="hover:underline px-5 md:first:pl-0 my-1"
                  key={route.text}
                  href={route.to}
                >
                  {" "}
                  {route.text}{" "}
                </Link>
              ))}
            </div>
            <div className="flex justify-center md:justify-end mb-3 space-x-8">
              {socialMediaLinks.map((socialMedia) => {
                return (
                  <Link
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
          </div>
          <div className="flex flex-col text-center md:text-start">
            <div className="flex justify-center md:justify-end pt-4 mb-5 md:mb-0">
              <div className="flex-col items-center flex sm:flex-row pt-4 gap-2">
                <div className="w-36 h-12 hover:cursor-pointer relative">
                  <AppStoreBadge store="AppleStore" />
                </div>
                <div className="w-36 h-12 hover:cursor-pointer relative">
                  <AppStoreBadge store="GooglePlayStore" />
                </div>
              </div>
            </div>
            <p className="text-slate-500">Registration Number: 12709184</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO: Make sure footer goes to end of the page on 'Get in Touch' page
