import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter"; // Included in mdx-bundler but not re-exported, needed to parse all MDX files frontmatter
// import bundleMDXFileWithOptions from "./mdx-bundler";

type Frontmatter = {
  title: string;
  date: string;
  spoiler?: string;
  slug?: string;
};

type Slug = { slug: string };
type FrontmatterProperty = { frontmatter: Frontmatter };
type MDXCode = { mdxCode: string };

export type MDXPost = Slug & FrontmatterProperty & MDXCode;
export type AllBlogPosts = Array<Slug & FrontmatterProperty>;

const MDX_RE = /\.mdx?$/;
const BLOG_PATH = path.join(process.cwd(), "blog");

const getBlogFileNames = () =>
  fs.readdirSync(BLOG_PATH).filter((path) => MDX_RE.test(path));

const makePath = (fileName: string) => path.join(BLOG_PATH, fileName);

export function getAllBlogPosts(): AllBlogPosts {
  const allPostsInfo = getBlogFileNames().map((fileName) => {
    const fileContents = fs.readFileSync(makePath(fileName), "utf8");
    const matterFile = matter(fileContents);

    const slug = fileName.replace(MDX_RE, "");

    return {
      slug,
      frontmatter: matterFile.data as Frontmatter,
    };
  });

  console.log(allPostsInfo);

  // Descending order
  return allPostsInfo.sort((post1, post2) =>
    post1.frontmatter.date > post2.frontmatter.date ? -1 : 1
  );
}

export const getAllBlogPostSlugs = () =>
  getBlogFileNames().map((fileName) => ({
    params: {
      slug: fileName.replace(MDX_RE, ""),
    } as Slug,
  }));

export async function getPost(
  slug: string | string[] | undefined
): Promise<MDXPost> {
  console.log("getPost", slug);
  if (!slug) throw Error("Can't get post without a slug.");
  if (Array.isArray(slug))
    throw Error("Function needs an update to support array");

  // const mdxFilePath = makePath(`${slug}.mdx`);
  // const { code, frontmatter } = await bundleMDXFileWithOptions(mdxFilePath);
  const frontmatter = {};
  const code = "stub";

  return {
    slug,
    frontmatter: frontmatter as Frontmatter,
    mdxCode: code,
  };
}
