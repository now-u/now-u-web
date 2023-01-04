import React from 'react'
import { Navbar } from '@/components/Navbar'
import './globals.css'

import { Nunito, Nunito_Sans } from '@next/font/google'
import { Footer } from '@/components/Footer'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito'
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  weight: ['400']
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html className={`${nunito.variable} ${nunitoSans.variable} font-sans`}>
      <head />
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
