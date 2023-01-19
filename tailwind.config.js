/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,html,css}",
  ],
  theme: {

    extend: {

    fontFamily : {
      'dosis': ['dosis', 'sans-serif'] 
    },

    fontFamily : {

      'sofia': ['sofia', 'sans-serif']
    },
  
  }, 
      
    },
  plugins: [

  ],
}