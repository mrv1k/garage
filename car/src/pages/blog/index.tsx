import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { BlogIndexQuery } from "../../../graphql-codegen-types";
import Layout from "../../components/Layout";

const BlogIndex = (): JSX.Element => {
  const data = useStaticQuery<BlogIndexQuery>(graphql`
    query BlogIndex {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const posts = data?.allMarkdownRemark?.nodes;

  return (
    <Layout title="Blog">
      <div className="col-core">
        <ol className="list-decimal list-outside">
          {posts.map((post) => {
            const { slug } = post.fields;
            const { date } = post.frontmatter;
            /**
             * Format is: MMM Do YYYY, which means string can be Aug 10th 2021 or Aug 9th 2021
             * Could add 0 to a single digit date, but it looks weird. Opted for space in the beginning.
             * * Date defined as type any by Gatsby
             * */

            /* eslint-disable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access */
            const paddedDate = `${
              date.length !== 13 ? "&nbsp;" : ""
            }${date}&nbsp;`;
            /* eslint-enable @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access */

            return (
              <li key={slug}>
                <div
                  className="blog-list-date"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: paddedDate,
                  }}
                />
                <Link to={slug}>{post.frontmatter.title}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};
export default BlogIndex;
