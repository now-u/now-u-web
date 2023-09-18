"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Placeholder from "@/assets/graphics/placeholder.png";
import { LinkButton } from "@/components/Button";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Organisation } from "@/services/api";

export function PartnerCard(props: { partner: Organisation }): JSX.Element {
  const {
    name,
    description,
    logo,
    website_link,
    instagram_link,
    facebook_link,
    twitter_link,
  } = props.partner;
  const [src, setSrc] = useState<string | StaticImageData>(
    logo.url ?? Placeholder
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
        />
      </div>
      <div className="flex flex-col px-2 sm:px-8">
        <h2 className="mt-5 self-center text-2xl pb-3 font-black font-heading">
          {name}
        </h2>
        <p className="md:h-36 overflow-scroll">{description}</p>
        <div className="flex justify-between flex-wrap">
          <ul className="flex self-center my-4 py-6">
            <li className="px-2">
              {instagram_link !== null ? (
                <Link href={instagram_link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    className="hover:cursor-pointer hover:text-white"
                    size="xl"
                    icon={faInstagram}
                  />
                </Link>
              ): null}
            </li>
            <li className="px-2">
              {facebook_link  !== null ? (
                <Link href={facebook_link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    className="hover:cursor-pointer hover:text-white"
                    size="xl"
                    icon={faFacebookF}
                  />
                </Link>
              ) : null}
            </li>
            <li className="px-2">
              {twitter_link  !== null ? (
                <Link href={twitter_link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    className="hover:cursor-pointer hover:text-white"
                    size="xl"
                    icon={faTwitter}
                  />
                </Link>
              ) : null}
            </li>
          </ul>
          {website_link !== null ? <LinkButton
            variant={ "white" }
            buttonText={ "View website" }
            href={ website_link }
            target={ "_blank" }
          ></LinkButton> : null}
        </div>
      </div>
    </div>
  );
}