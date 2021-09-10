// import { Link } from "gatsby";
import * as React from "react";

const Navigation = (): JSX.Element => (
  <nav className="row-start-1 mb-4 nav md:row-start-2 md:mb-0">
    <ol className="flex md:flex-col">
      <li>
        {/* <Link activeClassName="active" to="/"> */}
        home
        {/* </Link> */}
      </li>
      <li>
        {/* <Link activeClassName="active" to="/about"> */}
        about
        {/* </Link> */}
      </li>
      <li>
        {/* <Link activeClassName="active" to="/blog"> */}
        blog
        {/* </Link> */}
      </li>
    </ol>
  </nav>
);
export default Navigation;
