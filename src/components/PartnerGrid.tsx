import React from 'react'

import Elgars from '@/assets/images/elgars.png'

interface Partner {
  id: number
  image: string
  link: string
}

// Most Valuable Partners (MVPs) should be at start of this list so are shown to mobile users
export const partners: Partner[] = [
  { id: 1, image: Elgars, link: 'https://uk.linkedin.com/in/james-elgar-768501170' },
  { id: 2, image: Elgars, link: 'https://uk.linkedin.com/in/james-elgar-768501170' },
  { id: 3, image: Elgars, link: 'https://uk.linkedin.com/in/james-elgar-768501170' },
  { id: 4, image: Elgars, link: 'https://uk.linkedin.com/in/james-elgar-768501170' },
  { id: 5, image: Elgars, link: 'https://uk.linkedin.com/in/james-elgar-768501170' },
  { id: 6, image: Elgars, link: 'https://uk.linkedin.com/in/james-elgar-768501170' },
  { id: 7, image: Elgars, link: 'https://uk.linkedin.com/in/james-elgar-768501170' },
  { id: 8, image: Elgars, link: 'https://uk.linkedin.com/in/james-elgar-768501170' }
]

const PartnerTile = (props: {partner: Partner}): JSX.Element => {
  const partner = props.partner
  return (
    <img src={partner.image} alt="" className="h-44 object-cover object-top" />
  )
}

export const PartnerGrid = (props: {
  partners: Partner[]
}): JSX.Element => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 justify-items-center xl:px-60 p-5">
        {props.partners.slice(0, 4).map((partner) => (
          <PartnerTile key={partner.id.toString()} partner={partner} />
        ))}
      </div>
      <div className="hidden md:grid md:grid-cols-4 md:grid-rows-1 gap-4 justify-items-center xl:px-60 p-5">
        {props.partners.slice(4, 8).map((partner) => (
          <PartnerTile key={partner.id.toString()} partner={partner} />
        ))}
      </div>
    </div>
  )
}
