import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";
import path from "path";
import { cwd } from "process";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import remarkMdxImages from "remark-mdx-images";

const applyCwdENONETFix = () => {
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
applyCwdENONETFix();

const bundleMDXFileWithOptions = async (mdxPath: string) => {
  // const remarkGfm = await import("remark-gfm");

  const xdmOptions: BundleMDXOptions["xdmOptions"] = (options) => {
    options.remarkPlugins = [
      ...(options.remarkPlugins ?? []),
      remarkGfm,
      remarkMdxImages,
    ];
    options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeHighlight];

    return options;
  };

  return await bundleMDXFile(mdxPath, {
    cwd: path.join(cwd(), "blog"),
    xdmOptions,
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".jpg": "dataurl",
      };

      return options;
    },
  });
};

export default bundleMDXFileWithOptions;
