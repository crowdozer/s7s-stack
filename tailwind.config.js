/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [],
};
