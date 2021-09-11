// import Date from "../../components/Date";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
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
  return (
    <Layout title={post.title}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        <div>{/* <Date dateString={post.date} /> */}</div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}
