// @ts-check

// const { default: remarkFootnotes } = require("remark-footnotes");
// import remarkGfm from "remark-footnotes";
// const { default: remarkGfm } = require("remark-gfm");

/**
 * @type {import('xdm/lib/compile').CompileOptions}
 */
const xdmOptions = {
  remarkPlugins: [
    // remarkGfm,
    // remarkMdxImages,
    // remarkFootnotes,
  ],
  rehypePlugins: [
    // rehypeHighlight
  ],
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
