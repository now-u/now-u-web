import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

interface ButtonProps {
  buttonText: string
  href: string | UrlObject
}

export const LinkButton = (props: ButtonProps): JSX.Element => {
  const { href, buttonText } = props
  return (
    <div className="m-10">
        <Link
          className="bg-orange text-black font-bold my-4 py-3 px-4 rounded-lg hover:drop-shadow-xl hover:-translate-y-1 active:translate-y-0 active:drop-shadow-none"
          href={href}
        >
          {buttonText}
        </Link>
    </div>
  )
}
