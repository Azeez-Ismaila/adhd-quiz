/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        smallheight:{raw:"(max-height: 680px)"},
      }
    },
  },
  plugins: [],
};
