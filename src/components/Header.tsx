import React from "react";

import {
  BodyText,
  HeaderText,
  SubtitleText,
  TitleText,
} from "@/components/Text";

interface HeaderSubtitleProps {
  title: string;
  subtitle: string;
}

interface HeaderCausesProps {
  title: string;
  body: string[];
}

// ***** Header Components *****
export const Header = (props: { title: string }): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 py-20">
      <HeaderText text={props.title} />
    </div>
  );
};

export const HeaderSubtitle = (props: HeaderSubtitleProps): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 md:px-20 lg:px-32 xl:px-64 py-20">
      <HeaderText text={props.title} />
      <div className="text-center w-2/3">
        <SubtitleText text={props.subtitle} />
      </div>
    </div>
  );
};

export const HeaderCauses = (props: HeaderCausesProps): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 md:px-20 lg:px-64 py-20">
      <div className="max-w-screen-lg px-5">
        <HeaderText text={props.title} />
        <BodyText text={props.body} />
      </div>
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
