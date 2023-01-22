'use client'

import { trpc } from '@/services/trpc'
import React from 'react'

export function Newsletter (): JSX.Element {
  async function handleSubmit (event: React.FormEvent<HTMLInputElement>): Promise<void> {
    event.preventDefault()
    const target = event.target as typeof event.target & { email: { value: string } }
    await trpc.submit.mutate({ email: target.email.value })
  }

  return (
    <div className="bg-blue  md:m-10 px-3 md:px-32 md:py-10">
        <h2 className="text-xl font-bold text-white py-5">
            Subscribe to our newsletter
        </h2>
        <p className="text-white">
            Stay up to date with the latest campaign and partnership announcements,
            informative blog posts and community updates.
        </p>
        <form className="md:flex" onSubmit={handleSubmit}>
            <input
                id="email"
                placeholder="Your email address"
                type="email"
                required={true}
                className="h-10 mt-4 mr-4 rounded-md w-2/3 placeholder:pl-2 block "
            />
            <button type="submit"> Subscribe </button>
        </form>
    </div>
  )
}
