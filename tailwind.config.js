/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    "fontFamily": {
      "montserrat": "Montserrat"
    },
    fontSize: {
      'title-small': ['14px', '20px'],
      'headline-large': ['32px', '40px'],
      'body-small': ['10px', '16px'],
      'body-large': ['16px', '24px'],
    },
    colors: {
      'primary': {
        600: '#2E3440',
        500: '#3B4252',
        400: '#434C5E',
      },
      'greyscale': {
        600: '#D8DEE9',
        500: '#E5E9F0',
        400: '#ECEFF4',
      },
      'secondary': {
        600: '#5E81AC',
        500: '#81A1C1',
        400: '#88C0D0',
      },
      'success': '#A3BE8C',
      'error': '#BF616A',
    },
  },
  plugins: [],
}

