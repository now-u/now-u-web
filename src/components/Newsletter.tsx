"use client";

import { trpc } from "@/services/trpc";
import React from "react";
import Image from "next/image";

import NewsletterGraphic from "@/assets/graphics/newsletter_graphic.png";
import { Button } from "./Button";

export function Newsletter(): JSX.Element {
  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    const response = await trpc.submit.mutate({ email: target.email.value });
    if (response.ok) {
      // TODO Show some flashbar or something
      // TODO Maybe set a cookie so that we stop showing hte newsletter signup?
    }
  }

  return (
    <div className="max-w-screen-2xl flex bg-blue md:m-10 py-10 w-full md:w-2/3 items-center flex-col md:flex-row md:justify-between">
      <div className="max-md:w-full">
        <Image
          className="w-48 h-auto"
          src={NewsletterGraphic}
          alt="explore screenshot"
        />
      </div>
      <div className="w-4/5 lg:w-4/6 flex flex-col lg:flex-row">
        <div className="">
          <h2 className="text-3xl font-black text-white py-5 font-heading w-4/5">
            Subscribe to our newsletter
          </h2>
          <p className="text-white max-w-lg w-4/5">
            Stay up to date with the latest campaign and partnership
            announcements, informative blog posts and community updates.
          </p>
          <form
            className="flex flex-col md:flex-row mt-5"
            onSubmit={handleSubmit}
          >
            <input
              id="email"
              placeholder="Your email address"
              type="email"
              required={true}
              className="placeholder:pl-2 block p-3 mb-4 rounded-md md:mr-4 md:w-2/3"
            />
            <div className="w-min mr-8">
              <Button type="submit"> Subscribe </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
