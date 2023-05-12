/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        strongCyan: 'hsi(171, 66%, 44%)',
        lightBlue: 'hsi(233, 100%, 69%)',
        darkGrayishBlue: 'hsi(210, 10%, 33%)',
        grayishBlue: 'hsi(201, 11%, 66%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif']
      }
    },
  },
  plugins: [],
}

