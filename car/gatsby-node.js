// gatsby-node.js - build time and development generation and resolvers
// See: https://www.gatsbyjs.com/docs/node-apis/

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// APIs are listed in execution order

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` instead of returning an error

  createTypes(/* GraphQL */ `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
      fields: Fields!
    }

    type Frontmatter {
      title: String!
      # Can't make date non nullable because of @dateformat extension
      date: Date @dateformat
      slug: String
      spoiler: String
    }

    type Fields {
      slug: String!
    }
  `);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    // strip off slashes to match with frontmatter & make nesting under /blog easier
    const filepath = createFilePath({ node, getNode })
      .replaceAll("/", "")
      .toLowerCase();

    const value = node.frontmatter.slug || filepath;

    createNodeField({
      node,
      name: "slug",
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(/* GraphQL */ `
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        nodes {
          id
          # Only for build validation
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading blog posts`,
      result.errors
    );
    return;
  }

  const blogPost = path.resolve("./src/templates/BlogPost.tsx");

  const posts = result.data.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      const postPath = `blog/${post.fields.slug}`;

      const { title, date } = post.frontmatter;
      if (!title || !date) {
        reporter.panicOnBuild(
          `Blog post: ${postPath} is missing required frontmatter: 'title' or 'date'`
        );
      }

      actions.createPage({
        path: postPath,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};
