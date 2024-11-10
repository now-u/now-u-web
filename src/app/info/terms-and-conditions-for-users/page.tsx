import React from "react";
import fs from "fs";
import md from "markdown-it";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions for Users | now-u"
}

export default async function Page(): Promise<JSX.Element> {
  const termsFile = fs.readFileSync(
    `src/app/info/terms-and-conditions-for-users/terms-doc.md`,
    "utf-8",
  );

  return (
    <>
      <div className="max-w-prose prose mx-auto my-20 px-4">
        <div
          id={"terms-and-conditions-for-users"}
          dangerouslySetInnerHTML={{ __html: md().render(termsFile) }}
        />
      </div>
    </>
  );
}
