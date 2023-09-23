import { shopRouter } from "~/server/api/routers/shop";
import { marketRouter } from "~/server/api/routers/market";

import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  markets: marketRouter,
  shops: shopRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
