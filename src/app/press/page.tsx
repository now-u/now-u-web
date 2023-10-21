import { Header } from "@/components/Header";
import { HeaderText, SubtitleText, TitleText } from "@/components/Text";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { apiClient, type PressCoverage } from "@/services/causesApi";
import { PRESS_EMAIL } from "@/utils/constants";

interface PressPack {
  title: string;
  link: string;
}

// TODO Add links
const pressPacks: PressPack[] = [
  {
    title: "About now-u",
	// TODO Probably move press folder to public? And then reference here
    link: "/press/About_now-u.pdf",
  },
  {
    title: "App walk-through",
    link: "/press/App_design_walk_through.pdf",
  },
  {
    title: "About the founders",
    link: "/press/About_the_founders.pdf",
  },
  {
    title: "now-u branding",
    link: "/press/now-u_Brand_Guide.pdf",
  },
  {
    title: "Press release",
    link: "/press/Press_Release_now-u_app_launch.pdf",
  },
];

function PressTile(props: { article: PressCoverage }): JSX.Element {
  const { image_url: imageUrl, title, media_name: mediaName, link } = props.article;

   // TODO Make imageUrl required in api v2
  if (imageUrl == null) {
	throw new Error('imageUrl is null for a media article! This needs to be fixed in staging admin panel');
  }

  return (
    <a href={link} className="bg-white shadow-xl shadow-grey-400 w-full flex flex-col hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
      <div className="relative h-32">
        <Image
          src={imageUrl}
          alt="Blog Image"
          className="object-cover object-top h-20 lg:h-32"
          fill
        />
      </div>
      <div className="p-5">
        <h2 className="font-bold mb-2">{title}</h2>
        <h2 className="font-bold text-xs">{mediaName}</h2>
      </div>
    </a>
  );
}

function PressPackLink(props: { pack: PressPack }): JSX.Element {
  const { title, link } = props.pack;
  return (
    <Link href={link} className="p-5">
      <p className="text-orange underline decoration-black text-xl">
        {" "}
        {title}{" "}
      </p>
    </Link>
  );
}

async function getPressArticles(): Promise<PressCoverage[]> {
  const getArticles = apiClient
    .path("/api/v1/press_coverage")
    .method("get")
    .create();
  const response = await getArticles({});
  if (!response.ok) {
    console.error("Failed to fetch causes data");
    return [];
  }
  return response.data.data;
}

// TODO: Press Pack
export default async function Press(): Promise<JSX.Element> {
  const articles = await getPressArticles();

  return (
    <>
      <title>now-u | Press</title>
      <div>
        <Header title="Press" />
        <div className="bg-cream m-5 sm:m-10 text-center p-4 rounded-lg">
          <Link href={`mailto:${PRESS_EMAIL}`}>
            <HeaderText text={PRESS_EMAIL} />
          </Link>
          <div className="py-5">
            <SubtitleText text="For all press enquiries, contact us on the above link." />
          </div>
        </div>
        <div className="w-full text-center">
          <TitleText text="Press Coverage" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 m-5 sm:m-10">
          {articles.map((article) => (
            <PressTile key={article.id} article={article} />
          ))}
        </div>
        <div className="w-full text-center">
          <TitleText text="Press Pack" />
        </div>
        <div className="flex flex-wrap flex-col items-center justify-center sm:flex-row">
          {pressPacks.map((pack) => (
            <PressPackLink key={pack.title} pack={pack} />
          ))}
        </div>
      </div>
    </>
  );
}
