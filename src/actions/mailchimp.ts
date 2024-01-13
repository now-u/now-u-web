"use server";

import type * as mailchimp from '@mailchimp/mailchimp_marketing';
import { MAILCHIMP_LIST_ID, mailchimpClient } from "@/services/mailchimp";
import { z } from "zod";

const subscribeInputSchema = z.object({ email: z.string().email() });

export async function subscribeToNewsLetter(
  input: z.infer<typeof subscribeInputSchema>,
): Promise<{ result: 'ADDED' | 'VALIDATION_ERROR' | 'ALREADY_SUBSCRIBED' | 'ERROR' }> {
  console.info('Subscribing user with email=', input.email);
  const result = subscribeInputSchema.safeParse(input);
  if (!result.success) {
    console.error(`Failed to parse email=`, input.email);
    return { result: 'VALIDATION_ERROR' };
  }

  try {
    await mailchimpClient.addListMember(MAILCHIMP_LIST_ID, {
      email_address: input.email,
      status: "subscribed",
    });
    return { result: 'ADDED' };
  } catch (e: any) {
    const error = e.response.body as mailchimp.ErrorResponse;
	if (error.title === "Member Exists") {
		console.info(`User already subscribed with email=`, input.email, error);
		return { result: 'ALREADY_SUBSCRIBED' };
	}
    console.error(`Failed to subscribe user with email=`, input.email, error);
    return { result: 'ERROR' };
  }
}
