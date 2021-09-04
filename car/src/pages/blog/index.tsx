import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react";
import { BlogHomePageQuery } from "../../../graphql-codegen-types";

const BlogHomePage = (): JSX.Element => {
  const data = useStaticQuery<BlogHomePageQuery>(graphql`
    query BlogHomePage {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        nodes {
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

  const posts = data?.allMarkdownRemark?.nodes;

  const paths = posts
    .map(
      (post, index) =>
        post?.frontmatter?.slug ?? post?.fields?.slug ?? String(index)
    )
    .map((slug) => `blog/${slug}`);

  return (
    <div>
      <ul>
        {paths.map((path) => (
          <li>
            <Link to={path}>{path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogHomePage;
