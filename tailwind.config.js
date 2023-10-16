/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rope':[ 'Manrope'],
        'poppi':['Poppins']
      },
      colors:{
        'color1':'text-gray-500',
        'color2': 'text-pink-400'
      }
    },
  },
  plugins: [require("daisyui")],
}

