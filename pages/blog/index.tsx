// import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { AllBlogPosts, getAllBlogPosts } from "../../lib/blog";
// import Date from "../components/Date";

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllBlogPosts();
  return { props: { allPosts } };
};
// <Head>
//   <title>{siteTitle}</title>
// </Head>

type Props = { allPosts: AllBlogPosts };

export default function BlogIndex({ allPosts }: Props): JSX.Element {
  return (
    <Layout title="Blog">
      <section className="grid-core">
        <ul>
          {allPosts.map(({ slug, frontmatter }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>{frontmatter.title}</a>
              </Link>
              <br />
              <small>
                {frontmatter.date}
                {/* <Date dateString={date} /> */}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
