import { bundleMDXFile } from "mdx-bundler";
import { BundleMDXOptions } from "mdx-bundler/dist/types";
import { cwd } from "process";

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

  console.log("MDX", cwd());

  try {
    return await bundleMDXFile(mdxPath, {
      cwd: cwd(),
      xdmOptions,
    });
  } catch (error) {
    console.error("bundleMDXFile failed");
    throw new Error(error as any);
  }
};

export default bundleMDXFileWithOptions;
