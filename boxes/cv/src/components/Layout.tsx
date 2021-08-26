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
      <div className="container">
        <nav className="nav">
          <ol className="flex">
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ol>
        </nav>
        <aside className="aside">
          <header className="border-2 bg-logo-white text-logo-orange border-logo-black">
            what's the difference between header and h1? todo: find out
          </header>
        </aside>

        <main className="bg-white main">{children}</main>
      </div>
    </>
  );
};

export default Layout;
