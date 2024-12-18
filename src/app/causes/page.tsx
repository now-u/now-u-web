import React from "react";

import { Header } from "@/components/Header";
import { Newsletter } from "@/components/Newsletter";
import Image from "next/image";
import { type Cause, getCauses } from "@/services/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Causes | now-u"
}

const CauseTile = (props: { cause: Cause }): JSX.Element => {
  const { header_image: headerImage, title } = props.cause;
  return (
    <div className="max-w-sm bg-cream rounded-lg h-full ">
      <Image
        className="rounded-t-lg h-60 w-full object-cover"
        src={headerImage.url}
        alt={title ?? "cause-image"}
        width={260}
        height={260}
      />
      <div className="p-5">
        <div className="flex items-center justify-start flex-1 space-x-4">
          <h2 className="mb-2 text-xl font-bold tracking-tight">{title}</h2>
        </div>
        <p className="mb-3 font-normal text-left text-gray-600">
          {props.cause.description}
        </p>
      </div>
    </div>
  );
};

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
        <div className="flex flex-col items-center space-y-1 py-20">
          <div
            className="
            grid grid-cols-1 gap-10 mx-2
            md:grid-cols-2 md:mx-10
            "
          >
            {causes?.map((cause) => {
              return <CauseTile key={cause.id} cause={cause} />;
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
