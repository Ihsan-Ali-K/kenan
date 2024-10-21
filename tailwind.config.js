/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'red-rose': ['"Red Rose"', 'serif'],
      },
      colors:{
        primary : '#E4F8FF',
        secondary: '#8CDFF9',
        title: " rgba(0, 0, 0, 0.7)",
        button: "rgba(24, 182, 55, 1)"
       
      },
    

    },
  },
  plugins: [],
}

