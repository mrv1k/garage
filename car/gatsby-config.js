// gatsby - config.js - general configuration and plugins
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const tailwindConfig = require("./tailwind.config");

const tailwindThemeConfig = tailwindcss(tailwindConfig);

const siteMetadata = {
  cv: {
    title: `Viktor Khotimchenko CV | mrv1k`,
    description: `Viktor Khotimchenko portfolio website`,
  },
  blog: {
    title: "mrv1k blog",
    description: "A blog about what you could, but probably shouldn't, do",
  },
  garden: {
    title: "mrv1k garden",
    description: "Public learning space",
  },
  siteUrl: `https://mrv1k.me`,
  author: {
    name: "Viktor Khotimchenko",
    email: "viktorkhotimchenko@gmail.com",
    // summary?
  },
  social: {
    linkedin: "https://www.linkedin.com/in/vkhotimchenko/",
    twitter: "https://twitter.com/mrv1k_",
    github: "https://github.com/mrv1k",
  },
};

module.exports = {
  // flags: {
  //   FAST_DEV: true,
  // },
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [tailwindThemeConfig, autoprefixer],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
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
        // legacy: false, // don't generate icons for pre 11.3 iOS
      },
    },
    `gatsby-plugin-offline`, // after gatsby-plugin-manifest
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mrv1k.me`,
      },
    },

    // blog plugins
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/../boxes/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/../boxes/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
  ],
};
