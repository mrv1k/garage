// gatsby - config.js - general configuration and plugins
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const tailwindConfig = require("./tailwind.config");

const tailwindThemeConfig = tailwindcss(tailwindConfig);

const siteMetadata = {
  title: `Viktor Khotimchenko CV`,
  description: `Viktor Khotimchenko portfolio website`,
  siteUrl: `https://mrv1k.me`,
  author: {
    name: "Viktor Khotimchenko",
    email: "viktorkhotimchenko@gmail.com",
    // summary?
  },
  social: {
    github: "",
    linkedin: "",
    twitter: "",
  },
};

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata,
  plugins: [
    "@mrv1k/cv",
    // {
    //   resolve: "@mrv1k/blog",
    //   options: { basePath: `/blog` },
    // },
    // {
    //   resolve: "@mrv1k/garden",
    //   options: { basePath: `/garden` },
    // },

    // baseline plugins
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Viktor Khotimchenko`,
        short_name: `mrv1k.me`,
        start_url: `/`,
        background_color: `#fcf8ed`,
        theme_color: `#eb4a2e`,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
        icon:
          process.env.NODE_ENV === "development"
            ? `src/images/favicon-dev.png`
            : `src/images/favicon.png`,
        legacy: false, // don't generate icons for pre 11.3 iOS
      },
    },
    `gatsby-plugin-offline`, // after gatsby-plugin-manifest
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mrv1k.me`,
      },
    },
  ],
};
