/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      palette : {
        primary : { main : 'FF6B6B'},
      },
      colors :{
        'p-blue' : '#1b53ba',
        'p-red' : '#e3350d',
      }
    },
  },
  plugins: [],
}