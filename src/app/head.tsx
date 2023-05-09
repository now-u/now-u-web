import React from "react";
import GAnalytics from "@/components/GAnalytics";
import YMetrica from '@/components/YMetrica';

export default function Head(): JSX.Element {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <GAnalytics />
      <YMetrica />
    </>
  );
}
