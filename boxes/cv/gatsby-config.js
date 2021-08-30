// gatsby - config.js - general configuration and plugins

module.exports = {
  flags: {
    DEV_WEBPACK_CACHE: true,
  },

  siteMetadata: {
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
  },

  plugins: [
    "gatsby-theme-mrv1k",

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
