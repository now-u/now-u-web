import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { getFaqs } from "@/services/api";
import { FAQBlock } from "@/app/faq/FAQBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | now-u"
}


async function FAQPage(): Promise<JSX.Element> {
  const faqs = await getFaqs();

  return (
    <>
      <Header title="FAQs" />
      <FAQBlock faqs={faqs} />
      <p className="text-center mb-10 text-3xl w-4/5 self-center">
        Want to ask something else?{" "}
        <Link
          className="text-orange hover:underline"
          href="mailto:hello@now-u.com"
        >
          Get in Touch
        </Link>
      </p>
    </>
  );
}

export default FAQPage;
