import { Header } from '@/components/Header'
import { SubtitleText } from '@/components/Text'
import React from 'react'

import Elgars from '@/assets/images/elgars.png'

interface PressTileProps {
  image: string
  title: string
  newspaper: string
}
const PressTile = (props: PressTileProps): JSX.Element => {
  return (
    <div className="w-full flex flex-col hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
      <img
        src={props.image}
        alt="Blog Image"
        className="object-cover object-top h-20 lg:h-32"
      />
      <div className="pt-5">
        <h2 className="font-bold">{props.title}</h2>
        <h2 className="font-bold text-xs">{props.newspaper}</h2>
      </div>
    </div>
  )
}

const pressPieces = [
  {
    id: 1,
    image: Elgars,
    title: 'Holidays & Hats with the Elgars',
    newspaper: 'Sevenoaks Chronicle'
  },
  {
    id: 2,
    image: Elgars,
    title: 'Holidays & Hats with the Elgars',
    newspaper: 'Sevenoaks Chronicle'
  },
  {
    id: 3,
    image: Elgars,
    title: 'Holidays & Hats with the Elgars',
    newspaper: 'Sevenoaks Chronicle'
  },
  {
    id: 4,
    image: Elgars,
    title: 'Holidays & Hats with the Elgars',
    newspaper: 'Sevenoaks Chronicle'
  },
  {
    id: 5,
    image: Elgars,
    title: 'Holidays & Hats with the Elgars',
    newspaper: 'Sevenoaks Chronicle'
  },
  {
    id: 6,
    image: Elgars,
    title: 'Holidays & Hats with the Elgars',
    newspaper: 'Sevenoaks Chronicle'
  }
]

// TODO: Press Pack
export const Press = (): JSX.Element => {
  return (
    <div>
      <Header title="Press" />
      <div className="bg-cream m-5 sm:m-10 text-center">
      <h1 className="font-bold text-2xl sm:text-4xl">press@now-u.com</h1>
        <div className="py-5">
          <SubtitleText text="For all press enquiries, contact us on the above link." />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 m-5 sm:m-10">
        {pressPieces.slice(1).map((piece) => (
          <PressTile
            key={piece.id}
            image={piece.image}
            title={piece.title}
            newspaper={piece.newspaper}
          />
        ))}
      </div>
    </div>
  )
}
