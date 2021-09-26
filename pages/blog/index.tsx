import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { AllBlogPosts, getAllBlogPosts } from "../../lib/blog";

type Props = { allPosts: AllBlogPosts };

export default function BlogIndex({ allPosts }: Props): JSX.Element {
  return (
    <Layout title="Blog">
      <section className="v-layout-core blog-list">
        <ul className="list-decimal list-inside">
          {allPosts.map(({ slug, frontmatter }) => (
            <li key={slug} className="pb-4">
              <Link href={`/blog/${slug}`}>
                <a className="text-3xl">{frontmatter.title || slug}</a>
              </Link>
              <div className="pt-2 pl-4 text-sm text-gray-500">
                <time dateTime={frontmatter.date}>
                  {format(parseISO(frontmatter.date), "LLL d, yyyy")}
                </time>
              </div>
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
