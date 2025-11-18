import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "姓名為必填項"),
          email: z.string().email("請輸入有效的 Email").optional().or(z.literal("")),
          phone: z.string().optional(),
          message: z.string().min(10, "訊息至少需要 10 個字元"),
        })
      )
      .mutation(async ({ input }) => {
        const { createContact } = await import("./db");
        await createContact({
          name: input.name,
          email: input.email || null,
          phone: input.phone || null,
          message: input.message,
        });
        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      const { getAllContacts } = await import("./db");
      return await getAllContacts();
    }),
  }),
});

export type AppRouter = typeof appRouter;
