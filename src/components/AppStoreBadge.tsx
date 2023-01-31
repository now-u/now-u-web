import React from "react";
import GoogleStoreBadgeSVG from "@/assets/google-store.svg";
import AppleStoreBadgeSVG from "@/assets/apple-store.svg";
import { APPLE_STORE_URL, GOOGLE_STORE_URL } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";

interface AppStoreData {
  asset: string;
  link: string;
}

export const GooglePlayBadgeType: AppStoreData = {
  asset: GoogleStoreBadgeSVG,
  link: GOOGLE_STORE_URL,
};

export const AppleStoreBadgeType: AppStoreData = {
  asset: AppleStoreBadgeSVG,
  link: APPLE_STORE_URL,
};

type AppStore = "AppleStore" | "GooglePlayStore";
const appStoreDataMap: Record<AppStore, AppStoreData> = {
    AppleStore: {
        asset: AppleStoreBadgeSVG,
        link: APPLE_STORE_URL,
    },
    GooglePlayStore: {
        asset: GoogleStoreBadgeSVG,
        link: GOOGLE_STORE_URL,
    }
}

export function AppStoreBadge (props: { store: AppStore, border?: boolean }): JSX.Element {
    const { asset, link } = appStoreDataMap[props.store]
    return (
        <Link href={link}>
            <Image
              src={asset}
              alt="download app from apple store"
              className={props.border === true ? "border-4 border-white rounded-lg bg-white" : ""}
              fill
            />
        </Link>
    );
};
