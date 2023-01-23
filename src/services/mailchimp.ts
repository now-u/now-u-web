import * as mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID!;
export const mailchimpClient = mailchimp.lists;
