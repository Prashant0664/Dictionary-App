/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,jsx,html,js}"],
  theme: {
    extend: {},
    screens:{
      'xl':{'max':'1200px'},
      'lg':{'max':'991px'},
      'md':{'max':'767px'},
      'sm':{'max':'550px'},
      'xsm':{'max':'357px'},
      'xxsm':{'max':'360px'}
    }
  },
  plugins: [],
} 