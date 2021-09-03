// gatsby-node.js - build time and development generation and resolvers
// See: https://www.gatsbyjs.com/docs/node-apis/

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    // strip off slashes, to make nesting under /blog easier
    const value = createFilePath({ node, getNode }).replaceAll("/", "");

    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` instead of returning an error

  createTypes(/* GraphQL */ `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
      slug: String
      spoiler: String
    }
  `);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(/* GraphQL */ `
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 100
      ) {
        nodes {
          id
          frontmatter {
            slug
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
      `There was an error loading your blog posts`,
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

      const slug = post.frontmatter.slug || post.fields.slug;

      actions.createPage({
        path: `blog/${slug.toLowerCase()}`,
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
