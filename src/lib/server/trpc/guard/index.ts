import authedRequest from '$server/trpc/guard/guards/authed';
import type { RequestEvent } from '@sveltejs/kit';
import type { ServerTRPCEnforcer } from '~/types';
import ratelimitedRequest from './guards/ratelimit';

/**
 * Applies various guard enforcers against the request,
 * one at a time, in order
 */
export default async function guardTRPC(
	request: RequestEvent,
	...enforcers: ServerTRPCEnforcer[]
): Promise<void> {
	for (const enforcer of enforcers) {
		await enforcer(request);
	}
}

export { authedRequest, ratelimitedRequest };
