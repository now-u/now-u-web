import React from "react";
import fs from "fs";
import md from "markdown-it";


export default async function Page(): Promise<JSX.Element> {
  const cookiePolicyFile = fs.readFileSync(`src/app/info/cookie-policy/cookie-policy.md`, "utf-8");

  return (
    <>
      <title>{`now-u | Cookie Policy`}</title>

      <div className="prose mx-auto my-20">
        <h1>Cookie Policy</h1>
        <div id={"cookie-cookie-policy"} dangerouslySetInnerHTML={{ __html: md().render(cookiePolicyFile)}} />
      </div>
    </>
  );
}
