import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'card-vector': 'url("/card-vector.svg")',
				'card-gradient':
					'linear-gradient(180deg, rgba(255, 255, 255, 0.46) 0.1%, rgba(0, 0, 0, 0.8) 100%)',
			},
			boxShadow: {
				'3xl-inner': 'inset 0px 0px 95px 10px rgba(0, 0, 0, 0.3)',
			},
		},

		gray: {
			100: '#f8f8f8',
			200: '#f0f1f1',
			300: '#e9e9e9',
			400: '#e1e2e2',
			500: '#dadbdb',
			600: '#aeafaf',
			700: '#838383',
			800: '#575858',
			900: '#2c2c2c',
		},
	},

	plugins: [],
}
export default config
