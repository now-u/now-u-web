'use client'

import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '@/utils/classNames'
import Link from 'next/link'
import NowULogo from '@/assets/now-u-logo.svg'
import Image from 'next/image'

export interface NamedRoute {
  to: string
  text: string
}

export const navigation: NamedRoute[] = [
  { text: 'Home', to: '/' },
  { text: 'Causes', to: '/causes' },
  { text: 'About Us', to: '/about' },
  { text: 'Blog', to: '/blog' },
  { text: 'Get In Touch', to: '/get-in-touch' }
]

const NavbarLink = (
  props: NamedRoute & { isMobile?: boolean }
): JSX.Element => {
  const { text, to, isMobile } = props
  const isActive = false

  return (
    <Link
      key={text}
      href={to}
      className={classNames(
        isActive
          ? 'underline underline-offset-2'
          : 'hover:bg-blue hover:text-white',
        'px-3 py-2 text-xl font-bold rounded-md font-heading',
        isMobile ?? false ? 'block text-base' : 'text-sm'
      )}
      aria-current={isActive != null ? 'page' : undefined}
    >
      {text}
    </Link>
  )
}

export const Navbar = (): JSX.Element => {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-10 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open
                    ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      )
                    : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* Mobile Icon */}
                  <Link href='/'>
                    <Image
                      className="block h-8 w-auto lg:hidden"
                      src={NowULogo}
                      alt="now-u logo"
                    />
                    {/* Web Icon */}
                    <Image
                      className="hidden h-5 w-auto lg:block"
                      src={NowULogo}
                      alt="now-u logo"
                    />
                  </Link>
                </div>
              </div>

              {/* Links */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Slice 1 to skip the home link when not on mobile */}
                  {navigation.slice(1).map((item) => (
                    <NavbarLink key={item.to} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavbarLink key={item.to} isMobile={true} {...item} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
