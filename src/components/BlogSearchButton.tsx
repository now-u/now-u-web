"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { PagefindSearchResultData, PagefindSearchResultRow } from "@/lib/pagefind/PagefindSearchResult";
import { Dialog } from "@headlessui/react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BlogSearchButton(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindSearchResultRow[]>([]);

  useEffect(() => {
    async function loadPagefind(): Promise<void> {
      if (typeof window.pagefind === "undefined") {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ "./pagefind/pagefind.js"
            );
          window.pagefind.options({
            baseUrl: "/blog"
          })
        } catch (e) {
          window.pagefind = { search: () => ({ results: [] }) };
        }
      }
    }

    loadPagefind().catch(console.error);
  }, []);

  const resultsRef = useRef<HTMLDivElement>(null);

  async function handleSearch(): Promise<void> {
    if (window.pagefind !== false) {
      const search = await window.pagefind.debouncedSearch(query);
      setResults(search.results);
      if (resultsRef.current !== null) {
        resultsRef.current.scrollTop = 0; // scroll the search results to top.
      }
    }
  }

  return <>
    <div
      id="search"
      className="w-full max-w-xl mx-auto p-2 sticky top-0 z-20 cursor-pointer select-none"
      onClick={() => {
        setIsOpen(true);
      }}>
      <div
        className="pl-1 pr-2 py-2 rounded-lg bg-neutral-50 bg-opacity-90 hover:bg-neutral-100 backdrop-blur border border-slate-300 w-full flex flex-row gap-2">
        <div className="flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>

        <div className="text-slate-700">
          Search Blogs...
        </div>
      </div>
    </div>

    <Dialog open={isOpen} onClose={() => {
      setIsOpen(false);
    }} className="relative z-50">
      <div
        className="drop-shadow-lg bg-black bg-opacity-20 fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-prose rounded-lg bg-white shadow-lg">
          {/* Title bar */}
          <div className="flex flex-row justify-between pt-4 px-4">
            <Dialog.Title className="text-neutral-900">Search Blogs</Dialog.Title>
            <FontAwesomeIcon
              className="text-neutral-400 hover:cursor-pointer hover:text-neutral-700 antialiased"
              size="lg"
              icon={faCircleXmark}
              onClick={() => { setIsOpen(false) }}
            />
          </div>
          <hr className="border-neutral-200 my-2 mx-2" />
          {/* Search input */}
          <div className="px-2">
          <input
            className="w-full p-2 border rounded-lg text-md"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e): void => {
              setQuery(e.target.value);
            }}
            onInput={handleSearch}
            autoFocus
          />
          </div>
          {/* Search Results with h: 5 * 60 + 48 */}
          <div id="results" ref={resultsRef} className="mt-2 h-[348px] overflow-y-scroll scroll-auto">
            <Result key="12"
                    result={
              {
                id: "hello",
                data: async (): Promise<PagefindSearchResultData> => {
                  return {
                    meta: { title: "Hello" },
                    url: '',
                    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }
                }
              }} />
            {results.map((result: PagefindSearchResultRow, index) => (
              <Result key={result.id} result={result} />
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>


  </>;
}

export function Result({ result }: { result: PagefindSearchResultRow }): React.ReactElement {
  const [data, setData] = useState<PagefindSearchResultData | null>(null);

  React.useEffect(() => {
    async function fetchData(): Promise<void> {
      if (result.data !== undefined) {
        const data = await result.data();
        setData(data);
      }
    }

    fetchData().catch(console.error);
  }, [result]);

  if (data === undefined || data === null) {
    return (<></>);
  }

  return (
    <Link href={data.url.replace(/\.html$/, '')}>
      <div className="px-4 py-2">
      {
        data.meta !== undefined ?
          <h3 className="font-bold underline">{data.meta?.title}</h3> :
          <h3>Untitled</h3>
      }

      <p className="text-neutral-400 line-clamp-2" dangerouslySetInnerHTML={{ __html: data.excerpt }} />
      </div>
      <hr className="ml-4" />
    </Link>
  );
}