import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

import { TitleText, SubTitleText } from "./PageHeader";

interface IconTileProps {
  icon: IconDefinition;
  title: string;
  subtitle: string;
}
// mx-5 md:mx-10 lg:mx-12
const IconTile = (props: IconTileProps): JSX.Element => {
  return (
    <div className="text-center py-5 md:py-0">
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
    <div className="flex flex-col md:flex-row justify-around my-10 px-5 lg:px-20 w-full">
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
