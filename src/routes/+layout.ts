/**
 * S7S Comment:
 * As the root layout server file, code here applies
 * to *every* request.
 *
 * To prehydrate the User auth store for the client,
 * we synchronously initialize and load their Clerk info.
 */

import type { LayoutLoad } from './$types';
import { initialize } from '$web/stores/clerk';

export const load = (async () => {
	/**
	 * Prehydrate the Clerk User store
	 */
	await initialize();

	// We don't need to return any data
	return {
		// ...
	};
}) satisfies LayoutLoad;
