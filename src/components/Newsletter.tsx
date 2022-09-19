import React from 'react'
import { Button } from './Button'

export const Newsletter = (): JSX.Element => {
  return (
    <div className="bg-blue  md:m-10 px-3 md:px-32 md:py-10">
      <h2 className="text-xl font-bold text-white py-5">
        Subscribe to our newsletter
      </h2>
      <p className="text-white">
        Stay up to date with the latest campaign and partnership announcements,
        informative blog posts and community updates.
      </p>
      <div className="md:flex">
        <input
          placeholder="Your email address"
          type="text"
          className="h-10 mt-4 mr-4 rounded-md w-2/3 placeholder:pl-2 block "
        />
        <Button buttonText="Submit" onClick={() => {}} />
      </div>
    </div>
  )
}
