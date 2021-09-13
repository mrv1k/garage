import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter"; // needed to parse all MDX files frontmatter
import { bundleMDXFile } from "mdx-bundler";

type PostMatter = {
  title: string;
  date: string;
  spoiler?: string;
  slug?: string;
};

type Slug = { slug: string };
export type PostInfo = PostMatter & Slug;
type MDXCode = { mdxCode: string };
export type Post = PostInfo & MDXCode;

const BLOG_PATH = path.join(process.cwd(), "blogmdx");
const MDX_REGEX = /\.mdx?$/;

const getBlogFileNames = () =>
  fs.readdirSync(BLOG_PATH).filter((path) => MDX_REGEX.test(path));

export function getAllBlogPostsInfo() {
  const allPostsInfo: PostInfo[] = getBlogFileNames().map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(BLOG_PATH, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      // The reason why slug is typed as string and not Slug is because Slug type is an object property
      slug: fileName.replace(MDX_REGEX, ""),
      // TODO: dont spread frontmatter, keep it as object
      ...(matterResult.data as PostMatter),
    };
  });

  // Descending order
  return allPostsInfo.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  );
}

export const getAllBlogPostSlugs = () =>
  getBlogFileNames().map((fileName) => ({
    params: {
      slug: fileName.replace(MDX_REGEX, ""),
    } as Slug,
  }));

export async function getPost(
  slug: string | string[] | undefined
): Promise<Post> {
  if (!slug) throw Error("Can't get post without a slug.");
  if (Array.isArray(slug))
    throw Error("Function needs an update to support array");

  const mdxPath = path.join(BLOG_PATH, `${slug}.mdx`);

  const { code: mdxCode, frontmatter } = await bundleMDXFile(mdxPath);

  return {
    slug,
    // TODO: dont spread frontmatter, keep it as object
    ...(frontmatter as PostMatter),
    mdxCode,
  };
}
