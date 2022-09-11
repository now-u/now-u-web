import { Route } from "@/utils/constants";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import NowULogo from '@/assets/now-u-logo.svg';
import { navigation as headerNavigation, NamedRoute } from './Header';

const navigation: NamedRoute[] = [
  ...headerNavigation,
  { text: 'FAQ', to: Route.HOME },
]

const FooterLink = (props: FooterRoute & { isMobile?: boolean } ): JSX.Element => {
  const { text, to, isMobile } = props;

  return <Link
    key={text}
    to={to}
  >
    {text}
  </Link>
}

export const Header = (): JSX.Element => {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* Mobile Icon */}
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={NowULogo}
                    alt="now-u"
                  />
                  {/* Web Icon */}
                  <img
                    className="hidden h-5 w-auto lg:block"
                    src={NowULogo}
                    alt="now-u"
                  />
                </div>
              </div>

              {/* Links */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <FooterLink {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <FooterLink isMobile={true} {...item} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
