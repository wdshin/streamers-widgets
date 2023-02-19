/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather Sans', 'sans-serif'],
      },
      colors: {
        primary: '#6563DB',
        'primary-300': '#7F7EDD',
        'primary-500': '#6563DB',
        'primary-900': '#353470',
        secondary: '#ff6f61',
      },
    },
  },
  plugins: [],
}
