import { useStaticQuery, graphql, Link } from "gatsby";
import * as React from "react";
import { BlogIndexQuery } from "../../../graphql-codegen-types";
import Layout from "../../components/Layout";

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
  const slugs = posts.map((post) => post.fields.slug);

  return (
    <Layout title="Blog">
      <div className="col-core">
        <ul className="list-decimal list-inside">
          {slugs.map((slug) => (
            <li key={slug}>
              <Link to={slug}>{slug}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export default BlogIndex;
