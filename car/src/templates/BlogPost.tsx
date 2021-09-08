import { MDXProvider } from "@mdx-js/react";
import { graphql, Link, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Highlight, { defaultProps } from "prism-react-renderer";
import * as React from "react";
import { BlogPostBySlugQuery } from "../../graphql-codegen-types";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

type Props = PageProps<BlogPostBySlugQuery>;

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

const CodeBlock = () => {
  // const className = props.children.props.className || "";
  // const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={exampleCode}
      // Prism={Prism}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const components = {
  pre: CodeBlock,
  wrapper: ({ children }) => <div className="mdx-wrapper">{children}</div>,
};

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
        <MDXProvider components={components}>
          <MDXRenderer components={components}>{post.body}</MDXRenderer>
        </MDXProvider>
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
