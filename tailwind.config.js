/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    height: {
      'd-screen': 'calc(100vh - 68px)'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
      forms: true,
      tooltips: true
  }),
  ],
}

