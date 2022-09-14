import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faHandshakeAngle,
  faNewspaper,
  faHandHoldingDollar,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { TitleText } from "@/components/Header";

interface ContactTileProps {
  icon: IconDefinition;
  email: string;
  emailDescription: string;
}

const contacts = [
  {
    icon: faQuestion,
    email: "hello@now-u.com",
    emailDescription:
      "For all other enquiries, leave a message on the above email.",
  },
  {
    icon: faHandshakeAngle,
    email: "(partnership)@now-u.com",
    emailDescription:
      "For all other enquiries, leave a message on the above email.",
  },
  {
    icon: faNewspaper,
    email: "press@now-u.com",
    emailDescription:
      "For all other enquiries, leave a message on the above email.",
  },
  {
    icon: faHandHoldingDollar,
    email: "(fundraising)@now-u.com",
    emailDescription:
      "For all other enquiries, leave a message on the above email.",
  },
];

const ContactTile = (props: ContactTileProps): JSX.Element => {
  return (
    <div className="bg-cream flex p-4 justify-around text-center">
      <FontAwesomeIcon icon={props.icon} size="3x" />
      <div>
        <h2 className="font-bold mb-2">{props.email}</h2>
        <h3>{props.emailDescription}</h3>
      </div>
    </div>
  );
};

export const GetInTouch = (): JSX.Element => {
  return (
    <div>
      <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 py-20">
        <TitleText text="Get in touch" />
      </div>
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-10 m-10">
        {contacts.map((contact) => (
          <ContactTile
            icon={contact.icon}
            email={contact.email}
            emailDescription={contact.emailDescription}
          />
        ))}
      </div>
    </div>
  );
};
