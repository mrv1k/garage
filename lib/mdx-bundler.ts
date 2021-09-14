import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";

const bundleMDXFileWithOptions = async (mdxPath: string) => {
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

  return await bundleMDXFile(mdxPath, {
    xdmOptions,
  });
};

export default bundleMDXFileWithOptions;
