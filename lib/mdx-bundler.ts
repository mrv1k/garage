import { BuildOptions } from "esbuild";
import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";
import path from "path";
import process from "process";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { remarkMdxImages } from "remark-mdx-images";
import remarkFootnotes from "remark-footnotes";

import { SUPPORTED_IMAGE_EXTENSIONS } from "./constants";

// ! Can't use named exports from this file. Well, can export, can't import.
// Module not found: Can't resolve 'builtin-modules'
// ESBuild uses node:*, next.js doesn't support node:* prefix yet
// export const BREAKS = {};

// Next.JS esbuild ENOENT https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
const patchENOENT = () => {
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
};

// 80% flex, 20% usefulness. One source for image extensions
// Result without flex: { ".png": "file", ".jpg": "file", ".jpeg": "file", ".gif": "file", }
const imageExtensions: BuildOptions["loader"] =
  SUPPORTED_IMAGE_EXTENSIONS.reduce(
    (acc, extension) => ({ ...acc, [extension]: "file" }),
    {}
  );

const bundleMDXFileWithOptions = async (mdxPostDir: string) => {
  patchENOENT();

  const xdmOptions: BundleMDXOptions["xdmOptions"] = (options) => {
    options.remarkPlugins = [
      ...(options.remarkPlugins ?? []),
      remarkGfm,
      remarkMdxImages,
      remarkFootnotes,
    ];
    options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeHighlight];

    return options;
  };

  const mdxIndex = path.join(mdxPostDir, "index.mdx");

  return await bundleMDXFile(mdxIndex, {
    cwd: mdxPostDir,
    xdmOptions,
    esbuildOptions: (options) => {
      options.outdir = path.join(process.cwd(), "public", "imag_es");
      options.loader = {
        ...options.loader,
        ...imageExtensions,
      };

      options.publicPath = "/imag_es";
      // Set write to true so that esbuild will output the files.
      options.write = true;

      return options;
    },
  });
};

export default bundleMDXFileWithOptions;
