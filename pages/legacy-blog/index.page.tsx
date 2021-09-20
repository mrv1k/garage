// import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { AllBlogPosts, getAllBlogPosts } from "../../lib/blog";

type Props = { allPosts: AllBlogPosts };

export default function BlogIndex({ allPosts }: Props): JSX.Element {
  return (
    <Layout title="Blog">
      <section className="v-layout-core">
        <ul>
          {allPosts.map(({ slug, frontmatter }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>{frontmatter.title || slug}</a>
              </Link>
              <br />
              <small>{frontmatter.date || "00-00-00"}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllBlogPosts();
  return { props: { allPosts } };
};
