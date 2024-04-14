import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          'custom-NavBarGreen': '#A6B646',
          'custom-HistoryBackgroundGreen': '#567534',
          'custom-yellow': '#D6DF3D',
          'custom-white' : '#F4F4F4',
        },
      },
      fontFamily : {
        'orelega': ['Orelega One', 'sans-serif'],
        'questrial': ['Questrial', 'sans-serif'],
      },
      
    },
  plugins: [],
}
export default config
