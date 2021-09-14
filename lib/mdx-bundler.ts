import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";
import path from "path";
import process from "process";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { remarkMdxImages } from "remark-mdx-images";

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

const bundleMDXFileWithOptions = async (mdxPostDir: string) => {
  patchENOENT();

  const xdmOptions: BundleMDXOptions["xdmOptions"] = (options) => {
    options.remarkPlugins = [
      ...(options.remarkPlugins ?? []),
      remarkGfm,
      remarkMdxImages,
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
        ".png": "file",
        ".jpg": "file",
        ".jpeg": "file",
        ".gif": "file",
      };

      options.publicPath = "/imag_es";
      // Set write to true so that esbuild will output the files.
      options.write = true;

      return options;
    },
  });
};

export default bundleMDXFileWithOptions;
