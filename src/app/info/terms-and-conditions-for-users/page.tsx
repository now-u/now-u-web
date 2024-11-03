import React from "react";
import fs from "fs";
import md from "markdown-it";

export default async function Page(): Promise<JSX.Element> {
  const termsFile = fs.readFileSync(
    `src/app/info/terms-and-conditions-for-users/terms-doc.md`,
    "utf-8",
  );

  return (
    <>
      <title>{`now-u | Terms and Conditions for Users`}</title>

      <div className="max-w-prose prose mx-auto my-20 px-4">
        <div
          id={"terms-and-conditions-for-users"}
          dangerouslySetInnerHTML={{ __html: md().render(termsFile) }}
        />
      </div>
    </>
  );
}
