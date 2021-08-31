import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title="Home" />
    <div className="col-core">
      <h1 className="">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p className="font-sans 80-digits">
        1234567890123456789012345678901234567890123456789012345678901234567890123456789!
      </p>
      <p className="font-sans 80-chars">
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzkk
      </p>
      <br />
      <p className="font-serif 80-digits">
        1234567890123456789012345678901234567890123456789012345678901234567890123456789!
      </p>
      <p className="font-serif 80-chars">
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzkk
      </p>
      <br />
      <p className="font-mono 80-digits">
        1234567890123456789012345678901234567890123456789012345678901234567890123456789!
      </p>
      <p className="font-mono 80-chars">
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzkk
      </p>

      <br />
      <p>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
