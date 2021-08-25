const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const tailwindConfig = require("./tailwind.config");

const tailwindThemeConfig = tailwindcss(tailwindConfig);

// ! Remember, config file doesn't hot reload. Restart manually.

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [tailwindThemeConfig, autoprefixer],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
};
