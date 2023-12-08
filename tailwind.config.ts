import { Orelega_One } from 'next/font/google';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //     'map': "url('/img/map.png')",
      //   },
        // fontFamily: {
        //   font: ['var(--font-orelega_One)'],
        // },
      },
      fontFamily : {
        'orelega': ['Orelega One', 'sans-serif'],
        'questrial': ['Questrial', 'sans-serif'],
      },
    },
  plugins: [],
}
export default config
