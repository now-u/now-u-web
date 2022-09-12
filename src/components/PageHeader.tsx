import React from "react";

import { Button } from "./Button";

interface TitleBodyButtonProps {
  title: string;
  body: string[];
  buttonRequired: boolean; // For no button, set equal to false
  buttonText: string; // For no button, set equal to ''
}

// TODO: Remove below interface and use spread of above interface with image property addon
interface ImageSectionHeaderProps {
  title: string;
  body: string[];
  buttonRequired: boolean; // For no button, set equal to false
  buttonText: string; // For no button, set equal to ''
  image: string;
}

export const TitleText = (props: { text: string }): JSX.Element => {
  return <h1 className="text-2xl pb-3 font-bold "> {props.text} </h1>;
};

// Same as BodyText but accepts a string, not a list
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

export const TitleBodyButton = (props: TitleBodyButtonProps): JSX.Element => {
  return (
    <div className="max-w-3xl text-center px-20 mb-10 md:mb-4">
      <TitleText text={props.title} />
      <BodyText text={props.body} />
      {props.buttonRequired ? (
        <Button buttonText={props.buttonText} onClick={() => {}} /> // TODO: Add button link
      ) : (
        <div></div>
      )}
    </div>
  );
};

export const PageHeader = (props: TitleBodyButtonProps): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 py-20">
      <TitleBodyButton
        title={props.title}
        body={props.body}
        buttonRequired={props.buttonRequired}
        buttonText={props.buttonText}
      />
    </div>
  );
};

export const PageSection = (props: ImageSectionHeaderProps): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row place-content-around bg-cream place-items-center px-5 py-20">
      <TitleBodyButton
        title={props.title}
        body={props.body}
        buttonRequired={props.buttonRequired}
        buttonText={props.buttonText}
      />
      <img
        className=" w-2/3 md:w-1/2 lg:w-1/3 p-10 xl:p-1"
        src={props.image}
        alt=""
      />
    </div>
  );
};
