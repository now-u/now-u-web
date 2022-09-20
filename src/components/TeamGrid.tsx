import React from 'react'

import Elgars from '@/assets/images/elgars.png'

interface CircularPortrait {
  image: string
  name: string
  role: string
}

// Most Valuable Players (MVPs) should be at start of this list so are shown to mobile users
const portraits = [
  { id: 1, image: Elgars, name: 'J&L', role: 'Cult Leaders' },
  { id: 2, image: Elgars, name: 'J&L', role: 'Cult Leaders' },
  { id: 3, image: Elgars, name: 'J&L', role: 'Cult Leaders' },
  { id: 4, image: Elgars, name: 'J&L', role: 'Cult Leaders' },
  { id: 5, image: Elgars, name: 'J&L', role: 'Cult Leaders' },
  { id: 6, image: Elgars, name: 'J&L', role: 'Cult Leaders' }
]

const CircularPortraitTile = (props: {
  portrait: CircularPortrait
}): JSX.Element => {
  return (
    <div>
      <img
        className="rounded-full p-2 m-auto"
        src={props.portrait.image}
        alt="Circular Portrait Image"
      />
      <h2 className="font-bold">{props.portrait.name}</h2>
      <h3 className="mb-3">{props.portrait.role}</h3>
    </div>
  )
}

export const TeamGrid = (): JSX.Element => {
  return (
    <div>
      <div className="hidden md:grid md:grid-rows-2 md:grid-cols-3 text-center">
        {portraits.map((portrait) => (
          <CircularPortraitTile key={portrait.id} portrait={portrait} />
        ))}
      </div>
      <div className="md:hidden grid grid-rows-2 grid-cols-2 text-center">
        {portraits.slice(0, 4).map((portrait) => (
          <CircularPortraitTile key={portrait.id} portrait={portrait} />
        ))}
      </div>
    </div>
  )
}
