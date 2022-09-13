import React from "react";
import { Button } from "../components/Button";

import { TitleBodyButton } from "@/components/PageHeader";
import { PartnerGrid, partners } from "@/components/PartnerGrid";
import { IconRow, icons } from "@/components/IconRow";

export const Home = (): JSX.Element => {
  return (
    <div className="grid place-items-center">
      <IconRow iconList={icons} />
      <TitleBodyButton
        title="Meet our partners"
        body={["Aenean interdum varius ultrices.", "Ut at egestas lorem."]}
        buttonRequired={false}
        buttonText=""
      />
      <PartnerGrid partnersList={partners} />
      <Button buttonText="View All" onClick={() => {}} />
    </div>
  );
};
