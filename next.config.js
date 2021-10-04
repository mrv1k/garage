// @ts-check
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withNextPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");
const withRemoteRefresh = require("next-remote-refresh");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: { esmExternals: true },
  reactStrictMode: true,
};

const blogPath = path.resolve("./blog/**/*.mdx");

module.exports = withPlugins(
  [
    withNextPWA,
    {
      pwa: {
        dest: "public",
        disable: process.env.NODE_ENV !== "production",
        // runtimeCaching,
      },
    },
    withRemoteRefresh,
    {
      paths: [blogPath],
      ignored: "**/*.json",
    },
  ],
  nextConfig
);
