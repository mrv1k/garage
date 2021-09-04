import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react";
import { BlogIndexQuery } from "../../../graphql-codegen-types";

const BlogIndex = (): JSX.Element => {
  const data = useStaticQuery<BlogIndexQuery>(graphql`
    query BlogIndex {
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

  const paths = posts.map(
    (post) => post?.frontmatter?.slug ?? post?.fields?.slug
  );

  return (
    <div>
      <ul>
        {paths.map((path) => (
          <li key={path}>
            <Link to={path}>{path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogIndex;
