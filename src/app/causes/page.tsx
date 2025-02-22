import React from "react";

import { Header } from "@/components/Header";
import { Newsletter } from "@/components/Newsletter";
import { getCauses } from "@/services/api";
import type { Metadata } from "next";
import ContentTile from "@/stories/organisms/ContentTile";

export const metadata: Metadata = {
  title: "Causes | now-u"
}

export default async function CausesPage(): Promise<JSX.Element> {

  const causes = await getCauses();

  return (
    <>
      <div className="flex flex-col text-center">
        <Header
          title="Our Causes"
          body={[
            "Built around the United Nations Sustainable Development Goals (SDGs), our work at now-u focuses on six core causes.",
            "Our causes support the call to action to end poverty and inequality, protect the planet and ensure that all people enjoy health, justice and prosperity.",
          ]}
        />
        <div className="flex flex-col items-center space-y-1 py-[64px]">
          <div
            className="max-w-4xl grid grid-cols-1 gap-[24px] tablet:grid-cols-2 mx-[24px]"
          >
            {causes?.map((cause) => {
              return <ContentTile key={cause.id} src={cause.header_image.url} alt={cause.title ?? "cause-image"} heading={cause.title} body={cause.description} />;
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <Newsletter />
        </div>
      </div>
    </>
  );
}
