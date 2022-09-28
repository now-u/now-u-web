import React from 'react'
import { Button } from '../components/Button'

import { SectionBody } from '@/components/Header'

import { HeaderText, SubtitleText } from '@/components/Text'

import { PartnerGrid, partners } from '@/components/PartnerGrid'
import { IconRow } from '@/components/IconRow'
import ExploreScreenImage from '@/assets/graphics/explore_screen.png'
import CausesGlobe from '@/assets/graphics/causes_globe.png'
import LoveGlobe from '@/assets/graphics/love_globe.png'

import TickIcon from '@/assets/graphics/tick_icon.png'
import ClipboardIcon from '@/assets/graphics/clipboard_icon.png'
import GlobeIcon from '@/assets/graphics/globe_icon.png'

import {
  AppStoreBadges
} from '@/components/AppStoreBadge'
import { Newsletter } from '@/components/Newsletter'

const icons = [
  {
    icon: TickIcon,
    title: 'Choose a cause',
    subtitle:
      'Download the app and discover our 6 causes. Choose the ones that mean the most to you.'
  },
  {
    icon: ClipboardIcon,
    title: 'Take action',
    subtitle:
      'From signing a petition to spreading the world, take action for your causes in simple but impactful ways.'
  },
  {
    icon: GlobeIcon,
    title: 'Shape a better world',
    subtitle:
      'The more actions you take, the bigger impact we make. Support your chosen social and environmental causes, and help change the world.'
  }
]

export const Home = (): JSX.Element => {
  return (
    <div className="grid place-items-center">
      <div className="bg-gradient-to-b from-gradlight w-full to-graddark flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
        <div className="order-2 md:order-1">
          <div className="text-center md:text-start pb-5">
            <HeaderText text="It’s time to change together" />
            <SubtitleText text="Download the app to discover simple, meaningful and effective ways to support causes that you care about." />
          </div>
          <div className="flex justify-center md:justify-start pt-4 mb-5 md:mb-0">
            <AppStoreBadges />
          </div>
        </div>
        <img
          className="order-1 md:order-2 w-2/3 md:w-1/2 lg:w-1/3 pb-5 xl:p-1"
          src={ExploreScreenImage}
          alt=""
        />
      </div>
      <div className="py-5 md:py-20 xl:py-32">
        <IconRow iconList={icons} />
      </div>
      <div className="bg-cream w-full flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
        <div className="order-2 md:order-1 text-center pb-5 md:w-1/2">
          <HeaderText text="Explore our causes" />
          <SubtitleText text="Support the social and environmental causes that mean the most to you. Our causes align with the United Nations Sustainable Development Goals, from Health and Wellbeing to Equality and Human Rights." />
          <Button buttonText="View Causes" onClick={() => {}} />
        </div>
        <img
          className="order-1 md:order-2 w-2/3 md:w-1/2 lg:w-1/3 pb-5 xl:p-1"
          src={CausesGlobe}
          alt=""
        />
      </div>
      <div className="bg-slate-100  w-full flex flex-col md:flex-row justify-around place-items-center px-5 py-20">
        <img
          className="w-2/3 md:w-1/2 lg:w-1/3 pb-5 xl:p-1"
          src={LoveGlobe}
          alt=""
        />
        <div className="text-center pb-5 md:w-1/2">
          <HeaderText text="Our mission" />
          <SubtitleText text="Our mission is to inform, involve and inspire people to help tackle some of the world’s most pressing social and environmental issues, in partnership with charities." />
          <Button buttonText="Learn more" onClick={() => {}} />
        </div>
      </div>
      <div className="my-10 flex flex-col place-items-center">
        <div>
          <SectionBody
            title="Meet The Partners"
            body={[
              'We work with charities doing amazing work across the world. Want to find out more about partnering with now-u?',
              'Download our partnership guide here or get in touch!'
            ]}
          />
        </div>
        <PartnerGrid partners={partners} />
        <Button buttonText="View All" onClick={() => {}} />
      </div>
      <div className="md:px-20">
        <Newsletter />
      </div>
    </div>
  )
}
