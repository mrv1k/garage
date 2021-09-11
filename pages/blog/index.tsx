// import Head from "next/head";
import Layout from "../../components/Layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import { GetStaticProps } from "next";
// import Date from "../components/Date";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
// <Head>
//   <title>{siteTitle}</title>
// </Head>
export default function Home({ allPostsData }) {
  return (
    <Layout title="Blog">
      <section className="grid-core">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
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
