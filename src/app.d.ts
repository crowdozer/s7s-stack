import { EdgeAuthState } from './types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			/**
			 * S7S Comment:
			 * This is where we tell Svelte-Kit that every request
			 * will include custom data..
			 *
			 * If you add something here, implement it at:
			 * `src/hooks.server.ts`
			 *
			 * You can see examples in:
			 * `src/lib/server/hooks`
			 */

			// ---

			/**
			 * The user's Authentication state, available on the
			 * Edge with no database calls. Information is limited,
			 * but auth state is known.
			 */
			user: EdgeAuthState;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
