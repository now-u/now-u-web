"use client";

import React, { useRef, useState } from "react";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";


import {
  InfiniteHits,
  InstantSearch,
  SearchBox,
  Highlight,
  // @ts-expect-error type `Hit` is not correctly registered
  type Hit,
} from "react-instantsearch";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import type { BlogPost } from "@/services/api";
import MarkdownIt from "markdown-it";
import { htmlToText } from "html-to-text";

// const { searchClient } = instantMeiliSearch(
//   'https://ms-adf78ae33284-106.lon.meilisearch.io',
//   'a63da4928426f12639e19d62886f621130f3fa9ff3c7534c5d179f0f51c4f303'
// );

const { searchClient } = instantMeiliSearch(
  "https://search.dev.apiv2.now-u.com",
  "aaae5a4efcd407ca2c568ad9bcafda8f5362526a4b14ab8d746df52a7e7415a6",
);

const markdownParser = new MarkdownIt({ html: false });

export function BlogSearchButton(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id="search"
        className="w-full max-w-xl mx-auto p-2 sticky top-16 z-10 cursor-pointer select-none"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="pl-1 pr-2 py-2 rounded-lg bg-neutral-50 bg-opacity-90 hover:bg-neutral-100 backdrop-blur border border-slate-300 w-full flex flex-row gap-2">
          <div className="flex items-center ps-3 pointer-events-none">
            <FontAwesomeIcon
              className="text-neutral-400 hover:cursor-pointer hover:text-neutral-700 antialiased"
              size="lg"
              icon={faMagnifyingGlass}
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>

          <div className="text-slate-700">Search Blogs...</div>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        className="relative z-50"
      >
        <div className="drop-shadow-lg bg-black bg-opacity-20 fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-prose rounded-lg bg-white shadow-lg">
            {/* Title bar */}
            <div className="flex flex-row justify-between pt-4 px-4">
              <Dialog.Title className="text-neutral-900">
                Search Blogs
              </Dialog.Title>
              <FontAwesomeIcon
                className="text-neutral-400 hover:cursor-pointer hover:text-neutral-700 antialiased"
                size="lg"
                icon={faCircleXmark}
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
            <hr className="border-neutral-200 my-2 mx-2" />
            <SearchBar />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

const SearchBar = (): React.ReactNode => {
  const resultsRef = useRef<HTMLDivElement>(null);
  const queryHook: (query: string, hook: (value: string) => void) => void = (
    query,
    search,
  ) => {
    setTimeout(() => {
      search(query);
      if (resultsRef.current !== null) {
        resultsRef.current.scrollTop = 0; // scroll the search results to top.
      }
    }, 1000); // debounce
  };

  return (
    <InstantSearch indexName="blogs" searchClient={searchClient}>
      <SearchBox
        autoFocus
        queryHook={queryHook}
        placeholder="Search blogs..."
        classNames={{
          root: "w-full p-2 ",
          form: "p-2 border rounded-lg text-md flex flex-row",
          input: "w-full focus:outline-none",
          submit: "p-2 hover:bg-slate-100 rounded",
          reset: "hidden",
        }}
      />
      <hr className="border-slate-200 mx-2" />
      <div
        id="results"
        ref={resultsRef}
        className="h-[348px] overflow-y-scroll overflow-x-hidden"
      >
        <InfiniteHits
          hitComponent={HitComponent}
          classNames={{
            root: "px-2",
            disabledLoadPrevious: "hidden",
            loadPrevious:
              "my-2 w-full p-4 rounded text-white bg-amber hover:bg-opacity-80",
            loadMore:
              "my-2 w-full p-4 rounded text-white bg-amber hover:bg-opacity-80",
            disabledLoadMore: "hidden",
            item: "hover:cursor-pointer",
          }}
        />
      </div>
    </InstantSearch>
  );
};

const HitComponent = ({ hit }: Hit<{ hit: BlogPost }>): React.ReactNode => (
  // <article key={hit.id}>
  //   <img src={hit.image} alt={hit.name} />
  //   <h1>{hit.name}</h1>
  //   <p>${hit.description}</p>
  // </article>
  <Link key={hit.id} href={`/blog/${hit.slug}`}>
    <div className="px-2 py-2 flex flex-row justify-between overflow-x-hidden gap-2 hover:bg-neutral-100">
      <div className="flex flex-col items-start overflow-x-hidden">
        <h3 className="font-bold underline overflow-x-hidden">
          <Highlight attribute="title" hit={hit} />
        </h3>

        <p className="text-neutral-400 line-clamp-2 overflow-ellipsis w-full">
          {htmlToText(markdownParser.render(hit.body.substring(0, 300), {}), {
            wordwrap: false,
          })}
          {/* <Highlight className="text-neutral-400 line-clamp-2" attribute="body" hit={hit} /> */}
        </p>
      </div>

      <Image
        className="aspect-video h-[100px] w-[160px] object-cover rounded border"
        src={hit.header_image.url}
        alt="blog header image"
        width={160}
        height={100}
      />
    </div>
    <hr className="" />
  </Link>
);

export default BlogSearchButton;
