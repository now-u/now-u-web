import React from 'react'
import { Route } from '@/utils/constants'
import { Link } from 'react-router-dom'
import { } from '@heroicons/react/24/outline'
import NowULogo from '@/assets/now-u-logo.svg'
import { navigation as headerNavigation, NamedRoute } from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, IconDefinition, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { AppleStoreBadgeType, AppStoreBadge, GooglePlayBadgeType } from './AppStoreBadge'

const navigation: NamedRoute[] = [
  ...headerNavigation,
  { text: 'FAQ', to: Route.HOME }
]

const socialMediaLinks: Array<{ icon: IconDefinition, link: string }> = [
  {
    icon: faInstagram,
    link: 'https://google.com'
  },
  {
    icon: faFacebookF,
    link: 'https://google.com'
  },
  {
    icon: faTwitter,
    link: 'https://google.com'
  },
  {
    icon: faLinkedinIn,
    link: 'https://google.com'
  }
]

export const Footer = (): JSX.Element => {
  return (
    <div className="bg-cream w-full px-5 py-5">
        <img
          className="hidden h-5 w-auto lg:block"
          src={NowULogo}
          alt="now-u"
        />
        <div className="flex justify-between">
            <div className="divide-x-2 divide-current">
                { navigation.map(route => <Link className="px-5 first:pl-0" key={route.text} to={route.to}> { route.text } </Link>) }
            </div>
            <div className="flex space-x-8">
              { socialMediaLinks.map(socialMedia => {
                return (
                  <FontAwesomeIcon size="2xl" icon={socialMedia.icon} key={socialMedia.link}/>
                )
              })
              }
            </div>
        </div>
        <div>
            <p>Registered charity number: 000000</p>
            <div>
            { [GooglePlayBadgeType, AppleStoreBadgeType].map(type => {
              return <div className='w-20' key={type.link}> <AppStoreBadge type={type} /> </div>
            })
            }
            </div>
        </div>
    </div>
  )
}
