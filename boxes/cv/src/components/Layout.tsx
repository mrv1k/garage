import { Link } from "gatsby";
import * as React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className="grid max-w-screen-xl grid-cols-5 mx-auto my-9 default-layout">
        <nav className="nav">
          <ol>
            <li>
              <Link to="/">index</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/garden">garden</Link>
            </li>
          </ol>
        </nav>
        {/* <aside className="aside">
          <header className="border-2 bg-logo-white text-logo-orange border-logo-black">
            what's the difference between header and h1? todo: find out
          </header>
        </aside> */}

        <main className="grid grid-cols-4 col-span-4 gap-4">{children}</main>
      </div>
    </>
  );
};

export default Layout;
