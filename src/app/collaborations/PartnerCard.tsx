"use client";
import React, { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Placeholder from "@/assets/graphics/placeholder.webp";
import { LinkButton } from "@/components/Button";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type Organisation } from "@/services/api";

export function PartnerCard(props: { partner: Organisation }): JSX.Element {
  const {
    name,
    description,
    logo,
    website_link: websiteLink,
    instagram_link: instagramLink,
    facebook_link: facebookLink,
    twitter_link: twitterLink,
  } = props.partner;
  const [src, setSrc] = useState<string | StaticImageData>(
    logo.url ?? Placeholder,
  );

  return (
    <div className="flex flex-col justify-start my-12 md:w-2/5 shadow-lg hover:shadow-xl mx-4 border-orangepartners border bg-orangepartners">
      <div className="flex justify-center h-48 bg-white">
        <Image
          src={src}
          onError={() => {
            setSrc(Placeholder);
          }}
          alt={name ?? "partner-logo"}
          width={260}
          height={260}
          className="h-24 object-contain self-center"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col px-2 sm:px-8">
        <h2 className="mt-5 self-center text-2xl pb-3 font-black font-heading">
          {name}
        </h2>
        <p className="md:h-36 overflow-scroll">{description}</p>
        <div className="flex justify-between items-center flex-wrap">
          <ul className="flex self-center my-4 py-6">
            {instagramLink != null ? (
            <li className="px-2">
                <Link href={instagramLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    className="hover:cursor-pointer hover:text-white"
                    size="xl"
                    icon={faInstagram}
                  />
                </Link>
            </li>
            ) : null}
            {facebookLink != null ? (
            <li className="px-2">

                <Link href={facebookLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    className="hover:cursor-pointer hover:text-white"
                    size="xl"
                    icon={faFacebookF}
                  />
                </Link>
            </li>
            ) : null}
            {twitterLink != null ? (
            <li className="px-2">
                <Link href={twitterLink} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    className="hover:cursor-pointer hover:text-white"
                    size="xl"
                    icon={faXTwitter}
                  />
                </Link>
            </li>
            ) : null}
          </ul>
          {websiteLink != null ? (
            <LinkButton
              title={"View website"}
              href={websiteLink}
              target={"_blank"}
              buttonStyle="secondary"
            ></LinkButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}
