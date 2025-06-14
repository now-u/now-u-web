"use client";

import React from "react";
import Image from "next/image";

import NewsletterGraphic from "@/assets/graphics/newsletter_graphic.webp";
import { Button } from "./Button";
import { subscribeToNewsLetter } from "@/actions/mailchimp";
import { useToast } from "./ui/use-toast";

export function Newsletter(): JSX.Element {
  const { toast } = useToast();

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    };

    window.gtag("event", "newsletter_signup", {});

    const response = await subscribeToNewsLetter({ email: target.email.value });
    switch (response.result) {
      case "ADDED":
        toast({
          title: "Success",
          description: "You have successfully subscribed to our newsletter!",
          variant: "default",
        });
        target.email.value = "";
        break;
      case "ALREADY_SUBSCRIBED":
        toast({
          title: "Already Subscribed",
          description: "You are already subscribed to our newsletter!",
          variant: "default",
        });
        target.email.value = "";
        break;
      case "ERROR":
        toast({
          title: "Error",
          description: "An error occurred. Please try again later.",
          variant: "destructive",
        });
        break;
      case "VALIDATION_ERROR":
        toast({
          title: "Error",
          description: "Please enter a valid email",
          variant: "destructive",
        });
        break;
    }
  }

  return (
    <div className="max-w-(--breakpoint-2xl) flex bg-blue md:m-10 py-10 w-full md:w-2/3 items-center flex-col md:flex-row md:justify-between text-left">
      <div className="max-md:w-full">
        <Image
          className="w-48 h-auto"
          src={NewsletterGraphic}
          width={250}
          height={250}
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
              className="placeholder:pl-2 block p-3 mb-4 rounded-md md:mr-4 md:w-2/3 bg-white"
            />
            <div className="w-min mr-8">
              <Button type="submit" textColor="text-oxford-blue">Subscribe</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
