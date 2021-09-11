// import Date from "../../components/Date";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPost, Post } from "../../lib/posts";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) throw Error("No post with such id found");
  const post = await getPost(params.id);

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

type Props = { post: Post };

export default function PostPage({ post }: Props) {
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
