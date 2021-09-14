import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

const bundleMDXFileWithOptions = async (mdxPath: string) => {
  // const remarkGfm = await import("remark-gfm");

  const xdmOptions: BundleMDXOptions["xdmOptions"] = (options) => {
    options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
    options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeHighlight];

    return options;
  };

  return await bundleMDXFile(mdxPath, {
    xdmOptions,
  });
};

export default bundleMDXFileWithOptions;
