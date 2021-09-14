import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";
import remarkGfm from "remark-gfm";

const bundleMDXFileWithOptions = async (mdxPath: string) => {
  // const remarkGfm = await import("remark-gfm");

  const xdmOptions: BundleMDXOptions["xdmOptions"] = (options) => {
    options.remarkPlugins = [
      // built in plugins
      ...(options.remarkPlugins ?? []),
      remarkGfm,
      // ...[] // custom plugins
    ];
    options.rehypePlugins = [
      ...(options.rehypePlugins ?? []),
      // ...[] // custom plugins
    ];

    return options;
  };

  return await bundleMDXFile(mdxPath, {
    xdmOptions,
  });
};

export default bundleMDXFileWithOptions;
