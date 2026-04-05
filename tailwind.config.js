/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enable dark mode via class if needed
  theme: {
    extend: {
      colors: {
        rawg: {
          dark: '#151515',
          darker: '#202020',
        }
      }
    },
  },
  plugins: [],
}
