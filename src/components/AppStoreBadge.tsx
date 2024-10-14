import React from "react";
import GoogleStoreBadgePNG from "@/assets/google-store.svg";
import AppleStoreBadgeSVG from "@/assets/apple-store.svg";
import { APPLE_STORE_URL, GOOGLE_STORE_URL } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";

export function AppStoreBadge(): React.ReactNode {
  return (
    <Link href={APPLE_STORE_URL} target="_blank" rel="noreferrer" className="select-none">
      <Image
        src={AppleStoreBadgeSVG}
        alt="download app from apple store"
        width={260}
        height={80}
      />
    </Link>
  );
}

export const PlayStoreBadge = () : React.ReactNode => {
  return (
    <Link href={GOOGLE_STORE_URL} target="_blank" rel="noreferrer" className="select-none">
      <Image
        src={GoogleStoreBadgePNG}
        alt="Download App from Play Store."
        width={260}
        height={80}
      />
    </Link>
  );
}
