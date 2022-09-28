import React from 'react'

import { SubtitleText, TitleText } from '@/components/Text'

interface IconTileProps {
  icon: string
  title: string
  subtitle: string
}

const IconTile = (props: IconTileProps): JSX.Element => {
  return (
    <div className="text-center py-5 md:py-0">
      <img src={props.icon} className='w-1/4 md:w-1/2 m-auto' />
      <TitleText text={props.title} />
      <SubtitleText text={props.subtitle} />
    </div>
  )
}

export const IconRow = (props: { iconList: IconTileProps[] }): JSX.Element => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:gap-x-10 lg:gap-x-20 xl:gap-x-32 justify-around px-5 lg:px-20 w-full">
      {props.iconList.map((icon, index) => (
        <IconTile
        key={index}
          icon={icon.icon}
          title={icon.title}
          subtitle={icon.subtitle}
        />
      ))}
    </div>
  )
}
