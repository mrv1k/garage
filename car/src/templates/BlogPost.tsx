import { graphql, Link, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { BlogPostBySlugQuery } from "../../graphql-codegen-types";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

type Props = PageProps<BlogPostBySlugQuery>;

const BlogPostTemplate = ({ data, path }: Props): JSX.Element => {
  const post = data.mdx;

  if (!post || !post.body) throw Error("NOOP! Found post without content");
  const { previous, next } = data;

  return (
    <Layout title={post.frontmatter.title} date={post.frontmatter.date}>
      <Seo
        titleLeft={post.frontmatter.title}
        description={post.frontmatter.spoiler || post.excerpt}
        path={path}
      />
      <article
        className="col-core"
        itemScope
        itemType="http://schema.org/Article"
      >
        {/* <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        /> */}
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr />
      </article>
      <nav className="blog-post-nav col-core">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog/${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog/${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
