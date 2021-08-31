import { Link } from "gatsby";
import * as React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className="grid max-w-screen-xl grid-cols-5 mx-6 my-4 md:my-10 md:mx-auto default-layout">
        <nav className="mb-4 nav col-span-full md:col-span-1 md:mb-0">
          <ol className="flex md:flex-col">
            <li className="pr-2">
              <Link to="/">home</Link>
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

        <main className="grid grid-cols-12 gap-1 md:col-span-4 col-span-full">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
