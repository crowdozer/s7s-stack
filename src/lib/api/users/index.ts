import {
	createTRPCRouter,
	authedRequest,
	guardedProcedure,
	ratelimitedRequest,
} from '$server/trpc';
import { z } from 'zod';

/**
 * This is an example to demonstrate back-end code.
 */

export const usersRouter = createTRPCRouter({
	/**
	 * If the user is logged in, return all of their data.
	 */
	getMyData: guardedProcedure(authedRequest, ratelimitedRequest)
		.input(
			z
				.object({
					selectAdmin: z.boolean(),
				})
				.optional(),
		)
		.query(async ({ ctx, input = {} }) => {
			return {
				user: ctx.event.locals.user,
				input: input,
			};

			/**
			 * NOTE: Since you just scaffolded this app, there is no data!
			 * We'll "fake" some data for now.
			 *
			 * "real" implementation below.
			 */

			// const user = await ctx.prisma.user.findFirstOrThrow({
			// 	where: {
			// 		id: ctx.event.locals.user.id,
			// 	},
			// 	select: {
			// 		id: true,
			// 		isAdmin: input.selectAdmin ?? false
			// 	}
			// });

			// return user;
		}),
});

/**
 * If that didn't make sense, let's break it down:
 *
 *
 *
 * 1. `export const usersRouter = createTRPCRouter({`
 *
 * This initializes a new tRPC route. You navigate to it from the web client.
 * The exact path you must navigate depends on how you've nested things.
 *
 *
 *
 * 2. `getMyData:`
 *
 * This defines a new *procedure* within this tRPC route. Procedures are just
 * functions that you're able to call from somewhere else.
 *
 *
 *
 * 3. `getMyData: guardedProcedure(authedRequest)`
 *
 * To define a procedure, you must either use:
 * 1. t.procedure() (`import { t } from "$server/trpc"`)
 * 2. guardedProcedure() (`import { guardedProcedure } from "$server/trpc"`)
 * 3. a custom procedure (see how `guardedProcedure` is implemented to do this)
 *
 * We're using guardedProcedure, which allows us to enforce certain guard clauses
 * - a user being authenticated, rate limiting, or anything else you dream.
 *
 *
 *
 * 3. `.input( z.object({ ... }) )`
 *
 * This part tells tRPC we're expecting data from the web, and what format the
 * data should exist as. If there's a mismatch, an error is thrown automagically!
 * No more headaches doing boilerplate request sanitation.
 *
 *
 *
 * 4. `.query(async ({ ctx, input }) => { ... }`
 *
 * This is where we implement our code. There are two types of tRPC methods:
 * `.query()` and `.mutation()`
 *
 * In general, `queries()` are your GET requests, `mutations()` are your POST requests.
 * Read more: https://github.com/trpc/trpc/discussions/1638
 *
 *
 *
 * 5. `return { ... }`
 *
 * The web client automagically infers the return type of the operation based on this.
 * If you need to send data back to the client, it knows what to expect! =)
 */
