const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Montserrat", ...defaultTheme.fontFamily.serif],
        // font family is sans without a class
        // ? use 'Roboto Slab' instead?
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // based on my favicon
        logo: {
          orange: "#eb4a2e", // hand
          black: "#1d3131", // wrench
          white: "#fcf8ed", // background
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
