import { createTRPCRouter } from '$server/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const router = createTRPCRouter({
	// Extend this with your own routers
});

// export type definition of API
export type Router = typeof router;