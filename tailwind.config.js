// based on my logo
const logo = {
  orange: "#eb4a2e", // hand // rgb(235, 74, 46)
  black: "#1d3131", // wrench // rgb(29, 49, 49)
  beige: "#fcf8ed", // background // rgb(252, 248, 237)
};

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./blog/**/*.mdx",
    ],
  },
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
        logo,
      },

      // customize tailwind/typography aka .prose
      // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      typography: {
        DEFAULT: {
          css: {
            // default globals
            "max-width": "none",
            color: logo.black,
            lineHeight: 1.5,

            // touch ups
            "ul > li::before": {
              backgroundColor: "currentColor",
            },
            h1: { color: false },
            h2: { color: false },
            h3: { color: false },
            h4: { color: false },

            // custom implementation
            a: false,
            pre: false,
            code: false,
            "pre code": false,

            // these add too much spacing
            // ol: { marginTop: false },
            // ul: { marginTop: false },
            // li: false,
            p: {
              marginBottom: "1rem",
              marginTop: false,
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
