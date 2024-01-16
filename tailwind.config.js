import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-bg': 'rgba(238, 238, 238, 1)',
        'background-colour': 'var(--bg-colour)',
        'primary-colour': 'var(--primary-colour)',
        'primary-colour-hover': 'var(--primary-colour-hover)',
        'nav-colour': 'var(--nav-colour)',
      },
      backgroundImage: {
        'banner-img': 'var(--banner-img)',
      },
      fontFamily: {
        roboto: ['Roboto', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
