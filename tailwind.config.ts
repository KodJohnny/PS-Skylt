import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ps-gray': '#4B4A49', // PS Grå - RGB 75 74 73
        'ps-yellow': '#EBBF01', // PS Gul - RGB 235 191 1
        'ps-black': '#12110C', // PS Svart - RGB 18 17 12
      },
      fontFamily: {
        'sans': ['var(--font-brandon)', 'ui-sans-serif', 'system-ui'],
        'heading': ['var(--font-avenir)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
export default config
