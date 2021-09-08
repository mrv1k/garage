// gatsby - config.js - general configuration and plugins

const siteUrl = "https://mrv1k.me";

const siteMetadata = {
  // title and description are hardcoded String type, can override but it's a hassle
  title: "Viktor Khotimchenko",
  description:
    "Viktor Khotimchenko web garage consisting of CV, Blog and Garden",
  blog: {
    title: "STTG",
    description:
      "Surrender to the Grind - a blog about what you could, but probably shouldn't, do",
  },
  // garden: {
  //   description: "Public learning space",
  // },

  siteUrl,
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
  flags: {
    FAST_DEV: true,
    LMDB_STORE: true,
  },

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
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          // gatsby-[plugin-name]-* — if a plugin is a plugin for another plugin
          {
            // gatsby-remark-images needs to be both a sub-plugin of gatsby-plugin-mdx, included in the options field
            // and a string entry in the plugins array.
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "autolink",
              // set icon to false to disable inline injection of "position: relative;"
              // icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
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
    `gatsby-plugin-sharp`,
    {
      // included second time as per docs
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1024,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Viktor Khotimchenko Personal Website`,
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
      options: { siteUrl },
    },
  ],
};
