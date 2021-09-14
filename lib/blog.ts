import fs from "fs";
import path from "path";
import matter from "gray-matter"; // Included in mdx-bundler but not re-exported, needed to parse all MDX files frontmatter
import bundleMDXFileWithOptions from "./mdx-bundler";
import { cwd } from "process";

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

// const MDX_RE = /\.mdx?$/;
const BLOG_PATH = path.join(cwd(), "blog");

const getBlogDirs = () => {
  const t = fs.readdirSync(BLOG_PATH); //.filter((path) => MDX_RE.test(path));
  console.log(t);
  return t;
};

const makePath = (dirName: string) =>
  path.join(BLOG_PATH, dirName, "index.mdx");

export function getAllBlogPosts(): AllBlogPosts {
  const allPostsInfo = getBlogDirs().map((dir) => {
    const fileContents = fs.readFileSync(makePath(dir));
    const matterFile = matter(fileContents);

    const slug = dir; //.replace(MDX_RE, "");

    return {
      slug,
      frontmatter: matterFile.data as Frontmatter,
    };
  });

  // Descending order
  return allPostsInfo.sort((post1, post2) =>
    post1.frontmatter.date > post2.frontmatter.date ? -1 : 1
  );
}

export const getAllBlogPostSlugs = () =>
  getBlogDirs().map((dirName) => ({
    params: {
      slug: dirName,
    } as Slug,
  }));

export async function getPost(
  slug: string | string[] | undefined
): Promise<MDXPost> {
  if (!slug) throw Error("Can't get post without a slug.");
  if (Array.isArray(slug))
    throw Error("Function needs an update to support array");

  const mdxFilePath = makePath(slug);
  const { code, frontmatter } = await bundleMDXFileWithOptions(mdxFilePath);

  return {
    slug,
    frontmatter: frontmatter as Frontmatter,
    mdxCode: code,
  };
}
