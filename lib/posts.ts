import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

type RequiredMatter = {
  title: string;
  date: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

const getPostFileNames = () =>
  fs.readdirSync(postsDirectory).filter((name) => !name.startsWith("."));

// TODO: nest posts under blog folder
// TODO: Add MDX support
// TODO: Add directory support
export function getSortedPostsData() {
  // Get file names under /posts and filter out files starting with "." (eg: .DS_Store)
  const fileNames = getPostFileNames();

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as RequiredMatter),
    };
  });
  // Sort posts by date
  const descendingSort = allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
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

export type PostData = RequiredMatter & { id: string; contentHtml: string };

export async function getPostData(id: string | string[]): Promise<PostData> {
  if (Array.isArray(id))
    throw Error("Function needs an update to support array");

  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  console.log("REUSLT", matterResult);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as RequiredMatter),
  };
}
