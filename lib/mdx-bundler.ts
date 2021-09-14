import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";
import path from "node:path";

const bundleMDXFileWithOptions = async (mdxPath: string) => {
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

  const xdmOptions: BundleMDXOptions["xdmOptions"] = (options) => {
    options.remarkPlugins = [
      // built in plugins
      ...(options.remarkPlugins ?? []),
      // ...[] // custom plugins
    ];
    options.rehypePlugins = [
      ...(options.rehypePlugins ?? []),
      // ...[] // custom plugins
    ];

    return options;
  };

  try {
    return await bundleMDXFile(mdxPath, {
      xdmOptions,
    });
  } catch (error) {
    console.error("bundleMDXFile failed");
    throw new Error(error as any);
  }
};

export default bundleMDXFileWithOptions;
