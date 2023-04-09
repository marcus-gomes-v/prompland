/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    linearGradientColors: theme => ({
      'rainbow': ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    }),
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        'vibrant-blue': {
          50: '#F2F4FF',
          100: '#E5E9FF',
          200: '#BFC8FF',
          300: '#99A7FF',
          400: '#4A74FF',
          500: '#0051FF',
          600: '#0046E6',
          700: '#0039BF',
          800: '#002C99',
          900: '#001F7D',
        },
        'bright-yellow': {
          50: '#FFFDF3',
          100: '#FFFBE6',
          200: '#FFF5BF',
          300: '#FFEF99',
          400: '#FFE14D',
          500: '#FFC95C',
          600: '#E6B352',
          700: '#BF9143',
          800: '#997033',
          900: '#7D582A',
        },
        'turquoise': {
          50: '#F5FCFF',
          100: '#EAF9FF',
          200: '#CAEEFF',
          300: '#AAF3FF',
          400: '#6AEDFF',
          500: '#21D4FD',
          600: '#1DBFE3',
          700: '#199ABF',
          800: '#137599',
          900: '#0E617D',
        },
      },
    },
  },
  variants: {
    borderWidth: ['hover', 'before'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
