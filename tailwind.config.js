/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        oldLace: '#FDF5E6',
        peru: '#CD853F',
        woodBrown: '#966F33',
        darkWood: '#5C4033',
      },
    },
  },
  plugins: [],
}