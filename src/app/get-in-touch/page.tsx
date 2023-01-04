import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faQuestion,
  faHandshakeAngle,
  faNewspaper,
  faHandHoldingDollar,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'

import { Header } from '@/components/Header'

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
        <div className="bg-cream w-full p-4 rounded-xl hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
            <Link href={`mailto:${props.email}`}>
                <div className="flex flex-col sm:flex-row">
                    <div className="text-center s:w-32 p-12 object-center">
                        <FontAwesomeIcon icon={props.icon} size="7x" />
                    </div>
                    <div className="text-center max-w-sm m-auto">
                        <h2 className="font-bold mb-2">{props.email}</h2>
                        <h3>{props.emailDescription}</h3>
                    </div>
                </div>
            </Link>
        </div>
  )
}

const GetInTouch = (): JSX.Element => {
  return (
        <div>
            <Header title="Get in Touch" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-20 m-10">
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
  )
}

export default GetInTouch
