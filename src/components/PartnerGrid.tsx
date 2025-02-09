import React from "react";

import { getOrganisations } from "@/services/api";
import { PartnerTile } from "./PartnerTile";
import { LinkButton } from "@/components/Button";

export async function PartnerGrid(): Promise<JSX.Element> {
  const partners = await getOrganisations();

  return (
    <div className="max-w-(--breakpoint-xl) flex flex-col items-center gap-4">
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-1 md:gap-3 justify-items-center overflow-hidden">
        {partners.slice(0, 8).map((partner) => (
          <PartnerTile key={partner.id.toString()} partner={partner} />
        ))}
      </div>
      <LinkButton title={"View All"} href={"/collaborations"} buttonStyle="primary" />
    </div>
  );
}
