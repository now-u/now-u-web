import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faQuestion,
  faHandshakeAngle,
  faNewspaper,
  faHandHoldingDollar,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'

import { Header } from '@/components/Header'

interface ContactTileProps {
  icon: IconDefinition
  email: string
  emailDescription: string
}

interface ContactTileProps {
  icon: IconDefinition
  email: string
  emailDescription: string
}

const ContactTile = (props: ContactTileProps): JSX.Element => {
  return (
    <div className="bg-cream flex p-4 justify-around text-center hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
        <a href={`mailto:${props.email}`}
        >
        <FontAwesomeIcon icon={props.icon} size="3x" />
        <div>
          <h2 className="font-bold mb-2">{props.email}</h2>
          <h3>{props.emailDescription}</h3>
        </div>
      </a>
      </div>
  )
}

const contacts = [
  {
    icon: faQuestion,
    email: 'hello@now-u.com',
    emailDescription:
      'For all other enquiries, leave a message on the above email.'
  },
  {
    icon: faHandshakeAngle,
    email: '(partnership)@now-u.com',
    emailDescription:
      'For all partnership enquiries, leave a message on the above provided email.'
  },
  {
    icon: faNewspaper,
    email: 'press@now-u.com',
    emailDescription:
      'For all press enquiries, leave a message on the above provided email.'
  },
  {
    icon: faHandHoldingDollar,
    email: '(fundraising)@now-u.com',
    emailDescription:
      'For all fundraising enquiries, leave a message on the above provided email.'
  }
]

export const GetInTouch = (): JSX.Element => {
  return (
    <div>
      <Header title="Get in Touch" />
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-10 m-10">
        {contacts.map(({ email, icon, emailDescription }) => (
          <ContactTile
          key = {email}
            icon={icon}
            email={email}
            emailDescription={emailDescription}
          />
        ))}
      </div>
    </div>
  )
}
