import Head from "next/head";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
// import Date from "../../components/Date";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) throw Error("No post with such id found");
  const postData = await getPostData(params.id);
  console.log(postData);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

type Props = {
  postData: PostData;
};

export default function Post({ postData }: Props) {
  console.log(postData);
  return (
    <Layout title={postData.title}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>{/* <Date dateString={postData.date} /> */}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
