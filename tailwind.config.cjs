/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'left-[152px]',
    'left-[256px]',
    'left-[370px]'
  ],
  theme: {
    colors: {
      'primary-nav': '#003C56',
      'primary-dropdown': '#044b7a',
      'primary-button': '#0675c4',
      'li-hover': '#e9f0f5',
      'transparent': 'transparent',
      'white': 'white',
      'black': 'black',
      'green': 'green',
      'grey': '#f2f2f2'
    },
    extend: {
      boxShadow: {
        'dropdown': '0 20px 100px -5px rgba(0,0,0,0.27)'
      },
    }
  },

  plugins: [],
}
