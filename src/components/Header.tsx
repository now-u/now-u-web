import React from "react";

import {
  BodyText,
  TitleText,
} from "@/components/Text";

interface HeaderCausesProps {
  title: string;
  body: string[];
}

// ***** Header Components *****
export const Header = (props: {
  title: string;
  subtitle?: string;
  body?: string | string[];
}): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-gradlight to-graddark flex flex-col items-center px-5 py-20 md:px-20 lg:px-32 xl:px-64 gap-6 text-center">
      {/* Title */}
      <h1 className="text-5xl font-black font-heading"> {props.title} </h1>
      {/* Subtitle */}
      {props.subtitle !== undefined && (
        <h2 className="text-3xl font-black font-heading">{props.subtitle}</h2>
      )}
      {/* Body */}
      {props.body !== undefined && (
        <div className="lg:text-lg font-subheading flex flex-col gap-2">
          {typeof props.body === "string" ? (
            <p className="">{props.body}</p>
          ) : (
            props.body.map((paragraph, index) => (
              <p key={`header-body-paragraph-${index}`} className="">{paragraph}</p>
            ))
          )}
        </div>
      )}
    </div>
  );
};

// ***** Section Components *****

export const SectionBody = (props: HeaderCausesProps): JSX.Element => {
  return (
    <div className="pb-5">
      <TitleText text={props.title} />
      <BodyText text={props.body} />
    </div>
  );
};
