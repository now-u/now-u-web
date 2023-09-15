/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF8800",
        blue: "#011A43",
        black: "#17171A",
        grey: "#6D7181",
        "light-grey": "#F7F8FC",
        cream: "#FFF3E5",
        gradlight: "#FD8824",
        graddark: "#FFDC79",
        orangepartners: "#FFA033",
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)"],
        heading: ["var(--font-nunito)"],
        subheading: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
