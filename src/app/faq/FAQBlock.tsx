"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { type Faq } from '@/services/api';

export function FAQBlock({ faqs }: { faqs: Faq[] }): JSX.Element {
  return (
    <div className="flex flex-col items-center bg-cream bg-opacity-20 py-20">
        {faqs.map(({ id, question, answer }) => (
          <Disclosure key={id}>
            {({ open}) => (
              <div className="max-w-screen-2xl flex flex-col w-4/5 md:w-1/2">
                <div
                  className="flex flex-col w-full"
                  key={id}>
                  <Disclosure.Button className="flex w-full justify-between border-cream border-t-2 px-4 py-3 mb-2 text-left hover:opacity-60">
                    <span>{question}</span>
                    { open ? '-' : '+' }
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-1000 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-100 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel static className="text-gray-500 flex w-full justify-between rounded-lg px-4 mb-2 text-left text-sm font-medium">
                      {answer}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              </div>
            )}
          </Disclosure>
        ))}
    </div>
  )
}
