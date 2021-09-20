// @ts-check
// const path = require("path");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
};

// copypaste from xdm
module.exports = {
  // Support MDX files as pages:
  pageExtensions: ["mdx", "tsx", "ts", "jsx", "js"],
  // Support loading `.mdx`:
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [{ loader: "xdm/webpack.cjs", options: {} }],
    });

    return config;
  },
};

// copypaste from https://github.com/vercel/next.js/blob/canary/packages/next-mdx/index.js
// module.exports =
//   (pluginOptions = {}) =>
//   (nextConfig = {}) => {
//     const extension = pluginOptions.extension || /\.mdx$/;

//     return Object.assign({}, nextConfig, {
//       webpack(config, options) {
//         config.module.rules.push({
//           test: extension,
//           use: [
//             options.defaultLoaders.babel,
//             {
//               loader: require.resolve("@mdx-js/loader"),
//               options: pluginOptions.options,
//             },
//           ],
//         });

//         if (typeof nextConfig.webpack === "function") {
//           return nextConfig.webpack(config, options);
//         }

//         return config;
//       },
//     });
//   };
