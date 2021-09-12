import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

type PostMatter = {
  title: string;
  date: string;
  spoiler?: string;
  slug?: string;
};

type SlugProp = { slug: string };

export type PostInfo = PostMatter & SlugProp;

export type Post = PostInfo & { contentHtml: string };

const BLOG_DIR = "blog";

const blogDirectory = path.join(process.cwd(), BLOG_DIR);

const getPostFileNames = () =>
  fs.readdirSync(blogDirectory).filter((name) => !name.startsWith("."));

export function getAllBlogPostsInfo() {
  // Get file names under /blog and filter out files starting with "." (eg: .DS_Store)
  const fileNames = getPostFileNames();

  const allPostsInfo: PostInfo[] = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      // The reason why slug is typed as string and not Slug is because Slug type is an object property
      slug: fileName.replace(/\.md$/, ""),
      ...(matterResult.data as PostMatter),
    };
  });

  const descendingSort = allPostsInfo.sort(({ date: a }, { date: b }) => {
    if (a === b) return 0;
    return a < b ? 1 : -1;
  });

  return descendingSort;
}

export const getAllBlogPostSlugs = () =>
  getPostFileNames().map((fileName) => {
    const params: SlugProp = {
      slug: fileName.replace(/\.md$/, ""),
    };

    return { params };
  });

export async function getPost(
  slug: string | string[] | undefined
): Promise<Post> {
  if (!slug) throw Error("Can't get post without a slug.");
  if (Array.isArray(slug))
    throw Error("Function needs an update to support array");

  const fullPath = path.join(blogDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    ...(matterResult.data as PostMatter),
    contentHtml,
  };
}
