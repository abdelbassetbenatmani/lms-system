import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily:{
        Poppins:["var(--font-family-poppins)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '3xl': '1920px',
        '2xl': '1440px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '480px',
        
      },
      colors: {
        "primary":"#1C1E53",
        "secondary":"#282938",
        "yellow":"#FCD980",
        "grey":"#EEF4FA",
        "blue":"#2405F2"

      }
    },
  },
  plugins: [],
}
export default config
