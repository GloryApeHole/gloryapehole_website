const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      lightGray: '#f3f3f3',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#15141b',
      white: '#eaebeb',
      originalWhite: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      yellowMustMake: '#f6aa2f',
      mustMakeBlack: '#15141b',
      mustMakeWhite: '#eaebeb',
      balticSea: '#3e3e3e',
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    extend: {
      transitionProperty: {
        height: 'height',
        'max-height': 'max-height',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
