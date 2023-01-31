/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,html,css}"],
  theme: {

    extend: {

        animation: {
          'bounce-short': 'bounce 0.4s ease-out 2.5',
          'pulse-short' : 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1)'
        }



  //   fontFamily : {
  //     'dosis': ['dosis', 'sans-serif'] 
  //   },

  //   fontFamily : {

  //     'sofia': ['sofia', 'sans-serif']
  //   },
  
  // }, 
      
    },
  plugins: [



  ],
  }
}
