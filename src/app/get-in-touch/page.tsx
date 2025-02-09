import React from "react";

import {
  faComments,
  faHandshake,
  faNewspaper,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";

import { Header } from "@/components/Header";
import { ContactTile } from "./ContactTile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch | now-u"
}

const contacts = [
  {
    icon: faComments,
    email: "hello@now-u.com",
    emailDescription: "For all general enquiries",
  },
  {
    icon: faHandshake,
    email: "partnerships@now-u.com",
    emailDescription: "For all collaboration enquiries",
  },
  {
    icon: faNewspaper,
    email: "press@now-u.com",
    emailDescription: "For all press enquiries",
  },
  {
    icon: faMoneyBill1,
    email: "outreach@now-u.com",
    emailDescription: "For all fundraising enquiries",
  },
];

const GetInTouch = (): JSX.Element => {
  return (
    <>
      <div className="text-center">
        <Header title="Get in Touch" />
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-(--breakpoint-2xl) grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-20 m-10">
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
