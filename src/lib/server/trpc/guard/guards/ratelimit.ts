import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import type { ServerTRPCEnforcer } from '~/types';

// process.env fix for Redis.fromEnv()
import { S3_UPSTASH_REDIS_REST_TOKEN, S3_UPSTASH_REDIS_REST_URL } from '$env/static/private';
import { TRPCError } from '@trpc/server';
process.env.UPSTASH_REDIS_REST_TOKEN = S3_UPSTASH_REDIS_REST_TOKEN;
process.env.UPSTASH_REDIS_REST_URL = S3_UPSTASH_REDIS_REST_URL;

// Create a new ratelimiter, that allows 3 requests per 1 minute
export const ratelimiter = new Ratelimit({
	redis: Redis.fromEnv(),
	limiter: Ratelimit.slidingWindow(6, '1 m'),
	analytics: true,
	/**
	 * Optional prefix for the keys used in redis. This is useful if you want to share a redis
	 * instance with other applications and want to avoid key collisions. The default prefix is
	 * "@upstash/ratelimit"
	 */
	prefix: "@upstash/ratelimit",
});

/**
 * Enforces that the user isn't spamming requests
 */
const ratelimitedRequest: ServerTRPCEnforcer = async ({ locals, getClientAddress }) => {
	const key = locals.user.isLoggedIn
		? // use their userid
		  'user:' + locals.user.id
		: // use their ip address
		  'ip:' + getClientAddress();

	const { success } = await ratelimiter.limit(key);

	if (!success) {
		throw new TRPCError({
			code: 'TOO_MANY_REQUESTS',
			message: 'Rate limited',
		});
	}
};

export default ratelimitedRequest;
