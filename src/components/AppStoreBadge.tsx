import React from "react";
import GoogleStoreBadgeSVG from "@/assets/google-store.svg";
import AppleStoreBadgeSVG from "@/assets/apple-store.svg";
import { APPLE_STORE_URL, GOOGLE_STORE_URL } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";

interface AppStoreBadgeType {
  asset: string;
  link: string;
}

export const GooglePlayBadgeType: AppStoreBadgeType = {
  asset: GoogleStoreBadgeSVG,
  link: GOOGLE_STORE_URL,
};

export const AppleStoreBadgeType: AppStoreBadgeType = {
  asset: AppleStoreBadgeSVG,
  link: APPLE_STORE_URL,
};

const AppStoreBadge = (props: { type: AppStoreBadgeType }): JSX.Element => {
  return (
    <div className="hover:cursor-pointer">
      <Link href={props.type.link}>
        <Image
          src={props.type.asset}
          alt="download app from apple store"
          className="border-4 border-white rounded-lg bg-white"
        />
      </Link>
    </div>
  );
};

export const AppStoreBadges = (): JSX.Element => {
  return (
    <div className="flex pt-4 mb-5 md:mb-0">
      {[GooglePlayBadgeType, AppleStoreBadgeType].map((type) => {
        return (
          <div className="w-64 pr-8 mx-4 md:mx-0" key={type.link}>
            {" "}
            <AppStoreBadge type={type} />{" "}
          </div>
        );
      })}
    </div>
  );
};
