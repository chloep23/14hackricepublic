/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    color:{
      "blue": "#FFFFFF",
    },
    extend: {
      spacing:{
        '100': '48rem',
        '99': '43.5rem',
        '96': '34rem',
        '84': '25.5rem',
        '83': '25rem',
        '81': '21rem',
        '73': '19rem',
        '65': '17rem',
        '62': '15.5rem',
        '22': '5.85rem',
      },
      fontFamily: {
        'start2P': ['start2P']
      }
    },
  },


  plugins: [],
}