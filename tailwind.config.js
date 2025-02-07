/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        AddGris: '#A2A39E',
        AddMarron:'#AF8364',
        tnGrey :'9E9E9E'
      
      }
    },
  },
  plugins: [],
}

