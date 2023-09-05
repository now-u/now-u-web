import { Header } from "@/components/Header";
import React from "react";
import { PartnerCard } from "@/app/partners/PartnerCard";
import { newApiClient, Organisation } from "@/services/api";

const PartnersPage = async (): Promise<JSX.Element> => {
  async function getOrganizations(): Promise<Organisation[]> {
    const getPartners = newApiClient
      .path("/organisations")
      .method("get")
      .create();
    const response = await getPartners({});

    if (!response.ok) {
      console.error("Failed to fetch partners");
      return [];
    }
    return response.data;

  }
  const partners = await getOrganizations();

  // TODO change the limit when api is fixed

  return (
    <>
      <title>now-u | Partners</title>

      <div className="text-center">
        <Header title="Partners" />
      </div>
      <div className="flex justify-around">
        <div className="flex max-w-screen-xl justify-center flex-wrap gap-8 py-8">
          {partners.map((partner) => (
            <PartnerCard partner={partner} key={partner.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
