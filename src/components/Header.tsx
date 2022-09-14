import React from "react";

interface HeaderSubtitleProps {
  title: string;
  subtitle: string;
}

interface HeaderCausesProps {
  title: string;
  body: string[];
}

// ***** Text Components *****
export const TitleText = (props: { text: string }): JSX.Element => {
  return <h1 className="text-2xl pb-3 font-bold "> {props.text} </h1>;
};

export const SubTitleText = (props: { text: string }): JSX.Element => {
  return <p className="text-md">{props.text}</p>;
};

export const BodyText = (props: { text: string[] }): JSX.Element => {
  const paragraphs = props.text.map((paragraph, index) => {
    return (
      <p className="text-md py-2" key={index}>
        {" "}
        {paragraph}{" "}
      </p>
    );
  });
  return <> {paragraphs} </>;
};

// ***** Header Components *****
export const Header = (props: { title: string }): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 py-20">
      <TitleText text={props.title} />
    </div>
  );
};

export const HeaderSubtitle = (props: HeaderSubtitleProps): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 md:px-20 lg:px-64 py-20">
      <TitleText text={props.title} />
      <SubTitleText text={props.subtitle} />
    </div>
  );
};

export const HeaderCauses = (props: HeaderCausesProps): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 md:px-20 lg:px-64 py-20">
      <TitleText text={props.title} />
      <BodyText text={props.body} />
    </div>
  );
};

// ***** Section Components *****

export const SectionText = (props: HeaderCausesProps): JSX.Element => {
  return (
    <div className="text-center pb-5">
      <TitleText text={props.title} />
      <BodyText text={props.body} />
    </div>
  );
};
