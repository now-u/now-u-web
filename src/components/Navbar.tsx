"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/utils/classNames";
import Link from "next/link";
import NowULogo from "@/assets/now-u-logo.svg";
import Image from "next/image";

export interface NamedRoute {
  to: string;
  text: string;
}

export const navigation: NamedRoute[] = [
  { text: "Home", to: "/" },
  { text: "Causes", to: "/causes" },
  { text: "About Us", to: "/about" },
  { text: "Blog", to: "/blog" },
  { text: "Get In Touch", to: "/get-in-touch" },
];

const NavbarLink = (
  props: NamedRoute & { isMobile?: boolean },
): JSX.Element => {
  const { text, to, isMobile } = props;
  const isActive = false;

  return (
    <Link
      key={text}
      href={to}
      className={classNames(
        isActive
          ? "underline underline-offset-2"
          : "hover:bg-blue hover:text-white",
        "px-3 py-2 text-xl font-bold rounded-md font-heading",
        isMobile ?? false ? "block text-base" : "text-sm",
      )}
      aria-current={isActive != null ? "page" : undefined}
    >
      {text}
    </Link>
  );
};

export const Navbar = (): JSX.Element => {
  return (
    <Disclosure as="nav" className="flex flex-col bg-white w-full items-center">
      {({ open }) => (
        <>
          <div className="max-w-screen-2xl flex w-full justify-between">
            <div className="flex w-full h-16 items-center justify-between mx-4 sm:mx-8 lg:mx-10">
              {/* Logo */}
              <div className="flex flex-1 items-center lg:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* Mobile Icon */}
                  <Link href="/">
                    <Image
                      className="block h-5 w-auto lg:hidden"
                      src={NowULogo}
                      alt="now-u logo"
                    />
                    {/* Web Icon */}
                    <Image
                      className="hidden h-8 w-auto lg:block"
                      src={NowULogo}
                      alt="now- u logo"
                    />
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Links */}
              <div className="hidden sm:ml-6 md:block">
                <div className="flex space-x-4">
                  {/* Slice 1 to skip the home link when not on mobile */}
                  {navigation.slice(1).map((item) => (
                    <NavbarLink key={item.to} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="relative md:hidden flex flex-col w-full items-end">
            <div className="absolute bg-white w-full space-y-1 px-2 pt-2 pb-3 text-right border-t-2 border-orange drop-shadow-lg">
              {navigation.map((item) => (
                <NavbarLink key={item.to} isMobile={true} {...item} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
