/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'left-[178px]',
    'left-[286px]',
    'left-[404px]'
  ],
  theme: {
    extend: {
      boxShadow: {
        'dropdown': '0 20px 100px -5px rgba(0,0,0,0.27)'
      },
      screens: {
        'xs': '520px'
      }
    }
  },

  plugins: [],
}
