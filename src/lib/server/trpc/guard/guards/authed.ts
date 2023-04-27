import { TRPCError } from '@trpc/server';
import type { ServerTRPCEnforcer } from '~/types';

/**
 * Enfroces that a user is authorized
 */
const authedRequest: ServerTRPCEnforcer = async ({ locals }) => {
	if (!locals.user.isLoggedIn) {
		throw new TRPCError({
			code: 'UNAUTHORIZED',
			message: 'Login Required',
		});
	}
};

export default authedRequest;
