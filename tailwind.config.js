/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-bg': 'rgba(238, 238, 238, 1)',
      },
    },
  },
  plugins: [],
}
