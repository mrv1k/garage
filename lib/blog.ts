import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter"; // needed to parse all MDX files frontmatter
import { bundleMDXFile } from "mdx-bundler";

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

const BLOG_PATH = path.join(process.cwd(), "blog");
const MDX_RE = /\.mdx?$/;

const getBlogFileNames = () =>
  fs.readdirSync(BLOG_PATH).filter((path) => MDX_RE.test(path));

export function getAllBlogPosts(): AllBlogPosts {
  const allPostsInfo = getBlogFileNames().map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(BLOG_PATH, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterFile = matter(fileContents);

    return {
      // The reason why slug is typed as string and not Slug is because Slug type is an object property
      slug: fileName.replace(MDX_RE, ""),
      // TODO: dont spread frontmatter, keep it as object
      frontmatter: matterFile.data as Frontmatter,
    };
  });

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
  if (!slug) throw Error("Can't get post without a slug.");
  if (Array.isArray(slug))
    throw Error("Function needs an update to support array");

  const mdxPath = path.join(BLOG_PATH, `${slug}.mdx`);

  const { code: mdxCode, frontmatter } = await bundleMDXFile(mdxPath);

  return {
    slug,
    // TODO: dont spread frontmatter, keep it as object
    frontmatter: frontmatter as Frontmatter,
    mdxCode,
  };
}
