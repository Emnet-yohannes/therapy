import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        heroBackground:'#FFABC2',
        headerBG:'#FEF2F5',
        rosePink: '#FC6EAC',
        charcoalGray: '#2B2B2B',
        terracotta: '#A05956',
        blushPink: '#CE93A3',
        mahogany: '#523432',
        pearlWhite: '#FBF1F4',
        skyBlue: '#75B8EE',
        textBlackLight:'#4A4949'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
