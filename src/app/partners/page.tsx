import { Header } from "@/components/Header";
import React from "react";
import { getPartners } from "@/components/PartnerGrid";
import { PartnerCard } from "@/app/partners/PartnerCard";

const PartnersPage = async (): Promise<JSX.Element> => {
  const partners = await getPartners();

  // TODO change the limit when api is fixed
  const partnersWithLimit = partners.slice(0, 8);

  console.log(partners);

  return (
    <>
      <title>now-u | Partners</title>

      <div className="text-center">
        <Header title="Partners" />
      </div>
      <div className="flex justify-around">
        <div className="flex max-w-screen-xl justify-center flex-wrap gap-8 py-8">
          {partnersWithLimit.map((partner) => (
            <PartnerCard partner={partner} key={partner.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
