import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Route as PageRoute } from '@/utils/constants'
import { About } from '@/pages/About'
import { Navbar } from '@/components/Navbar'
import { CausesPage } from '@/pages/causes'
import { FAQPage } from '@/pages/FAQ'
import { Footer } from '@/components/Footer'
import { GetInTouch } from './pages/GetInTouch'
import { Blog } from './pages/Blog'
import { Press } from './pages/Press'

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path={PageRoute.HOME} element={<Home />} />
          <Route path={PageRoute.ABOUT} element={<About />} />
          <Route path={PageRoute.CAUSES} element={<CausesPage />} />
          <Route path={PageRoute.BLOG} element={<Blog />} />
          <Route path={PageRoute.GET_IN_TOUCH} element={<GetInTouch />} />
          <Route path={PageRoute.FAQ} element={<FAQPage />} />
          <Route path={PageRoute.PRESS} element={<Press />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
