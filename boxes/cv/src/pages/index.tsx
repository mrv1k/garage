import * as React from "react";
import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title="Home" />
    <h1 className="text-blue-900">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p className="80-chars">
      1234567890123456789012345678901234567890123456789012345678901234567890123456789!
    </p>

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
);

export default IndexPage;

// <StaticImage
//   src=""
//   width={300}
//   quality={95}
//   formats={["auto", "webp", "avif"]}
//   alt="A Gatsby astronaut"
//   style={{ marginBottom: `1.45rem` }}
// />
