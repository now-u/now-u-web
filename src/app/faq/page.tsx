import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FAQ, apiClient } from "@/services/causesApi";
import { FAQBlock } from '@/app/faq/FAQBlock';

async function getFaqs(): Promise<FAQ[]> {
  const getFaqs = apiClient.path("/api/v1/faqs").method("get").create();
  const response = await getFaqs({});
  if (!response.ok) {
    console.error("Failed to fetch faqs");
    return [];
  }
  return response.data.data;
}

async function FAQPage(): Promise<JSX.Element> {
  const faqs = await getFaqs();

  return (
    <>
      <Header title="FAQs" />
      <FAQBlock faqs={ faqs } />
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
