/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        fontInter: ['inter'],
        fontMontserrat: ['montserrat'],
      },
      colors: {
        customGray: '#F7F7F7',
      },
    },
  },
  plugins: [],
};
