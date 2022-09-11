/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#FF8800',
        'blue': '#011A43',
        'black': '#17171A',
        'grey': '#6D7181',
        'gradlight': '#FD8824',
        'graddark': '#FFDC79',
      }
    },
  },
  plugins: [],
}
