/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softYellow: "#fcefcd",
        softOrange: "#fc602c",
        softBlue: "#22525a",
      },
    },
  },
  plugins: [],
}