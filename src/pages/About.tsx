import React from 'react'

import { HeaderSubtitle, SectionBody } from '@/components/Header'

import { BodyText, TitleText } from '@/components/Text'

import { TeamGrid } from '@/components/TeamGrid'
import { IconRow } from '@/components/IconRow'

import { Button } from '@/components/Button'

import {
  AppStoreBadges
} from '@/components/AppStoreBadge'

import { Newsletter } from '@/components/Newsletter'
import { openExternalLink } from '@/utils/router'

import Elgars from '@/assets/images/elgars.png'

import OrganisationGraphic from '@/assets/graphics/organisation_graphic.png'
import PhoneIcon from '@/assets/graphics/phone_icon.png'
import LoudspeakerIcon from '@/assets/graphics/loudspeaker_icon.png'
import LightbulbIcon from '@/assets/graphics/lightbulb_icon.png'

const icons = [
  {
    icon: PhoneIcon,
    title: '1. Download the app',
    subtitle:
      'Download the now-u app and start supporting causes you care about, through impactful actions that suit you.'
  },
  {
    icon: LoudspeakerIcon,
    title: '2. Spread the word!',
    subtitle:
      'Help us change the world for the better by sharing our work on social media, and telling your family and friends.'
  },
  {
    icon: LightbulbIcon,
    title: '3. Support us',
    subtitle:
      'Support us to improve our impact by suggesting charities and campaigns.'
  }
]

export const About = (): JSX.Element => {
  return (
    <div className="grid place-items-center">
      <HeaderSubtitle
        title="About Us"
        subtitle="Our app connects you with impactful actions you can take to help tackle pressing social and environmental issues. We aspire to become the new model of collective action and altruism, bringing people together to create a world of good. "
      />
      <div className="flex flex-col lg:flex-row place-content-around bg-cream place-items-center px-10 py-10">
        <div className="md:w-3/4 lg:w-1/2 xl:w-1/3">
          <SectionBody
            title="Our Story"
            body={[
              'Founded by brother and sister, James and Lizzie Elgar, in April 2020, now-u was inspired by the acts of kindness and solidarity that were seen all over the world during the Covid-19 pandemic.',
              'Our founders noticed that many people wanted to take action to help others during these difficult times, but weren’t sure how.',
              'They decided to create a platform to empower everyone to support causes they care about, and the charities working on the front lines of global issues.'
            ]}
          />
        </div>
        <img
          className="order-1 md:order-2 w-2/3 md:w-1/2 lg:w-1/3 xl:p-1"
          src={Elgars}
          alt=""
        />
      </div>
      <div className="bg-slate-100  w-full flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
      <img
          className="w-2/3 md:w-1/2 lg:w-1/3 pb-5 xl:p-1"
          src={OrganisationGraphic}
          alt=""
        />
        <div className="text-center pb-5 lg:w-1/2 xl:w-1/3">
          <TitleText text="Our charity journey" />
          <BodyText
            text={[
              'now-u started life as a Community Interest Company (CIC), but at the end of 2021, we established the now-u community charity. These two organisations now work together closely under the shared now-u brand.',
              'The CIC remains in place to develop and manage the now-u digital products, whilst the Charitable Incorporated Organisation (CIO) creates charitable campaigns and builds strategic partnerships with selected charities tackling our six now-u charitable causes.',
              'Please get in touch if you have any questions!'
            ]}
          />
          <Button buttonText="Learn more" onClick={() => {}} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-20 px-10 place-items-center">
        <div className="flex-1 order-2 md:order-1 my-auto lg:mx-10 xl:mx-20">
          <SectionBody
            title="Meet The Team"
            body={[
              'now-u has grown into a team of more than (insert figure)  from across the world who support us with everything from web development to marketing.',
              'Want to join us on our journey? Get in touch here to discover volunteering opportunities at now-u.'
            ]}
          />
          <div className="grid place-items-center">
            <Button buttonText="Meet the team" onClick={() => openExternalLink('https://www.linkedin.com/company/now-u/people/')} />
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <TeamGrid />
        </div>
      </div>
      <div className="bg-slate-100 py-10 md:py-20 xl:py-32 flex flex-col place-items-center">
        <TitleText text="How you can help" />
        <div className="py-5">
          <IconRow iconList={icons} />
        </div>
        <div className="flex pt-4 mb-5 md:mb-0">
          <AppStoreBadges />
        </div>
      </div>
      <div className="md:px-20">
        <Newsletter />
      </div>
    </div>
  )
}
