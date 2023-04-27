/**
 * S3 Comment:
 * This is the web app's tRPC i/o.
 *  
 * `import { trpc } from ...` and have fun! 
 */

import type { Router } from '$api/router';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';
import superjson from 'superjson';

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

const getBaseUrl = () => {
	if (typeof window !== 'undefined') return ''; // browser should use relative url
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${process.env.PORT ?? 5173}`; // dev SSR should use localhost
};

export function trpc(init?: TRPCClientInit) {
	const isBrowser = typeof window !== 'undefined';
	if (isBrowser && browserClient) return browserClient;
	const client = createTRPCClient<Router>({
		transformer: superjson,
		/**
		 * Links used to determine request flow from client to server.
		 *
		 * @see https://trpc.io/docs/links
		 */
		links: [
			loggerLink({
				enabled: (opts) =>
					process.env.NODE_ENV === 'development' ||
					(opts.direction === 'down' && opts.result instanceof Error),
			}),
			httpBatchLink({
				url: `${getBaseUrl()}/trpc`,
			}),
		],
	});
	if (isBrowser) browserClient = client;
	return client;
}


