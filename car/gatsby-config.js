// gatsby - config.js - general configuration and plugins

const siteMetadata = {
  // title and description are hardcoded String type, can override but it's a hassle
  title: "Viktor Khotimchenko",
  description:
    "Viktor Khotimchenko web garage consisting of CV, Blog and Garden",
  blog: {
    description: "A blog about what you could, but probably shouldn't, do",
  },
  garden: {
    description: "Public learning space",
  },

  siteUrl: "https://mrv1k.me",
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
    // gatsby-source-* — a source plugin loads data from a given source (e.g. WordPress, MongoDB, the file system).
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // gatsby-transformer-* — a transformer plugin converts data from one format (e.g. CSV, YAML) to a JavaScript object.
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // gatsby-[plugin-name]-* — if a plugin is a plugin for another plugin
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
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`, // must come before gatsby-remark-prismjs
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: "÷",
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    // gatsby-theme-* — this naming convention is used for Gatsby themes, which are a type of plugin.
    // no gatsby-theme plugins

    // gatsby-plugin-* — this is the most general plugin type. [plugins that didn't match any other categories]
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
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
      },
    },
    `gatsby-plugin-offline`, // must come after gatsby-plugin-manifest
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mrv1k.me`,
      },
    },
  ],
};
