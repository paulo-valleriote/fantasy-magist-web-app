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
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.46) 0.1%, rgba(0, 0, 0, 0.8) 100%)'
      },
      boxShadow: {
        '3xl-inner': 'inset 0px 0px 95px 10px rgba(0, 0, 0, 0.3)'
      }
    },
  },

  plugins: [],
}
export default config
