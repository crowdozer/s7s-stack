/**
 * S7S Comment:
 * This is where server hooks are defined. This stack uses the
 * Handle hook to inject context into every request.
 *
 * It's fine to extend this behavior, but make sure you define it:
 * `src/app.d.ts`
 *
 * IMPORTANT NOTE:
 * The order of events matters! Handlers apply synchronously.
 */

import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import trpcHandler from '$server/hooks/trpc';
import clerkHandler from '$server/hooks/clerk';

export const handle: Handle = sequence(
	// Auth must happen first
	clerkHandler,
	// tRPC happens second
	trpcHandler,
);
