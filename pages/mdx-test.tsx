import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Please from "../components/MdxComponent";
import { getMDX } from "../lib/mdx";

export const getStaticProps: GetStaticProps = async () => ({
  props: { post: await getMDX() },
});

const IndexPage = (props): JSX.Element => {
  return (
    <Layout title="MDX Test">
      <p>#wip</p>
      <Please code={props.post.code} frontmatter={props.post.frontmatter} />
    </Layout>
  );
};
export default IndexPage;
