import { Header } from "@/components/Header";
import React from "react";
import { PartnerCard } from "@/app/collaborations/PartnerCard";
import { apiClient, type Organisation } from "@/services/api";

const PartnersPage = async (): Promise<JSX.Element> => {
  async function getOrganizations(): Promise<Organisation[]> {
    const getPartners = apiClient
      .path("/organisations/")
      .method("get")
      .create();
    const response = await getPartners(undefined);

    if (!response.ok) {
      console.error("Failed to fetch partners");
      return [];
    }
    return response.data;
  }
  const partners = await getOrganizations();

  return (
    <>
      <title>now-u | Collaborations</title>

      <div className="text-center">
        <Header title="Collaborations" />
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
