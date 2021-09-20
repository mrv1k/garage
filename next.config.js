// @ts-check

const remarkGfm = require("remark-gfm");
const remarkFootnotes = require("remark-footnotes");
const rehypeHighlight = require("rehype-highlight");

// Webpack wrapper uses compile under the hood
/**
 * @type {import('xdm/lib/compile').CompileOptions}
 */
const xdmOptions = {
  remarkPlugins: [remarkGfm, remarkFootnotes],
  rehypePlugins: [rehypeHighlight],
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // experimental: { esmExternals: true },
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js", "page.mdx"],

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, context) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        context.defaultLoaders.babel,
        {
          loader: "xdm/webpack.cjs",
          options: xdmOptions,
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
