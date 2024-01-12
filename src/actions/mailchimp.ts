"use server";

import { MAILCHIMP_LIST_ID, mailchimpClient } from "@/services/mailchimp";
import { z } from "zod";

const subscribeInputSchema = z.object({ email: z.string().email() });

export async function subscribeToNewsLetter(
  input: z.infer<typeof subscribeInputSchema>,
): Promise<{ success: boolean }> {
  const result = subscribeInputSchema.safeParse(input);
  if (!result.success) {
    return { success: false };
  }

  try {
    await mailchimpClient.addListMember(MAILCHIMP_LIST_ID, {
      email_address: input.email,
      status: "subscribed",
    });
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}
