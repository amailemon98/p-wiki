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
        'newP-red' : '#F73E44',
        'p-beige' : '#F0E0BB',
        'p-black' : '#2C2A2D',
        'p-beige2' : '#D8CF8E',
        'p-beige3' : '#C9BB62',
        'p-white' : '#ececec',
      }
    },
  },
  plugins: [],
}