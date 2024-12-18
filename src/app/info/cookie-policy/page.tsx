import React from "react";
import fs from "fs";
import md from "markdown-it";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | now-u"
}

export default async function Page(): Promise<JSX.Element> {
  const cookiePolicyFile = fs.readFileSync(
    `src/app/info/cookie-policy/cookie-policy.md`,
    "utf-8",
  );

  return (
    <>
      <div className="max-w-prose prose mx-auto my-20 px-4">
        <h1>Cookie Policy</h1>
        <div
          id={"cookie-cookie-policy"}
          dangerouslySetInnerHTML={{ __html: md().render(cookiePolicyFile) }}
        />
      </div>
    </>
  );
}
