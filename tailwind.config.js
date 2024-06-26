/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'name' : ['"Playwrite ES Deco"', 'cursive'],
        'alt' : ['"Playwrite NG Modern"', 'cursive'],
      }
    },
  },
  plugins: [],
}

