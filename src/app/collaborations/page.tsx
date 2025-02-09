import { Header } from "@/components/Header";
import React from "react";
import { PartnerCard } from "@/app/collaborations/PartnerCard";
import { getOrganisations } from "@/services/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collaborations | now-u"
}

const PartnersPage = async (): Promise<JSX.Element> => {

  const partners = await getOrganisations();

  return (
    <>
      <div className="text-center">
        <Header title="Collaborations" />
      </div>
      <div className="flex justify-around">
        <div className="flex max-w-(--breakpoint-xl) justify-center flex-wrap gap-8 py-8">
          {partners.map((partner) => (
            <PartnerCard partner={partner} key={partner.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
