/**
 * --------------------------------------------------
 *             PREFACE - READ THIS FIRST
 * --------------------------------------------------
 *
 * You *probably* don't need to edit this file unless:
 *
 * 1. You need to add extra CONTEXT to each REQUEST     (section #1)
 * 2. You need to customize the tRPC SERVER             (section #2)
 * 3. You need to create a custom tRPC PROCEDURE        (section #3)
 *
 * If that sounded foreign, then you can safely leave this file alone =)
 *
 * SUMMARY:
 * This file is a configuration and utility file for tRPC, a strongly typed API
 * layer for backend communication. It provides the means to create contexts for the API,
 * define guards for secure procedures, and handle errors. It also contains several utility
 * types to help you set up and manage guards, request context, and procedure execution.
 *
 * 1. CONTEXT:
 * This section defines the "contexts" available in the backend API.
 * Contexts allow you to access resources like databases or sessions when
 * processing a request. The createContext function returns an object containing
 * the request event and an instance of Prisma (an ORM used to interact with databases).
 *
 * 2. tRPC API:
 * This section initializes the tRPC API, connects the context and transformer,
 * and sets up error handling. The initTRPC function initializes the tRPC API with the
 * context created earlier. The createTRPCRouter function is an export that helps create
 * tRPC routers in the application.
 *
 * 3. tRPC Procedures:
 * This section provides utilities for creating tRPC procedures,
 * guards, and protected procedures. The procedure export allows you to build new
 * queries and mutations for your tRPC API. The guardedProcedure function is used
 * to create protected procedures that require a series of guards to pass before
 * executing the procedure.
 */

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing
 * a request, like the database, the session, etc.
 */

import type { RequestEvent } from '@sveltejs/kit';
import { prisma } from '$server/prisma';
import type { DeepMerge, ResolvedType } from '~/types';

export async function createContext(event: RequestEvent) {
	return {
		event,
		prisma,
	};
}

/**
 * Request context, inferred from createContext()
 *
 * This is a utility type. If your guard modifies
 * request context, you probably need to use this.
 */
export type InferredRequestContext = ResolvedType<ReturnType<typeof createContext>>;

/**
 * Utility type. Merges `Custom` into `request`.
 * You can use this to help set up your Guards.
 */
export type With<Custom> = DeepMerge<InferredRequestContext, Custom>;

/**
 * Utility type. Merges `Custom` into `request.event`
 * You can use this to help set up your Guards.
 */
export type WithEvent<Custom> = With<{
	event: DeepMerge<InferredRequestContext['event'], Custom>;
}>;

/**
 * Utility type. Merges `Custom` into `request.event.locals`
 * You can use this to help set up your Guards.
 */
export type WithLocals<Custom> = WithEvent<{
	locals: DeepMerge<InferredRequestContext['event']['locals'], Custom>;
}>;

/**
 * 2. tRPC API
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */

import { initTRPC } from '@trpc/server';
import { ZodError } from 'zod';
import superjson from 'superjson';

export const t = initTRPC.context<typeof createContext>().create({
	/**
	 * Data transformer. This needs to be the same as the one used on the client
	 */
	transformer: superjson,
	/**
	 * Error handler. If you need to inject custom behavior (logging etc) you
	 * can do it here.
	 */
	errorFormatter({ shape, error }) {
		console.log('❗ a tRPC error has occurred');
		console.error(error);

		return {
			...shape,
			data: {
				...shape.data,
				zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
			},
		};
	},
});

/** @see https://trpc.io/docs/router */
export const createTRPCRouter = t.router;

/**
 * 3. tRPC Procedures
 *
 * This is where all the tRPC server stuff is created and plugged in.
 * The pieces you will need to use are documented accordingly near the end.
 */

// base piece you use to build new queries and mutations on your tRPC API
export const procedure = t.procedure;

/**
 * Utility type - you may find this useful when building Guards.
 */
export type Guard<I> = (ctx: I) => Promise<I>;

/**
 * Protected procedure
 *
 * Runs an array of gaurds against the request, one at a time, in order
 * Request is aborted as soon as one throws
 */
export function guardedProcedure<
	Guards extends Guard<InferredRequestContext>[],
	NextContext = InferredRequestContext,
>(...guards: Guards) {
	const middleware = t.middleware(async ({ ctx, next }) => {
		let context = ctx;

		for (const guard of guards) {
			context = await guard(context);
		}

		return next({
			ctx: context as NextContext,
		});
	});

	return t.procedure.use(middleware);
}

/**
 * A helper to simplify typing guarded procedures
 * Context = the final context available to the application after gaurds execute
 */
export function makeGuardedProcedure<Context = InferredRequestContext>(...guards: any[]) {
	return guardedProcedure<typeof guards, Context>(...guards);
}
