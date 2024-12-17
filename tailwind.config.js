/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "#FDD90B",
        secondary: "#DA001E",
        dark: "#151217",
        yellowB: "#F9D0A3",
      },
      screens: {
        "nav-bp": { max: "750px" },
      },
      fontFamily: {
        bubbleboddy: ["Bubbleboddy Neue", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
