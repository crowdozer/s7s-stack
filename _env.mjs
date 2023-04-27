/**
 * Adapted from T3
 */
import { z } from 'zod';
import dotenv from 'dotenv';

/**
 * Specify your environment variables schema here.
 *
 * Environment variables that do not start with config.kit.env.publicPrefix
 * can be used in server-side code only, and are injected into the bundle
 * at build time. Ensure all referenced environment variables are declared.
 *
 * It is recommended you don't remove, replace, or rename any of these existing
 * values, because they are core pieces used by the stack.
 *
 * If you wish to remove them, search the directory by their name
 * (example: S7S_UPSTASH_REDIS_REST_URL) to discover where they are required.
 *
 * Example:
 * ```js
 * const Schema = z
 * 	.object({
 * 		EXAMPLE_VAR: z.string()
 * 	})
 * ```
 */
const Schema = z.object({
	// Redis Ratelimiting requirements
	S7S_UPSTASH_REDIS_REST_URL: z.string(),
	S7S_UPSTASH_REDIS_REST_TOKEN: z.string(),

	// Clerk requirements
	S7S_CLERK_UNPUBLISHABLE: z.string(),
	S7S_CLERK_PEM: z.string(),
	PUBLIC_S7S_CLERK_PUBLISHABLE: z.string(),

	// Prisma DB requirements
	S7S_PRISMA_URL: z.string(),
});

/**
 * Do not edit below this line
 */

dotenv.config();

const result = Schema.safeParse(process.env);

if (result.success === false) {
	console.error('❌ Invalid environment variables:', result.error.flatten().fieldErrors);
	throw new Error('Invalid environment variables');
}
