import React from "react";

import { apiClient, Organisation } from "@/services/causesApi";
import { PartnerTile } from './PartnerTile';

async function getPartners(): Promise<Organisation[]> {
  const getPartners = apiClient
    .path("/api/v1/organisations")
    .method("get")
    .create();
  const response = await getPartners({});
  if (!response.ok) {
    console.error("Failed to fetch partners");
    return [];
  }
  return response.data.data;
}

export async function PartnerGrid(): Promise<JSX.Element> {
  const partners = await getPartners();

  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-12 justify-items-center xl:px-60 p-5 overflow-hidden">
        {partners.slice(0, 8).map((partner) => (
          <PartnerTile key={ partner.id.toString() } partner={ partner }/>
        ))}
      </div>
    </div>
  );
}
