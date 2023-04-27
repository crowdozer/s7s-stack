import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';
import tailwindcss from 'tailwindcss';
import postcss from 'postcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({
			style: {
				// tailwindcss support and postcss support
				plugins: [tailwindcss(), postcss()],
			},
		}),
	],

	extensions: ['.svelte'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		files: {
			assets: 'static',
		},
		alias: {
			$web: 'src/lib/web',
			$api: 'src/lib/api',
			$server: 'src/lib/server',
			'~': 'src/',
		},
	},
};

export default config;
