module.exports = {
  purge: [],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
