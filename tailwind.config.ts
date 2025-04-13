import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
} satisfies Config;
