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

type Id = { id: string };

export type PostInfo = PostMatter & Id;

export type Post = PostInfo & { contentHtml: string };

const postsDirectory = path.join(process.cwd(), "posts");

const getPostFileNames = () =>
  fs.readdirSync(postsDirectory).filter((name) => !name.startsWith("."));

export function getSortedPostsInfo() {
  // Get file names under /posts and filter out files starting with "." (eg: .DS_Store)
  const fileNames = getPostFileNames();

  const allPostsInfo: PostInfo[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the metadata with the id
    return {
      id,
      ...(matterResult.data as PostMatter),
    };
  });

  const descendingSort = allPostsInfo.sort(({ date: a }, { date: b }) => {
    if (a === b) return 0;
    return a < b ? 1 : -1;
  });

  return descendingSort;
}

export const getAllPostIds = () =>
  getPostFileNames().map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });

export async function getPost(id: string | string[]): Promise<Post> {
  if (Array.isArray(id))
    throw Error("Function needs an update to support array");

  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the metadata, id and contentHtml
  return {
    id,
    ...(matterResult.data as PostMatter),
    contentHtml,
  };
}
