// import Date from "../../components/Date";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import { getAllBlogPostSlugs, getPost, Post } from "../../lib/blog";

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { post: await getPost(params?.slug) },
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllBlogPostSlugs(),
  fallback: false,
});

type Props = { post: Post };

export default function PostPage({ post }: Props): JSX.Element {
  const MDXComponent = React.useMemo(
    () => getMDXComponent(post.mdxCode),
    [post.mdxCode]
  );

  return (
    <Layout title={post.title}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        <div>{/* <Date dateString={post.date} /> */}</div>
        <MDXComponent />
      </article>
    </Layout>
  );
}
