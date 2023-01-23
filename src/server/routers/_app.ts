import { mailchimpClient, MAILCHIMP_LIST_ID } from "@/services/mailchimp";
import { z } from "zod";
import { procedure, router } from "../trpc";

export const appRouter = router({
  submit: procedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      try {
        await mailchimpClient.addListMember(MAILCHIMP_LIST_ID, {
          email_address: input.email,
          status: "subscribed",
        });
        return {
          ok: true,
        };
      } catch (e) {
        console.log(e);
        return {
          ok: false,
        };
      }
    }),
});

export type AppRouter = typeof appRouter;
