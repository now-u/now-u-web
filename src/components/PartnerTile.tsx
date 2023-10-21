'use client'
import { type Organisation } from '@/services/causesApi';
import Image, { type StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Placeholder from "@/assets/graphics/placeholder.png";

export const PartnerTile =  (props: { partner: Organisation }): JSX.Element => {
  const partner = props.partner;

  // To handle the case where the partner does not have a logo or logo link is broken
  const [src, setSrc] = useState<string | StaticImageData>(partner.logo_link ?? Placeholder);

  return (
    <div className="p-4">
      <Image
        // TODO Update API types for organisation to always include a logo link
        src={ src }
        onError={() => {
          setSrc(Placeholder)
        }}
        alt={ partner.name ?? 'partner-logo' }
        width={ 500 }
        height={ 500 }
        className="h-44 object-contain object-top"
      />
    </div>

  );
};
