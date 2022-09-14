import {} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TitleText, SubTitleText } from "./PageHeader";
import {
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface IconTileProps {
  icon: IconDefinition;
  title: string;
  subtitle: string;
}

const IconTile = (props: IconTileProps): JSX.Element => {
  return (
    <div className="text-center py-5 md:py-0">
      <FontAwesomeIcon className="text-orange" size="6x" icon={props.icon} />
      <TitleText text={props.title} />
      <SubTitleText text={props.subtitle} />
    </div>
  );
};

export const IconRow = (props: { iconList: IconTileProps[] }): JSX.Element => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:gap-x-20 lg:gap-x-44 justify-around my-10 px-5 lg:px-20 w-full">
      {props.iconList.map((icon) => (
        <IconTile
          icon={icon.icon}
          title={icon.title}
          subtitle={icon.subtitle}
        />
      ))}
    </div>
  );
};
