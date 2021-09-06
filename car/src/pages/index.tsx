import { PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

type Props = PageProps;

const IndexPage = ({ path }: Props): JSX.Element => (
  <Layout title="Viktor Khotimchenko">
    <Seo titleLeft="Home" path={path} />
    <p>#wip</p>
  </Layout>
);

export default IndexPage;
