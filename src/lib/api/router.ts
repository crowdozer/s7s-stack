import { createTRPCRouter } from '$server/trpc';
import { usersRouter } from './users';

/**
 * This is the entrypoint for your API...
 * Think of it like your Express Router.
 *
 * Import all of your TRPC routes, and add them here.
 * The keys don't matter, but they're how you'll navigate the API on your front end.
 *
 * You can also nest them if you'd like to break things apart more. Again,
 * think of it like an Express Router.
 */
export const router = createTRPCRouter({
	// Extend this with your own routers
	users: usersRouter,
});

// export type definition of API
export type Router = typeof router;
