const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // default font family is "sans"
      fontFamily: {
        serif: defaultTheme.fontFamily.serif,
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // based on my favicon
        logo: {
          orange: "#eb4a2e", // hand
          black: "#1d3131", // wrench
          beige: "#fcf8ed", // background
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
