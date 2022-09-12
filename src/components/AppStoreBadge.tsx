import React from "react";
import GoogleStoreBadgeSVG from "@/assets/google-store.svg";
import AppleStoreBadgeSVG from "@/assets/apple-store.svg";
import { APPLE_STORE_URL, GOOGLE_STORE_URL } from "@/utils/constants";
import { openExternalLink } from "@/utils/router";

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

export const AppStoreBadge = (props: {
  type: AppStoreBadgeType;
}): JSX.Element => {
  return (
    <div className="hover:cursor-pointer">
      <a onClick={() => openExternalLink(props.type.link)}>
        <img src={props.type.asset} alt="app download from apple store" />
      </a>
    </div>
  );
};
