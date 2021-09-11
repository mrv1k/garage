// import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getSortedPostsInfo, PostInfo } from "../../lib/posts";
// import Date from "../components/Date";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsInfo = getSortedPostsInfo();
  return {
    props: {
      allPostsInfo,
    },
  };
};
// <Head>
//   <title>{siteTitle}</title>
// </Head>

type Props = { allPostsInfo: PostInfo[] };

export default function BlogIndex({ allPostsInfo }: Props): JSX.Element {
  return (
    <Layout title="Blog">
      <section className="grid-core">
        <ul>
          {allPostsInfo.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                {date}
                {/* <Date dateString={date} /> */}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
