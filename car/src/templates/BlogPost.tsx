import { graphql, Link, PageProps } from "gatsby";
import * as React from "react";
import { BlogPostBySlugQuery } from "../../graphql-codegen-types";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

type Props = PageProps<BlogPostBySlugQuery>;

const BlogPostTemplate = ({ data, path }: Props): JSX.Element => {
  const post = data.markdownRemark;

  if (!post || !post.html) throw Error("Page is noop without post content");
  const { previous, next } = data;

  return (
    <Layout title={post.frontmatter.title} date={post.frontmatter.date}>
      <Seo
        titleLeft={post.frontmatter.title}
        description={post.frontmatter.spoiler || post.excerpt}
        path={path}
      />
      <article
        className="prose col-core"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
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
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
