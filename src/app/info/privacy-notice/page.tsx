import React from "react";
import fs from "fs";
import md from "markdown-it";

export default async function Page(): Promise<JSX.Element> {
  const privacyNoticeFile = fs.readFileSync(
    `src/app/info/privacy-notice/privacy-notice.md`,
    "utf-8",
  );

  return (
    <>
      <title>{`now-u | Privacy Notice`}</title>

      <div className="prose mx-auto my-20">
        <h1>Privacy Notice</h1>
        <div
          id={"cookie-cookie-policy"}
          dangerouslySetInnerHTML={{ __html: md().render(privacyNoticeFile) }}
        />
      </div>
    </>
  );
}
