import { EdgeAuthState } from './types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			/**
			 * S3 Comment:
			 * This is where we tell Svelte-Kit that every request 
			 * *WILL* have auth.
			 * 
			 * If you add something here, implement it at:
			 * `src/hooks.server.ts`
			 * 
			 * You can see examples in:
			 * `src/lib/server/hooks`
			 */
			user: EdgeAuthState;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
