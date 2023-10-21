import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faHandshake,
  faNewspaper,
  faMoneyBill1,
  type IconDefinition,
} from "@fortawesome/free-regular-svg-icons";

import { Header } from "@/components/Header";

const contacts = [
  {
    icon: faComments,
    email: "hello@now-u.com",
    emailDescription:
      "For all general enquiries",
  },
  {
    icon: faHandshake,
    email: "partnerships@now-u.com",
    emailDescription:
      "For all collaboration enquiries",
  },
  {
    icon: faNewspaper,
    email: "press@now-u.com",
    emailDescription:
      "For all press enquiries",
  },
  {
    icon: faMoneyBill1,
    email: "outreach@now-u.com",
    emailDescription:
      "For all fundraising enquiries",
  },
];

interface ContactTileProps {
  icon: IconDefinition;
  email: string;
  emailDescription: string;
}

interface ContactTileProps {
  icon: IconDefinition;
  email: string;
  emailDescription: string;
}

const ContactTile = (props: ContactTileProps): JSX.Element => {
  return (
    <div className="bg-cream w-full p-4 rounded-xl hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
      <Link href={`mailto:${props.email}`}>
        <div className="flex flex-col sm:flex-row">
          <div className="text-center s:w-32 p-12 object-center stroke-1 text-8xl font-light">
            <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className="text-center max-w-sm m-auto">
            <h2 className="font-bold mb-2">{props.email}</h2>
            <h3>{props.emailDescription}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

const GetInTouch = (): JSX.Element => {
  return (
    <>
      <title>now-u | Get In Touch</title>

      <div
        className="text-center"
      >
      <Header
        title="Get in Touch" />
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-20 m-10">
          {contacts.map(({ email, icon, emailDescription }) => (
            <ContactTile
              key={email}
              icon={icon}
              email={email}
              emailDescription={emailDescription}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
