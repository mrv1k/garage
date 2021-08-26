/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

// type LayoutQuery = {
//   site: {
//     siteMetadata: {
//       title?: string;
//     };
//   };
// };

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  // const data = useStaticQuery<LayoutQuery>(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        className="grid justify-center gap-4"
        style={{ gridTemplateColumns: "minmax(22rem, 44rem)" }}
      >
        <header className="border-2 bg-logo-white text-logo-orange border-logo-black">
          hed
        </header>

        <main className="bg-white">{children}</main>
        <ul className="list-disc">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>

        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          footer
        </footer>
      </div>
    </>
  );
};

export default Layout;
