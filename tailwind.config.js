module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // default font family is "sans"
      // fontFamily: {
      // default values
      // font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      // font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      // font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      // },
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
