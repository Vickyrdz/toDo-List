const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#d3d3d3",
        slowGray: "#f7f4f4",
        gray: "#9ca3af",
        strongGray: "#7a8089",
        mediumBlue: "#4169e1",
      } 
    },
   
  },
  darkMode: "class",
  plugins: [nextui()],
}

