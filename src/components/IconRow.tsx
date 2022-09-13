import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";

import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

import { TitleText, SubTitleText } from "./PageHeader";

interface IconTileProps {
  icon: IconDefinition;
  title: string;
  subtitle: string;
}

export const icons = [
  {
    icon: faInstagram,
    title: "Jadon Smith",
    subtitle: "I'm a just an icon living",
  },
  {
    icon: faInstagram,
    title: "Jadon Smith",
    subtitle: "I'm a just an icon living",
  },
  {
    icon: faInstagram,
    title: "Jadon Smith",
    subtitle: "I'm a just an icon living",
  },
];

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
