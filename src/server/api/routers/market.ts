import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const marketRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.market.findMany();
  }),

  getHead: publicProcedure.query(({ ctx }) => {
    return ctx.db.market.findMany({take: 5});
  }),
});
