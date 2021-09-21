import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";
import path from "path";
import process from "process";
import rehypeHighlight, { Options as RehypeOptions } from "rehype-highlight";
import remarkGfm from "remark-gfm";
import remarkFootnotes from "remark-footnotes";

// ! Can't use named exports from this file. Well, can export, can't import.
// Module not found: Can't resolve 'builtin-modules'
// ESBuild uses node:*, next.js doesn't support node:* prefix yet
// export const BREAKS = {};

// Next.JS esbuild ENOENT https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe"
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild"
  );
}

const bundleMDXFileWithOptions = async (mdxPostDir: string) => {
  const xdmOptions: BundleMDXOptions["xdmOptions"] = (options) => {
    options.remarkPlugins = [
      ...(options.remarkPlugins ?? []),
      remarkGfm,
      remarkFootnotes,
    ];

    const rehypeOptions: RehypeOptions = {
      aliases: { plaintext: "no-highlight" },
    };

    options.rehypePlugins = [
      ...(options.rehypePlugins ?? []),
      [rehypeHighlight, rehypeOptions],
    ];

    return options;
  };

  const mdxIndex = path.join(mdxPostDir, "index.mdx");

  return await bundleMDXFile(mdxIndex, {
    cwd: mdxPostDir,
    xdmOptions,
  });
};

export default bundleMDXFileWithOptions;
