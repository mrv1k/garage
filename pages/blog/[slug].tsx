// import Date from "../../components/Date";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import { getAllBlogPostSlugs, getPost, MDXPost } from "../../lib/blog";

type Props = { post: MDXPost };

export default function PostPage({ post }: Props): JSX.Element {
  // const MDXComponent = React.useMemo(
  //   () => getMDXComponent(post.mdxCode),
  //   [post.mdxCode]
  // );

  // const MDXComponent = getMDXComponent(post.mdxCode);

  return (
    <Layout title={post.frontmatter.title}>
      <Head>
        <title>{post.frontmatter.title}</title>
      </Head>
      <article className="grid-core">
        {/* <MDXComponent components={mdxComponents} /> */}
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params?.slug);
  // console.log("getStaticProps", post);
  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllBlogPostSlugs(),
  fallback: false,
});
