import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

import { TitleText, SubTitleText } from "./PageHeader";

interface IconTileProps {
  icon: IconDefinition;
  title: string;
  subtitle: string;
}

const IconTile = (props: IconTileProps): JSX.Element => {
  return (
    <div className="text-center mx-5 md:mx-10 lg:mx-12">
      <FontAwesomeIcon
        className="bg-gradient-to-r from-pink-500 to-violet-500"
        size="6x"
        icon={props.icon}
      />
      <TitleText text={props.title} />
      <SubTitleText text={props.subtitle} />
    </div>
  );
};

export const IconRow = (props: { iconList: IconTileProps[] }): JSX.Element => {
  return (
    <div className="flex flex-row my-10">
      {props.iconList.map((prop) => (
        <IconTile
          icon={prop.icon}
          title={prop.title}
          subtitle={prop.subtitle}
        />
      ))}
    </div>
  );
};
