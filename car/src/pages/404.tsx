import { PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

type Props = PageProps;

// TODO: F Piano
const NotFoundPage = ({ path }: Props): JSX.Element => (
  <Layout title="404: Not found">
    <Seo titleLeft="404: Not found" path={path} />
    <div className="col-core">
      <p>You just hit a route that doesn't exist... f.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
