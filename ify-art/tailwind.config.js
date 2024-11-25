/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //add the sans : Inter Font family to tailwindcss
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
    },
  },
  },
  plugins: [],
}