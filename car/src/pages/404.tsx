import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

// TODO: F Piano
const NotFoundPage = (): JSX.Element => (
  <Layout title="404: Not found">
    <>
      <Seo title="404: Not found" />
      <div className="col-core">
        <p>You just hit a route that doesn't exist... f.</p>
      </div>
    </>
  </Layout>
);

export default NotFoundPage;
